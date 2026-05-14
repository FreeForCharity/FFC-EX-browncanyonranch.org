import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for the Friends of the Brown Canyon Ranch website.',
  alternates: { canonical: '/terms-of-service' },
}

export default function TermsOfService() {
  return (
    <article className="bg-paper">
      <header className="bcr-container pt-16 md:pt-24 pb-10 border-b border-rule">
        <p className="font-(family-name:--font-lato) text-[0.72rem] tracking-[0.22em] uppercase text-stone">
          Policy
        </p>
        <h1 className="mt-3 font-(family-name:--font-cantata-one) text-ink text-[2.2rem] md:text-[2.6rem] leading-[1.1]">
          Terms of Service
        </h1>
      </header>
      <section className="bcr-container py-16 bcr-prose max-w-3xl">
        <p>
          The browncanyonranch.org website is provided as an informational resource by the Friends
          of the Brown Canyon Ranch — a volunteer chapter of the Coronado National Forest Heritage
          Society, a 501(c)(3) nonprofit.
        </p>
        <p>
          Content is offered &quot;as is.&quot; We make a good-faith effort to keep facts about the
          ranch, programs, and visiting accurate, but we cannot guarantee that all information is
          current or complete. Please confirm time-sensitive details (program schedules, road
          conditions, hours) by{' '}
          <a
            href="/contact"
            className="text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
          >
            contacting us
          </a>{' '}
          before you travel.
        </p>
        <p>
          Photographs of the ranch are the property of the Friends of the Brown Canyon Ranch and the
          contributing photographers. Permission is required prior to any reproduction or commercial
          use.
        </p>
        <p>
          External links to partner organizations are provided for convenience; we are not
          responsible for the content of external sites.
        </p>
      </section>
    </article>
  )
}
