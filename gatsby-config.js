module.exports = {
  siteMetadata: {
    title: 'Great Gatsby',
    desc: 'A working Gatsby site',
  },
  pathPrefix: "/great-gatsby",
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: "6jc66lyfi8yz",
        accessToken: "13ecdd49ed0ad76e5ce8017e666b5adb75a652aed6f79184ec210b2dd7288c93"
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/static/assets`,
      },
    },    
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- end -->`
      },
    },
  ],
};
