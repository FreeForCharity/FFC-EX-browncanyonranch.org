import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { faustina, lato, cantataOne } from '@/lib/fonts'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://browncanyonranch.org'),
  title: {
    default: 'Friends of the Brown Canyon Ranch',
    template: '%s | Friends of the Brown Canyon Ranch',
  },
  description:
    'Friends of the Brown Canyon Ranch — volunteers preserving and interpreting a historic ranch in the foothills of the Huachuca Mountains in Southern Arizona. Unlock history. Preserve the future.',
  keywords: [
    'Brown Canyon Ranch',
    'Huachuca Mountains',
    'Coronado National Forest',
    'Arizona historic ranch',
    'Hereford AZ',
    'Western Heritage Program',
    'historic preservation',
    'Coronado National Forest Heritage Society',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://browncanyonranch.org/',
    siteName: 'Friends of the Brown Canyon Ranch',
    title: 'Friends of the Brown Canyon Ranch',
    description:
      'Volunteers preserving a historic ranch in the Huachuca Mountains foothills of Southern Arizona.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Friends of the Brown Canyon Ranch',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Friends of the Brown Canyon Ranch',
    description:
      'Volunteers preserving a historic ranch in the Huachuca Mountains foothills of Southern Arizona.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [{ url: `${basePath}/icon.svg`, type: 'image/svg+xml' }],
    apple: [{ url: `${basePath}/apple-icon.svg`, type: 'image/svg+xml' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}

export const viewport: Viewport = {
  themeColor: '#b85c3a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={[
          'antialiased',
          'bg-paper',
          'text-ink',
          faustina.variable,
          lato.variable,
          cantataOne.variable,
        ].join(' ')}
        suppressHydrationWarning={true}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:text-ink focus:px-3 focus:py-2 focus:rounded focus:shadow"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
