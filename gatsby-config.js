require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: process.env.PROJECT_NAME,
    siteUrl: process.env.SITE_URL
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": process.env.DATO_API_TOKEN
    }
  }, "gatsby-plugin-styled-components"]
};