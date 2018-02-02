const {
    graphql,
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInputObjectType,
  } = require('graphql'),
  mongoose = require('mongoose'),
  SocialInfo = mongoose.model('SocialInfo');

const extraType = new GraphQLObjectType({ // 定义时间 类型
  name: 'extra',
  fields: {
    createdAt: {
      type: GraphQLString,
    },
    updatedAt: {
      type: GraphQLString,
    },
  },
});
const relationType = new GraphQLObjectType({
  name: 'relation',
  fields: {
    friends: {
      type: new GraphQLList(GraphQLString),
    },
    family: {
      type: new GraphQLList(GraphQLString),
    },
  },
});
const relationInputType = new GraphQLInputObjectType({
  name: 'relationInput',
  fields: {
    friends: {
      type: new GraphQLList(GraphQLString),
    },
    family: {
      type: new GraphQLList(GraphQLString),
    },
  },
});
const socialInfoType = new GraphQLObjectType({
  name: 'socialInfo',
  fields: {
    _id: {
      type: GraphQLID,
    },
    email: {
      type: GraphQLString,
    },
    phone: {
      type: GraphQLFloat,
    },
    hobby : {
      type: new GraphQLList(GraphQLString),
    },
    relation: {
      type: relationType,
    },
    extra: {
      type: extraType,
    },
  },
});
exports.extraType = extraType;
exports.socialInfoType = socialInfoType;
exports.socialInfos = {
  type: new GraphQLList(socialInfoType),
  description: '查询多个用户关联的社会属性',
  args: {},
  async resolve (root, params, options) {
    return await SocialInfo.find({});
    // return await fetchInfo(this);
  }
};
exports.socialInfo = {
  type: socialInfoType,
  description: '查询单个用户关联的社会属性',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID), // 不为空
    },
  },
  async resolve (root, params, options) {
    const { id } = params;
    return await SocialInfo.findOne({ _id: id });
  },
};
exports.infoSave = {
  type: socialInfoType,
  description: '保存单个用户的社会属性',
  args: {
    email: {
      name: 'email',
      type: GraphQLString,
    },
    phone: {
      name: 'phone',
      type: GraphQLFloat,
    },
    hobby : {
      name: 'hobby',
      type: new GraphQLList(GraphQLString),
    },
    relation : {
      name: 'relationInput',
      type: relationInputType,
    },
  },
  async resolve (root, params, options) {
    const re = await SocialInfo.create(params);
    console.log(re);
    return re;
    // return await fetchInfo(this);
  }
};
