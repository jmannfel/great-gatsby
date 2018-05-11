import React, { Component } from 'react';

export default class PostPage extends Component {
  render() {
    const { data } = this.props;
    const imageSrc = data.contentfulBlogPost.image ? data.contentfulBlogPost.image.resolutions.src : null;
    if (!data) return null;
      return (
        <div>
          <span>{data.contentfulBlogPost.createdAt}</span>
          <h1>{data.contentfulBlogPost.title}</h1>
          { data.contentfulBlogPost.image ? (
            <img src={data.contentfulBlogPost.image.resolutions.src} alt={data.contentfulBlogPost.image.description} />
          ) : (
            null
          )}
          <div 
            dangerouslySetInnerHTML={{
              __html: data.contentfulBlogPost.body.childMarkdownRemark.html
            }}
          />
        </div>
      )
  }
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      slug
      id
      createdAt(formatString: "MMMM DD, YYYY")
      image {
        resolutions(width: 700) {
          src
        }
        description
      }
    }
  }
`;