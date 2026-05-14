import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News',
  description:
    'News and updates from the Friends of the Brown Canyon Ranch. Volunteer days, program announcements, and ranch happenings.',
  alternates: { canonical: '/news' },
}

interface NewsItem {
  date: string
  title: string
  body: string
}

// Static news feed. Update this list to publish new items.
const items: NewsItem[] = []

export default function NewsPage() {
  return (
    <article className="bg-paper">
      <header className="bcr-container pt-16 md:pt-24 pb-10 border-b border-rule">
        <p className="font-(family-name:--font-lato) text-[0.72rem] tracking-[0.22em] uppercase text-stone">
          News
        </p>
        <h1 className="mt-3 font-(family-name:--font-cantata-one) text-ink text-[2.2rem] md:text-[2.8rem] leading-[1.1]">
          Latest from the ranch
        </h1>
        <p className="mt-6 max-w-3xl text-[1.08rem] leading-[1.75] text-ink/80 font-(family-name:--font-faustina)">
          Announcements, volunteer days, and program updates. Follow us on{' '}
          <a
            href="https://www.facebook.com/Friends-of-the-Brown-Canyon-Ranch-106245609506322"
            target="_blank"
            rel="noopener noreferrer"
            className="text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
          >
            Facebook
          </a>{' '}
          for the most timely posts.
        </p>
      </header>

      <section aria-labelledby="news-list" className="bcr-container py-16">
        <h2 id="news-list" className="sr-only">
          News items
        </h2>
        {items.length === 0 ? (
          <p className="text-[1.05rem] leading-[1.75] text-ink/75 font-(family-name:--font-faustina) max-w-2xl">
            No news posts at this time. Please check back, or visit our Facebook page for the latest
            updates on volunteer days and the Western Heritage Program.
          </p>
        ) : (
          <ul className="divide-y divide-rule border-y border-rule">
            {items.map((item) => (
              <li key={item.title} className="py-6">
                <p className="font-(family-name:--font-lato) text-[0.78rem] tracking-[0.18em] uppercase text-stone">
                  {item.date}
                </p>
                <h3 className="mt-2 font-(family-name:--font-cantata-one) text-ink text-[1.25rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.75] text-ink/80 font-(family-name:--font-faustina) max-w-3xl">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  )
}
