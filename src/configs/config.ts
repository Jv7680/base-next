export const config = {
  graphql: {
    url: process.env.GRAPHQL_URL,
  },
  gohubService: {
    url: process.env.GOHUB_SERVICE_BASE_URL,
  },
  gohubBackend: {
    api: {
      baseUrl: process.env.GOHUB_BACKEND_API_BASE_URL,
      authorizationKey: process.env.GOHUB_BACKEND_X_AUTHORIZATION_KEY,
    },
  },
};
