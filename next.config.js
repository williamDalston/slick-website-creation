/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  // Set basePath for GitHub Pages (subdirectory deployment)
  basePath: process.env.GITHUB_PAGES === 'true' ? '/slick-website-creation' : '',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/slick-website-creation' : '',
}

module.exports = nextConfig

