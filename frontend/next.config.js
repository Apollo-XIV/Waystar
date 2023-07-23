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
      
        return config;
    }      
}

module.exports = nextConfig
