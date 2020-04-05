"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var behavior_1 = require('./behavior.js');
function observe(vantOptions, options) {
    var watch = vantOptions.watch;
    options.behaviors.push(behavior_1.behavior);
    if (watch) {
        var props_1 = options.properties || {};
        Object.keys(watch).forEach(function (key) {
            if (key in props_1) {
                var prop = props_1[key];
                if (prop === null || !('type' in prop)) {
                    prop = { type: prop };
                }
                prop.observer = watch[key];
                props_1[key] = prop;
            }
        });
        options.properties = props_1;
    }
}
exports.observe = observe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiYmVoYXZpb3JfMSIsInJlcXVpcmUiLCJvYnNlcnZlIiwidmFudE9wdGlvbnMiLCJvcHRpb25zIiwid2F0Y2giLCJiZWhhdmlvcnMiLCJwdXNoIiwiYmVoYXZpb3IiLCJwcm9wc18xIiwicHJvcGVydGllcyIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwicHJvcCIsInR5cGUiLCJvYnNlcnZlciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGFBQWFDLFFBQVEsWUFBUixDQUFqQjtBQUNBLFNBQVNDLE9BQVQsQ0FBaUJDLFdBQWpCLEVBQThCQyxPQUE5QixFQUF1QztBQUNuQyxRQUFJQyxRQUFRRixZQUFZRSxLQUF4QjtBQUNBRCxZQUFRRSxTQUFSLENBQWtCQyxJQUFsQixDQUF1QlAsV0FBV1EsUUFBbEM7QUFDQSxRQUFJSCxLQUFKLEVBQVc7QUFDUCxZQUFJSSxVQUFVTCxRQUFRTSxVQUFSLElBQXNCLEVBQXBDO0FBQ0FkLGVBQU9lLElBQVAsQ0FBWU4sS0FBWixFQUFtQk8sT0FBbkIsQ0FBMkIsVUFBVUMsR0FBVixFQUFlO0FBQ3RDLGdCQUFJQSxPQUFPSixPQUFYLEVBQW9CO0FBQ2hCLG9CQUFJSyxPQUFPTCxRQUFRSSxHQUFSLENBQVg7QUFDQSxvQkFBSUMsU0FBUyxJQUFULElBQWlCLEVBQUUsVUFBVUEsSUFBWixDQUFyQixFQUF3QztBQUNwQ0EsMkJBQU8sRUFBRUMsTUFBTUQsSUFBUixFQUFQO0FBQ0g7QUFDREEscUJBQUtFLFFBQUwsR0FBZ0JYLE1BQU1RLEdBQU4sQ0FBaEI7QUFDQUosd0JBQVFJLEdBQVIsSUFBZUMsSUFBZjtBQUNIO0FBQ0osU0FURDtBQVVBVixnQkFBUU0sVUFBUixHQUFxQkQsT0FBckI7QUFDSDtBQUNKO0FBQ0RYLFFBQVFJLE9BQVIsR0FBa0JBLE9BQWxCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGJlaGF2aW9yXzEgPSByZXF1aXJlKFwiLi9iZWhhdmlvclwiKTtcclxuZnVuY3Rpb24gb2JzZXJ2ZSh2YW50T3B0aW9ucywgb3B0aW9ucykge1xyXG4gICAgdmFyIHdhdGNoID0gdmFudE9wdGlvbnMud2F0Y2g7XHJcbiAgICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKGJlaGF2aW9yXzEuYmVoYXZpb3IpO1xyXG4gICAgaWYgKHdhdGNoKSB7XHJcbiAgICAgICAgdmFyIHByb3BzXzEgPSBvcHRpb25zLnByb3BlcnRpZXMgfHwge307XHJcbiAgICAgICAgT2JqZWN0LmtleXMod2F0Y2gpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICBpZiAoa2V5IGluIHByb3BzXzEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwcm9wID0gcHJvcHNfMVtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3AgPT09IG51bGwgfHwgISgndHlwZScgaW4gcHJvcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wID0geyB0eXBlOiBwcm9wIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcm9wLm9ic2VydmVyID0gd2F0Y2hba2V5XTtcclxuICAgICAgICAgICAgICAgIHByb3BzXzFba2V5XSA9IHByb3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBvcHRpb25zLnByb3BlcnRpZXMgPSBwcm9wc18xO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMub2JzZXJ2ZSA9IG9ic2VydmU7XHJcbiJdfQ==