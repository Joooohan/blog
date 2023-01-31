import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
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
  font-family: Lato, sans-serif;
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
`

const Bio = styled.p`
  font-family: Lato,sans-serif;
  line-height: 1.5;
  font-size: 16px;
  color: #515151;
`

const Sidebar = () => {
  return (
  <Bar>
    <Header>
      <StaticImage css={css`
        border-radius: 100%;
        height: 100px;
        width: 100px;
        margin: 0 auto 10px;
      `} src="../../content/assets/profile.jpg" alt="profile.jpg"/>
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