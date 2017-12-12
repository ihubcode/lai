/*
* @Author: ihubcode <1987357952@qq.com>
* @Date:   2017-12-12 10:02:23
* @Last Modified by:   ihubcode <1987357952@qq.com>
* @Last Modified time: 2017-12-12 10:02:23
*/
const Lai = require('./core/lai');
const config = require('./config/index');
const app = new Lai(config);
app.run();
