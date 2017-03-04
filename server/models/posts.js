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
            .find({},null,{skip:skip,limit:counts})       
            .populate({
              path:"author",
              select:{//select指定要填充的字段
                _id:0,//0表示不填
                name:1,
                sign:1,
                avatar:1
              }
            })
            .exec()
  },
  getPostsCounts:()=>{
    return PostsModel
            .count({})
  },
  getPostById:(postId)=>{
    return PostsModel
            .findById(postId)
            .populate({
              path:"author",
              select:{//select指定要填充的字段
                _id:0,//0表示不填
                name:1,
                bio:1,
                sign:1,
                avatar:1
              }
            })
            .exec()
  },

  updatePostById:(postId,content,title)=>{
    return PostsModel
            .findByIdAndUpdate({_id:postId},{$set:{
              postContent:content,
              postTitle:title
            }}, { new: true }) 
  },

  removePostById:(postId)=>{
    return PostsModel
            .findByIdAndRemove(postId)
  }
};

export default PostsEntity;