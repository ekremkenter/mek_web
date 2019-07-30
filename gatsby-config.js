module.exports = {
  siteMetadata: {
    title: `Mustafa Ekrem KENTER`,
    description: `Software Craftsmen`,
    author: `@ekremkenter`
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mustafa Ekrem KENTER Personal Web Site`,
        short_name: `ekremkenter.com`,
        start_url: `/`,
        background_color: `#37474f`,
        theme_color: `#cfd8dc`,
        display: `minimal-ui`,
        icon: `src/images/profile_crop_1024.jpg` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
