// src/lib/api.ts

export async function getHomePageSEO() {
    // Example static data or fetch from API
    return {
      title: 'Aliens Group',
      description: 'Welcome to homepage!',
      keywords: ['home', 'awesome', 'website'],
      ogTitle: 'Aliens Group Home',
      ogDescription: 'Check out our homepage',
      ogImages: [{ url: 'https://d1b9peg0jj5bry.cloudfront.net/logos/aliensnav.png' }]
    };
  }
  