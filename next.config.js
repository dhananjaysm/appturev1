/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Required:
    // appDir: true,
  },
  env: {
    FIREBASE_API_KEY: 'AIzaSyAld2jFzj8O0cMLgcx7VpRPfhJBcDviuwY',
    FIREBASE_AUTH_DOMAIN: 'appture-8964f.firebaseapp.com',
    FIREBASE_PROJECT_ID: 'appture-8964f',
    FIREBASE_STORAGE_BUCKET: 'appture-8964f.appspot.com',
    FIREBASE_MESSAGING_SENDERID: '155920706537',
    FIREBASE_API_ID: '1:155920706537:web:7923cde63f26f517abf978',
  },
};

module.exports = nextConfig;
