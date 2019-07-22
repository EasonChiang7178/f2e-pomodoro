module.exports = {
  siteMetadata: {
    title: `靜心蕃茄鐘`,
    description: `希望可以平靜下來的清清淡淡口味`,
    author: `@EasonChiang`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `靜心蕃茄鐘`,
        short_name: `靜心蕃茄鐘`,
        start_url: `/`,
        background_color: `#C4DAE6`,
        theme_color: `#67ABD6`,
        display: `minimal-ui`,
        icon: `src/images/f2e-pomodoro-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    }
  ],
}
