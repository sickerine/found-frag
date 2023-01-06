/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: { domains: ['appmedia.jp', 'cdn.discordapp.com', 'media.discordapp.net'], },
}

module.exports = nextConfig
