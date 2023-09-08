/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
    output: "standalone",
    assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,
    distDir: "build",
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: "avatars.githubusercontent.com",
            port: '',
            pathname: "/u/**"
        },{
            protocol: 'https',
            hostname: 'books.google.com',
            port: '',
            pathname: '/books/**'
        }]
    },
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
