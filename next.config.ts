/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ✅ Allow external image domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "kommodo.ai",
      },
      {
        protocol: "https",
        hostname: "avatarfiles.alphacoders.com",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
      },
    ],

    // ✅ Allow base64 images
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;