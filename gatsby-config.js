module.exports = {
  siteMetadata: {
    title: `narek_nazaryan`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": ""
    }
  }, "gatsby-plugin-styled-components"]
};