/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const fs = require('fs-extra')

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.absolutePath && node.absolutePath.endsWith('.json')) {
    const content = await fs.readFile(node.absolutePath, 'utf8')
    createNodeField({ node, name: 'content', value: content })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allPages: allPagesJson {
        pages: edges {
          page: node {
            slug
            template
            schemaId
            schemaName
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pages = result.data.allPages.pages

    return pages.forEach(({ page }) => {
      createPage({
        path: page.slug,
        component: path.resolve(`src/templates/${page.template}.js`),
        context: {
          slug: page.slug,
          schemaId: page.schemaId,
          schemaName: page.schemaName
        },
      })
    })
  })
}
