import React from 'react'
import Link from 'next/link'

interface ProgramArea {
  title: string
  blurb: string
}

const areas: ProgramArea[] = [
  {
    title: 'Science & Nature',
    blurb: 'Observation at the ranch pond, microscopes, and quiet attention to a living landscape.',
  },
  {
    title: 'History & Folk Arts',
    blurb: 'Tours of the adobe house, local history, traditional crafts like quilting and weaving.',
  },
  {
    title: 'Ranch Skills',
    blurb: 'Roping, branding, cowboy poetry, and creative writing about the West.',
  },
  {
    title: 'Conservation',
    blurb: 'Fire safety with the Forest Service and the history of water in the Huachucas.',
  },
]

const Programs: React.FC = () => {
  return (
    <section id="programs" aria-labelledby="programs-heading" className="bg-paper">
      <div className="bcr-container py-20 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <p className="font-(family-name:--font-lato) text-[0.72rem] tracking-[0.22em] uppercase text-stone">
              Programs
            </p>
            <h2
              id="programs-heading"
              className="mt-3 font-(family-name:--font-cantata-one) text-ink text-[1.8rem] md:text-[2.1rem] leading-[1.15]"
            >
              The Western Heritage Program
            </h2>
          </div>
          <div className="md:col-span-7 bcr-prose">
            <p>
              Each fall, school children from across the county come to the ranch on Tuesday and
              Wednesday mornings to learn local history and join hands-on activities led by
              volunteer mentors. Twenty-minute mentor sessions spark curiosity and connect
              classrooms with the land.
            </p>
            <p>
              <Link
                href="/programs"
                className="text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
              >
                Read the full program description →
              </Link>
            </p>
          </div>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <li
              key={area.title}
              className="border border-rule bg-paper-deep/40 p-6 rounded-sm hover:border-adobe transition-colors"
            >
              <h3 className="font-(family-name:--font-cantata-one) text-ink text-lg">
                {area.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/80 font-(family-name:--font-faustina)">
                {area.blurb}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Programs
