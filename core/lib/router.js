const KoaRouter = require('koa-router');
const Router = new KoaRouter();
const HomeController = require('../../app/controller/home.js');
const ProductController = require('../../app/controller/product.js');

Router.get('/', HomeController.index)
      .get('/test', HomeController.test )
      .get('/product/index', async (ctx, next) => {
          const Product = new ProductController(ctx);
          await Product.index();
      }) ;

module.exports = Router