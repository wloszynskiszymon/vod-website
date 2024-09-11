/** @type {import('next').NextConfig} */
module.exports = {
  distDir: "./build", // Changes the build output directory to `./build`.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
    ],
  },
};
