const { graphqlKoa, graphiqlKoa } = require('graphql-server-koa'),
  { saveSocialInfo, fetchSocialInfo } = require('../controllers/socialinfo'),
  { saveUser, getUser, getUserDetail } = require('../controllers/user'),
  schema = require('../graphql/schema'),
  router = require('koa-router')();

// restful
router.post('/saveinfo', saveSocialInfo)
  .get('/info', fetchSocialInfo)
  .post('/saveuser', saveUser)
  .get('/user', getUser)
  .get('/userdetail', getUserDetail);

// graphql
router.post('/graphql', async (ctx, next) => {
  await graphqlKoa({ schema })(ctx, next);
})
  .get('/graphql', async (ctx, next) => {
    await graphqlKoa({ schema })(ctx, next);
  })
  .get('/graphiql', async (ctx, next) => {
    await graphiqlKoa({ endpointURL: '/graphql' })(ctx, next);
  });

module.exports = router;