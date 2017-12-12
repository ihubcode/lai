const BaseContext = require('../../core/lib/baseContext');
module.exports = class Product extends BaseContext {
    constructor (ctx) {
       super(ctx);
    }
    index (){

      // 开始计时
      console.time('testForEach');
      this.ctx.body = 'product-index';
      
      console.log('this.app：', this.app);
      // 停止计时，输出时间
      console.timeEnd('testForEach');
    }
    list () {
      this.ctx.body = 'product-list';
    }
    detail () {
      this.ctx.body = 'product-detail';
    }
}