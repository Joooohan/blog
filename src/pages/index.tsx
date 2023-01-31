import styled from '@emotion/styled'
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import Sidebar from '../components/sidebar'

const ArticleList = styled.div`
  padding-right: 20%;
  background-color: rgb(251, 251, 251);
`

const Article = styled.article`
  margin: 1em;
  display: flex;
  height: 150px;
  background-color: 'white';
`

const Thumbnail = styled(GatsbyImage)`
  height: 100%;
  width: 20%;
  margin: 1em;
  border-radius: 20px;
`

const TextPreview = styled.div`
  flex: 1;
`

const Title = styled.h2`
  font-family: "PT Serif";
  font-weight: 400;
  font-size: 30px;
  font-style: normal;
  color: #263959;
`

const Excerpt = styled.p`
  font-family: "Lato";
  font-weight: 400;
  font-size: 16px;
  font-style: normal;
  color: #515151;
`

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <Sidebar/>
      <ArticleList>
      {
      data.allMdx.nodes.map( node => (
        <Article key={node.id}>
          {
            node.frontmatter.img &&
            node.frontmatter.img.childImageSharp &&
            node.frontmatter.img.childImageSharp.gatsbyImageData &&
            <Thumbnail image={
              node.frontmatter.img.childImageSharp.gatsbyImageData
            } alt={node.id}/>
          }
          <TextPreview>
            <Title>{node.frontmatter.title}</Title>
            <p>{node.excerpt}</p>
            <span>{node.frontmatter.date}</span>
          </TextPreview>
        </Article>
      ))
      }
      </ArticleList>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query {
  allMdx {
    nodes {
      id
      frontmatter {
        title
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
