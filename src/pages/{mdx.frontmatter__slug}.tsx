import styled from '@emotion/styled'
import { MDXProvider } from "@mdx-js/react"
import { PageProps, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

const Content = styled.div`
  padding: 20px 20px 20px 260px;
  display: inline-block;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: Lato, sans-serif;
  font-weight: 400;
`

const PostContent = styled.div`
  background-color: white;
  margin-left: 15px;
`

const TextContent = styled.div`
  padding: 15px;
`

const Cover = styled(GatsbyImage)`
  max-height: 500px;
  width: 100%;
`

const Header = styled.header`
  margin: 10px 0;
  text-align: center;
  width: 100%;
`

const Title = styled.h1`
  font-family: Lato, sans-serif;
  font-weight: 400;
  font-size: 32px;
  color: #515151;
`

const Date = styled.span`
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: #a0a0a0;
  text-transform: uppercase;
`

const P = styled.p`
  font-family: Lato, sans-serif;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #515151;
`

const Li = styled.li`
  font-family: Lato, sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #515151;
`

const Blockquote = styled.blockquote`
  border-left-width: 5px;
  border-left-style: solid;
  border-left-color: black;
  font-style: italic;
  margin-left: 1rem;
  padding-left: 1.1rem;
  color: #ada8a8;
`

const H2 = styled.h2`
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #515151;
`

const Img = styled.img`
  width: 500px;
  max-height: 400px;
  position: relative;
`


const BlogPost: React.FC<PageProps<Queries.BlogPostQuery>> = ({ children, data }) => {

  // @ts-ignore
  const img = getImage(data.mdx?.frontmatter?.img);

  return (
    <Layout>
      <Sidebar/>
      <Content>
        <PostContent>
          {img ? <Cover image={img} alt={"profile"}/> : null }
          <Header>
            <Title>{data.mdx?.frontmatter?.title}</Title>
            <Date>{data.mdx?.frontmatter?.date}</Date>
          </Header>
          <TextContent>
            <MDXProvider
              components={{
                p: P,
                h2: H2,
                li: Li,
                blockquote: Blockquote,
                img: Img,
              }}
            >
              {children}
            </MDXProvider>
          </TextContent>
        </PostContent>
      </Content>
    </Layout>
  )
}

export const query = graphql`
query BlogPost ($id: String) {
  mdx(id: {eq: $id}) {
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
  }
}
`

export default BlogPost