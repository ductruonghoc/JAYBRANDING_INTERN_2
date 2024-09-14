/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hkkzipper.com',
            },
            {
                protocol: 'https',
                hostname: 'png.pngtree.com',
            },
            {
                protocol: 'https',
                hostname: 'us.loropiana.com',
            },
        ]
    }
};

export default nextConfig;
