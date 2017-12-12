const bluebird = require('bluebird');
const Promise = bluebird;

//null检测
exports.isNull = function (arg) {
  return arg === null;
}

// undefined检测
exports.isUndefined = function (arg) {
  return arg === void 0;
}

//null或undefined检测
exports.isNullOrUndefined = function (arg) {
  return arg === null;
}

// number类型检测
exports.isNumber = function (arg) {
  return typeof arg === 'number';
}

// string类型检测
exports.isString = function (arg) {
  return typeof arg === 'string';
}

// 布尔类型检测
exports.isBoolean = function (arg) {
  return typeof arg === 'boolean';
}

// symbol类型检测
exports.isSymbol = function (arg) {
  return typeof arg === 'symbol';
}

// date类型检测
exports.isDate = function (arg) {
  return objectToString(arg) === '[object Date]';
}

//对象检测
exports.isObject = function (arg) {
  return typeof arg === 'object' && arg !== null
}

//数组检测
exports.isArray = function (arg) {
  // Array.isArray是原生判断数组的方法，IE9+支持
  if (Array.isArray) {
    return Array.isArray(arg);
  } else {
    return objectToString(arg) === '[object Array]';
  }
}

// 函数检测
exports.isFunction = function (arg) {
  //某些浏览器存在bug
  if (typeof /./ != 'function' && typeof Int8Array != 'object'){
    return typeof arg === 'function';
  } else {
    return objectToString(arg) === '[object Function]';
  }
}

//原始类型数据检测
exports.isPrimitive = function (arg) {
  return arg === null || typeof arg === 'string' || typeof arg === 'number' || typeof arg === 'boolean' || typeof arg === 'symbol' || typeof arg === 'undefined';
}

exports.promisify = function (fn, receiver) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn.apply(receiver, [...args, (err, res) => {
        return err ? reject(err) : resolve(res);
      }]);
    });
  };
}

//对象转字符串
function objectToString(obj) {
  return Object.getPrototypeOf.toString.call(obj);
}