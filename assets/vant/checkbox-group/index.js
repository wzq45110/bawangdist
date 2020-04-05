"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    relation: {
        name: 'checkbox',
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
        max: Number,
        value: {
            type: Array,
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
                value: value.indexOf(child.data.name) !== -1,
                disabled: disabled || child.data.disabled
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsImNoaWxkcmVuIiwicHVzaCIsInVwZGF0ZUNoaWxkIiwidW5saW5rZWQiLCJmaWx0ZXIiLCJjaGlsZCIsInByb3BzIiwibWF4IiwiTnVtYmVyIiwiQXJyYXkiLCJvYnNlcnZlciIsImRpc2FibGVkIiwiQm9vbGVhbiIsIm1ldGhvZHMiLCJ1cGRhdGVDaGlsZHJlbiIsIl90aGlzIiwiZm9yRWFjaCIsIl9hIiwiZGF0YSIsInNldERhdGEiLCJpbmRleE9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPLElBRGU7QUFFdEJDLGNBQVU7QUFDTkMsY0FBTSxVQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxnQkFBUSxnQkFBVUMsTUFBVixFQUFrQjtBQUN0QixpQkFBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLElBQWlCLEVBQWpDO0FBQ0EsaUJBQUtBLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQkYsTUFBbkI7QUFDQSxpQkFBS0csV0FBTCxDQUFpQkgsTUFBakI7QUFDSCxTQVBLO0FBUU5JLGtCQUFVLGtCQUFVSixNQUFWLEVBQWtCO0FBQ3hCLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0ksTUFBZCxDQUFxQixVQUFVQyxLQUFWLEVBQWlCO0FBQUUsdUJBQU9BLFVBQVVOLE1BQWpCO0FBQTBCLGFBQWxFLENBQWhCO0FBQ0g7QUFWSyxLQUZZO0FBY3RCTyxXQUFPO0FBQ0hDLGFBQUtDLE1BREY7QUFFSGxCLGVBQU87QUFDSE8sa0JBQU1ZLEtBREg7QUFFSEMsc0JBQVU7QUFGUCxTQUZKO0FBTUhDLGtCQUFVO0FBQ05kLGtCQUFNZSxPQURBO0FBRU5GLHNCQUFVO0FBRko7QUFOUCxLQWRlO0FBeUJ0QkcsYUFBUztBQUNMQyx3QkFBZ0IsMEJBQVk7QUFDeEIsZ0JBQUlDLFFBQVEsSUFBWjtBQUNBLGFBQUMsS0FBS2YsUUFBTCxJQUFpQixFQUFsQixFQUFzQmdCLE9BQXRCLENBQThCLFVBQVVYLEtBQVYsRUFBaUI7QUFDM0MsdUJBQU9VLE1BQU1iLFdBQU4sQ0FBa0JHLEtBQWxCLENBQVA7QUFDSCxhQUZEO0FBR0gsU0FOSTtBQU9MSCxxQkFBYSxxQkFBVUcsS0FBVixFQUFpQjtBQUMxQixnQkFBSVksS0FBSyxLQUFLQyxJQUFkO0FBQUEsZ0JBQW9CNUIsUUFBUTJCLEdBQUczQixLQUEvQjtBQUFBLGdCQUFzQ3FCLFdBQVdNLEdBQUdOLFFBQXBEO0FBQ0FOLGtCQUFNYyxPQUFOLENBQWM7QUFDVjdCLHVCQUFPQSxNQUFNOEIsT0FBTixDQUFjZixNQUFNYSxJQUFOLENBQVd0QixJQUF6QixNQUFtQyxDQUFDLENBRGpDO0FBRVZlLDBCQUFVQSxZQUFZTixNQUFNYSxJQUFOLENBQVdQO0FBRnZCLGFBQWQ7QUFJSDtBQWJJO0FBekJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgZmllbGQ6IHRydWUsXHJcbiAgICByZWxhdGlvbjoge1xyXG4gICAgICAgIG5hbWU6ICdjaGVja2JveCcsXHJcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxyXG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbiB8fCBbXTtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKHRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGQodGFyZ2V0KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVubGlua2VkOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkICE9PSB0YXJnZXQ7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIG1heDogTnVtYmVyLFxyXG4gICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlzYWJsZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHVwZGF0ZUNoaWxkcmVuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICh0aGlzLmNoaWxkcmVuIHx8IFtdKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVDaGlsZDogZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgdmFsdWUgPSBfYS52YWx1ZSwgZGlzYWJsZWQgPSBfYS5kaXNhYmxlZDtcclxuICAgICAgICAgICAgY2hpbGQuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUuaW5kZXhPZihjaGlsZC5kYXRhLm5hbWUpICE9PSAtMSxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCB8fCBjaGlsZC5kYXRhLmRpc2FibGVkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==