/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')

// module.exports.onCreateNode = ({ node, actions }) => {
//     const { createNode, createNodeField } = actions

//     if(node.internal.type === 'MarkdownRemark'){
//         const slug = path.basename(node.fileAbsolutePath, '.md')

//         createNodeField({ node, name: 'slug', value: slug})
//     }
//     // Transform the new node here and create a new node or
//     // create a new node field.
//     // console.log(node)
//   }

  module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`)
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    const res = await graphql(`
    query loadPagesQuery {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach( edge => {
      createPage({
          component: blogPostTemplate,
          path: `/blog/${edge.node.slug}`,
          context: {
              slug: edge.node.slug
          }
      })
  })
}

