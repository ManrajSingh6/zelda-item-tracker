import { useEffect, useState } from 'react'

interface UseDebounceProps {
  readonly value: string
  readonly delayMs?: number
}

interface UseDebounceReturn {
  readonly debouncedValue: string
}

const DEFAULT_DEBOUNCE_DELAY_MS = 500

export function useDebounce({
  value,
  delayMs = DEFAULT_DEBOUNCE_DELAY_MS
}: UseDebounceProps): UseDebounceReturn {
  const [debouncedValue, setDebouncedValue] = useState<string>(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delayMs)

    return () => clearTimeout(timer)
  }, [value, delayMs])

  return { debouncedValue }
}
