module.exports = {
  siteMetadata: {
    siteUrl: `https://www.example.com`,
    title: 'Blueberry Food Website',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data',
      },
    },
    'gatsby-transformer-json',
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Blueberry Food Website',
        short_name: 'blueberry',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'static/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        allPageHeaders: [
          "Content-Security-Policy:default-src 'self'; script-src 'self' 'unsafe-inline'; connect-src 'self'; img-src 'self'; style-src 'self' 'unsafe-inline'; frame-src 'self' https://www.google.com/",
        ],
      },
    },
  ],
}
