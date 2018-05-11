import React from 'react'
import Link from 'gatsby-link'
import PostListing from "../components/Posts/PostListing"
import {ToolTile, ToolWrapper} from "../components/ToolTile"

const IndexPage = ({data}) => (
  <div>
    <h1>Posts</h1>
    {data.allContentfulBlogPost.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
    ))}
    <h1>Tools</h1>
    <ToolWrapper>
      {data.allContentfulTool.edges.map(({node}) => (
        <ToolTile key={node.id} tool={node} />
      ))}
    </ToolWrapper>
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
    allContentfulTool {
      edges {
        node {
          id
          title
          text
          url
          image {
            id
            resolutions(width: 100) {
              src
            }
          }
        }
      }
    }
  }
`;