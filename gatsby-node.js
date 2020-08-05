/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

const remark = require("remark")
const remarkHTML = require("remark-html")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const slug = path.basename(value)

    createNodeField({
      name: `slug`,
      node,
      value: slug === "home" ? "" : slug,
    })
  }

  // add custom markdown field from frontmatter..
  // https://github.com/gatsbyjs/gatsby/issues/5021
  // TODO: consider using something like
  // https://github.com/WhiteAbeLincoln/gatsby-transformer-remark-frontmatter

  const openingHoursContent =
    node.frontmatter && node.frontmatter.openingHoursContent

  if (openingHoursContent) {
    const value = remark()
      .use(remarkHTML)
      .processSync(openingHoursContent)
      .toString()

    createNodeField({
      name: `openingHoursContent`,
      node,
      value,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allPages: allMarkdownRemark(
        filter: { frontmatter: { template: { ne: null } } }
        limit: 1000
      ) {
        pages: edges {
          page: node {
            id
            fields {
              slug
            }
            frontmatter {
              template
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const pages = result.data.allPages.pages
      .map((x) => x.page)
      .map((page) => ({
        id: page.id,
        slug: page.fields.slug,
        template: page.frontmatter.template,
      }))

    pages.forEach((page) => {
      createPage({
        path: `/${page.slug}`,
        component: path.resolve(`src/templates/${page.template}.js`),
        context: {
          id: page.id,
        },
      })
    })
  })
}
