"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _context;

var a = 1;
var b = 2;
var c = a + b; // Promise是api层面的，是一个es6中的全局对象

var p = new _promise.default(function (resolve, reject) {
  resolve(100);
});
var list = (0, _map.default)(_context = [1, 2, 3, 4]).call(_context, function (item) {
  return item * 2;
});
var Student = /*#__PURE__*/(0, _createClass2.default)(function Student(name, age) {
  (0, _classCallCheck2.default)(this, Student);
  this.name = name;
  this.age = age;
});
