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
          visible
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
    let created = 0
    const total = result.data.stores.nodes.length

    // Create Store Pages
    result.data.stores.nodes.forEach(store => {
      if (store.visible) {
        created += 1
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
      }
    })
    console.log(`Pages created: ${created} / ${total}`)

    // TODO: Create category pages
    created = 0
  })
}
