/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "La Carlota",
    siteUrl: "https://la-carlota.io",
    description:
      "Cartera de locales Colimota - Restaurantes/Comida Rapida de Colima solo por recomendacion local.",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "xolpg6jo",
        token: process.env.SANITY_TOKEN,
        dataset: process.env.SANITY_DATASET || "develop",
        watchMode: process.env.NODE_ENV !== "production",
      },
    },
  ],
}
