import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  // Generate <route>/index.html so static hosts serve trailing-slash URLs correctly
  trailingSlash: true,
  // Images configuration
  images: {
    // This allows all images, local or external, to load without optimization
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'browncanyonranch.org',
      },
      {
        protocol: 'https',
        hostname: 'staging.browncanyonranch.org',
      },
      {
        protocol: 'https',
        hostname: 'coronadonationalforestheritagesociety.org',
      },
    ],
  },
  // Optional: base path and asset prefix if using a subdirectory deployment
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

export default nextConfig
