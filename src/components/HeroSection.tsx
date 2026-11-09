import { animate, motion, useInView, useMotionValue, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useRef, lazy, Suspense } from "react";

const HeroScene = lazy(() => import("./HeroScene"));

const results = [
  { value: 1, prefix: "₹", suffix: " Lakh+", label: "ad spend managed" },
  { value: 1, suffix: "M+", label: "impressions delivered" },
  { value: 50, suffix: "K+", label: "interactions generated" },
  { value: 0.25, prefix: "₹", decimals: 2, label: "lowest cost per interaction" },
];

const CountUpStat = ({
  value,
  label,
  prefix = "",
  suffix = "",
  decimals = 0,
  reduceMotion,
}: {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  reduceMotion: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) =>
    `${prefix}${new Intl.NumberFormat("en-IN", { maximumFractionDigits: decimals }).format(latest)}${suffix}`,
  );

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, { duration: 1.4, ease: "easeOut" });
    return () => controls.stop();
  }, [count, inView, reduceMotion, value]);

  return (
    <div ref={ref}>
      <motion.dd className="text-2xl md:text-3xl font-bold text-primary tabular-nums">{display}</motion.dd>
      <dt className="mt-1 text-xs md:text-sm text-muted-foreground">{label}</dt>
    </div>
  );
};

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.7]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20" aria-label="Swayam Budake — Meta Ads and Digital Marketing">
      {!reduceMotion && (
        <div className="hidden lg:block absolute right-0 top-0 w-1/2 h-full opacity-50 pointer-events-none" aria-hidden="true">
          <Suspense fallback={null}><HeroScene /></Suspense>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 lg:via-background/85 to-background/40 pointer-events-none z-[1]" />
      <motion.div style={{ y, opacity }} className="relative z-10 w-full px-6 md:px-16 lg:px-24 max-w-6xl">
        <motion.div initial={reduceMotion ? false : { opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="flex items-center gap-3 mb-6">
          <span className="h-[2px] w-12 bg-primary" />
          <p className="text-primary font-medium uppercase text-xs">Digital Marketing · Meta Ads · Content</p>
        </motion.div>

        <header className="max-w-4xl">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] break-words">
            Swayam <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Budake</span>
          </h1>
          <p className="mt-7 max-w-3xl text-lg md:text-xl leading-relaxed text-muted-foreground">
            Performance &amp; social media marketer running <strong className="font-semibold text-primary">Meta Ads that get attention, clicks and conversations</strong>, plus the creative that makes people stop scrolling.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Greater Jaipur Area · Open to remote-first and international roles</p>
        </header>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#work" className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold transition-transform hover:scale-[1.03]">View Meta Ads Work</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3.5 font-medium transition-colors hover:border-primary/50 hover:bg-muted/30">Get in touch</a>
        </div>

        <dl className="mt-12 grid max-w-4xl grid-cols-2 lg:grid-cols-4 border-t border-border">
          {results.map((result) => (
            <div key={result.label} className="border-b border-border py-4 pr-4 lg:border-b-0 lg:py-5">
              <CountUpStat {...result} reduceMotion={Boolean(reduceMotion)} />
            </div>
          ))}
        </dl>
      </motion.div>

      <a href="#work" className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors" aria-label="Scroll to Meta Ads work">
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
};

export default HeroSection;