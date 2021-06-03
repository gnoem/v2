module.exports = {
  siteMetadata: {
    title: 'naomi g.w. • web developer',
    description: "Hi, I'm Naomi! I'm a designer and developer who specializes in building beautiful, interactive websites and web apps.",
    url: 'https://ngw.dev',
    image: '/thumbnail.png'
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-HGX7SPRWPP'
        ]
      }
    }
  ],
};
