import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Visitor Info',
  description:
    'Visit Brown Canyon Ranch in the Huachuca Mountains foothills of Southern Arizona. Directions, history, and what you will see at this 1905 adobe ranch.',
  alternates: { canonical: '/visitor-info' },
}

export default function VisitorInfoPage() {
  return (
    <article className="bg-paper">
      <header className="bcr-container pt-16 md:pt-24 pb-10 border-b border-rule">
        <p className="font-(family-name:--font-lato) text-[0.72rem] tracking-[0.22em] uppercase text-stone">
          Visitor information
        </p>
        <h1 className="mt-3 font-(family-name:--font-cantata-one) text-ink text-[2.2rem] md:text-[2.8rem] leading-[1.1]">
          Brown Canyon Ranch
        </h1>
        <p className="mt-6 max-w-3xl text-[1.08rem] leading-[1.75] text-ink/80 font-(family-name:--font-faustina)">
          A historic adobe homestead in the foothills of the Huachuca Mountains, near Sierra Vista.
          Visitors get a sense of what the area was like in the early 1900s.
        </p>
      </header>

      <section aria-labelledby="directions-heading" className="bg-paper-deep border-b border-rule">
        <div className="bcr-container py-12 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2
              id="directions-heading"
              className="font-(family-name:--font-cantata-one) text-ink text-[1.5rem] md:text-[1.8rem]"
            >
              How to get there
            </h2>
          </div>
          <div className="md:col-span-7 bcr-prose">
            <p>
              From Sierra Vista, take Highway 92 to Ramsey Canyon Road and turn west. At a little
              over 2 miles, watch for the Brown Canyon Ranch sign on your right. Follow the
              maintained road approximately one mile to the parking area.
            </p>
            <p>
              The ranch is part of the Coronado National Forest. Please respect posted signs,
              wildlife, and the historic structures during your visit.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="house-heading" className="bcr-container py-16">
        <h2
          id="house-heading"
          className="font-(family-name:--font-cantata-one) text-ink text-[1.6rem] md:text-[1.9rem]"
        >
          The historic ranch house
        </h2>
        <div className="bcr-prose mt-6 max-w-3xl">
          <p>
            The prominent adobe dwelling at the canyon mouth dates to approximately 1905–1907 and
            was built by James Haverty. It was the first home in the East Huachucas area to have
            running water — including a kitchen sink, bathtub, basin, and toilet.
          </p>
        </div>
      </section>

      <section aria-labelledby="owners-heading" className="bg-paper-deep border-y border-rule">
        <div className="bcr-container py-16">
          <h2
            id="owners-heading"
            className="font-(family-name:--font-cantata-one) text-ink text-[1.6rem] md:text-[1.9rem]"
          >
            Successive owners
          </h2>
          <ul className="mt-6 divide-y divide-rule border-y border-rule max-w-3xl">
            {[
              ['John Thomas Brown', '1879 – 1880s'],
              ['Parker and Frierson families', 'Early 1900s'],
              ['James Haverty (builder of the adobe)', 'circa 1905 – 1907'],
              ['William Carmichael', '1920s'],
              ['Roy and Stella Rambo', '1946'],
              ['Barchas family', '1957 onward'],
              ['Coronado National Forest (land exchange led by Sarah Barchas)', '1998'],
            ].map(([name, range]) => (
              <li
                key={name}
                className="flex flex-wrap items-baseline justify-between gap-3 py-4 font-(family-name:--font-faustina)"
              >
                <span className="text-ink text-[1.02rem]">{name}</span>
                <span className="text-stone text-[0.95rem] font-(family-name:--font-lato) tracking-wide">
                  {range}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="community-heading" className="bcr-container py-16">
        <h2
          id="community-heading"
          className="font-(family-name:--font-cantata-one) text-ink text-[1.6rem] md:text-[1.9rem]"
        >
          A community story
        </h2>
        <div className="bcr-prose mt-6 max-w-3xl">
          <p>
            During the 1920s through the 1940s, roughly 150 woodcutters of Mexican descent lived in
            the surrounding canyons, supplying wood to nearby Fort Huachuca. The Garcia, Laguna, and
            Valenzuela families resided in Brown Canyon, and Mary Molina ran a laundry from the
            ranch house — a reminder that the ranch was not only a homestead but the center of a
            working community.
          </p>
        </div>
      </section>
    </article>
  )
}
