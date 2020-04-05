"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
function isDef(value) {
    return value !== undefined && value !== null;
}
exports.isDef = isDef;
function isObj(x) {
    var type = typeof x === "undefined" ? "undefined" : _typeof(x);
    return x !== null && (type === 'object' || type === 'function');
}
exports.isObj = isObj;
function isNumber(value) {
    return (/^\d+(\.\d+)?$/.test(value)
    );
}
exports.isNumber = isNumber;
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
exports.range = range;
function nextTick(fn) {
    setTimeout(function () {
        fn();
    }, 1000 / 30);
}
exports.nextTick = nextTick;
var systemInfo = null;
function getSystemInfoSync() {
    if (systemInfo == null) {
        systemInfo = wx.getSystemInfoSync();
    }
    return systemInfo;
}
exports.getSystemInfoSync = getSystemInfoSync;
function addUnit(value) {
    if (!isDef(value)) {
        return undefined;
    }
    value = String(value);
    return isNumber(value) ? value + "px" : value;
}
exports.addUnit = addUnit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiaXNEZWYiLCJ1bmRlZmluZWQiLCJpc09iaiIsIngiLCJ0eXBlIiwiaXNOdW1iZXIiLCJ0ZXN0IiwicmFuZ2UiLCJudW0iLCJtaW4iLCJtYXgiLCJNYXRoIiwibmV4dFRpY2siLCJmbiIsInNldFRpbWVvdXQiLCJzeXN0ZW1JbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3eCIsImFkZFVuaXQiLCJTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLFNBQVNDLEtBQVQsQ0FBZUQsS0FBZixFQUFzQjtBQUNsQixXQUFPQSxVQUFVRSxTQUFWLElBQXVCRixVQUFVLElBQXhDO0FBQ0g7QUFDREQsUUFBUUUsS0FBUixHQUFnQkEsS0FBaEI7QUFDQSxTQUFTRSxLQUFULENBQWVDLENBQWYsRUFBa0I7QUFDZCxRQUFJQyxjQUFjRCxDQUFkLHlDQUFjQSxDQUFkLENBQUo7QUFDQSxXQUFPQSxNQUFNLElBQU4sS0FBZUMsU0FBUyxRQUFULElBQXFCQSxTQUFTLFVBQTdDLENBQVA7QUFDSDtBQUNETixRQUFRSSxLQUFSLEdBQWdCQSxLQUFoQjtBQUNBLFNBQVNHLFFBQVQsQ0FBa0JOLEtBQWxCLEVBQXlCO0FBQ3JCLFdBQU8saUJBQWdCTyxJQUFoQixDQUFxQlAsS0FBckI7QUFBUDtBQUNIO0FBQ0RELFFBQVFPLFFBQVIsR0FBbUJBLFFBQW5CO0FBQ0EsU0FBU0UsS0FBVCxDQUFlQyxHQUFmLEVBQW9CQyxHQUFwQixFQUF5QkMsR0FBekIsRUFBOEI7QUFDMUIsV0FBT0MsS0FBS0YsR0FBTCxDQUFTRSxLQUFLRCxHQUFMLENBQVNGLEdBQVQsRUFBY0MsR0FBZCxDQUFULEVBQTZCQyxHQUE3QixDQUFQO0FBQ0g7QUFDRFosUUFBUVMsS0FBUixHQUFnQkEsS0FBaEI7QUFDQSxTQUFTSyxRQUFULENBQWtCQyxFQUFsQixFQUFzQjtBQUNsQkMsZUFBVyxZQUFZO0FBQ25CRDtBQUNILEtBRkQsRUFFRyxPQUFPLEVBRlY7QUFHSDtBQUNEZixRQUFRYyxRQUFSLEdBQW1CQSxRQUFuQjtBQUNBLElBQUlHLGFBQWEsSUFBakI7QUFDQSxTQUFTQyxpQkFBVCxHQUE2QjtBQUN6QixRQUFJRCxjQUFjLElBQWxCLEVBQXdCO0FBQ3BCQSxxQkFBYUUsR0FBR0QsaUJBQUgsRUFBYjtBQUNIO0FBQ0QsV0FBT0QsVUFBUDtBQUNIO0FBQ0RqQixRQUFRa0IsaUJBQVIsR0FBNEJBLGlCQUE1QjtBQUNBLFNBQVNFLE9BQVQsQ0FBaUJuQixLQUFqQixFQUF3QjtBQUNwQixRQUFJLENBQUNDLE1BQU1ELEtBQU4sQ0FBTCxFQUFtQjtBQUNmLGVBQU9FLFNBQVA7QUFDSDtBQUNERixZQUFRb0IsT0FBT3BCLEtBQVAsQ0FBUjtBQUNBLFdBQU9NLFNBQVNOLEtBQVQsSUFBa0JBLFFBQVEsSUFBMUIsR0FBaUNBLEtBQXhDO0FBQ0g7QUFDREQsUUFBUW9CLE9BQVIsR0FBa0JBLE9BQWxCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZnVuY3Rpb24gaXNEZWYodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xyXG59XHJcbmV4cG9ydHMuaXNEZWYgPSBpc0RlZjtcclxuZnVuY3Rpb24gaXNPYmooeCkge1xyXG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgeDtcclxuICAgIHJldHVybiB4ICE9PSBudWxsICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKTtcclxufVxyXG5leHBvcnRzLmlzT2JqID0gaXNPYmo7XHJcbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gL15cXGQrKFxcLlxcZCspPyQvLnRlc3QodmFsdWUpO1xyXG59XHJcbmV4cG9ydHMuaXNOdW1iZXIgPSBpc051bWJlcjtcclxuZnVuY3Rpb24gcmFuZ2UobnVtLCBtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcclxufVxyXG5leHBvcnRzLnJhbmdlID0gcmFuZ2U7XHJcbmZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBmbigpO1xyXG4gICAgfSwgMTAwMCAvIDMwKTtcclxufVxyXG5leHBvcnRzLm5leHRUaWNrID0gbmV4dFRpY2s7XHJcbnZhciBzeXN0ZW1JbmZvID0gbnVsbDtcclxuZnVuY3Rpb24gZ2V0U3lzdGVtSW5mb1N5bmMoKSB7XHJcbiAgICBpZiAoc3lzdGVtSW5mbyA9PSBudWxsKSB7XHJcbiAgICAgICAgc3lzdGVtSW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3lzdGVtSW5mbztcclxufVxyXG5leHBvcnRzLmdldFN5c3RlbUluZm9TeW5jID0gZ2V0U3lzdGVtSW5mb1N5bmM7XHJcbmZ1bmN0aW9uIGFkZFVuaXQodmFsdWUpIHtcclxuICAgIGlmICghaXNEZWYodmFsdWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHZhbHVlID0gU3RyaW5nKHZhbHVlKTtcclxuICAgIHJldHVybiBpc051bWJlcih2YWx1ZSkgPyB2YWx1ZSArIFwicHhcIiA6IHZhbHVlO1xyXG59XHJcbmV4cG9ydHMuYWRkVW5pdCA9IGFkZFVuaXQ7XHJcbiJdfQ==