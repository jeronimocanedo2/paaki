/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/productos/cama-comprimida', destination: '/productos/base-smart-start', permanent: false },
      { source: '/productos/sofas', destination: '/productos/base-smart-start', permanent: false },
    ];
  },
  async rewrites() {
    return [
      { source: '/productos/paaki-eleva', destination: '/productos/base-smart-start' },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};
module.exports = nextConfig;
