import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support the Friends of the Brown Canyon Ranch. Donations are received through our parent 501(c)(3), the Coronado National Forest Heritage Society.',
  alternates: { canonical: '/donate' },
}

export default function DonatePage() {
  return (
    <article className="bg-paper">
      <header className="bcr-container pt-16 md:pt-24 pb-10 border-b border-rule">
        <p className="font-(family-name:--font-lato) text-[0.72rem] tracking-[0.22em] uppercase text-stone">
          Donate
        </p>
        <h1 className="mt-3 font-(family-name:--font-cantata-one) text-ink text-[2.2rem] md:text-[2.8rem] leading-[1.1]">
          Help preserve Brown Canyon Ranch
        </h1>
        <p className="mt-6 max-w-3xl text-[1.08rem] leading-[1.75] text-ink/80 font-(family-name:--font-faustina)">
          Your donation directly supports the Western Heritage Program, volunteer workdays, and
          ongoing preservation of the 1905 adobe ranch house.
        </p>
      </header>

      <section className="bcr-container py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7 bcr-prose">
          <h2 className="font-(family-name:--font-cantata-one) text-ink text-[1.5rem] md:text-[1.8rem]">
            Two ways to give
          </h2>
          <p>
            <strong>Online.</strong> The Friends of the Brown Canyon Ranch is a chapter of the{' '}
            <a
              href="https://coronadonationalforestheritagesociety.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
            >
              Coronado National Forest Heritage Society
            </a>
            , a 501(c)(3). Donate through the Heritage Society and note that your gift is for the
            Brown Canyon Ranch chapter.
          </p>
          <p>
            <strong>By mail.</strong> Send a check payable to{' '}
            <em>Coronado National Forest Heritage Society</em> with a note designating Brown Canyon
            Ranch:
          </p>
          <p>
            Friends of the Brown Canyon Ranch
            <br />
            P.O. Box 996
            <br />
            Hereford, AZ 85615
          </p>
          <p>
            Prefer to support the ranch through membership instead?{' '}
            <Link
              href="/join"
              className="text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
            >
              Join the Friends
            </Link>{' '}
            for as little as a free student membership.
          </p>
        </div>

        <aside className="md:col-span-5 bg-paper-deep border border-rule p-6 rounded-sm self-start">
          <h2 className="font-(family-name:--font-cantata-one) text-ink text-[1.3rem]">
            Give online
          </h2>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-ink/85 font-(family-name:--font-faustina)">
            Donations are processed by our parent 501(c)(3).
          </p>
          <a
            href="https://www.coronadonationalforestheritagesociety.org/donate"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-adobe text-paper px-5 py-3 hover:bg-adobe-deep transition-colors rounded-sm font-(family-name:--font-lato) text-[0.92rem]"
          >
            Donate at the Heritage Society
            <span aria-hidden="true">→</span>
          </a>
        </aside>
      </section>
    </article>
  )
}
