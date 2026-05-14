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
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p) => (
            <li
              key={p.caption}
              className="border border-rule bg-paper-deep/40 rounded-sm overflow-hidden"
            >
              <div
                className="aspect-[4/3] bg-gradient-to-br from-paper-deep via-paper to-stone/20 flex items-center justify-center text-stone font-(family-name:--font-lato) text-[0.72rem] uppercase tracking-[0.2em]"
                aria-hidden="true"
              >
                Photograph
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
