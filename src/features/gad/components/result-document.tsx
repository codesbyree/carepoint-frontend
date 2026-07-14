import { forwardRef } from "react"
import type { AssessmentResult } from "../api/gad"
import {
  type Respondent,
  GAD7_ITEMS,
  RESPONSE_LABELS,
  SEVERITY_BANDS,
  SEVERITY_LABELS,
  SEVERITY_INTERPRETATION,
  UI_TEXT,
  scorePosition,
} from "../config/gad-pdf-content"

const colors = {
  white: "#FFFFFF",
  oliveTint: "#F3F4EA", // olive-50 (table stripes, respondent panel)
  olive100: "#E8EAD5", // score hero panel, confidence tile
  tealText: "#1F5C56", // teal-700, secondary text/labels
  teal900: "#103C38", // header, primary accent
  bodyText: "#3A3F38",
  mutedText: "#5F6B5A",
  border: "#D8DAC8",
  gaugeFilled: ["#C9E8DC", "#9FCFC0", "#5D9C8C", "#103C38"],
}

interface ResultDocumentProps {
  respondent: Respondent
  result: AssessmentResult
  answers: number[]
  generatedAt: Date
  locale: Languages
}

export const ResultDocument = forwardRef<HTMLDivElement, ResultDocumentProps>(
  function ResultDocument(
    { respondent, result, answers, generatedAt, locale = "en" },
    ref
  ) {
    const {
      total_score,
      rule_based_severity,
      ml_predicted_severity,
      ml_confidence,
      agreement,
    } = result

    const t = UI_TEXT[locale]
    const items = GAD7_ITEMS[locale]
    const responseLabels = RESPONSE_LABELS[locale]
    const severityLabels = SEVERITY_LABELS[locale]
    const interpretation = SEVERITY_INTERPRETATION[locale]

    const markerPosition = scorePosition(total_score) * 100
    const confidencePct = Math.round(ml_confidence * 100)
    const dateLabel = generatedAt.toLocaleString(
      locale === "id" ? "id-ID" : "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    )

    return (
      <div
        ref={ref}
        style={{
          width: 520,
          fontFamily: "'Inter', sans-serif",
          background: colors.white,
          border: `0.5px solid ${colors.border}`,
        }}
      >
        <div style={{ background: colors.teal900, padding: "10px 20px" }}>
          <p
            style={{
              margin: 0,
              fontSize: 10,
              letterSpacing: "0.04em",
              color: "#9FE1CB",
            }}
          >
            {t.appName}
          </p>
          <p
            style={{
              margin: "4px 0 0",
              fontFamily: "'Fraunces', serif",
              fontSize: 15,
              fontWeight: 500,
              color: colors.white,
            }}
          >
            {t.title}
          </p>
        </div>

        <div
          style={{
            padding: "16px 20px 0",
            display: "flex",
            justifyContent: "end",
            fontSize: 11,
            color: colors.tealText,
          }}
        >
          <span>{dateLabel}</span>
        </div>

        <div
          style={{
            margin: "14px 20px 0",
            padding: "10px",
            background: colors.oliveTint,
            fontSize: 11,
            color: colors.bodyText,
            display: "flex",
            gap: 24,
          }}
        >
          <div>
            <p style={{ margin: 0, color: colors.tealText }}>{t.name}</p>
            <p style={{ margin: "2px 0 0", fontWeight: 500 }}>
              {respondent.name}
            </p>
          </div>
          <div>
            <p style={{ margin: 0, color: colors.tealText }}>{t.age}</p>
            <p style={{ margin: "2px 0 0", fontWeight: 500 }}>
              {respondent.age}
            </p>
          </div>
          <div>
            <p style={{ margin: 0, color: colors.tealText }}>{t.consent}</p>
            <p style={{ margin: "2px 0 0", fontWeight: 500 }}>
              {t.consentConfirmed}
            </p>
          </div>
        </div>

        <div
          style={{
            margin: "8px 20px 0",
            background: colors.olive100,
            padding: "8px 14px",
          }}
        >
          <p style={{ margin: 0, fontSize: 11, color: colors.tealText }}>
            {t.totalScore}
          </p>
          <p
            style={{
              margin: "2px 0 0",
              fontFamily: "'Fraunces', serif",
              fontSize: 28,
              fontWeight: 500,
              color: colors.teal900,
            }}
          >
            {total_score}
            <span style={{ fontSize: 14, color: colors.tealText }}> / 21</span>
          </p>
        </div>

        <div style={{ margin: "8px 20px 0", display: "flex", gap: 12 }}>
          <div
            style={{
              flex: 1,
              padding: "8px 14px",
              border: `0.5px solid ${colors.border}`,
            }}
          >
            <p style={{ margin: 0, fontSize: 11, color: colors.tealText }}>
              {t.ruleBased}
            </p>
            <p
              style={{
                margin: "2px 0 0",
                fontSize: 12,
                fontWeight: 500,
                color: colors.teal900,
              }}
            >
              {severityLabels[rule_based_severity]}
            </p>
          </div>
          <div
            style={{
              flex: 1,
              padding: "8px 14px",
              border: `0.5px solid ${colors.border}`,
            }}
          >
            <p style={{ margin: 0, fontSize: 11, color: colors.tealText }}>
              {t.mlPredicted}
            </p>
            <p
              style={{
                margin: "2px 0 0",
                fontSize: 12,
                fontWeight: 500,
                color: colors.teal900,
              }}
            >
              {severityLabels[ml_predicted_severity]}
            </p>
          </div>
          <div
            style={{
              flex: 1,
              padding: "8px 14px",
              background: colors.olive100,
            }}
          >
            <p style={{ margin: 0, fontSize: 11, color: colors.tealText }}>
              {t.confidence}
            </p>
            <p
              style={{
                margin: "2px 0 0",
                fontSize: 12,
                fontWeight: 500,
                color: colors.teal900,
              }}
            >
              {confidencePct}%
            </p>
          </div>
        </div>

        <div
          style={{
            margin: "10px 20px 0",
            padding: "6px 10px",
            background: colors.oliveTint,
            fontSize: 11,
            color: colors.teal900,
            display: "inline-block",
          }}
        >
          {agreement ? t.agree : t.disagree}
        </div>

        <div style={{ margin: "8px 20px 0" }}>
          <div
            style={{
              display: "flex",
              height: 8,
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            {SEVERITY_BANDS.map((band, i) => (
              <div
                key={band.key}
                style={{ flex: band.width, background: colors.gaugeFilled[i] }}
              />
            ))}
          </div>
          <div style={{ position: "relative", height: 14 }}>
            <div
              style={{
                position: "absolute",
                left: `${markerPosition}%`,
                top: 2,
                width: 0,
                height: 0,
                borderLeft: "5px solid transparent",
                borderRight: "5px solid transparent",
                borderTop: `7px solid ${colors.teal900}`,
                transform: "translateX(-50%)",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 11,
              color: colors.mutedText,
              marginTop: 2,
            }}
          >
            {SEVERITY_BANDS.map((band) => (
              <span key={band.key}>{severityLabels[band.key]}</span>
            ))}
          </div>
        </div>

        <div
          style={{
            margin: "8px 20px 0",
            paddingTop: 16,
            borderTop: `0.5px solid ${colors.border}`,
          }}
        >
          <p
            style={{
              margin: "0 0 4px",
              fontSize: 12,
              fontWeight: 500,
              color: colors.teal900,
            }}
          >
            {t.whatThisMeans}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 11,
              lineHeight: 1.6,
              color: colors.bodyText,
            }}
          >
            {interpretation[rule_based_severity]}
          </p>
        </div>

        <div
          style={{
            margin: "8px 20px 0",
            paddingTop: 16,
            borderTop: `0.5px solid ${colors.border}`,
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              fontSize: 11,
              fontWeight: 500,
              color: colors.teal900,
            }}
          >
            {t.itemBreakdown}
          </p>
          <table
            style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}
          >
            <thead>
              <tr style={{ background: colors.teal900, color: colors.white }}>
                <td style={{ padding: "2px 4px" }}>{t.itemNumber}</td>
                <td style={{ padding: "2px 4px" }}>{t.itemSymptom}</td>
                <td style={{ padding: "2px 4px", textAlign: "right" }}>
                  {t.itemResponse}
                </td>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr
                  key={item}
                  style={{
                    background: i % 2 === 0 ? colors.oliveTint : colors.white,
                  }}
                >
                  <td style={{ padding: "2px 4px", color: colors.tealText }}>
                    {i + 1}
                  </td>
                  <td style={{ padding: "2px 4px", color: colors.bodyText }}>
                    {item}
                  </td>
                  <td
                    style={{
                      padding: "2px 4px",
                      textAlign: "right",
                      color: colors.teal900,
                    }}
                  >
                    {responseLabels[answers[i]]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          style={{
            margin: "8px 20px 0",
            padding: "14px 0 20px",
            borderTop: `0.5px solid ${colors.border}`,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 11,
              lineHeight: 1.6,
              color: colors.mutedText,
            }}
          >
            {t.disclaimer}
          </p>
        </div>
      </div>
    )
  }
)
