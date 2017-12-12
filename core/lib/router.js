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
