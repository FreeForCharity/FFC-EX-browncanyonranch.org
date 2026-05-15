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
          <div className="border border-dashed border-rule rounded-md px-8 py-12 text-center max-w-2xl">
            {/* Newspaper / bulletin icon */}
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-5 h-10 w-10 text-stone/40"
            >
              <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
              <path d="M18 14h-8M15 18h-5M10 6h8v4h-8z" />
            </svg>
            <p className="font-(family-name:--font-cantata-one) text-ink text-[1.2rem] mb-3">
              No posts yet — check back soon
            </p>
            <p className="font-(family-name:--font-faustina) text-[1rem] leading-[1.75] text-ink/70 max-w-[46ch] mx-auto">
              Volunteer days, program updates, and ranch happenings will be posted here. In the
              meantime, follow us on{' '}
              <a
                href="https://www.facebook.com/Friends-of-the-Brown-Canyon-Ranch-106245609506322"
                target="_blank"
                rel="noopener noreferrer"
                className="text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
              >
                Facebook
              </a>{' '}
              for the most timely updates.
            </p>
          </div>
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
