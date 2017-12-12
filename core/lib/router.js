/*
* @Author: ihubcode <1987357952@qq.com>
* @Date:   2017-12-12 10:02:23
* @Last Modified by:   ihubcode <1987357952@qq.com>
* @Last Modified time: 2017-12-12 10:02:23
*/

const KoaRouter = require('koa-router');
const Router = new KoaRouter();
const HomeController = require('../../app/controller/home.js');
const ProductController = require('../../app/controller/product.js');
const 
const Product = new ProductController();
Router.get('/', HomeController.index)
      .get('/test', HomeController.test )
      .get('/product/index', async (ctx, next) => {
          await Product.index(ctx);
      }) ;

module.exports = Router
