require(`dotenv`).config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `Lyrical Shades`,
    // Default title of the page
    siteTitleAlt: `Lyrical Shades`,
    // Can be used for e.g. JSONLD
    siteHeadline: `Lyrical Shades`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://lyricalshades.com`,
    // Used for SEO
    siteDescription: `A wesite maintained by Preeti`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@preetikumari06`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-emilia`,
      options: {
        socialMedia: [
          { title: `Twitter`, href: `https://twitter.com/preetikumari06` },
          {
            title: `Instagram`,
            href: `https://www.instagram.com/lyrical_shades/`,
          },
        ],
        showThemeAuthor: false,
        name: 'Lyrical Shades',
        location: 'Delhi',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lyrical Shades`,
        short_name: `Lyrical Shades`,
        description: `A place to find words and picture with emotion.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3182ce`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
