import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout.tsx"
import { graphql } from "gatsby"



const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <Layout>
      <h1>Johan's Blog</h1>
      {
      data.allMdx.nodes.map( node => (
        <article key={node.id}>
          {node.frontmatter.title}
        </article>
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
        date
      }
      excerpt
    }
  }
}
`

export const Head: HeadFC = () => <title>Home Page</title>
