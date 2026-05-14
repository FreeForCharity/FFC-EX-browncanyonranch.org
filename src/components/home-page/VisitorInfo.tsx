import React from 'react'
import Link from 'next/link'

const VisitorInfo: React.FC = () => {
  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="bg-paper-deep border-y border-rule"
    >
      <div className="bcr-container py-20 md:py-24 grid md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-7">
          <p className="font-(family-name:--font-lato) text-[0.72rem] tracking-[0.22em] uppercase text-stone">
            Plan your visit
          </p>
          <h2
            id="visit-heading"
            className="mt-3 font-(family-name:--font-cantata-one) text-ink text-[1.8rem] md:text-[2.1rem] leading-[1.15]"
          >
            A day at the ranch — open skies and a 1905 adobe.
          </h2>
          <div className="bcr-prose mt-6">
            <p>
              Visitors get a sense of what the East Huachucas were like in the early 1900s. The
              ranch house, the windmill, and the surrounding canyon together tell a story of cattle,
              woodcutters, and the families — including the Browns, Friersons, Rambos, and Barchases
              — who lived here.
            </p>
            <p>
              <Link
                href="/visitor-info"
                className="text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
              >
                Hours, history, and directions →
              </Link>
            </p>
          </div>
        </div>
        <aside className="md:col-span-5 bg-paper border border-rule p-6 rounded-sm">
          <h3 className="font-(family-name:--font-cantata-one) text-ink text-lg">Directions</h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80 font-(family-name:--font-faustina)">
            Take Highway 92 to Ramsey Canyon Road and turn west. At a little over 2 miles, look for
            the Brown Canyon Ranch sign on your right. Follow the maintained road about one mile to
            the parking area.
          </p>
        </aside>
      </div>
    </section>
  )
}

export default VisitorInfo
