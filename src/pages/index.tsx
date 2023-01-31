import styled from '@emotion/styled'
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"

const Article = styled.article`
  margin: 2em;
  display: flex;
  flex-direction: row;
  height: 150px;
`

const Thumbnail = styled(GatsbyImage)`
  height: 100%;
  width: 150px;
  margin: 1em;
`

const Preview = styled.div`
  flex: 1;
`

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <h1>Johan's Blog</h1>
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
          <Preview>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.excerpt}</p>
            <span>{node.frontmatter.date}</span>
          </Preview>
        </Article>
      ))
      }
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
