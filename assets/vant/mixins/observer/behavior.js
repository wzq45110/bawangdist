"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.behavior = Behavior({
    methods: {
        set: function set(data, callback) {
            var _this = this;
            return new Promise(function (resolve) {
                _this.setData(data, function () {
                    if (callback && typeof callback === 'function') {
                        callback.call(_this);
                    }
                    resolve();
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlaGF2aW9yLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiYmVoYXZpb3IiLCJCZWhhdmlvciIsIm1ldGhvZHMiLCJzZXQiLCJkYXRhIiwiY2FsbGJhY2siLCJfdGhpcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0RGF0YSIsImNhbGwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQUQsUUFBUUUsUUFBUixHQUFtQkMsU0FBUztBQUN4QkMsYUFBUztBQUNMQyxhQUFLLGFBQVVDLElBQVYsRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQzNCLGdCQUFJQyxRQUFRLElBQVo7QUFDQSxtQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQjtBQUNsQ0Ysc0JBQU1HLE9BQU4sQ0FBY0wsSUFBZCxFQUFvQixZQUFZO0FBQzVCLHdCQUFJQyxZQUFZLE9BQU9BLFFBQVAsS0FBb0IsVUFBcEMsRUFBZ0Q7QUFDNUNBLGlDQUFTSyxJQUFULENBQWNKLEtBQWQ7QUFDSDtBQUNERTtBQUNILGlCQUxEO0FBTUgsYUFQTSxDQUFQO0FBUUg7QUFYSTtBQURlLENBQVQsQ0FBbkIiLCJmaWxlIjoiYmVoYXZpb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmJlaGF2aW9yID0gQmVoYXZpb3Ioe1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YShkYXRhLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKF90aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==