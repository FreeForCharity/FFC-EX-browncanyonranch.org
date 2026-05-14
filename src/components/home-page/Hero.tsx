import React from 'react'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative bg-paper border-b border-rule overflow-hidden"
    >
      <div className="bcr-container py-20 md:py-28 lg:py-32 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-8">
          <p className="font-(family-name:--font-lato) text-[0.78rem] tracking-[0.22em] uppercase text-stone mb-6">
            Friends of the Brown Canyon Ranch · Hereford, Arizona
          </p>
          <h1
            id="hero-heading"
            className="font-(family-name:--font-cantata-one) text-ink text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.4rem] leading-[1.12] tracking-[-0.005em]"
          >
            Unlock history. Preserve the future.
          </h1>
          <p className="mt-7 max-w-[60ch] text-[1.1rem] md:text-[1.18rem] leading-[1.75] text-ink/85 font-(family-name:--font-faustina)">
            A volunteer chapter dedicated to the preservation and interpretation of{' '}
            <strong className="font-semibold">Brown Canyon Ranch</strong>, a historic adobe
            homestead in the pristine foothills of the Huachuca Mountains in Southern Arizona.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 font-(family-name:--font-lato) text-[0.92rem]">
            <Link
              href="/visitor-info"
              className="inline-flex items-center gap-2 bg-adobe text-paper px-5 py-3 hover:bg-adobe-deep transition-colors rounded-sm"
            >
              Visit Today
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href="https://www.coronadonationalforestheritagesociety.org/donate"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink/30 text-ink px-5 py-3 hover:border-adobe hover:text-adobe-deep transition-colors rounded-sm"
            >
              Donate
            </a>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-ink/70 hover:text-adobe-deep transition-colors underline-offset-4 hover:underline"
            >
              See our programs
            </Link>
          </div>
        </div>

        <aside
          aria-label="Quick facts"
          className="md:col-span-4 md:pl-8 md:border-l md:border-rule md:pt-3"
        >
          <dl className="space-y-6 font-(family-name:--font-faustina) text-[0.98rem]">
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-stone font-(family-name:--font-lato)">
                Location
              </dt>
              <dd className="mt-1 text-ink">
                Foothills of the Huachuca Mountains
                <br />
                Hereford, AZ
              </dd>
            </div>
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-stone font-(family-name:--font-lato)">
                Mailing Address
              </dt>
              <dd className="mt-1 text-ink">
                P.O. Box 996
                <br />
                Hereford, AZ 85615
              </dd>
            </div>
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-stone font-(family-name:--font-lato)">
                Telephone
              </dt>
              <dd className="mt-1 text-ink">
                <a href="tel:+15203780311" className="underline-offset-4 hover:text-adobe-deep">
                  520-378-0311
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}

export default Hero
