/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'via.placeholder.com',
        //         port: '',
        //         pathname: '/**',
        //     },
        // ],
        domains: ['assets.coincap.io', 'via.placeholder.com'],
    },
};

module.exports = nextConfig;
