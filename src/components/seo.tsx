import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SeoProps {
    description?: string
    meta?: Array<{}>
    title: string
}
function Seo({ description, meta, title }: SeoProps) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    )

    const metaDescription = description || site.siteMetadata.description
    const defaultTitle = site.siteMetadata?.title

    return (
        <Helmet
            htmlAttributes={{
                lang: 'en'
            }}
            title={title}
            titleTemplate={defaultTitle && `%s | ${defaultTitle}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: title
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata?.author || `@luizpedrosousa`
                },
                {
                    name: `twitter:title`,
                    content: title
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                }
            ]}
        />
    )
}

export default Seo
