import {PostsModel} from '../lib/mongo.js';

const PostsEntity = {
  create: (post)=>{
    return PostsModel.create(post);//使用Model来进行操作
  },

  getPostsById:(postId)=>{
    return PostsModel
            .findOne({_id:postId})
            // .populate('author')//填充
            // .addCreateAt()
            // .addCommentsCount()
            .exec();
  },

  getPosts:(counts,skip)=>{
    return PostsModel
            .find()
            .limit(counts)
            .skip(skip)
            .populate('users')
            .exec()
  }
};

export default PostsEntity;