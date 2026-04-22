import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'BMI Calculator (Free, 2026) – Instant Body Mass Index Check',
  description: 'Calculate your BMI in seconds. Free 2026 Body Mass Index calculator with health categories, ideal weight range, and personalized recommendations. No signup needed.',
  keywords: 'bmi calculator, body mass index calculator, bmi chart, healthy weight calculator, am i overweight, bmi calculator for women, bmi calculator for men, ideal weight calculator, bmi formula, normal bmi range, calculate my bmi, bmi calculator kg, healthy bmi for adults, free bmi calculator online, bmi calculator 2026',
  metadataBase: new URL('https://bmi-calculator-free.vercel.app'),
  openGraph: {
    title: 'BMI Calculator (Free, 2026) – Instant Body Mass Index Check',
    description: 'Calculate your BMI in seconds. Free 2026 Body Mass Index calculator with health categories, ideal weight range, and personalized recommendations. No signup needed.',
    url: 'https://bmi-calculator-free.vercel.app',
    siteName: 'BMI Calculator',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BMI Calculator',
    description: 'Calculate your BMI in seconds. Free 2026 Body Mass Index calculator with health categories, ideal weight range, and personalized recommendations. No signup needed.',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large' as const,
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  icons: { icon: '/favicon.svg' },
  alternates: {
    canonical: 'https://bmi-calculator-free.vercel.app',
    languages: {
      'en': 'https://bmi-calculator-free.vercel.app',
      'x-default': 'https://bmi-calculator-free.vercel.app',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="hsjncRi9cl3tz3Otd6SJKurSt_V1bZ0AKO-bdWIGeHM" />
        <meta name="google-site-verification" content="ETO59LUETFhBHTx7GMun0GscvJgzLq2iGWdeAmh3e10" />
        <meta name="google-adsense-account" content="ca-pub-4361110443201092" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4361110443201092" crossOrigin="anonymous" strategy="afterInteractive" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3B82F6" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P04TH8XJJ9" strategy="lazyOnload" />
        <Script id="gtag-init" strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P04TH8XJJ9', {
                'anonymize_ip': true,
                'allow_google_signals': false
              });
            `,
          }}
        />
              {/* BreadcrumbList Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://bmi-calculator-free.vercel.app"}, {"@type": "ListItem", "position": 2, "name": "BMI Calculator", "item": "https://bmi-calculator-free.vercel.app"}]})
        }} />
        {/* Organization & WebSite Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebSite", "name": "BMI Calculator", "url": "https://bmi-calculator-free.vercel.app", "publisher": {"@type": "Organization", "name": "UtiliCalc Tools", "url": "https://utilicalc.vercel.app", "logo": {"@type": "ImageObject", "url": "https://bmi-calculator-free.vercel.app/favicon.svg"}}, "potentialAction": {"@type": "SearchAction", "target": "https://bmi-calculator-free.vercel.app/?q={search_term_string}", "query-input": "required name=search_term_string"}})
        }} />
        {/* Preconnect & DNS-Prefetch Hints */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        {/* Speakable Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "speakable": {"@type": "SpeakableSpecification", "cssSelector": ["h1", ".keyword-seo-section p"]}})
        }} />
</head>
      <body className="antialiased">
        <main>{children}</main>
        <footer className="border-t border-[#E5E8EB] py-6 text-center text-sm text-[#4E5968] bg-white/20 backdrop-blur-sm">
          
            <div className="flex flex-wrap justify-center gap-4 mb-3">
              <span className="text-xs text-[#4E5968] font-semibold uppercase tracking-wider">Related Free Tools:</span>
                <a href="https://gold-price-today-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Gold Price Calculator</a>
                <a href="https://take-home-pay-calculator-sandy.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Take-Home Pay Calculator</a>
                <a href="https://inflation-rate-calculator.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Inflation Rate Calculator</a>
                <a href="https://loan-payment-calculator-eosin.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Loan Payment Calculator</a>
                <a href="https://utilicalc.vercel.app" target="_blank" rel="noopener noreferrer" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">UtiliCalc All-in-One Tools</a>
            </div>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="/privacy-policy" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Privacy Policy</a>
            <a href="/terms" className="text-[#8B95A1] hover:text-[#191F28] transition-colors text-xs">Terms of Service</a>
          </div>
          &copy; 2026 BMI Calculator. All rights reserved.
        </footer>
      </body>
    </html>
  )
}
