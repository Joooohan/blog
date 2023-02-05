import styled from '@emotion/styled';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';

const Bar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: fixed;
  left: 0;
  top: 0;
  padding: 20px 10px;
  width: 240px;
  font-family: Lato,sans-serif;
  background-color: white;
`

const Header = styled.div`
  margin: 0 0 40px;
  text-align: center;
`

const Footer = styled.div`
`

const AuthorName = styled.div`
  font-family: "PT Serif",serif;
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 10px;
  text-transform: uppercase;
  margin: 0 0 10px;
  position: relative;
  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 2px;
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    right: 0;
    background-color: #515151;
  }
`

const Bio = styled.p`
  font-family: 'Lato' ,sans-serif;
  line-height: 1.5;
  font-size: 16px;
  color: #515151;
`

const Avatar = styled(GatsbyImage)`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin: 0 auto 10px;
  overflow: hidden;
  transition: transform 0.35s;
  &:hover {
    transform: scale3d(0.9, 0.9, 1);
  }
`

const Sidebar = () => {

  const data = useStaticQuery(graphql`
  {
    allImageSharp(filter: {id: {eq: "66aa61ed-1080-55fc-a5c3-c1f5eab49ee2"}}) {
      edges {
        node {
          id
          gatsbyImageData
        }
      }
    }
  }
  `);

  const image = getImage(data.allImageSharp.edges[0].node.gatsbyImageData);

  return (
  <Bar>
    <Header>
      {image && <Avatar image={image} alt="profile.jpg"/>}
      <AuthorName>
        Johan Leduc
      </AuthorName>
      <Bio>I am a developer focusing on ML and data engineering. Always hungry to keep learning.</Bio>
    </Header>
    <Footer>

    </Footer>
  </Bar>
  )
}

export default Sidebar