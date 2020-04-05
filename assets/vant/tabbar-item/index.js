"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    props: {
        info: null,
        name: null,
        icon: String,
        dot: Boolean
    },
    relation: {
        name: 'tabbar',
        type: 'ancestor'
    },
    data: {
        active: false
    },
    methods: {
        onClick: function onClick() {
            if (this.parent) {
                this.parent.onChange(this);
            }
            this.$emit('click');
        },
        updateFromParent: function updateFromParent() {
            var parent = this.parent;
            if (!parent) {
                return;
            }
            var index = parent.children.indexOf(this);
            var parentData = parent.data;
            var data = this.data;
            var active = (data.name || index) === parentData.active;
            var patch = {};
            if (active !== data.active) {
                patch.active = active;
            }
            if (parentData.activeColor !== data.activeColor) {
                patch.activeColor = parentData.activeColor;
            }
            if (parentData.inactiveColor !== data.inactiveColor) {
                patch.inactiveColor = parentData.inactiveColor;
            }
            return Object.keys(patch).length > 0 ? this.set(patch) : Promise.resolve();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwiaW5mbyIsIm5hbWUiLCJpY29uIiwiU3RyaW5nIiwiZG90IiwiQm9vbGVhbiIsInJlbGF0aW9uIiwidHlwZSIsImRhdGEiLCJhY3RpdmUiLCJtZXRob2RzIiwib25DbGljayIsInBhcmVudCIsIm9uQ2hhbmdlIiwiJGVtaXQiLCJ1cGRhdGVGcm9tUGFyZW50IiwiaW5kZXgiLCJjaGlsZHJlbiIsImluZGV4T2YiLCJwYXJlbnREYXRhIiwicGF0Y2giLCJhY3RpdmVDb2xvciIsImluYWN0aXZlQ29sb3IiLCJrZXlzIiwibGVuZ3RoIiwic2V0IiwiUHJvbWlzZSIsInJlc29sdmUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU87QUFDSEMsY0FBTSxJQURIO0FBRUhDLGNBQU0sSUFGSDtBQUdIQyxjQUFNQyxNQUhIO0FBSUhDLGFBQUtDO0FBSkYsS0FEZTtBQU90QkMsY0FBVTtBQUNOTCxjQUFNLFFBREE7QUFFTk0sY0FBTTtBQUZBLEtBUFk7QUFXdEJDLFVBQU07QUFDRkMsZ0JBQVE7QUFETixLQVhnQjtBQWN0QkMsYUFBUztBQUNMQyxpQkFBUyxtQkFBWTtBQUNqQixnQkFBSSxLQUFLQyxNQUFULEVBQWlCO0FBQ2IscUJBQUtBLE1BQUwsQ0FBWUMsUUFBWixDQUFxQixJQUFyQjtBQUNIO0FBQ0QsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FOSTtBQU9MQywwQkFBa0IsNEJBQVk7QUFDMUIsZ0JBQUlILFNBQVMsS0FBS0EsTUFBbEI7QUFDQSxnQkFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDVDtBQUNIO0FBQ0QsZ0JBQUlJLFFBQVFKLE9BQU9LLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLElBQXhCLENBQVo7QUFDQSxnQkFBSUMsYUFBYVAsT0FBT0osSUFBeEI7QUFDQSxnQkFBSUEsT0FBTyxLQUFLQSxJQUFoQjtBQUNBLGdCQUFJQyxTQUFTLENBQUNELEtBQUtQLElBQUwsSUFBYWUsS0FBZCxNQUF5QkcsV0FBV1YsTUFBakQ7QUFDQSxnQkFBSVcsUUFBUSxFQUFaO0FBQ0EsZ0JBQUlYLFdBQVdELEtBQUtDLE1BQXBCLEVBQTRCO0FBQ3hCVyxzQkFBTVgsTUFBTixHQUFlQSxNQUFmO0FBQ0g7QUFDRCxnQkFBSVUsV0FBV0UsV0FBWCxLQUEyQmIsS0FBS2EsV0FBcEMsRUFBaUQ7QUFDN0NELHNCQUFNQyxXQUFOLEdBQW9CRixXQUFXRSxXQUEvQjtBQUNIO0FBQ0QsZ0JBQUlGLFdBQVdHLGFBQVgsS0FBNkJkLEtBQUtjLGFBQXRDLEVBQXFEO0FBQ2pERixzQkFBTUUsYUFBTixHQUFzQkgsV0FBV0csYUFBakM7QUFDSDtBQUNELG1CQUFPOUIsT0FBTytCLElBQVAsQ0FBWUgsS0FBWixFQUFtQkksTUFBbkIsR0FBNEIsQ0FBNUIsR0FDRCxLQUFLQyxHQUFMLENBQVNMLEtBQVQsQ0FEQyxHQUVETSxRQUFRQyxPQUFSLEVBRk47QUFHSDtBQTdCSTtBQWRhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgaWNvbjogU3RyaW5nLFxyXG4gICAgICAgIGRvdDogQm9vbGVhblxyXG4gICAgfSxcclxuICAgIHJlbGF0aW9uOiB7XHJcbiAgICAgICAgbmFtZTogJ3RhYmJhcicsXHJcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJ1xyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBhY3RpdmU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5vbkNoYW5nZSh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlRnJvbVBhcmVudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnREYXRhID0gcGFyZW50LmRhdGE7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICAgICAgICB2YXIgYWN0aXZlID0gKGRhdGEubmFtZSB8fCBpbmRleCkgPT09IHBhcmVudERhdGEuYWN0aXZlO1xyXG4gICAgICAgICAgICB2YXIgcGF0Y2ggPSB7fTtcclxuICAgICAgICAgICAgaWYgKGFjdGl2ZSAhPT0gZGF0YS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHBhdGNoLmFjdGl2ZSA9IGFjdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyZW50RGF0YS5hY3RpdmVDb2xvciAhPT0gZGF0YS5hY3RpdmVDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgcGF0Y2guYWN0aXZlQ29sb3IgPSBwYXJlbnREYXRhLmFjdGl2ZUNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnREYXRhLmluYWN0aXZlQ29sb3IgIT09IGRhdGEuaW5hY3RpdmVDb2xvcikge1xyXG4gICAgICAgICAgICAgICAgcGF0Y2guaW5hY3RpdmVDb2xvciA9IHBhcmVudERhdGEuaW5hY3RpdmVDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMocGF0Y2gpLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgID8gdGhpcy5zZXQocGF0Y2gpXHJcbiAgICAgICAgICAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==