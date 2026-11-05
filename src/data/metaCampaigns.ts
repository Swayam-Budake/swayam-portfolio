export type CampaignMetric = {
  label: string;
  value: string;
};

export type MetaCampaign = {
  name: string;
  client: string;
  industry: string;
  objective: string;
  metrics: CampaignMetric[];
  action: string;
  visual: {
    label: string;
    values: number[];
  };
  table: {
    spend: string;
    reach: string;
    impressions: string;
    results: string;
    costPerResult: string;
  };
};

export const metaCampaigns: MetaCampaign[] = [
  {
    name: "Footfall Awareness Campaign",
    client: "Heera Panna",
    industry: "Mobile phone accessories",
    objective: "Drive engagement and local interest.",
    metrics: [
      { label: "Interactions", value: "3,977" },
      { label: "Cost / interaction", value: "₹0.37" },
      { label: "People reached", value: "24,481" },
      { label: "Impressions", value: "50,857" },
      { label: "Spend", value: "₹1,468" },
      { label: "Interaction rate", value: "7.8%" },
    ],
    action: "Built a local audience plan with attention-led creatives and Meta placements tailored to nearby customers.",
    visual: { label: "Reach vs. impressions", values: [48, 100] },
    table: {
      spend: "₹1,468",
      reach: "24,481",
      impressions: "50,857",
      results: "3,977 interactions",
      costPerResult: "₹0.37 / interaction",
    },
  },
  {
    name: "Engagement Campaign (Oct 2026)",
    client: "Meetha Bharat",
    industry: "Sweets & confectionery",
    objective: "Low-cost engagement at scale.",
    metrics: [
      { label: "Interactions", value: "6,634" },
      { label: "Cost / interaction", value: "₹0.32" },
      { label: "People reached", value: "34,063" },
      { label: "Impressions", value: "80,636" },
      { label: "Spend", value: "₹2,119" },
      { label: "Interaction rate", value: "8.2%" },
    ],
    action: "Focused the campaign on broad, relevant audiences with engaging creative and placements optimised for interactions.",
    visual: { label: "Reach vs. impressions", values: [42, 100] },
    table: {
      spend: "₹2,119",
      reach: "34,063",
      impressions: "80,636",
      results: "6,634 interactions",
      costPerResult: "₹0.32 / interaction",
    },
  },
  {
    name: "Website Traffic Campaign",
    client: "IKF",
    industry: "Packaged food",
    objective: "Send qualified clicks to the website. Five days at ₹450/day.",
    metrics: [
      { label: "Link clicks", value: "910" },
      { label: "Cost / link click", value: "₹1.93" },
      { label: "Click-through rate", value: "2.5%" },
      { label: "People reached", value: "37,799" },
      { label: "Frequency", value: "1.1" },
      { label: "Spend", value: "₹1,754" },
    ],
    action: "Ran a five-day traffic campaign with website-focused creative and audience targeting to attract qualified clicks.",
    visual: { label: "Click-through rate", values: [25, 100] },
    table: {
      spend: "₹1,754",
      reach: "37,799",
      impressions: "42,717*",
      results: "910 link clicks",
      costPerResult: "₹1.93 / link click",
    },
  },
];

export const campaignTotals = {
  spend: "₹5,340",
  impressions: "173,210",
  interactions: "10,611",
  linkClicks: "910",
};

export const campaignFootnote =
  "Data from Meta Ads Manager, Oct 1 to Nov 6, 2026. Reach is summed per campaign and may overlap. 'Interactions' is Meta's engagement result type.";
