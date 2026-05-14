import React from 'react'
import Link from 'next/link'

const DonateCTA: React.FC = () => {
  return (
    <section id="support" aria-labelledby="support-heading" className="bg-paper">
      <div className="bcr-container py-20 md:py-24 text-center">
        <p className="font-(family-name:--font-lato) text-[0.72rem] tracking-[0.22em] uppercase text-stone">
          Support the ranch
        </p>
        <h2
          id="support-heading"
          className="mt-3 font-(family-name:--font-cantata-one) text-ink text-[1.8rem] md:text-[2.4rem] leading-[1.15] max-w-3xl mx-auto"
        >
          Join us — or send a gift — and help keep Brown Canyon Ranch alive for the next generation.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-[1.05rem] leading-[1.75] text-ink/80 font-(family-name:--font-faustina)">
          Membership underwrites educational programs, volunteer days, and ongoing preservation
          work. Donations are received through our parent 501(c)(3), the Coronado National Forest
          Heritage Society.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4 font-(family-name:--font-lato) text-[0.92rem]">
          <Link
            href="/join"
            className="inline-flex items-center gap-2 bg-adobe text-paper px-5 py-3 hover:bg-adobe-deep transition-colors rounded-sm"
          >
            Become a member
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
        </div>
      </div>
    </section>
  )
}

export default DonateCTA
