import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import "./styles.scss";

export default () => {
    const data = useStaticQuery(
        graphql`
        query {
            allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 3) {
              edges {
                node {
                  frontmatter {
                    title
                    thumbnail
                    path
                    date
                  }
                }
              }
            }
          }
        `
    )
    
    const Top = data.allMarkdownRemark.edges.map((edge, index) => (
      <Link 
        to={edge.node.frontmatter.path } 
        className={`topstory-thumbnail news${index}`}
        style={{
          backgroundImage: `url(${edge.node.frontmatter.thumbnail})`,
          textDecoration: 'none',
        }}
      >
        
              
                    <h1 className="post-title">{edge.node.frontmatter.title}</h1>
              
        
            </Link>
    ));

    const Art = (
      <article className="cardTop gridNewsTop">
        {Top}
        </article>
    )

    return (
      <div className="topStoryContainer">
          
        {Art}
      </div>
    )
}