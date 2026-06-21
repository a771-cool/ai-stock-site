window.STOCK_AI_MONITOR_POLICY_RULES = {
    "generatedAt":  "2026-06-14 17:01:31 +08:00",
    "overallStatus":  "fail",
    "policyMode":  "defensive_lock",
    "policyLabel":  "Defensive Lock",
    "ruleLabel":  "Hard Defense Rules",
    "headline":  "Auto mode keeps hard defense, but allows at most 1 new name with total exposure capped near 10%.",
    "rules":  {
                  "recommendedMarketOpenMode":  "extreme",
                  "maxPortfolioTargetPct":  10,
                  "maxNewPositionCount":  1,
                  "minRrForNewAdd":  1.8,
                  "requireAllowAddOnly":  true,
                  "allowWaitCandidates":  false,
                  "allowNewAdds":  true,
                  "chaseHighAiWaits":  false,
                  "preferCash":  true,
                  "autoApplyEnabled":  true,
                  "manualOverrideAllowed":  true,
                  "applyScope":  [
                                     "auto_market_open_mode",
                                     "summary_headline",
                                     "fallback_allocator"
                                 ],
                  "adaptiveUnlock":  true,
                  "adaptiveUnlockLabel":  "?脣???銝????曇?"
              }
};

