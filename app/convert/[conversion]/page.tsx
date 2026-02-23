import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ImageConverter } from '@/components/image-converter';
import {
  getConversion,
  getRelatedConversions,
  getAllConversionSlugs,
} from '@/lib/conversions';

// ---------------------------------------------------------------------------
// Static generation – every slug in conversions.ts becomes a static page
// ---------------------------------------------------------------------------
export function generateStaticParams() {
  return getAllConversionSlugs().map((slug) => ({ conversion: slug }));
}

// ---------------------------------------------------------------------------
// Dynamic metadata – unique title / description / OG per conversion
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: { conversion: string };
}): Promise<Metadata> {
  const data = getConversion(params.conversion);
  if (!data) return {};

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: data.keywords,
    alternates: { canonical: `/convert/${data.slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `/convert/${data.slug}`,
      images: ['/og-image.png'],
      type: 'website',
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default function ConversionPage({
  params,
}: {
  params: { conversion: string };
}) {
  const data = getConversion(params.conversion);
  if (!data) notFound();

  const related = getRelatedConversions(data.slug);

  // JSON-LD structured data -------------------------------------------------
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `${data.sourceLabel} to ${data.targetLabel} Converter`,
    description: data.metaDescription,
    url: `https://www.cleanconvert.online/convert/${data.slug}`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web Browser',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    featureList: data.featureList,
  };

  const faqSchema =
    data.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }
      : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.cleanconvert.online',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Convert',
        item: 'https://www.cleanconvert.online/convert',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${data.sourceLabel} to ${data.targetLabel}`,
        item: `https://www.cleanconvert.online/convert/${data.slug}`,
      },
    ],
  };

  return (
    <div className="py-8">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs (visible) */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/convert" className="hover:text-foreground transition-colors">
                Convert
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-foreground font-medium">
              {data.sourceLabel} to {data.targetLabel}
            </li>
          </ol>
        </nav>

        {/* Hero */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{data.h1}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Converter widget */}
        <ImageConverter
          defaultFormat={data.targetFormat}
          defaultSourceHint={data.sourceFormat}
        />

        {/* SEO content */}
        <article className="mt-12 prose prose-lg max-w-4xl mx-auto dark:prose-invert">
          {/* Why section */}
          <h2>{data.whyTitle}</h2>
          <p>{data.whyIntro}</p>
          <ul>
            {data.benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          {/* How-to section */}
          <h2>How to Convert {data.sourceLabel} to {data.targetLabel}</h2>
          <ol>
            {data.howToSteps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>

          {/* Comparison */}
          <h2>{data.comparisonTitle}</h2>
          <p>
            <strong>{data.sourceLabel}:</strong> {data.sourceDescription}
          </p>
          <p>
            <strong>{data.targetLabel}:</strong> {data.targetDescription}
          </p>

          {/* FAQ */}
          {data.faqs.length > 0 && (
            <>
              <h2>Frequently Asked Questions</h2>
              {data.faqs.map((faq, i) => (
                <div key={i}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </>
          )}

          {/* Related conversions */}
          {related.length > 0 && (
            <>
              <h2>Related Image Conversions</h2>
              <ul>
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/convert/${r.slug}`}>
                      Convert {r.sourceLabel} to {r.targetLabel}
                    </Link>{' '}
                    — {r.subtitle.split('.')[0]}
                  </li>
                ))}
                <li>
                  <Link href="/convert">All Image Conversions</Link> — Browse
                  all supported formats
                </li>
              </ul>
            </>
          )}
        </article>
      </div>
    </div>
  );
}
