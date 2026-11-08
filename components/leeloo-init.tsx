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

    // Auto-adjust iframe height and handle redirects from Leeloo
    const messageHandler = (e: MessageEvent) => {
      try {
        const data = e.data
        if (!data) return
        if (data.type === 'setHeight' && data.height) {
          const iframes = document.querySelectorAll<HTMLIFrameElement>('#leeloo_action_element iframe, iframe.leeloo-lgt-form')
          iframes.forEach((iframe) => {
            iframe.style.height = `${data.height}px`
          })
        } else if (data.type === 'redirect' && data.location) {
          window.open(data.location, data.target || '_self')
        }
      } catch (err) {
        console.error(err)
      }
    }

    window.addEventListener('message', messageHandler)

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

    return () => {
      window.removeEventListener('message', messageHandler)
    }
  }, [])

  return null
}
