import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for the Friends of the Brown Canyon Ranch website.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicy() {
  return (
    <article className="bg-paper">
      <header className="bcr-container pt-16 md:pt-24 pb-10 border-b border-rule">
        <p className="font-(family-name:--font-lato) text-[0.72rem] tracking-[0.22em] uppercase text-stone">
          Policy
        </p>
        <h1 className="mt-3 font-(family-name:--font-cantata-one) text-ink text-[2.2rem] md:text-[2.6rem] leading-[1.1]">
          Privacy Policy
        </h1>
      </header>
      <section className="mx-auto px-4 py-16 bcr-prose max-w-3xl">
        <p>
          The Friends of the Brown Canyon Ranch respects your privacy. This website is a simple
          static informational site. We do not collect personal data through the site, do not set
          tracking cookies, and do not share any visitor information with third parties.
        </p>
        <p>
          The site is hosted as a charitable contribution by{' '}
          <a
            href="https://freeforcharity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
          >
            Free For Charity
          </a>
          . Standard web server logs at the hosting provider may briefly record IP addresses and
          requested URLs for operational and security purposes; these logs are not used to identify
          visitors.
        </p>
        <p>
          If you contact us by mail or phone, we use that information only to respond to your
          inquiry. We do not sell, rent, or share contact information.
        </p>
        <p>
          Questions about this policy? Please{' '}
          <a
            href="/contact"
            className="text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
          >
            contact us
          </a>
          .
        </p>
      </section>
    </article>
  )
}
