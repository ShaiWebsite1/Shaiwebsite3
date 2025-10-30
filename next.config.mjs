/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,

  async redirects() {
    return [
      {
        source: '/index.php',
        destination: 'https://shai.health/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
