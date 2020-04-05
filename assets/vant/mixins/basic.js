"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.basic = Behavior({
    methods: {
        $emit: function $emit() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.triggerEvent.apply(this, args);
        },
        getRect: function getRect(selector, all) {
            var _this = this;
            return new Promise(function (resolve) {
                wx.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
                    if (all && Array.isArray(rect) && rect.length) {
                        resolve(rect);
                    }
                    if (!all && rect) {
                        resolve(rect);
                    }
                }).exec();
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiYmFzaWMiLCJCZWhhdmlvciIsIm1ldGhvZHMiLCIkZW1pdCIsImFyZ3MiLCJfaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInRyaWdnZXJFdmVudCIsImFwcGx5IiwiZ2V0UmVjdCIsInNlbGVjdG9yIiwiYWxsIiwiX3RoaXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInd4IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsIkFycmF5IiwiaXNBcnJheSIsImV4ZWMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQUQsUUFBUUUsS0FBUixHQUFnQkMsU0FBUztBQUNyQkMsYUFBUztBQUNMQyxlQUFPLGlCQUFZO0FBQ2YsZ0JBQUlDLE9BQU8sRUFBWDtBQUNBLGlCQUFLLElBQUlDLEtBQUssQ0FBZCxFQUFpQkEsS0FBS0MsVUFBVUMsTUFBaEMsRUFBd0NGLElBQXhDLEVBQThDO0FBQzFDRCxxQkFBS0MsRUFBTCxJQUFXQyxVQUFVRCxFQUFWLENBQVg7QUFDSDtBQUNELGlCQUFLRyxZQUFMLENBQWtCQyxLQUFsQixDQUF3QixJQUF4QixFQUE4QkwsSUFBOUI7QUFDSCxTQVBJO0FBUUxNLGlCQUFTLGlCQUFVQyxRQUFWLEVBQW9CQyxHQUFwQixFQUF5QjtBQUM5QixnQkFBSUMsUUFBUSxJQUFaO0FBQ0EsbUJBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUI7QUFDbENDLG1CQUFHQyxtQkFBSCxHQUNLQyxFQURMLENBQ1FMLEtBRFIsRUFDZUQsTUFBTSxXQUFOLEdBQW9CLFFBRG5DLEVBQzZDRCxRQUQ3QyxFQUVLUSxrQkFGTCxDQUV3QixVQUFVQyxJQUFWLEVBQWdCO0FBQ3BDLHdCQUFJUixPQUFPUyxNQUFNQyxPQUFOLENBQWNGLElBQWQsQ0FBUCxJQUE4QkEsS0FBS2IsTUFBdkMsRUFBK0M7QUFDM0NRLGdDQUFRSyxJQUFSO0FBQ0g7QUFDRCx3QkFBSSxDQUFDUixHQUFELElBQVFRLElBQVosRUFBa0I7QUFDZEwsZ0NBQVFLLElBQVI7QUFDSDtBQUNKLGlCQVRELEVBVUtHLElBVkw7QUFXSCxhQVpNLENBQVA7QUFhSDtBQXZCSTtBQURZLENBQVQsQ0FBaEIiLCJmaWxlIjoiYmFzaWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmJhc2ljID0gQmVoYXZpb3Ioe1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgICRlbWl0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRSZWN0OiBmdW5jdGlvbiAoc2VsZWN0b3IsIGFsbCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcclxuICAgICAgICAgICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxyXG4gICAgICAgICAgICAgICAgICAgIC5pbihfdGhpcylbYWxsID8gJ3NlbGVjdEFsbCcgOiAnc2VsZWN0J10oc2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbGwgJiYgQXJyYXkuaXNBcnJheShyZWN0KSAmJiByZWN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFsbCAmJiByZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZXhlYygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=