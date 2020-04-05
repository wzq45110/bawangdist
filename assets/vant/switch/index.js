"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var color_1 = require('./../common/color.js');
component_1.VantComponent({
    field: true,
    classes: ['node-class'],
    props: {
        checked: null,
        loading: Boolean,
        disabled: Boolean,
        activeColor: String,
        inactiveColor: String,
        size: {
            type: String,
            value: '30px'
        },
        activeValue: {
            type: null,
            value: true
        },
        inactiveValue: {
            type: null,
            value: false
        }
    },
    watch: {
        checked: function checked(value) {
            var loadingColor = this.getLoadingColor(value);
            this.setData({ value: value, loadingColor: loadingColor });
        }
    },
    created: function created() {
        var value = this.data.checked;
        var loadingColor = this.getLoadingColor(value);
        this.setData({ value: value, loadingColor: loadingColor });
    },
    methods: {
        getLoadingColor: function getLoadingColor(checked) {
            var _a = this.data,
                activeColor = _a.activeColor,
                inactiveColor = _a.inactiveColor;
            return checked ? activeColor || color_1.BLUE : inactiveColor || color_1.GRAY_DARK;
        },
        onClick: function onClick() {
            var _a = this.data,
                activeValue = _a.activeValue,
                inactiveValue = _a.inactiveValue;
            if (!this.data.disabled && !this.data.loading) {
                var checked = this.data.checked === activeValue;
                var value = checked ? inactiveValue : activeValue;
                this.$emit('input', value);
                this.$emit('change', value);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiY29sb3JfMSIsIlZhbnRDb21wb25lbnQiLCJmaWVsZCIsImNsYXNzZXMiLCJwcm9wcyIsImNoZWNrZWQiLCJsb2FkaW5nIiwiQm9vbGVhbiIsImRpc2FibGVkIiwiYWN0aXZlQ29sb3IiLCJTdHJpbmciLCJpbmFjdGl2ZUNvbG9yIiwic2l6ZSIsInR5cGUiLCJhY3RpdmVWYWx1ZSIsImluYWN0aXZlVmFsdWUiLCJ3YXRjaCIsImxvYWRpbmdDb2xvciIsImdldExvYWRpbmdDb2xvciIsInNldERhdGEiLCJjcmVhdGVkIiwiZGF0YSIsIm1ldGhvZHMiLCJfYSIsIkJMVUUiLCJHUkFZX0RBUksiLCJvbkNsaWNrIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxpQkFBUixDQUFkO0FBQ0FELFlBQVlHLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU8sSUFEZTtBQUV0QkMsYUFBUyxDQUFDLFlBQUQsQ0FGYTtBQUd0QkMsV0FBTztBQUNIQyxpQkFBUyxJQUROO0FBRUhDLGlCQUFTQyxPQUZOO0FBR0hDLGtCQUFVRCxPQUhQO0FBSUhFLHFCQUFhQyxNQUpWO0FBS0hDLHVCQUFlRCxNQUxaO0FBTUhFLGNBQU07QUFDRkMsa0JBQU1ILE1BREo7QUFFRmIsbUJBQU87QUFGTCxTQU5IO0FBVUhpQixxQkFBYTtBQUNURCxrQkFBTSxJQURHO0FBRVRoQixtQkFBTztBQUZFLFNBVlY7QUFjSGtCLHVCQUFlO0FBQ1hGLGtCQUFNLElBREs7QUFFWGhCLG1CQUFPO0FBRkk7QUFkWixLQUhlO0FBc0J0Qm1CLFdBQU87QUFDSFgsaUJBQVMsaUJBQVVSLEtBQVYsRUFBaUI7QUFDdEIsZ0JBQUlvQixlQUFlLEtBQUtDLGVBQUwsQ0FBcUJyQixLQUFyQixDQUFuQjtBQUNBLGlCQUFLc0IsT0FBTCxDQUFhLEVBQUV0QixPQUFPQSxLQUFULEVBQWdCb0IsY0FBY0EsWUFBOUIsRUFBYjtBQUNIO0FBSkUsS0F0QmU7QUE0QnRCRyxhQUFTLG1CQUFZO0FBQ2pCLFlBQUl2QixRQUFRLEtBQUt3QixJQUFMLENBQVVoQixPQUF0QjtBQUNBLFlBQUlZLGVBQWUsS0FBS0MsZUFBTCxDQUFxQnJCLEtBQXJCLENBQW5CO0FBQ0EsYUFBS3NCLE9BQUwsQ0FBYSxFQUFFdEIsT0FBT0EsS0FBVCxFQUFnQm9CLGNBQWNBLFlBQTlCLEVBQWI7QUFDSCxLQWhDcUI7QUFpQ3RCSyxhQUFTO0FBQ0xKLHlCQUFpQix5QkFBVWIsT0FBVixFQUFtQjtBQUNoQyxnQkFBSWtCLEtBQUssS0FBS0YsSUFBZDtBQUFBLGdCQUFvQlosY0FBY2MsR0FBR2QsV0FBckM7QUFBQSxnQkFBa0RFLGdCQUFnQlksR0FBR1osYUFBckU7QUFDQSxtQkFBT04sVUFBVUksZUFBZVQsUUFBUXdCLElBQWpDLEdBQXdDYixpQkFBaUJYLFFBQVF5QixTQUF4RTtBQUNILFNBSkk7QUFLTEMsaUJBQVMsbUJBQVk7QUFDakIsZ0JBQUlILEtBQUssS0FBS0YsSUFBZDtBQUFBLGdCQUFvQlAsY0FBY1MsR0FBR1QsV0FBckM7QUFBQSxnQkFBa0RDLGdCQUFnQlEsR0FBR1IsYUFBckU7QUFDQSxnQkFBSSxDQUFDLEtBQUtNLElBQUwsQ0FBVWIsUUFBWCxJQUF1QixDQUFDLEtBQUthLElBQUwsQ0FBVWYsT0FBdEMsRUFBK0M7QUFDM0Msb0JBQUlELFVBQVUsS0FBS2dCLElBQUwsQ0FBVWhCLE9BQVYsS0FBc0JTLFdBQXBDO0FBQ0Esb0JBQUlqQixRQUFRUSxVQUFVVSxhQUFWLEdBQTBCRCxXQUF0QztBQUNBLHFCQUFLYSxLQUFMLENBQVcsT0FBWCxFQUFvQjlCLEtBQXBCO0FBQ0EscUJBQUs4QixLQUFMLENBQVcsUUFBWCxFQUFxQjlCLEtBQXJCO0FBQ0g7QUFDSjtBQWJJO0FBakNhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbnZhciBjb2xvcl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb2xvclwiKTtcclxuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XHJcbiAgICBmaWVsZDogdHJ1ZSxcclxuICAgIGNsYXNzZXM6IFsnbm9kZS1jbGFzcyddLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBjaGVja2VkOiBudWxsLFxyXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4sXHJcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICAgICAgYWN0aXZlQ29sb3I6IFN0cmluZyxcclxuICAgICAgICBpbmFjdGl2ZUNvbG9yOiBTdHJpbmcsXHJcbiAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnMzBweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGl2ZVZhbHVlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmFjdGl2ZVZhbHVlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIGNoZWNrZWQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgbG9hZGluZ0NvbG9yID0gdGhpcy5nZXRMb2FkaW5nQ29sb3IodmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyB2YWx1ZTogdmFsdWUsIGxvYWRpbmdDb2xvcjogbG9hZGluZ0NvbG9yIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5kYXRhLmNoZWNrZWQ7XHJcbiAgICAgICAgdmFyIGxvYWRpbmdDb2xvciA9IHRoaXMuZ2V0TG9hZGluZ0NvbG9yKHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoeyB2YWx1ZTogdmFsdWUsIGxvYWRpbmdDb2xvcjogbG9hZGluZ0NvbG9yIH0pO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBnZXRMb2FkaW5nQ29sb3I6IGZ1bmN0aW9uIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgYWN0aXZlQ29sb3IgPSBfYS5hY3RpdmVDb2xvciwgaW5hY3RpdmVDb2xvciA9IF9hLmluYWN0aXZlQ29sb3I7XHJcbiAgICAgICAgICAgIHJldHVybiBjaGVja2VkID8gYWN0aXZlQ29sb3IgfHwgY29sb3JfMS5CTFVFIDogaW5hY3RpdmVDb2xvciB8fCBjb2xvcl8xLkdSQVlfREFSSztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBhY3RpdmVWYWx1ZSA9IF9hLmFjdGl2ZVZhbHVlLCBpbmFjdGl2ZVZhbHVlID0gX2EuaW5hY3RpdmVWYWx1ZTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQgJiYgIXRoaXMuZGF0YS5sb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tlZCA9IHRoaXMuZGF0YS5jaGVja2VkID09PSBhY3RpdmVWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNoZWNrZWQgPyBpbmFjdGl2ZVZhbHVlIDogYWN0aXZlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==