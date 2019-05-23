module.exports = {
  siteMetadata: {
    title: 'Dylan Sheffer',
    author: 'Dylan Sheffer',
    description: 'Dylan Sheffer- Web Developer. A11y Advocate. Tea Enthusiast.',
    siteUrl: 'https://www.dylansheffer.com',
  },
  pathPrefix: '/DylanSheffer',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/img/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dylan Sheffer`,
        short_name: `DylanSheffer`,
        start_url: `/`,
        background_color: `#2d2a2e`,
        theme_color: `#2d2a2e`,
        display: `minimal-ui`,
        icon: `src/img/Dylan-Sheffer-Icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Fira Mono']
        }
      }
    },
      {
        resolve: `gatsby-plugin-sass`,
        options: {
        },
      },
  ],
}
