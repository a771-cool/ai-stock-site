window.STOCK_AI_LEADER_TREND_V22_CONTINUATION_VALIDATION = {
    "generatedAt":  "2026-05-07 21:56:20 +08:00",
    "criteria":  {
                     "version":  "leader_trend_v2_2_continuation_validation",
                     "notes":  [
                                   "This report validates continuation labels against realized 5-day and 10-day follow-through after the first proxy candidate date.",
                                   "The goal is not perfect historical prediction, but checking whether Hold Watch, Hold Avoid, and Hold Too Late are directionally useful."
                               ]
                 },
    "summary":  {
                    "rowCount":  5,
                    "verdictBreakdown":  [
                                             {
                                                 "key":  "too_late_supported",
                                                 "count":  1,
                                                 "sampleCodes":  [
                                                                     "2330"
                                                                 ]
                                             },
                                             {
                                                 "key":  "no_candidate_window",
                                                 "count":  1,
                                                 "sampleCodes":  [
                                                                     "2308"
                                                                 ]
                                             },
                                             {
                                                 "key":  "avoid_supported",
                                                 "count":  1,
                                                 "sampleCodes":  [
                                                                     "2382"
                                                                 ]
                                             },
                                             {
                                                 "key":  "watch_supported",
                                                 "count":  1,
                                                 "sampleCodes":  [
                                                                     "2454"
                                                                 ]
                                             },
                                             {
                                                 "key":  "avoid_too_strict",
                                                 "count":  1,
                                                 "sampleCodes":  [
                                                                     "2317"
                                                                 ]
                                             }
                                         ]
                },
    "rows":  [
                 {
                     "code":  "2454",
                     "name":  "聯發科",
                     "candidateStateLabel":  "Leader Observe",
                     "continuationStateLabel":  "Hold Watch",
                     "candidateProxyDays":  2,
                     "firstCandidateProxyDate":  "2026-04-15",
                     "entryClose":  1790,
                     "forward5dPct":  28.21,
                     "forward10dPct":  43.85,
                     "maxGain10dPct":  46.09,
                     "maxDrawdown10dPct":  5.87,
                     "continuationValidationKey":  "watch_supported",
                     "continuationValidationLabel":  "Watch Supported",
                     "continuationValidationNote":  "After the first candidate window, forward upside remained meaningful without severe damage. The Hold Watch stance is supported."
                 },
                 {
                     "code":  "2317",
                     "name":  "鴻海",
                     "candidateStateLabel":  "Leader Observe",
                     "continuationStateLabel":  "Hold Avoid",
                     "candidateProxyDays":  3,
                     "firstCandidateProxyDate":  "2026-04-22",
                     "entryClose":  221,
                     "forward5dPct":  1.81,
                     "forward10dPct":  14.71,
                     "maxGain10dPct":  14.71,
                     "maxDrawdown10dPct":  -0.68,
                     "continuationValidationKey":  "avoid_too_strict",
                     "continuationValidationLabel":  "Avoid Too Strict",
                     "continuationValidationNote":  "The stock still delivered enough continuation after the candidate window that Hold Avoid may be overly conservative."
                 },
                 {
                     "code":  "2382",
                     "name":  "廣達",
                     "candidateStateLabel":  "Leader Observe",
                     "continuationStateLabel":  "Hold Avoid",
                     "candidateProxyDays":  5,
                     "firstCandidateProxyDate":  "2026-04-17",
                     "entryClose":  323,
                     "forward5dPct":  0,
                     "forward10dPct":  -1.55,
                     "maxGain10dPct":  5.26,
                     "maxDrawdown10dPct":  -3.25,
                     "continuationValidationKey":  "avoid_supported",
                     "continuationValidationLabel":  "Avoid Supported",
                     "continuationValidationNote":  "Forward continuation was limited or unstable enough that a Hold Avoid stance looks reasonable."
                 },
                 {
                     "code":  "2330",
                     "name":  "台積電",
                     "candidateStateLabel":  "Leader Late Stage",
                     "continuationStateLabel":  "Hold Too Late",
                     "candidateProxyDays":  1,
                     "firstCandidateProxyDate":  "2026-04-23",
                     "entryClose":  2080,
                     "forward5dPct":  2.64,
                     "forward10dPct":  null,
                     "maxGain10dPct":  11.06,
                     "maxDrawdown10dPct":  2.64,
                     "continuationValidationKey":  "too_late_supported",
                     "continuationValidationLabel":  "Too Late Supported",
                     "continuationValidationNote":  "The move did not leave much comfortable continuation after the first candidate window. Hold Too Late is supported."
                 },
                 {
                     "code":  "2308",
                     "name":  "台達電",
                     "candidateStateLabel":  "Leader Secondary",
                     "continuationStateLabel":  "Hold Too Late",
                     "candidateProxyDays":  0,
                     "firstCandidateProxyDate":  "",
                     "entryClose":  null,
                     "forward5dPct":  null,
                     "forward10dPct":  null,
                     "maxGain10dPct":  null,
                     "maxDrawdown10dPct":  null,
                     "continuationValidationKey":  "no_candidate_window",
                     "continuationValidationLabel":  "No Candidate Window",
                     "continuationValidationNote":  "There was no promotable candidate window in the proxy backlook, so continuation validation is not applicable."
                 }
             ]
};

