module.exports = {
  port: 3000,
  session: {
    secret: 'ReactBlog',
    key: 'ReactBlog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/test1'
};
