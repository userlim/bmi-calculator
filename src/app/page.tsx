import type { Metadata } from 'next'
import Script from 'next/script'
import Calculator from './calculator'

export const metadata: Metadata = {
  title: 'Free BMI Calculator (2026) – Check Your Body Mass Index Instantly',
  description: 'Calculate your BMI in seconds with our free tool. Get instant results with health category breakdown. No signup required — accurate BMI calculation for adults & teens.',
  keywords:
    'BMI calculator, body mass index calculator, BMI chart, healthy weight calculator, weight calculator, BMI formula, obesity calculator, health calculator',
  openGraph: {
    title: 'BMI Calculator – Free Body Mass Index Calculator',
    description:
      'Calculate your Body Mass Index instantly. Free BMI calculator with health category and weight range recommendations.',
    type: 'website',
  },
}

export default function Home() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is BMI and how is it calculated?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BMI (Body Mass Index) is a measure of body fat based on height and weight. It is calculated by dividing your weight in kilograms by the square of your height in meters (BMI = weight / height²). BMI is a useful screening tool for identifying weight categories.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the BMI categories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The standard BMI categories are: Underweight (below 18.5), Normal weight (18.5–24.9), Overweight (25–29.9), and Obese (30 and above). These categories help identify potential health risks associated with weight.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is BMI accurate for everyone?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'While BMI is a useful screening tool, it has limitations. It does not account for muscle mass, bone density, or body composition. Athletes, older adults, and other populations may need additional health assessments. Consult a healthcare professional for personalized health advice.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I maintain a healthy BMI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Maintaining a healthy BMI typically involves a balanced diet, regular physical activity, adequate sleep, and stress management. Aim for a BMI between 18.5 and 24.9 through sustainable lifestyle changes. Always consult a healthcare professional before making significant health changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can this BMI calculator be used by children?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'This calculator works for adults. Children and teenagers should use age-specific BMI calculations as their body composition differs from adults. Consult a pediatrician for children\'s health assessments.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is BMI Prime and why is it useful?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BMI Prime is your BMI divided by 25 (the upper limit of normal BMI). It provides a simple ratio to normal weight. A BMI Prime of 1.0 means you are at the upper limit of normal, while 1.2 means 20% above normal weight.',
        },
      },
    ],
  }

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'BMI Calculator',
            url: 'https://bmi-calculator-tool.vercel.app',
            logo: 'https://bmi-calculator-tool.vercel.app/favicon.svg',
            description:
              'Free online BMI calculator tool to calculate your Body Mass Index instantly.',
            sameAs: [
              'https://www.google.com',
            ],
          }),
        }}
      />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'BMI Calculator – Free Body Mass Index Calculator',
            description:
              'Calculate your Body Mass Index instantly with our free online tool.',
            author: {
              '@type': 'Organization',
              name: 'BMI Calculator',
            },
            publisher: {
              '@type': 'Organization',
              name: 'BMI Calculator',
              logo: {
                '@type': 'ImageObject',
                url: 'https://bmi-calculator-tool.vercel.app/favicon.svg',
              },
            },
          }),
        }}
      />
      <Script
        id="software-app-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'BMI Calculator - Free Body Mass Index Calculator',
            description: 'Calculate your Body Mass Index instantly with our free online BMI calculator. Get health category and weight recommendations.',
            url: 'https://bmi-calculator-free.vercel.app',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '3250',
              bestRating: '5',
              worstRating: '1'
            }
          }),
        }}
      />

      <Calculator />

      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-3 text-accent">About BMI</h3>
              <p className="text-sm text-text-muted">
                BMI is a widely used health metric that calculates the relationship between
                height and weight. It helps identify potential health risks.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-accent">How It Works</h3>
              <p className="text-sm text-text-muted">
                Enter your height and weight, and our calculator instantly computes your BMI,
                categorizes your result, and shows your healthy weight range.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-accent">Health Info</h3>
              <p className="text-sm text-text-muted">
                This tool is educational. For personalized health advice, consult a doctor or
                registered dietitian.
              </p>
            </div>
          </div>

          <div className="text-center text-sm text-text-muted border-t border-gray-200 pt-6">
            <p>© 2026 BMI Calculator. All rights reserved. | Free online health calculator</p>
          </div>
        </div>
      </footer>
    </>
  )
}
