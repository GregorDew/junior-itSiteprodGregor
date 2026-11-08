import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import LeelooInit from '@/components/leeloo-init'

export const metadata: Metadata = {
  title: 'Junior IT — програмування та AI для дітей',
  description: 'Пробне заняття з програмування та AI для дітей 8–15 років. Створюємо власні цифрові проєкти.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <head>
        {/* leeloo init code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.LEELOO = function(){
                window.LEELOO_INIT = { id: '664225963b6beeea0d7bf890' };
                var js = document.createElement('script');
                js.src = 'https://app.leeloo.ai/init.js';
                js.async = true;
                document.getElementsByTagName('head')[0].appendChild(js);
              }; LEELOO();
              window.LEELOO_LEADGENTOOLS = (window.LEELOO_LEADGENTOOLS || []).concat('giethu');
            `,
          }}
        />
        {/* end leeloo init code */}
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <LeelooInit />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
