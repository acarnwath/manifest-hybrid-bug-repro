/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `The site's name`,
      short_name: `short`,
      start_url: `/`,
      background_color: `#ff0000`,
      theme_color: `#ff0000`,
      display: `minimal-ui`,
      icon: `src/images/favicon.png`, // This path is relative to the root of the pre-rendered site
      icons: [ // Paths relative to the static folder
        {
          src: `favicon/favicon-72.png`,
          sizes: `72x72`,
          type: `image/png`,
        },{
          src: `favicon/favicon-32.png`,
          sizes: `32x32`,
          type: `image/png`,
        },{
          src: `favicon/favicon-maskable.png`,
          sizes: `310x310`,
          type: `image/png`,
          purpose: `maskable`,
        },
      ],
      cache_busting_mode: 'none',
    },
  },
  ],
}
