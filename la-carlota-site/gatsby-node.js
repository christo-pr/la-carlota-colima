const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const storeTemplate = path.resolve("./src/templates/store.js")

  return graphql(`
    query storesPagesQuery {
      stores: allSanityStore {
        nodes {
          id
          name
          slug {
            current
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create Store Pages
    result.data.stores.nodes.forEach(store => {
      createPage({
        path: `/lugares/${store.slug.current}`,
        component: storeTemplate,
        context: {
          id: store.id,
        },
      })
      console.log(
        `Created page for ${store.name} at: /lugares/${store.slug.current}`
      )
    })

    // TODO: Create category pages
  })
}
