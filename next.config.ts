import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Configuración de imágenes */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
