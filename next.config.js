/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL ?? "https://9e4pw7blr7.execute-api.ap-southeast-1.amazonaws.com/production/graphql",    
    GOHUB_SERVICE_BASE_URL: process.env.GOHUB_SERVICE_BASE_URL ?? "http://45.119.85.182:3003",
    GOHUB_BACKEND_API_BASE_URL: process.env.GOHUB_BACKEND_API_BASE_URL ?? "http://localhost:3000/api",
    GOHUB_BACKEND_X_AUTHORIZATION_KEY: process.env.GOHUB_BACKEND_X_AUTHORIZATION_KEY ?? "GOHUB_AUTHORIZATION_KEY",
  }
};

module.exports = nextConfig;
