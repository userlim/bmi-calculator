import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BMI Calculator ??Free Body Mass Index Calculator',
  description:
    'Free online BMI calculator. Calculate your Body Mass Index instantly. Get your BMI value, category, and healthy weight range with our easy-to-use tool.',
  keywords:
    'BMI calculator, body mass index, BMI chart, healthy weight calculator, weight calculator, BMI formula, body weight',
  metadataBase: new URL('https://bmi-calculator-tool.vercel.app'),
  openGraph: {
    title: 'BMI Calculator ??Free Body Mass Index Calculator',
    description:
      'Calculate your Body Mass Index (BMI) instantly. Get your health category and healthy weight range.',
    url: 'https://bmi-calculator-tool.vercel.app',
    siteName: 'BMI Calculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMI Calculator ??Free Body Mass Index Calculator',
    description:
      'Calculate your Body Mass Index (BMI) instantly with our free online tool.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: 'https://bmi-calculator-tool.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="hsjncRi9cl3tz3Otd6SJKurSt_V1bZ0AKO-bdWIGeHM" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7c5cbf" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P08T3SZDQH"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P08T3SZDQH', {
                'anonymize_ip': true,
                'allow_google_signals': false
              });
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}
