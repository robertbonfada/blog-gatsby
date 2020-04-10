import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import InfiniteNews from "../components/InfiniteNews";

const ArticlesPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        {!site.siteMetadata.w3l_dom_key ? null : <meta name="w3l-domain-verification" content={site.siteMetadata.w3l_dom_key} />}
      </Helmet>
      
      <InfiniteNews newsLoaded={edges} />
    </Layout>
  )
}

export default ArticlesPage
export const articlesQuery = graphql`
  query articlesPageQuery {
    site {
      siteMetadata {
        title
        description
        w3l_dom_key
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, filter: {frontmatter: {tag: {eq: "article"}}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD/MM/YYYY")
            path
            title
            thumbnail
            tag
          }
        }
      }
    }
  }
`