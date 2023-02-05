import styled from '@emotion/styled'
import { HeadFC, Link, PageProps, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import Sidebar from '../components/sidebar'

// demo https://flexible-gatsby.netlify.app/

const Content = styled.div`
  padding: 20px 20px 20px 260px;
  display: flex;
  flex-wrap: wrap;
`

const Post = styled.article`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: row;
  background-color: #FFFFFF;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
  align-items: stretch;
  box-shadow: 0 1px 1px 0 rgb(31 35 46 / 15%);
  overflow: hidden;
  transition-duration: .3s;
  transition-property: all;
  &:hover {
    transform: translate(0px, -2px);
    box-shadow: 0px 15px 45px -10px rgba(10, 16, 34, .2);
  }
`

const Thumbnail = styled(GatsbyImage)`
  height: 100%;
  width: 30%;
  background-position: 50% 50%;
  max-width: 100%;
  min-height: 11rem;
`

const TextPreview = styled.div`
  width: 70%;
  padding: 1rem;
  margin: 0;
`

const Title = styled.h2`
  font-family: 'PT Serif', serif;
  font-weight: 300;
  font-size: 30px;
  color: #263959;
  line-height: 45px;
  margin: 0 0 10px;
`

const Excerpt = styled.p`
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 16px;
  color: #515151;
  line-height: 24px;
  margin: 0 0 10px;
`

const Date = styled.span`
  font-family: Lato, sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #515151;
  line-height: 18px;
`

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  return (
    <Layout>
      <Sidebar/>
      <Content>
      {
      data.allMdx.nodes.map( node => (
        <Post key={node.id}>
          {
            node.frontmatter?.img?.childImageSharp?.gatsbyImageData &&
            <Thumbnail image={
            node.frontmatter.img.childImageSharp.gatsbyImageData
            } alt={node.id}/>
          }
          <TextPreview>
            <Link to={`/${node.frontmatter?.slug}`} style={{
              // @ts-ignore
              'text-decoration': 'none',
            }}>
              <Title>{node.frontmatter?.title}</Title>
            </Link>
            <Excerpt>{node.excerpt}</Excerpt>
            <Date>{node.frontmatter?.date}</Date>
          </TextPreview>
        </Post>
      ))
      }
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query IndexPage {
  allMdx {
    nodes {
      id
      frontmatter {
        title
        slug
        date(formatString: "YYYY, MMM DD")
        img {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      excerpt
    }
  }
}
`

export const Head: HeadFC = () => <title>Home Page</title>
