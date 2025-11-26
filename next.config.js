/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  // For GitHub Pages, uncomment and set basePath if deploying to a subdirectory
  // basePath: process.env.NODE_ENV === 'production' ? '/slick-website-creation' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/slick-website-creation' : '',
}

module.exports = nextConfig

