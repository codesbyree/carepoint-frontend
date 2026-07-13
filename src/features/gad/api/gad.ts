import axios, { AxiosError, type AxiosInstance } from "axios"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string

if (!API_BASE_URL) {
  console.warn(
    "VITE_API_BASE_URL is not set — API calls will fail. Check your .env file."
  )
}

const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
})

/** Raw item-level GAD-7 responses. Each item is scored 0-3. */
export interface GAD7Submission {
  q1: number
  q2: number
  q3: number
  q4: number
  q5: number
  q6: number
  q7: number
}

export type SeverityLevel = "Minimal" | "Mild" | "Moderate" | "Severe"

export interface AssessmentResult {
  total_score: number
  rule_based_severity: SeverityLevel
  ml_predicted_severity: SeverityLevel
  ml_confidence: number
  agreement: boolean
}

export interface HealthResponse {
  status: string
  model_loaded: boolean
}

export interface ApiErrorBody {
  error: string
}

export class Gad7ApiError extends Error {
  status?: number

  constructor(message: string, status?: number) {
    super(message)
    this.name = "Gad7ApiError"
    this.status = status
  }
}

function toApiError(err: unknown): Gad7ApiError {
  if (axios.isAxiosError(err)) {
    const axiosErr = err as AxiosError<ApiErrorBody>
    const message =
      axiosErr.response?.data?.error ?? axiosErr.message ?? "Unknown API error"
    return new Gad7ApiError(message, axiosErr.response?.status)
  }
  return new Gad7ApiError("Unexpected error contacting the API")
}

/**
 * Submits GAD-7 item scores and returns the scored + classified result
 * (deterministic rule severity, ML-predicted severity, and whether
 * they agree).
 *
 * Throws Gad7ApiError on validation failure (422), the model not being
 * loaded yet (503), or any network/unexpected error.
 */
export async function submitAssessment(
  payload: GAD7Submission
): Promise<AssessmentResult> {
  try {
    const { data } = await apiClient.post<AssessmentResult>(
      "/api/v1/assessment/submit",
      payload
    )
    return data
  } catch (err) {
    throw toApiError(err)
  }
}

export async function checkHealth(): Promise<HealthResponse> {
  try {
    const { data } = await apiClient.get<HealthResponse>("/api/v1/health")
    return data
  } catch (err) {
    throw toApiError(err)
  }
}

export default apiClient
