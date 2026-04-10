/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  // NOTE: Do NOT add trailingSlash or www redirects here if your host
  // (Vercel/Netlify) already handles them — it causes redirect loops.
};

module.exports = nextConfig;
