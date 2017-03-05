import {UserModel} from '../lib/mongo.js';

module.exports = {
  // 注册一个用户
  create: (user)=>{
    return UserModel.create(user);
  },

  // 通过用户名获取用户信息
  getUserByName: (name)=>{
    return UserModel
      .findOne({ name: name })
      .exec();
  }
};
