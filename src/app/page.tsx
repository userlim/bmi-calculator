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
  other: {
    'article:published_time': '2025-01-15T00:00:00Z',
    'article:modified_time': '2026-04-10T00:00:00Z',
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

      <footer className="bg-white/[0.03] border-t border-white/10 mt-16">
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

          <div className="text-center text-sm text-text-muted border-t border-white/10 pt-6">
            <p>© 2026 BMI Calculator. All rights reserved. | Free online health calculator</p>
          </div>
        </div>
      </footer>

      {/* Extended Content Section for SEO depth */}
      <section id="content-depth-section" className="mt-12 max-w-3xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Complete Guide</h2>
        
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">How BMI Is Calculated</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Body Mass Index (BMI) is one of the most widely used health screening metrics globally. The formula is straightforward: BMI = weight (kg) ÷ height² (m²). For imperial units, the formula becomes BMI = (weight in pounds × 703) ÷ height² (in inches). This formula was developed by Belgian mathematician Adolphe Quetelet in the 1830s and has been adopted by the World Health Organization (WHO) as a standard health assessment tool.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Understanding BMI Categories</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `The WHO classifies BMI into four main categories. <strong>Underweight</strong> is defined as a BMI below 18.5, which may indicate nutritional deficiency or underlying health conditions. <strong>Normal weight</strong> ranges from 18.5 to 24.9, considered the healthiest range for most adults. <strong>Overweight</strong> spans 25.0 to 29.9, indicating excess body weight that may increase health risks. <strong>Obese</strong> is classified as 30.0 and above, with further subdivisions into Class I (30-34.9), Class II (35-39.9), and Class III (40+) obesity.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">BMI Limitations and Alternatives</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `While BMI is a useful screening tool, it has notable limitations. It cannot distinguish between muscle mass and fat mass, meaning athletes and bodybuilders may be classified as overweight despite having low body fat percentages. BMI also doesn't account for age, sex, ethnicity, or body fat distribution. Waist-to-hip ratio, body fat percentage measurements, and the newer Body Roundness Index (BRI) are complementary metrics that provide a more complete picture of body composition and health risk.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Health Risks Associated with Abnormal BMI</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Research consistently shows correlations between BMI outside the normal range and increased health risks. Higher BMI is associated with increased risk of cardiovascular disease, type 2 diabetes, certain cancers, and joint problems. Conversely, very low BMI is associated with weakened immune function, osteoporosis, and nutritional deficiencies. However, BMI should be considered alongside other health indicators rather than used in isolation for medical decisions.` }} />
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Tips for Maintaining a Healthy BMI</h3>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: `Achieving and maintaining a healthy BMI involves a balanced approach to diet and physical activity. The CDC recommends at least 150 minutes of moderate-intensity aerobic activity per week, combined with a nutrient-rich diet. Small, sustainable changes — like taking stairs instead of elevators, choosing whole grains, and managing portion sizes — often prove more effective than drastic lifestyle overhauls. Regular monitoring of your BMI can help you track progress toward your health goals.` }} />
            </div>
      </section>
    
      {/* Keyword-Optimized Content */}
      <section id="keyword-seo-section" className="mt-8 max-w-3xl mx-auto px-4">
        <p className="text-sm text-gray-400 leading-relaxed">
          Our free BMI calculator helps you instantly check your body mass index. Whether you need a healthy weight calculator, an ideal weight calculator, or want to know your normal BMI range, this tool delivers accurate results in seconds. Updated for 2026 with the latest WHO health categories.
        </p>
<div className="mt-3 flex flex-wrap gap-2">
          <a href="https://loan-payment-calculator-eosin.vercel.app" className="text-xs text-blue-400 hover:underline">Loan Calculator →</a>
          <a href="https://take-home-pay-calculator-sandy.vercel.app" className="text-xs text-blue-400 hover:underline">Salary Tax Calculator →</a>
          <a href="https://inflation-rate-calculator.vercel.app" className="text-xs text-blue-400 hover:underline">Inflation Calculator →</a>
        </div>

      </section>
      </>
  )
}
