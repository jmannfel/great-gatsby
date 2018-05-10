import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const Article = styled.article`
    box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.1);
    border-radius: 5px;
    padding: 40px 20px;
    background: hsl(160, 100%, 93%);
    margin-bottom: 20px;
    border-left: 10px solid #EB5393;
    h3 {
        font-weight: 700;
        a {
            color: #EB5393;
            text-decoration: none;
            &:hover {
                border-bottom: 3px solid #3C477E;
            }
        }
    }
    span {
        color: hsl(0, 0%, 45%);
    }
`;

const PostListing = ({post}) => 
    <Article>
        <h3>
            <Link to={post.slug}>{post.title}</Link>
        </h3>
        <span>
            {post.createdAt}
        </span>
        <p>
            {post.body.childMarkdownRemark.excerpt}
        </p>
    </Article>;

export default PostListing; 