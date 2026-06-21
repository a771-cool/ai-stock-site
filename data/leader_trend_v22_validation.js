window.STOCK_AI_LEADER_TREND_V22_VALIDATION = {
    "generatedAt":  "2026-05-07 21:56:05 +08:00",
    "criteria":  {
                     "version":  "leader_trend_v2_2_validation",
                     "focusCodes":  [
                                        "2454",
                                        "2317",
                                        "2382",
                                        "2330",
                                        "2308"
                                    ],
                     "notes":  [
                                   "This validation compares current v2.2 dual-axis labels against the 2026-04-10 to 2026-04-24 proxy backlook window.",
                                   "Candidate state answers whether the stock deserved to be listed as a leader candidate.",
                                   "Continuation state answers whether the stock looked suitable for holding through continuation rather than just being watched."
                               ]
                 },
    "summary":  {
                    "rowCount":  5,
                    "verdictBreakdown":  [
                                             {
                                                 "key":  "useful_for_candidate",
                                                 "count":  2,
                                                 "sampleCodes":  [
                                                                     "2454",
                                                                     "2317"
                                                                 ]
                                             },
                                             {
                                                 "key":  "conservative_match",
                                                 "count":  1,
                                                 "sampleCodes":  [
                                                                     "2308"
                                                                 ]
                                             },
                                             {
                                                 "key":  "late_but_visible",
                                                 "count":  1,
                                                 "sampleCodes":  [
                                                                     "2330"
                                                                 ]
                                             },
                                             {
                                                 "key":  "candidate_but_not_hold",
                                                 "count":  1,
                                                 "sampleCodes":  [
                                                                     "2382"
                                                                 ]
                                             }
                                         ]
                },
    "rows":  [
                 {
                     "code":  "2454",
                     "name":  "聯發科",
                     "candidateStateKey":  "leader_observe",
                     "candidateStateLabel":  "Leader Observe",
                     "candidateScore":  39.29,
                     "continuationStateKey":  "hold_watch",
                     "continuationStateLabel":  "Hold Watch",
                     "continuationScore":  49.62,
                     "backlookAssessmentKey":  "candidate_window_only",
                     "recommendationDays":  12,
                     "candidateProxyDays":  2,
                     "holdableProxyDays":  0,
                     "firstCandidateProxyDate":  "2026-04-15",
                     "maxRR":  2.31,
                     "maxPotentialPct":  10.34,
                     "validationVerdictKey":  "useful_for_candidate",
                     "validationVerdictLabel":  "Useful For Candidate",
                     "validationNote":  "The stock had a real candidate window in the proxy backlook. The current v2.2 dual-axis wording is useful for surfacing it as a leader candidate, but it still does not prove a long hold-through.",
                     "practicalDecisionText":  "Practical reading: promote into leader candidate watch when the signal appears, but do not assume the stock is safe for a full trend hold."
                 },
                 {
                     "code":  "2317",
                     "name":  "鴻海",
                     "candidateStateKey":  "leader_observe",
                     "candidateStateLabel":  "Leader Observe",
                     "candidateScore":  37.62,
                     "continuationStateKey":  "hold_watch",
                     "continuationStateLabel":  "Hold Watch",
                     "continuationScore":  41.41,
                     "backlookAssessmentKey":  "candidate_window_only",
                     "recommendationDays":  6,
                     "candidateProxyDays":  3,
                     "holdableProxyDays":  0,
                     "firstCandidateProxyDate":  "2026-04-22",
                     "maxRR":  1.86,
                     "maxPotentialPct":  14.71,
                     "validationVerdictKey":  "useful_for_candidate",
                     "validationVerdictLabel":  "Useful For Candidate",
                     "validationNote":  "The stock had a real candidate window in the proxy backlook. The current v2.2 dual-axis wording is useful for surfacing it as a leader candidate, but it still does not prove a long hold-through.",
                     "practicalDecisionText":  "Practical reading: promote into leader candidate watch when the signal appears, but do not assume the stock is safe for a full trend hold."
                 },
                 {
                     "code":  "2382",
                     "name":  "廣達",
                     "candidateStateKey":  "leader_observe",
                     "candidateStateLabel":  "Leader Observe",
                     "candidateScore":  26.09,
                     "continuationStateKey":  "hold_avoid",
                     "continuationStateLabel":  "Hold Avoid",
                     "continuationScore":  33.94,
                     "backlookAssessmentKey":  "candidate_window_only",
                     "recommendationDays":  15,
                     "candidateProxyDays":  5,
                     "holdableProxyDays":  0,
                     "firstCandidateProxyDate":  "2026-04-17",
                     "maxRR":  1.38,
                     "maxPotentialPct":  7.72,
                     "validationVerdictKey":  "candidate_but_not_hold",
                     "validationVerdictLabel":  "Candidate But Not Hold",
                     "validationNote":  "The stock did have a candidate window, but the continuation side stayed weak. The current v2.2 wording is better interpreted as a candidate alert, not as permission to keep holding deep into extension.",
                     "practicalDecisionText":  "Practical reading: candidate visibility is real, but continuation is weak. Use it as a timely alert rather than a stay-in-trade message."
                 },
                 {
                     "code":  "2330",
                     "name":  "台積電",
                     "candidateStateKey":  "leader_late_stage",
                     "candidateStateLabel":  "Leader Late Stage",
                     "candidateScore":  33.24,
                     "continuationStateKey":  "hold_too_late",
                     "continuationStateLabel":  "Hold Too Late",
                     "continuationScore":  26.53,
                     "backlookAssessmentKey":  "candidate_window_only",
                     "recommendationDays":  15,
                     "candidateProxyDays":  1,
                     "holdableProxyDays":  0,
                     "firstCandidateProxyDate":  "2026-04-23",
                     "maxRR":  1.04,
                     "maxPotentialPct":  5,
                     "validationVerdictKey":  "late_but_visible",
                     "validationVerdictLabel":  "Late But Visible",
                     "validationNote":  "The stock was still visible in the proxy backlook, but the continuation side was already late. The system could notice strength without offering a strong hold-through message.",
                     "practicalDecisionText":  "Practical reading: visible strength existed, but by the continuation lens the move was already too late to treat as a comfortable hold."
                 },
                 {
                     "code":  "2308",
                     "name":  "台達電",
                     "candidateStateKey":  "leader_secondary_candidate",
                     "candidateStateLabel":  "Leader Secondary",
                     "candidateScore":  42.93,
                     "continuationStateKey":  "hold_too_late",
                     "continuationStateLabel":  "Hold Too Late",
                     "continuationScore":  37.62,
                     "backlookAssessmentKey":  "tracked_but_not_promotable",
                     "recommendationDays":  15,
                     "candidateProxyDays":  0,
                     "holdableProxyDays":  0,
                     "firstCandidateProxyDate":  "",
                     "maxRR":  0.75,
                     "maxPotentialPct":  5,
                     "validationVerdictKey":  "conservative_match",
                     "validationVerdictLabel":  "Conservative Match",
                     "validationNote":  "The stock was visible, but the proxy backlook did not support promotion into a leader candidate. The current continuation stance staying cautious is consistent with that outcome.",
                     "practicalDecisionText":  "Practical reading: the stock was worth tracking, but the current conservative stance still looks appropriate."
                 }
             ]
};

