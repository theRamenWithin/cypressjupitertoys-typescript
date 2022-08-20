import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://jupiterprime-react-prod.s3-website.us-east-2.amazonaws.com/',
    experimentalSessionAndOrigin: true,
  },
});
