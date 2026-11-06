import { motion } from "framer-motion";
import { metaCampaigns, campaignFootnote, campaignTotals } from "@/data/metaCampaigns";

const CampaignCard = ({ campaign, index }: { campaign: typeof metaCampaigns[number]; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.55, delay: index * 0.1 }}
    className="border border-border bg-card/80 p-5 md:p-6"
  >
    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
      <div>
        <p className="text-sm text-primary font-medium">{campaign.client} <span className="text-muted-foreground">· {campaign.industry}</span></p>
        <h3 className="text-xl font-semibold mt-1">{campaign.name}</h3>
      </div>
      <span className="text-xs uppercase tracking-wide text-muted-foreground border border-border px-2.5 py-1">Meta Ads</span>
    </div>
    <p className="text-sm text-muted-foreground mb-5"><span className="text-foreground font-medium">Objective:</span> {campaign.objective}</p>

    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5 border-y border-border py-5">
      {campaign.metrics.slice(0, 4).map((metric) => (
        <div key={metric.label} className="min-w-0">
          <dd className="text-xl md:text-2xl font-bold text-primary tabular-nums break-words">{metric.value}</dd>
          <dt className="text-xs text-muted-foreground mt-1">{metric.label}</dt>
        </div>
      ))}
    </dl>
    <div className="grid grid-cols-2 gap-4 py-4 border-b border-border">
      {campaign.metrics.slice(4).map((metric) => (
        <p key={metric.label} className="text-xs text-muted-foreground">
          <span className="text-foreground font-medium">{metric.value}</span> {metric.label}
        </p>
      ))}
    </div>

    <div className="grid md:grid-cols-[1fr_160px] items-end gap-5 pt-4">
      <p className="text-sm leading-relaxed text-muted-foreground"><span className="text-foreground font-medium">What I did:</span> {campaign.action}</p>
      <div aria-label={campaign.visual.label} className="space-y-2">
        <p className="text-[10px] uppercase tracking-wide text-muted-foreground">{campaign.visual.label}</p>
        <div className="h-2 bg-muted overflow-hidden" role="img" aria-label={`${campaign.visual.label} visual`}>
          <div className="h-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${campaign.visual.values[0]}%` }} />
        </div>
      </div>
    </div>
  </motion.article>
);

const MetaAdsSection = () => (
  <section id="work" className="py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden" aria-labelledby="work-heading">
    <div className="max-w-6xl mx-auto relative z-10">
      <motion.header initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10">
        <div className="h-[2px] w-12 bg-gradient-to-r from-primary to-secondary mb-5" />
        <p className="text-primary font-medium tracking-[0.3em] uppercase text-xs mb-4">Meta Ads Work</p>
        <h2 id="work-heading" className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Small budgets. <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Measurable results.</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-3xl">Real campaigns I planned, launched and optimised on Meta. Every number below comes straight from Ads Manager.</p>
      </motion.header>

      <div className="grid lg:grid-cols-2 gap-4">
        {metaCampaigns.map((campaign, index) => <CampaignCard key={campaign.name} campaign={campaign} index={index} />)}
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-semibold mb-4">At a glance</h3>
        <div className="overflow-x-auto border border-border">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-muted/60 text-muted-foreground">
              <tr>{["Campaign", "Spend", "Reach", "Impressions", "Results", "Cost / result"].map((heading) => <th key={heading} scope="col" className="px-4 py-3 font-medium">{heading}</th>)}</tr>
            </thead>
            <tbody>
              {metaCampaigns.map((campaign) => (
                <tr key={campaign.name} className="border-t border-border">
                  <th scope="row" className="px-4 py-3 font-medium text-foreground">{campaign.name}</th>
                  <td className="px-4 py-3">{campaign.table.spend}</td><td className="px-4 py-3">{campaign.table.reach}</td>
                  <td className="px-4 py-3">{campaign.table.impressions}</td><td className="px-4 py-3">{campaign.table.results}</td>
                  <td className="px-4 py-3">{campaign.table.costPerResult}</td>
                </tr>
              ))}
              <tr className="border-t border-primary/40 bg-primary/5 font-semibold">
                <th scope="row" className="px-4 py-3 text-foreground">Total</th>
                <td className="px-4 py-3">{campaignTotals.spend}</td><td className="px-4 py-3">96,343*</td>
                <td className="px-4 py-3">{campaignTotals.impressions}</td><td className="px-4 py-3">{campaignTotals.interactions} interactions<br />{campaignTotals.linkClicks} link clicks</td>
                <td className="px-4 py-3">—</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground mt-3">{campaignFootnote}</p>
      </div>
    </div>
  </section>
);

export default MetaAdsSection;