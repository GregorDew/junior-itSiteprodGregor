'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    LEELOO?: () => void
    LEELOO_INIT?: { id: string }
    LEELOO_LEADGENTOOLS?: string[]
  }
}

export default function LeelooInit() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    if (!window.LEELOO) {
      window.LEELOO = function () {
        window.LEELOO_INIT = { id: '664225963b6beeea0d7bf890' }
        const script = document.createElement('script')
        script.src = 'https://app.leeloo.ai/init.js'
        script.async = true
        document.head.appendChild(script)
      }
    }

    window.LEELOO_LEADGENTOOLS = (window.LEELOO_LEADGENTOOLS || []).concat('giethu')
    if (typeof window.LEELOO === 'function') {
      window.LEELOO()
    }
  }, [])

  return null
}
