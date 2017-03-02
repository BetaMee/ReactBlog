var express = require('express');
var router = express.Router();



// var CommentModel = require('../models/comments');
var checkLogin = require('../middlewares/check').checkLogin;
import PostsEntity from '../models/posts.js';

// GET /posts 所有用户或者特定用户的文章页
//   eg: GET /posts?author=xxx
router.get('/', function(req, res, next) {

  PostsEntity.create({
    postTitle:"hhh",
    postContent:"hhhh",
    pv:100
  });
  // PostsEntity
  //   .getPosts(6,0)
  //   .then(res=>{
  //     console.log(res);
  //   })
  //   .catch(e=>{
  //     console.log("error");
  //   });
  //   res.send("hhh");
  res.send("gggg");
});



// POST /posts 发表一篇文章
router.post('/', checkLogin, function(req, res, next) {
  // var author = req.session.user._id;
  var author = req.body.user;//依赖于客户端的user_id
  var title = req.body.title;
  var content = req.body.content;

  var post = {
    author: author,//author是id
    postTitle: title,
    postContent: content,
    pv: 0
  };

   PostsEntity.create({
    postTitle:"hhh",
    postContent:"hhhh",
    pv:100
  });
});

// GET /posts/:postId 单独一篇的文章页
router.get('/:postId', function(req, res, next) {
  var postId = req.params.postId;
  
  Promise.all([
    PostModel.getPostById(postId),// 获取文章信息
    CommentModel.getComments(postId),// 获取该文章所有留言
    PostModel.incPv(postId)// pv 加 1
  ])
  .then(function (result) {
    var post = result[0];
    var comments = result[1];
    if (!post) {
      throw new Error('该文章不存在');
    }

    res.render('post', {
      post: post,
      comments: comments
    });
  })
  .catch(next);
});

// POST /posts/edit 更新一篇文章
router.post('/edit', checkLogin, function(req, res, next) {
  var postId = req.params.postId;
  var author = req.session.user._id;
  var title = req.fields.title;
  var content = req.fields.content;

  PostModel.updatePostById(postId, author, { title: title, content: content })
    .then(function () {
      req.flash('success', '编辑文章成功');
      // 编辑成功后跳转到上一页
      res.redirect(`/posts/${postId}`);
    })
    .catch(next);
});

// GET /posts/remove 删除一篇文章
router.post('/remove', checkLogin, function(req, res, next) {
  var postId = req.params.postId;
  var author = req.session.user._id;

  PostModel.delPostById(postId, author)
    .then(function () {
      req.flash('success', '删除文章成功');
      // 删除成功后跳转到主页
      res.redirect('/posts');
    })
    .catch(next);
});



module.exports = router;
