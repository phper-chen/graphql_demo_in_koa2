// 引入模块
const Koa = require('koa'),
  KoaStatic = require('koa-static'),
  Router = require('koa-router'),
  bodyParser = require('koa-bodyparser'),
  app = new Koa(),
  router = new Router(),
  port = 3344;
require('./mongodb'); // 引入数据库链接实例
const GraphqlRouter = require('./router');
app.use(bodyParser());
app.use(KoaStatic(__dirname + '/public'));

router.use('', GraphqlRouter.routes());
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port);

console.log(`graphQL server listen port: ${port}`);