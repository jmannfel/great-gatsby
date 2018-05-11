import React from 'react'
import Link from 'gatsby-link'
import styled from "styled-components"

const ToolWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-column-gap: 15px;
`;

const Tool = styled.div `
  background-color: #47009269;
  border-radius: 5px;
  border-top: 11px solid #5200a8;
  margin-bottom: 25px;
  padding: 10px 10px 30px 10px;
  a {
    color: #dcfff3;;
    text-decoration: none;
    h5 {
      color: #a7c7bc;
    }
  }
  h3 {
    margin-bottom: 10px;
    padding-top: 3px;
  }
  h3:after {
    display: block;
    border-bottom: 2px solid #1dbfb4;
    margin: 7px 0;
    width: 50%;
    content: "";
  }
  img {
    display: block;
    margin: 0 auto;
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
