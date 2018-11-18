module.exports = {
  siteMetadata: {
    siteUrl: `https://www.blueberryfood.co.uk`,
    title: 'Blueberry Food Website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-WCF9F36',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Blueberry Food Website',
        short_name: 'blueberry',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'static/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          // TODO: remove unsafe-inline once gatsby supports it
          "Content-Security-Policy:default-src 'self'; base-uri 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com/ https://www.google-analytics.com; connect-src 'self'; img-src 'self' data: https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; frame-src 'self' https://www.google.com/; prefetch-src https://www.googletagmanager.com/ https://www.google-analytics.com",
        ],
      },
    },
  ],
}
