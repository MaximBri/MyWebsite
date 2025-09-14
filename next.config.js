import path from 'path'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(process.cwd(), 'src'),
    }
    return config
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'src')],
    additionalData: `@use "src/shared/styles/vars" as *;\n@use "src/shared/styles/mixins" as *;\n`,
  },
}

export default nextConfig
