/**
 * Writes any potentially deep value from an object using dot and array syntax,
 * and returns a new copy of the object.
 */
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var write = function write(_x, _x2, _x3) {
  var _again = true;

  _function: while (_again) {
    var path = _x,
        value = _x2,
        object = _x3;

    var _extends7;

    _again = false;

    var dotIndex = path.indexOf('.');
    if (dotIndex === 0) {
      _x = path.substring(1);
      _x2 = value;
      _x3 = object;
      _again = true;
      _extends7 = dotIndex = undefined;
      continue _function;
    }
    var openIndex = path.indexOf('[');
    var closeIndex = path.indexOf(']');
    if (dotIndex >= 0 && (openIndex < 0 || dotIndex < openIndex)) {
      var _extends2;

      // is dot notation
      var key = path.substring(0, dotIndex);
      return _extends({}, object, (_extends2 = {}, _extends2[key] = write(path.substring(dotIndex + 1), value, object[key] || {}), _extends2));
    }
    if (openIndex >= 0 && (dotIndex < 0 || openIndex < dotIndex)) {
      var _extends6;

      var _extends4;

      var _extends3;

      var _extends5;

      var _ret = (function () {
        // is array notation
        if (closeIndex < 0) {
          throw new Error('found [ but no ]');
        }
        var key = path.substring(0, openIndex);
        var index = path.substring(openIndex + 1, closeIndex);
        var array = object[key] || [];
        var rest = path.substring(closeIndex + 1);
        if (index) {
          // indexed array
          if (rest.length) {
            // need to keep recursing
            var dest = array[index] || {};
            var arrayCopy = [].concat(array);
            arrayCopy[index] = write(rest, value, dest);
            return {
              v: _extends({}, object || {}, (_extends3 = {}, _extends3[key] = arrayCopy, _extends3))
            };
          }
          var copy = [].concat(array);
          copy[index] = typeof value === 'function' ? value(copy[index]) : value;
          return {
            v: _extends({}, object || {}, (_extends4 = {}, _extends4[key] = copy, _extends4))
          };
        }
        // indexless array
        if (rest.length) {
          // need to keep recursing
          var arrayCopy = array.map(function (dest) {
            return write(rest, value, dest);
          });
          return {
            v: _extends({}, object || {}, (_extends5 = {}, _extends5[key] = arrayCopy, _extends5))
          };
        }
        return {
          v: _extends({}, object || {}, (_extends6 = {}, _extends6[key] = array.map(function (dest) {
            return typeof value === 'function' ? value(dest) : value;
          }), _extends6))
        };
      })();

      if (typeof _ret === 'object') return _ret.v;
    }
    return _extends({}, object, (_extends7 = {}, _extends7[path] = typeof value === 'function' ? value(object[path]) : value, _extends7));
  }
};

exports['default'] = write;
module.exports = exports['default'];