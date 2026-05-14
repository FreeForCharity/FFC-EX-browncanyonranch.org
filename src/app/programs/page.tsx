import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programs',
  description:
    'The Western Heritage Program brings county-wide school children to Brown Canyon Ranch for hands-on local history, science, ranch skills, and conservation activities.',
  alternates: { canonical: '/programs' },
}

interface Area {
  title: string
  body: string
}

const areas: Area[] = [
  {
    title: 'Science & Nature',
    body: 'Natural observation at the ranch pond and microscopic examination of what we find. Quiet attention to the living landscape of the Huachucas.',
  },
  {
    title: 'History & Historic Folk Arts',
    body: 'Local history, tours of the historic adobe house, demonstrations of adobe construction, and traditional crafts including quilting and weaving.',
  },
  {
    title: 'Ranch Skills and Traditions',
    body: 'Roping, branding, cowboy poetry, and creative writing rooted in the everyday vocabulary of working cattle ranches.',
  },
  {
    title: 'Conservation of Resources',
    body: 'Fire safety education in collaboration with the Forest Service, and the long story of water conservation in this corner of Arizona.',
  },
]

export default function ProgramsPage() {
  return (
    <article className="bg-paper">
      <header className="bcr-container pt-16 md:pt-24 pb-10 border-b border-rule">
        <p className="font-(family-name:--font-lato) text-[0.72rem] tracking-[0.22em] uppercase text-stone">
          Programs
        </p>
        <h1 className="mt-3 font-(family-name:--font-cantata-one) text-ink text-[2.2rem] md:text-[2.8rem] leading-[1.1]">
          The Western Heritage Program
        </h1>
        <p className="mt-6 max-w-3xl text-[1.08rem] leading-[1.75] text-ink/80 font-(family-name:--font-faustina)">
          A time for school children from around the area to come to the ranch, learn local history,
          and take part in hands-on activities led by program volunteers.
        </p>
      </header>

      <section aria-labelledby="schedule-heading" className="bg-paper-deep border-b border-rule">
        <div className="bcr-container py-12 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2
              id="schedule-heading"
              className="font-(family-name:--font-cantata-one) text-ink text-[1.5rem] md:text-[1.8rem]"
            >
              Schedule & audience
            </h2>
          </div>
          <div className="md:col-span-7 bcr-prose">
            <p>
              Sessions are held from <strong>9:00 AM to noon on Tuesdays and Wednesdays</strong>{' '}
              through October 31st each fall. The detailed schedule is finalized by the end of
              August.
            </p>
            <p>
              The program is offered to county-wide school children and visiting classes. Twenty-
              minute mentor sessions are designed to motivate curiosity, build knowledge, and invite
              participation.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="areas-heading" className="bcr-container py-16">
        <h2
          id="areas-heading"
          className="font-(family-name:--font-cantata-one) text-ink text-[1.6rem] md:text-[1.9rem]"
        >
          Four areas of learning
        </h2>
        <ul className="mt-8 grid sm:grid-cols-2 gap-6">
          {areas.map((a) => (
            <li
              key={a.title}
              className="border border-rule bg-paper-deep/40 p-6 rounded-sm hover:border-adobe transition-colors"
            >
              <h3 className="font-(family-name:--font-cantata-one) text-ink text-lg">{a.title}</h3>
              <p className="mt-3 text-[0.98rem] leading-[1.7] text-ink/80 font-(family-name:--font-faustina)">
                {a.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="volunteer-heading" className="bg-paper-deep border-t border-rule">
        <div className="bcr-container py-12 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2
              id="volunteer-heading"
              className="font-(family-name:--font-cantata-one) text-ink text-[1.5rem] md:text-[1.8rem]"
            >
              Volunteer mentors needed
            </h2>
          </div>
          <div className="md:col-span-7 bcr-prose">
            <p>
              The program runs on a small but generous bench of volunteer mentors. If you can lead a
              20-minute hands-on session — branding, weaving, telling a piece of local history,
              showing the children the windmill — we&apos;d like to hear from you.{' '}
              <a
                href="/contact"
                className="text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
              >
                Contact us
              </a>{' '}
              to volunteer.
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}
