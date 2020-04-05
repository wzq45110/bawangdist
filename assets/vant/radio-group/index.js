"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    relation: {
        name: 'radio',
        type: 'descendant',
        linked: function linked(target) {
            this.children = this.children || [];
            this.children.push(target);
            this.updateChild(target);
        },
        unlinked: function unlinked(target) {
            this.children = this.children.filter(function (child) {
                return child !== target;
            });
        }
    },
    props: {
        value: {
            type: null,
            observer: 'updateChildren'
        },
        disabled: {
            type: Boolean,
            observer: 'updateChildren'
        }
    },
    methods: {
        updateChildren: function updateChildren() {
            var _this = this;
            (this.children || []).forEach(function (child) {
                return _this.updateChild(child);
            });
        },
        updateChild: function updateChild(child) {
            var _a = this.data,
                value = _a.value,
                disabled = _a.disabled;
            child.setData({
                value: value,
                disabled: disabled || child.data.disabled
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsImNoaWxkcmVuIiwicHVzaCIsInVwZGF0ZUNoaWxkIiwidW5saW5rZWQiLCJmaWx0ZXIiLCJjaGlsZCIsInByb3BzIiwib2JzZXJ2ZXIiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJtZXRob2RzIiwidXBkYXRlQ2hpbGRyZW4iLCJfdGhpcyIsImZvckVhY2giLCJfYSIsImRhdGEiLCJzZXREYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPLElBRGU7QUFFdEJDLGNBQVU7QUFDTkMsY0FBTSxPQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxnQkFBUSxnQkFBVUMsTUFBVixFQUFrQjtBQUN0QixpQkFBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLElBQWlCLEVBQWpDO0FBQ0EsaUJBQUtBLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQkYsTUFBbkI7QUFDQSxpQkFBS0csV0FBTCxDQUFpQkgsTUFBakI7QUFDSCxTQVBLO0FBUU5JLGtCQUFVLGtCQUFVSixNQUFWLEVBQWtCO0FBQ3hCLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0ksTUFBZCxDQUFxQixVQUFVQyxLQUFWLEVBQWlCO0FBQUUsdUJBQU9BLFVBQVVOLE1BQWpCO0FBQTBCLGFBQWxFLENBQWhCO0FBQ0g7QUFWSyxLQUZZO0FBY3RCTyxXQUFPO0FBQ0hoQixlQUFPO0FBQ0hPLGtCQUFNLElBREg7QUFFSFUsc0JBQVU7QUFGUCxTQURKO0FBS0hDLGtCQUFVO0FBQ05YLGtCQUFNWSxPQURBO0FBRU5GLHNCQUFVO0FBRko7QUFMUCxLQWRlO0FBd0J0QkcsYUFBUztBQUNMQyx3QkFBZ0IsMEJBQVk7QUFDeEIsZ0JBQUlDLFFBQVEsSUFBWjtBQUNBLGFBQUMsS0FBS1osUUFBTCxJQUFpQixFQUFsQixFQUFzQmEsT0FBdEIsQ0FBOEIsVUFBVVIsS0FBVixFQUFpQjtBQUMzQyx1QkFBT08sTUFBTVYsV0FBTixDQUFrQkcsS0FBbEIsQ0FBUDtBQUNILGFBRkQ7QUFHSCxTQU5JO0FBT0xILHFCQUFhLHFCQUFVRyxLQUFWLEVBQWlCO0FBQzFCLGdCQUFJUyxLQUFLLEtBQUtDLElBQWQ7QUFBQSxnQkFBb0J6QixRQUFRd0IsR0FBR3hCLEtBQS9CO0FBQUEsZ0JBQXNDa0IsV0FBV00sR0FBR04sUUFBcEQ7QUFDQUgsa0JBQU1XLE9BQU4sQ0FBYztBQUNWMUIsdUJBQU9BLEtBREc7QUFFVmtCLDBCQUFVQSxZQUFZSCxNQUFNVSxJQUFOLENBQVdQO0FBRnZCLGFBQWQ7QUFJSDtBQWJJO0FBeEJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgZmllbGQ6IHRydWUsXHJcbiAgICByZWxhdGlvbjoge1xyXG4gICAgICAgIG5hbWU6ICdyYWRpbycsXHJcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxyXG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbiB8fCBbXTtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGQodGFyZ2V0KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVubGlua2VkOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkICE9PSB0YXJnZXQ7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNhYmxlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdXBkYXRlQ2hpbGRyZW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgKHRoaXMuY2hpbGRyZW4gfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMudXBkYXRlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZUNoaWxkOiBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCB2YWx1ZSA9IF9hLnZhbHVlLCBkaXNhYmxlZCA9IF9hLmRpc2FibGVkO1xyXG4gICAgICAgICAgICBjaGlsZC5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCB8fCBjaGlsZC5kYXRhLmRpc2FibGVkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==