let env = process.env.NODE_ENV || 'development';
require('dotenv').config({path: `./.env.${env}`});

module.exports = {
  pathPrefix: "https://github.com/danish0313/Coffee-Shops",
},
module.exports = {
  siteMetadata: {
    title: `Coffee Shops`,
    description: `Coffee Shop E-Ecommerce.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
     resolve: `gatsby-source-contentful`,
     options: {

       spaceId:`fc7o82k8b9te`,
       // Learn about environment variables: https://gatsby.app/env-vars
       accessToken:`k_BZm1HAmrHi76eYDzuugRy63XdaqD8JL4gUMsCtpJY`,
     }
   },
    {
  			resolve: 'gatsby-plugin-snipcart',
  			options: {
  				apiKey: process.env.SNIPCARD_KEY,
          autopop: true
  			},
  		},
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

  ],
}
