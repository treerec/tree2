/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/tree2' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/tree2' : '',
}

export default nextConfig