/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: "standalone",
    assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,
    distDir: "build",
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });

        config.watchOptions = {
            poll: true,
            aggregateTimeout: 500,
        }
      
        return config;
    },
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
