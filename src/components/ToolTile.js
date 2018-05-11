import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const ToolWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-column-gap: 15px;
`;

const Tool = styled.div `
  background-color: #47009269;
  border-radius: 5px;
  border-top: 7px solid #EB5393;
  padding: 10px;
  a {
    color: #dcfff3;;
    text-decoration: none;
    h5 {
      color: #a7c7bc;
    }
  }
`;

const ToolTile = ({ tool }) => (  
    <Tool>
      <a href={tool.url}>
        <h3>{tool.title}</h3>
        <h5>{tool.text}</h5>
        <img src={tool.image.resolutions.src} alt=""/>
      </a>
    </Tool>
  );

export { ToolTile, ToolWrapper };
