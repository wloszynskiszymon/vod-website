/** @type {import('next').NextConfig} */
module.exports = {
  distDir: "./build", // Changes the build output directory to `./build`.
  images: {
    domains: ["image.tmdb.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
  },
};
