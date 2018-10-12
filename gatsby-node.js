/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allLocationsJson {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const locations = result.data.allLocationsJson.edges

    return locations.forEach(({ node }) => {
      const id = node.id
      createPage({
        path: id,
        component: path.resolve(`src/templates/cafe.js`),
        context: {
          id: `https://www.blueberryfood.co.uk/${id}`,
        },
      })
    })
  })
}
