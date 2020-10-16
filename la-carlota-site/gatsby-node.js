const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const storeTemplate = path.resolve("./src/templates/store.js")
  const categoryTemplate = path.resolve("./src/templates/category.js")
  const allStoresTemplate = path.resolve("./src/templates/all.js")

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
      categories: allSanityCategory {
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
    const { stores, categories } = result.data
    let created = 0,
      total = stores.nodes.length

    // Create Store Pages
    stores.nodes.forEach(store => {
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
          `Created page for store ${store.name} at: /lugares/${store.slug.current}`
        )
      }
    })
    console.log(`Store Pages created: ${created} / ${total}`)

    // Create category pages
    total = categories.nodes.length

    categories.nodes.forEach(category => {
      createPage({
        path: `/categorias/${category.slug.current}`,
        component: categoryTemplate,
        context: {
          categoryID: category.id,
        },
      })
      console.log(
        `Created page for category ${category.name} at: /categorias/${category.slug.current}`
      )
    })
    console.log(`Category Pages created: ${total} / ${total}`)

    // Create All Stores page
    createPage({
      path: `/lugares`,
      component: allStoresTemplate,
    })
  })
}
