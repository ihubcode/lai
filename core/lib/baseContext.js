/*
* @Author: ihubcode <1987357952@qq.com>
* @Date:   2017-12-12 10:02:23
* @Last Modified by:   ihubcode <1987357952@qq.com>
* @Last Modified time: 2017-12-12 10:02:23
*/
module.exports = class BaseContext {
    constructor(ctx){
        this.ctx = ctx;
        this.app = ctx.app;
        this.config = ctx.config; 
    }
}
