const {
    graphql,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
  } = require('graphql'),
  mongoose = require('mongoose'),
  { socialInfoType } = require('./socialinfo'),
  User = mongoose.model('User');
const userType = new GraphQLObjectType({
  name: 'user',
  fields: {
    _id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    gender: {
      type: GraphQLString,
    },
    age: {
      type: GraphQLInt,
    },
    socialInfo: {
      type: socialInfoType,
    },
  },
});

exports.user = {
  type: userType,
  description: '查询单个用户数据',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID), // 不为空
    },
  },
  async resolve (root, params, options) {
    const { id } = params;
    return await User.findOne({ _id: id }).populate({
      path: 'socialInfo',
      select: 'phone email relation hobby',
    });
  },
};

exports.users = {
  type: new GraphQLList(userType),
  description: '查询用户列表',
  args: {},
  async resolve (root, params, options) {
    return await User.find({}).populate({
      path: 'socialInfo',
      select: 'phone email relation hobby',
    });
  },
};

exports.userSave = {
  type: userType,
  description: '保存用户数据',
  args: {
    name: {
      name: 'name',
      type: new GraphQLNonNull(GraphQLString),
    },
    gender: {
      name: 'gender',
      type: new GraphQLNonNull(GraphQLString),
    },
    age: {
      name: 'age',
      type: new GraphQLNonNull(GraphQLInt),
    },
    socialInfo: {
      name: 'socialInfo',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  async resolve (root, params, options) {
    return await User.create(params);
  }
};

exports.userUpdate = {
  type: userType,
  description: '更新用户数据',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      name: 'name',
      type: GraphQLString,
    },
    gender: {
      name: 'gender',
      type: GraphQLString,
    },
    age: {
      name: 'age',
      type: GraphQLInt,
    },
  },
  async resolve (root, params, options) {
    const { id } = params;
    delete params.id;
    return await User.findOneAndUpdate({ _id: id }, { $set: params });
  }
};
