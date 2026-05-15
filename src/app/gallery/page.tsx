import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photographs of the Brown Canyon Ranch: the historic adobe house, the windmill, wildlife, and seasonal views in the foothills of the Huachuca Mountains.',
  alternates: { canonical: '/gallery' },
}

interface Photo {
  caption: string
  detail: string
}

// Placeholder gallery — when high-resolution photos are available, drop them into
// public/Images/browncanyonranch/ and add { src } using assetPath() per item.
const photos: Photo[] = [
  {
    caption: 'The historic adobe ranch house',
    detail: 'Built circa 1905–1907 by James Haverty.',
  },
  {
    caption: 'Windmill at the ranch',
    detail: 'A workhorse of cattle-ranching life in the East Huachucas.',
  },
  {
    caption: 'Great horned owl fledgling',
    detail: 'Wildlife photographed on the property.',
  },
  {
    caption: 'House pond, winter',
    detail: 'Ring-necked ducks and quiet water.',
  },
  {
    caption: 'Brown Canyon Ranch in winter',
    detail: 'Snow on the canyon floor — a rarity, treasured when it comes.',
  },
  {
    caption: 'Eagle Scout project benches',
    detail: 'Hand-built benches placed along the visitor path.',
  },
]

export default function GalleryPage() {
  return (
    <article className="bg-paper">
      <header className="bcr-container pt-16 md:pt-24 pb-10 border-b border-rule">
        <p className="font-(family-name:--font-lato) text-[0.72rem] tracking-[0.22em] uppercase text-stone">
          Gallery
        </p>
        <h1 className="mt-3 font-(family-name:--font-cantata-one) text-ink text-[2.2rem] md:text-[2.8rem] leading-[1.1]">
          The ranch in pictures
        </h1>
        <p className="mt-6 max-w-3xl text-[1.08rem] leading-[1.75] text-ink/80 font-(family-name:--font-faustina)">
          Permission is needed from Friends of Brown Canyon Ranch and/or the photographer prior to
          reproduction or use.
        </p>
      </header>

      <section aria-labelledby="gallery-grid" className="bcr-container py-16">
        <h2 id="gallery-grid" className="sr-only">
          Photographs
        </h2>

        {/* Coming-soon state — photos will replace this grid once supplied */}
        <div className="mb-14 border-2 border-dashed border-rule rounded-md px-8 py-12 text-center max-w-2xl mx-auto">
          {/* Camera icon */}
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto mb-5 h-12 w-12 text-stone/50"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          <p className="font-(family-name:--font-cantata-one) text-ink text-[1.25rem] mb-3">
            Photography coming soon
          </p>
          <p className="font-(family-name:--font-faustina) text-[1rem] leading-[1.7] text-ink/70 max-w-[48ch] mx-auto">
            We&rsquo;re gathering high-resolution photos of the ranch, wildlife, and heritage
            programs. Have a great shot from a visit?{' '}
            <a
              href="mailto:info@browncanyonranch.org"
              className="text-adobe-deep underline underline-offset-4 decoration-rule hover:decoration-adobe"
            >
              Share it with us
            </a>
            .
          </p>
        </div>

        {/* Caption list so visitors still learn about what they can expect */}
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p) => (
            <li
              key={p.caption}
              className="border border-rule bg-paper-deep/40 rounded-sm overflow-hidden"
            >
              <div
                className="aspect-[4/3] bg-gradient-to-br from-paper-deep/60 via-paper to-stone/10 flex flex-col items-center justify-center gap-2 px-4"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8 text-stone/30"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <div className="p-5">
                <h3 className="font-(family-name:--font-cantata-one) text-ink text-[1.05rem]">
                  {p.caption}
                </h3>
                <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/75 font-(family-name:--font-faustina)">
                  {p.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
