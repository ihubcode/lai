module.exports = class BaseContext {
    constructor(ctx) {
       this.ctx = ctx;
       this.app = ctx.app;
    }
}