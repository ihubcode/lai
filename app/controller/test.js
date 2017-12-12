const BaseContext = require('../../core/lib/baseContext');
module.exports = class Test extends BaseContext {
    constructor(ctx){
      super(ctx);
    }

    index(){
      this.ctx.body="test";
    }
}