import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Johan's Blog`,
    siteUrl: `https://www.yourdomain.tld`,
    authorName: "Johan Leduc",
    social: {
      github: "https://github.com/Joooohan",
      linkedin: "https://www.linkedin.com/in/johanleduc/",
      mail: "johan.leduc90@gmail.com",
    }
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/pages/`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": `${__dirname}/content/`
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`, `https://fonts.gstatic.com`
        ],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=PT+Serif&display=swap`,
          },
        ],
      },
    },
  ]
};

export default config;
