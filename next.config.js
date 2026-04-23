/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable TypeScript strict mode
  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Enable React strict mode for development
  reactStrictMode: true,

  // Add redirects if needed
  async redirects() {
    return [];
  },

  // Add rewrites if needed
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;
