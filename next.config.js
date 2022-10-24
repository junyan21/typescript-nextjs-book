/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    // StyledComponentsの有効化
    styledComponents: true,
  }
}

module.exports = nextConfig
