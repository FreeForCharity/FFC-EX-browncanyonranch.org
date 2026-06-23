import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join',
  description:
    'Become a member of the Friends of the Brown Canyon Ranch. Membership supports the preservation and interpretation of a historic adobe ranch in the Huachuca Mountains.',
  alternates: { canonical: '/join' },
}

interface Tier {
  name: string
  price: string
}

const tiers: Tier[] = [
  { name: 'Student', price: 'Free' },
  { name: 'Individual', price: '$10' },
  { name: 'Family', price: '$15' },
  { name: 'Contributing', price: '$30' },
  { name: 'Supporting', price: '$50' },
]

const benefits = [
  'Participate in the preservation and interpretation of this unique historic treasure',
  'Sponsor educational programs for area children',
  'Receive the FBCR newsletter',
  'Keep up with FBCR events and volunteer opportunities',
  'Social engagement with fellow members',
]

export default function JoinPage() {
  return (
    <article className="bg-paper">
      <header className="bcr-container pt-16 md:pt-24 pb-10 border-b border-rule">
        <p className="font-(family-name:--font-lato) text-[0.72rem] tracking-[0.22em] uppercase text-stone">
          Membership
        </p>
        <h1 className="mt-3 font-(family-name:--font-cantata-one) text-ink text-[2.2rem] md:text-[2.8rem] leading-[1.1]">
          Join the Friends of the Brown Canyon Ranch
        </h1>
        <p className="mt-6 max-w-3xl text-[1.08rem] leading-[1.75] text-ink/80 font-(family-name:--font-faustina)">
          The Friends of the Brown Canyon Ranch is a chapter of the{' '}
          <a
            href="https://coronadonationalforestheritagesociety.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
          >
            Coronado National Forest Heritage Society
          </a>{' '}
          — a 501(c)(3) organization dedicated to the preservation and interpretation of important
          prehistoric and historic sites within the Coronado National Forest.
        </p>
      </header>

      <section
        aria-labelledby="tiers-heading"
        className="bcr-container py-16 grid md:grid-cols-12 gap-10"
      >
        <div className="md:col-span-5">
          <h2
            id="tiers-heading"
            className="font-(family-name:--font-cantata-one) text-ink text-[1.6rem] md:text-[1.9rem]"
          >
            Annual membership levels
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.75] text-ink/80 font-(family-name:--font-faustina)">
            Every level — including the free student membership — helps sponsor educational programs
            and preserve the ranch.
          </p>
        </div>
        <div className="md:col-span-7">
          <ul className="divide-y divide-rule border-y border-rule">
            {tiers.map((tier) => (
              <li
                key={tier.name}
                className="flex items-baseline justify-between py-4 font-(family-name:--font-faustina)"
              >
                <span className="text-ink text-[1.05rem]">{tier.name}</span>
                <span className="font-(family-name:--font-cantata-one) text-adobe-deep text-[1.15rem]">
                  {tier.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="benefits-heading" className="bg-paper-deep border-y border-rule">
        <div className="bcr-container py-16 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <h2
              id="benefits-heading"
              className="font-(family-name:--font-cantata-one) text-ink text-[1.6rem] md:text-[1.9rem]"
            >
              What members do
            </h2>
          </div>
          <ul className="md:col-span-7 space-y-3 font-(family-name:--font-faustina) text-[1.02rem] text-ink/85">
            {benefits.map((b) => (
              <li key={b} className="flex gap-3">
                <span aria-hidden="true" className="text-adobe-deep mt-1.5">
                  •
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="how-heading" className="bcr-container py-16">
        <h2
          id="how-heading"
          className="font-(family-name:--font-cantata-one) text-ink text-[1.6rem] md:text-[1.9rem]"
        >
          How to join
        </h2>
        <div className="bcr-prose mt-6 max-w-2xl">
          <p>
            We accept memberships by mail. Send a check payable to the{' '}
            <em>Coronado National Forest Heritage Society</em> with a note indicating that you wish
            to join the Friends of the Brown Canyon Ranch chapter, along with your name, address,
            email, and chosen membership level.
          </p>
          <p>
            <strong>Mail to:</strong>
            <br />
            Friends of the Brown Canyon Ranch
            <br />
            P.O. Box 996
            <br />
            Hereford, AZ 85615
          </p>
          <p>
            Questions? Call <a href="tel:+15203780311">520-378-0311</a> or{' '}
            <a href="/contact" className="text-adobe-deep underline underline-offset-4">
              contact us
            </a>
            .
          </p>
        </div>
        <p className="mt-10 text-[0.85rem] italic text-stone font-(family-name:--font-faustina) max-w-3xl">
          This institution is prohibited from discriminating on the basis of race, color, national
          origin, sex, age, or disability.
        </p>
      </section>
    </article>
  )
}
