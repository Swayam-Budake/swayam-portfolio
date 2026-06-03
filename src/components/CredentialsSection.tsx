import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const items = [
  {
    icon: Briefcase,
    label: "Experience",
    title: "Digital Marketing",
    detail: "Salgar Foods Pvt Ltd",
  },
  {
    icon: Briefcase,
    label: "Experience",
    title: "Content Strategist Intern",
    detail: "Hexnsmedia",
  },
  {
    icon: GraduationCap,
    label: "Education",
    title: "BBA Digital Marketing",
    detail: "Poornima University",
  },
  {
    icon: Award,
    label: "Certified by",
    title: "Google, Meta, HubSpot",
    detail: "SEMrush, Canva & Microsoft",
  },
];

const CredentialsSection = () => (
  <section
    id="credentials"
    className="py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden"
    aria-labelledby="credentials-heading"
  >
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10"
      >
        <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-secondary mb-5" />
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">
          Credentials
        </p>
        <h2
          id="credentials-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Backed by{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            real experience & certifications
          </span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="relative bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors group overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[60px] bg-primary/0 group-hover:bg-primary/10 transition-all duration-700" />
            <div className="relative z-10 flex items-start gap-4">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-1">
                  {item.label}
                </p>
                <h3 className="font-semibold text-foreground leading-snug break-words">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 break-words">
                  {item.detail}
                </p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default CredentialsSection;
