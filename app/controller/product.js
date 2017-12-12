/*
* @Author: ihubcode <1987357952@qq.com>
* @Date:   2017-12-12 10:02:23
* @Last Modified by:   ihubcode <1987357952@qq.com>
* @Last Modified time: 2017-12-12 10:02:23
*/
module.exports = class Product {
    constructor (ctx) {
       this.ctx = ctx;
    }
    index (ctx){
      ctx.body = 'product-index';
    }
    list (ctx) {
      ctx.body = 'product-list';
    }
    detail (ctx) {
      ctx.body = 'product-detail';
    }
}
