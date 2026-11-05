import { describe, expect, it } from "vitest";
import { campaignFootnote, campaignTotals, metaCampaigns } from "@/data/metaCampaigns";

describe("Meta Ads campaign figures", () => {
  it("preserves all supplied results without adding unsupported total metrics", () => {
    expect(metaCampaigns.map(({ name }) => name)).toEqual([
      "Footfall Awareness Campaign",
      "Engagement Campaign (Oct 2026)",
      "Website Traffic Campaign",
    ]);
    expect(metaCampaigns.map(({ metrics }) => metrics.map(({ value }) => value))).toEqual([
      ["3,977", "₹0.37", "24,481", "50,857", "₹1,468", "7.8%"],
      ["6,634", "₹0.32", "34,063", "80,636", "₹2,119", "8.2%"],
      ["910", "₹1.93", "2.5%", "37,799", "1.1", "₹1,754"],
    ]);
    expect(campaignTotals).toEqual({
      spend: "₹5,340",
      impressions: "173,210",
      interactions: "10,611",
      linkClicks: "910",
    });
    expect(campaignFootnote).toContain("Reach is summed per campaign and may overlap.");
    expect(campaignFootnote).toContain("'Interactions' is Meta's engagement result type.");
    expect(metaCampaigns.some(({ name }) => name.includes("Revenue") || name.includes("ROAS"))).toBe(false);
  });
});
