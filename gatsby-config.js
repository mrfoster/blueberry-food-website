module.exports = {
  siteMetadata: {
    siteUrl: `https://www.blueberryfood.co.uk`,
    description: `Blueberry Food Company specialises in creating the most delicious, tailor made buffets. We cater for both private parties and for business lunches or functions.`,
    title: "Blueberry Food Website",
    author: `Chris Foster, christopherfoster@hotmail.co.uk`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-WCF9F36",
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Blueberry Food Website",
        short_name: "blueberry",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "static/logo.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        allPageHeaders: [
          // TODO: remove unsafe-inline once gatsby supports it
          // https://github.com/gatsbyjs/gatsby/issues/10890
          "Content-Security-Policy:default-src 'self'; base-uri 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com/ https://www.google-analytics.com/ https://ssl.google-analytics.com/; connect-src 'self' https://www.google-analytics.com; img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com/; style-src 'self' 'unsafe-inline'; frame-src 'self' https://www.google.com/",
        ],
      },
    },
  ],
}
