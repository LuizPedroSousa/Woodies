const customQueries = {
    xs: '(min-width: 30em)', // 480px
    sm: '(min-width: 48em)', // 768px
    md: '(min-width: 62em)', // 992px
    l: '(min-width: 80em)', // 1280px
    xl: '(min-width: 96em)', // 1536px
    portrait: '(orientation: portrait)'
}

module.exports = {
    siteMetadata: {
        title: `Woodies acessórios`,
        description: `Are you looking for woodden furniture for your place?`,
        author: `@luizpedrosousa`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: 'gatsby-plugin-breakpoints',
            options: {
                queries: customQueries
            }
        },
        `gatsby-plugin-emotion`,
        `gatsby-plugin-root-import`,
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    // include: /assets/ // See below to configure properly
                }
            }
        },
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png` // This path is relative to the root of the site.
            }
        },
        `gatsby-plugin-gatsby-cloud`
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
}
