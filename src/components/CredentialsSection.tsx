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
    title: "Digital Marketing Intern",
    company: "Salgar Foods Pvt. Ltd.",
    period: "May 2025–Jul 2025",
    location: "Kolhapur, Maharashtra · On-site",
    points: [
      "Executed on-page and off-page SEO, keyword research and competitor analysis.",
      "Created, scheduled and managed social media content across platforms.",
      "Designed campaign creatives and short-form product promotion videos.",
      "Supported digital campaigns aligned with business goals.",
    ],
    tools: "SEO · Social Media · Content Creation · Campaign Planning",
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

      <div className="grid sm:grid-cols-3 gap-5 mt-5">
        {[
          { icon: Briefcase, label: "Earlier experience", title: "Content Strategist Intern", detail: "Hexnsmedia" },
          { icon: GraduationCap, label: "Education", title: "BBA Digital Marketing", detail: "Poornima University · In progress" },
          { icon: Award, label: "Certifications", title: "Google, Meta & HubSpot", detail: "SEMrush, Canva & Microsoft" },
        ].map((item, i) => (
          <motion.article key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 + i * 0.1 }} className="bg-card border border-border rounded-2xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center"><item.icon className="w-5 h-5 text-primary" aria-hidden="true" /></div>
            <div className="min-w-0"><p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">{item.label}</p><h3 className="font-semibold leading-snug">{item.title}</h3><p className="text-sm text-muted-foreground mt-1">{item.detail}</p></div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default CredentialsSection;
