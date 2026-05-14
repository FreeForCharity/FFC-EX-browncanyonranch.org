import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact the Friends of the Brown Canyon Ranch in Hereford, Arizona. Phone, mailing address, and directions to the ranch.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  return (
    <article className="bg-paper">
      <header className="bcr-container pt-16 md:pt-24 pb-10 border-b border-rule">
        <p className="font-(family-name:--font-lato) text-[0.72rem] tracking-[0.22em] uppercase text-stone">
          Contact
        </p>
        <h1 className="mt-3 font-(family-name:--font-cantata-one) text-ink text-[2.2rem] md:text-[2.8rem] leading-[1.1]">
          Get in touch
        </h1>
        <p className="mt-6 max-w-3xl text-[1.08rem] leading-[1.75] text-ink/80 font-(family-name:--font-faustina)">
          We&apos;re a small volunteer group — please give us a few days to respond. For the fastest
          reply, leave a voicemail at the number below.
        </p>
      </header>

      <section className="bcr-container py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-(family-name:--font-cantata-one) text-ink text-[1.4rem] md:text-[1.6rem]">
            Friends of the Brown Canyon Ranch
          </h2>
          <dl className="mt-6 space-y-6 font-(family-name:--font-faustina) text-[1.02rem]">
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-stone font-(family-name:--font-lato)">
                Mailing address
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
                <a
                  href="tel:+15203780311"
                  className="underline-offset-4 hover:text-adobe-deep hover:underline"
                >
                  520-378-0311
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.18em] text-stone font-(family-name:--font-lato)">
                Social
              </dt>
              <dd className="mt-1 text-ink">
                <a
                  href="https://www.facebook.com/Friends-of-the-Brown-Canyon-Ranch-106245609506322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 hover:text-adobe-deep hover:underline"
                >
                  Facebook
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-paper-deep border border-rule p-6 rounded-sm">
          <h2 className="font-(family-name:--font-cantata-one) text-ink text-[1.4rem]">
            Directions
          </h2>
          <p className="mt-4 text-[1rem] leading-[1.75] text-ink/85 font-(family-name:--font-faustina)">
            Take Highway 92 to Ramsey Canyon Road and turn west. At a little over 2 miles, look for
            the Brown Canyon Ranch sign on your right. Follow the maintained road approximately one
            mile to the parking area.
          </p>
        </div>
      </section>
    </article>
  )
}
