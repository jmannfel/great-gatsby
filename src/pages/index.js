import React from 'react'
import Link from 'gatsby-link'
import PostListing from "../components/Posts/PostListing"

const IndexPage = ({data}) => (
  <div>
    <h1>Posts</h1>
    {data.allContentfulBlogPost.edges.map(({node}) => (
       <PostListing key={node.id} post={node} />
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          title
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          slug
          id
          createdAt(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`;