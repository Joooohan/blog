/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { colors, fonts } from './layout';

const centerText = css`
  text-align: center;
  font-family: ${fonts.primary};
`

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
  font-family: ${fonts.primary};
  background-color: white;
  box-sizing: border-box;
`

const Header = styled.div`
  margin: 0 0 40px;
  text-align: center;
`

const Footer = styled.div`
`

const AuthorName = styled.div`
  font-family: ${fonts.secondary};
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 15px;
  text-transform: uppercase;
  margin: 0 0 10px;
  position: relative;

  &::after {
    content: "";
    background-color: ${colors.primary};
    position: absolute;
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
`

const Bio = styled.p`
  font-family: ${fonts.primary};
  line-height: 1.5;
  font-size: 16px;
  color: ${colors.primary};
`

const AvatarStyle = css`
  border-radius: 50%;
  height: 140px;
  width: 140px;
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
    site {
      siteMetadata {
        title
        authorName
        social {
          github
          mail
          linkedin
        }
      }
    }
  }
  `);

  return (
  <Bar>
    <Header>
      <StaticImage
        css={AvatarStyle} alt="profile picture" src="../images/profile.jpg"
      />
      <AuthorName>
        {data.site.siteMetadata.authorName}
      </AuthorName>
      <Bio>I am a developer focusing on ML and data engineering. Always hungry to keep learning.</Bio>
    </Header>
    <Footer css={centerText}>
      <section>
        <h3 css={css`
          text-transform: uppercase;
          font-size: 12px;
          color: ${colors.primary};
          position: relative;
          &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            width: calc(50% - 48px);
            transform: translateY(-50%);
            background-color: ${colors.primary};
            height: 2px;
          }
          &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            width: calc(50% - 48px);
            transform: translateY(-50%);
            background-color: ${colors.primary};
            height: 2px;
          }
        `}>Contact me</h3>
        <ul css={css`
          list-style: none;
          padding-inline-start: 0px;
          li {
            display: inline-block;
          }
          a {
            padding: 10px;
            color: ${colors.primary};
          }
        `}>
          {data.site.siteMetadata.social.github &&
          <li>
            <a href={data.site.siteMetadata.social.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>}
          {data.site.siteMetadata.social.linkedin &&
          <li>
            <a href={data.site.siteMetadata.social.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>}
          {data.site.siteMetadata.social.mail &&
          <li>
            <a href={`mailto:${data.site.siteMetadata.social.mail}`}>
              <FontAwesomeIcon icon={faEnvelopeOpen} />
            </a>
          </li>}
        </ul>
      </section>
      <div css={css`
        font-size: 14px;
        color: ${colors.primary};
      `}>
        <p>{new Date().getFullYear()} &copy; {data.site.siteMetadata.authorName}</p>
      </div>
    </Footer>
  </Bar>
  )
}

export default Sidebar