window.STOCK_AI_MONITOR_FEEDBACK = {
    "generatedAt":  "2026-06-20 21:58:05 +08:00",
    "overallStatus":  "fail",
    "policyMode":  "defensive_lock",
    "policyLabel":  "Defensive Lock",
    "executionBias":  "defense",
    "headline":  "Hard defense: pause new adds and protect capital first.",
    "topActions":  [
                       {
                           "area":  "risk",
                           "level":  "tighten",
                           "key":  "freeze_new_adds",
                           "title":  "Freeze new adds",
                           "action":  "Pause new adds and only manage existing positions.",
                           "reason":  "The monitoring stack is in a hard-defense state.",
                           "metrics":  {
                                           "dqStatus":  "fail",
                                           "fullChainMaxDrawdownPct":  -32.18,
                                           "hardStopRate":  37.59
                                       }
                       },
                       {
                           "area":  "portfolio",
                           "level":  "tighten",
                           "key":  "cut_total_target",
                           "title":  "Cut total target exposure",
                           "action":  "Keep suggested exposure under 20% and favor cash.",
                           "reason":  "Capital preservation matters more than fill rate in lock mode.",
                           "metrics":  {
                                           "allocatedCount":  2,
                                           "totalSuggestedPct":  20
                                       }
                       },
                       {
                           "area":  "ranking",
                           "level":  "tighten",
                           "key":  "allow_add_only",
                           "title":  "Keep allow_add only",
                           "action":  "Remove wait names from the operational layer and keep them in observation only.",
                           "reason":  "Hard defense should not promote waiting names into active operations.",
                           "metrics":  {
                                           "buyReadyCount":  4
                                       }
                       }
                   ],
    "summary":  {
                    "buyReadyCount":  4,
                    "allocatedCount":  2,
                    "totalSuggestedPct":  20,
                    "top10AvgRr":  2.14,
                    "top10AvgAiScore":  1.79,
                    "weightedAvgRr":  0.69,
                    "fullChainWinRate":  55.32,
                    "recentWinRatePct":  49.65,
                    "fullChainMaxDrawdownPct":  -32.18,
                    "hardStopRate":  37.59,
                    "recentSupportBreakRatePct":  2.35
                }
};

