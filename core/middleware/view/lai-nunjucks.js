const helper = require ('../../lib/helper.js');
const nunjucks = require('nunjucks');
const defaultOptions = {
    autoescape: true,
    watch: false,
    noCache: false,
    throwOnUndeined: false
};

class Nunjucks {
    constructor(viewFile, viewData, config) {
        this.viewFile = viewFile;
        this.viewData = viewData;
        this.config = config;
        this.handleOptions = Object.assign({}, defaultOptions, config.options);
    }

    render() {
      let env;
      const viewPath = this.config.viewPath;
      const viewFile = this.viewFile;
      if (viewFile.indexOf(viewPath) !== 0) {
        env = nunjucks.configure(this.handleOptions);
      } else {
        env = nunjucks.configure(viewPath, this.handleOptions);
      }

      const beforeRender = this.config.beforeRender;
      if (beforeRender) {
        beforeRender(env, nunjucks, this.handleOptions);
      }

      const fn = helper.promisify(env.render, env);
      return fn(viewFile, this.viewData);
    }
}

module.exports = Nunjucks;