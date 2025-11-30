/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["picsum.photos"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lavenderblush-dog-942964.hostingersite.com",
      },
    ],
  },
};


export default nextConfig;


