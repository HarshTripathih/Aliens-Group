// src/lib/api.ts

export async function getHomePageSEO() {
    // Example static data or fetch from API
    return {
      title: 'My Awesome Website',
      description: 'Welcome to my homepage!',
      keywords: ['home', 'awesome', 'website'],
      ogTitle: 'Awesome Site Home',
      ogDescription: 'Check out our homepage',
      ogImages: [{ url: '/images/og-image.png' }]
    };
  }
  