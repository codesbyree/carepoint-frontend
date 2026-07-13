import { useState, useCallback } from "react"
import {
  submitAssessment,
  Gad7ApiError,
  type GAD7Submission,
  type AssessmentResult,
} from "../api/gad"

interface UseAssessmentState {
  data: AssessmentResult | null
  loading: boolean
  error: string | null
}

export function useAssessment() {
  const [state, setState] = useState<UseAssessmentState>({
    data: null,
    loading: false,
    error: null,
  })

  const submit = useCallback(async (payload: GAD7Submission) => {
    setState({ data: null, loading: true, error: null })
    try {
      const result = await submitAssessment(payload)
      setState({ data: result, loading: false, error: null })
      return result
    } catch (err) {
      const message =
        err instanceof Gad7ApiError ? err.message : "Something went wrong"
      setState({ data: null, loading: false, error: message })
      return null
    }
  }, [])

  const reset = useCallback(() => {
    setState({ data: null, loading: false, error: null })
  }, [])

  return { ...state, submit, reset }
}
