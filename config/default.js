module.exports = {
  port: 3000,
  session: {
    secret: 'myblog',
    key: 'ReactBlog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/ReactBlog'
};
