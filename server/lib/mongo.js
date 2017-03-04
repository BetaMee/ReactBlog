const config = require('config-lite');
const mongoose = require('mongoose');
import {addCreateAt} from './plugin.js';

mongoose.Promise=global.Promise;
mongoose.connect(config.mongodb);//连接到mongodb-test1的数据库中
var Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(" we're connected!");
});


//定义PostsSchema
const PostsSchema = new Schema({
  // postId:{type:Schema.Types.ObjectId},
  author:{type:Schema.Types.ObjectId, ref:"users"},
  postTitle:{type:String},
  postTime:{type:Date,default:Date.now},
  postContent:{type:String,default:''},
  pv:{type:Number},
});

PostsSchema.plugin(addCreateAt);



//定义UserShema
const UserSchema = new Schema({
  name:{type:String},
  password:{type:String},
  gender:{type:String},
  bio:{type:String},
  sign:{type:String},
  avatar:{type:String},
  posts:[{type:Schema.Types.ObjectId, ref:'posts'}]
});



export const UserModel = mongoose.model("users",UserSchema);
export const PostsModel = mongoose.model("posts",PostsSchema);//PostsModel模型

