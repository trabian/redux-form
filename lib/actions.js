'use strict';

exports.__esModule = true;
exports.addArrayValue = addArrayValue;
exports.blur = blur;
exports.change = change;
exports.destroy = destroy;
exports.focus = focus;
exports.initialize = initialize;
exports.removeArrayValue = removeArrayValue;
exports.reset = reset;
exports.startAsyncValidation = startAsyncValidation;
exports.startSubmit = startSubmit;
exports.stopAsyncValidation = stopAsyncValidation;
exports.stopSubmit = stopSubmit;
exports.submitFailed = submitFailed;
exports.touch = touch;
exports.untouch = untouch;

var _actionTypes = require('./actionTypes');

function addArrayValue(path, value, index) {
  return { type: _actionTypes.ADD_ARRAY_VALUE, path: path, value: value, index: index };
}

function blur(field, value) {
  return { type: _actionTypes.BLUR, field: field, value: value };
}

function change(field, value) {
  return { type: _actionTypes.CHANGE, field: field, value: value };
}

function destroy() {
  return { type: _actionTypes.DESTROY };
}

function focus(field) {
  return { type: _actionTypes.FOCUS, field: field };
}

function initialize(data) {
  return { type: _actionTypes.INITIALIZE, data: data };
}

function removeArrayValue(path, index) {
  return { type: _actionTypes.REMOVE_ARRAY_VALUE, path: path, index: index };
}

function reset() {
  return { type: _actionTypes.RESET };
}

function startAsyncValidation() {
  return { type: _actionTypes.START_ASYNC_VALIDATION };
}

function startSubmit() {
  return { type: _actionTypes.START_SUBMIT };
}

function stopAsyncValidation(errors) {
  return { type: _actionTypes.STOP_ASYNC_VALIDATION, errors: errors };
}

function stopSubmit(errors) {
  return { type: _actionTypes.STOP_SUBMIT, errors: errors };
}

function submitFailed() {
  return { type: _actionTypes.SUBMIT_FAILED };
}

function touch() {
  for (var _len = arguments.length, fields = Array(_len), _key = 0; _key < _len; _key++) {
    fields[_key] = arguments[_key];
  }

  return { type: _actionTypes.TOUCH, fields: fields };
}

function untouch() {
  for (var _len2 = arguments.length, fields = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fields[_key2] = arguments[_key2];
  }

  return { type: _actionTypes.UNTOUCH, fields: fields };
}