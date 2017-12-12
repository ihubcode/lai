const KoaClass = require('koa');
const Router = require('./lib/router.js');
const Middleware = require('./lib/middleware.js');
const assert = require('assert');
const debug = require('debug')('Lai:app');
class LaiClass extends KoaClass {
    constructor(options = {}, ctx) {
        options.baseDir = options.baseDir || process.cwd;
        options.port = options.port ? options.port : 3611;
        options.host = options.host ? options.host : '127.0.0.1';
        super();

        this.ctx = ctx;
        console.log('ctx:', ctx);
        // this.app = ctx.app;
        this.port = options.port;
        this.host = options.host;
        this.BaseContext = this.context;
        this.controller = this.BaseContext;
        this.service = this.BaseContext;
    }
    loadAll() {
        // 加载路由
        this.use(Router.routes());
        this.use(Router.allowedMethods());
        // 加载其他中间件
        this.loadMiddleware();
    }
    loadMiddleware() {

    }
    run() {
        this.loadAll();
        this.listen(this.port);
        console.log('A new application by Lai which run successfully!');
        console.log(`Server running at http://${this.host}:${this.port}`);
    }
}
module.exports = LaiClass