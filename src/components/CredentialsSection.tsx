import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, MapPin } from "lucide-react";

const roles = [
  {
    title: "Digital Marketing & AI Automation Executive",
    company: "V.S Enterprises",
    period: "Jul 2026–Present",
    location: "Jaipur, Rajasthan · On-site",
    points: [
      "Designed 7+ workflows in n8n and Pabbly Connect for WhatsApp logging, CRM-triggered voice calls and Claude API reporting.",
      "Built and deployed a Claude API website chatbot through n8n.",
      "Ran Meta Ads hiring campaigns and automated Zoho CRM lead tracking and follow-ups.",
      "Designed festival, event and social creative assets for the brand.",
    ],
    tools: "n8n · Pabbly Connect · Zoho CRM · DoubleTick · Bolna AI · Claude API · Meta Ads Manager · Canva",
  },
  {
    title: "Content Strategist Intern",
    company: "Hexnsmedia",
    period: "Dec 2025–May 2026",
    location: "Kolhapur, Maharashtra · On-site",
    points: [
      "Developed and wrote content for static posts, carousel posts, posters, flyers, billboards and standees across 5+ client accounts spanning F&B, hospitality, nightlife and events industries.",
      "Leveraged AI tools (ChatGPT, Claude, Microsoft Copilot) to accelerate content ideation, copywriting and creative production workflows.",
      "Collaborated on multi-format visual content strategies tailored to each brand's tone, audience and platform requirements.",
      "Managed simultaneous content deliverables for diverse clients including restaurants, bars, clubs, packaged food brands and event organisers.",
    ],
    tools: "Canva · Adobe Illustrator · ChatGPT · Claude · Microsoft Copilot",
  },
  {
    title: "Digital Marketing Intern",
    company: "Salgar Foods and Beverages Pvt. Ltd.",
    period: "May 2025–Aug 2025",
    location: "Kolhapur, Maharashtra · On-site",
    points: [
      "Designed and ran Meta ad campaigns to optimize reach and engagement.",
      "Created graphics for social media and promotions using Canva and Adobe Illustrator.",
      "Drafted and published blog posts aligned to brand voice and SEO strategy.",
      "Assisted in lead generation initiatives and customer acquisition.",
    ],
    tools: "Meta Ads · Canva · Adobe Illustrator · Blogging & SEO · Lead Generation",
  },
];

const certifications = [
  "Google Ads Campaign",
  "SEO Essentials with SEMrush",
  "Search Engine Optimization",
  "Social Media Marketing",
  "Canva Essentials",
  "Graphic Designing Essentials",
  "Omni-Channel Marketing (Job Simulation)",
  "MS Excel Advanced Training",
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
          Experience
        </p>
        <h2
          id="credentials-heading"
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Building at the intersection of{" "}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            marketing and automation
          </span>
        </h2>
      </motion.div>

      <div className="space-y-5">
        {roles.map((role, i) => (
          <motion.article
            key={role.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-colors group overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[60px] bg-primary/0 group-hover:bg-primary/10 transition-all duration-700" />
            <div className="relative z-10 flex flex-col md:flex-row items-start gap-5">
              <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
                  <div>
                    <p className="text-primary text-sm font-medium mb-1">{role.company}</p>
                    <h3 className="text-xl font-semibold text-foreground leading-snug break-words">{role.title}</h3>
                  </div>
                  <div className="text-sm text-muted-foreground lg:text-right shrink-0">
                    <p>{role.period}</p>
                    <p className="flex lg:justify-end items-center gap-1 mt-1"><MapPin className="w-3.5 h-3.5" aria-hidden="true" />{role.location}</p>
                  </div>
                </div>
                <ul className="grid lg:grid-cols-2 gap-x-8 gap-y-2 text-sm text-muted-foreground leading-relaxed mb-5">
                  {role.points.map((point) => <li key={point} className="flex gap-2"><span className="text-primary" aria-hidden="true">•</span><span>{point}</span></li>)}
                </ul>
                <p className="text-xs text-muted-foreground"><span className="text-foreground font-medium">Tools:</span> {role.tools}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-5">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4"
        >
          <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">Education</p>
            <h3 className="font-semibold leading-snug">BBA Digital Marketing</h3>
            <p className="text-sm text-muted-foreground mt-1">Poornima University · In progress</p>
          </div>
        </motion.article>
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="bg-card border border-border rounded-2xl p-5"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">Certifications</p>
              <h3 className="font-semibold leading-snug">Google · SEMrush · Canva · Microsoft</h3>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span key={cert} className="text-xs px-3 py-1.5 rounded-full border border-border bg-primary/5 text-muted-foreground">
                {cert}
              </span>
            ))}
          </div>
        </motion.article>
      </div>
    </div>
  </section>
);

export default CredentialsSection;
