const mongoose = require('mongoose'),
 config = require('../config');

require('./schema/socialinfo');
require('./schema/user');

// 连接
const database = () => {
    mongoose.set('debug', true);

    mongoose.connect(config.dbConnect);

    mongoose.connection.on('disconnected', () => {
      mongoose.connect(config.dbConnect);
  });
    mongoose.connection.on('error', err => {
      console.error(err);
  });

    mongoose.connection.on('open', async () => {
      console.log('Connected to DB ', config.dbConnect);
  });
};
database(); // 链接数据库并且初始化数据模型