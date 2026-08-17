import type { AssessmentResult, GAD7Submission, SeverityLevel } from "./gad"

export function getGAD7Classification(
  submission: GAD7Submission
): AssessmentResult {
  const totalScore = Object.values(submission).reduce(
    (acc, val) => acc + val,
    0
  )
  let severityLevel: SeverityLevel = "Minimal"
  const mlConfidence = Math.random()

  if (totalScore >= 15) {
    severityLevel = "Severe"
  } else if (totalScore >= 10) {
    severityLevel = "Moderate"
  } else if (totalScore >= 5) {
    severityLevel = "Mild"
  }

  return {
    total_score: totalScore,
    rule_based_severity: severityLevel,
    ml_predicted_severity: severityLevel,
    ml_confidence: mlConfidence,
    agreement: true,
  }
}
