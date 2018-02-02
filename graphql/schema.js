const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql'),
  { socialInfo, socialInfos, infoSave } = require('./socialinfo'),
  { user, users, userSave, userUpdate } = require('./user');

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'QuerySome',
    fields: {
      user,
      users,
      socialInfos,
      socialInfo,
    },
    description: '查询操作',
  }),
  mutation: new GraphQLObjectType({
    name: 'MutationSome',
    fields: {
      userSave,
      infoSave,
      userUpdate,
    },
    description: '修改操作',
  }),
});
