"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
function emit(target, value) {
    target.$emit('input', value);
    target.$emit('change', value);
}
component_1.VantComponent({
    field: true,
    relation: {
        name: 'checkbox-group',
        type: 'ancestor',
        linked: function linked(target) {
            this.parent = target;
        },
        unlinked: function unlinked() {
            this.parent = null;
        }
    },
    classes: ['icon-class', 'label-class'],
    props: {
        value: Boolean,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: String,
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: 'round'
        },
        iconSize: {
            type: null,
            observer: 'setSizeWithUnit'
        }
    },
    data: {
        sizeWithUnit: '20px'
    },
    methods: {
        emitChange: function emitChange(value) {
            if (this.parent) {
                this.setParentValue(this.parent, value);
            } else {
                emit(this, value);
            }
        },
        toggle: function toggle() {
            var _a = this.data,
                disabled = _a.disabled,
                value = _a.value;
            if (!disabled) {
                this.emitChange(!value);
            }
        },
        onClickLabel: function onClickLabel() {
            var _a = this.data,
                labelDisabled = _a.labelDisabled,
                disabled = _a.disabled,
                value = _a.value;
            if (!disabled && !labelDisabled) {
                this.emitChange(!value);
            }
        },
        setParentValue: function setParentValue(parent, value) {
            var parentValue = parent.data.value.slice();
            var name = this.data.name;
            var max = parent.data.max;
            if (value) {
                if (max && parentValue.length >= max) {
                    return;
                }
                if (parentValue.indexOf(name) === -1) {
                    parentValue.push(name);
                    emit(parent, parentValue);
                }
            } else {
                var index = parentValue.indexOf(name);
                if (index !== -1) {
                    parentValue.splice(index, 1);
                    emit(parent, parentValue);
                }
            }
        },
        setSizeWithUnit: function setSizeWithUnit(size) {
            this.set({
                sizeWithUnit: utils_1.addUnit(size)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsImVtaXQiLCJ0YXJnZXQiLCIkZW1pdCIsIlZhbnRDb21wb25lbnQiLCJmaWVsZCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJwYXJlbnQiLCJ1bmxpbmtlZCIsImNsYXNzZXMiLCJwcm9wcyIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsInVzZUljb25TbG90IiwiY2hlY2tlZENvbG9yIiwiU3RyaW5nIiwibGFiZWxQb3NpdGlvbiIsImxhYmVsRGlzYWJsZWQiLCJzaGFwZSIsImljb25TaXplIiwib2JzZXJ2ZXIiLCJkYXRhIiwic2l6ZVdpdGhVbml0IiwibWV0aG9kcyIsImVtaXRDaGFuZ2UiLCJzZXRQYXJlbnRWYWx1ZSIsInRvZ2dsZSIsIl9hIiwib25DbGlja0xhYmVsIiwicGFyZW50VmFsdWUiLCJzbGljZSIsIm1heCIsImxlbmd0aCIsImluZGV4T2YiLCJwdXNoIiwiaW5kZXgiLCJzcGxpY2UiLCJzZXRTaXplV2l0aFVuaXQiLCJzaXplIiwic2V0IiwiYWRkVW5pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLGlCQUFSLENBQWQ7QUFDQSxTQUFTRSxJQUFULENBQWNDLE1BQWQsRUFBc0JMLEtBQXRCLEVBQTZCO0FBQ3pCSyxXQUFPQyxLQUFQLENBQWEsT0FBYixFQUFzQk4sS0FBdEI7QUFDQUssV0FBT0MsS0FBUCxDQUFhLFFBQWIsRUFBdUJOLEtBQXZCO0FBQ0g7QUFDREMsWUFBWU0sYUFBWixDQUEwQjtBQUN0QkMsV0FBTyxJQURlO0FBRXRC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R0g7QUE5Q0k7QUFoQ2EsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3V0aWxzXCIpO1xyXG5mdW5jdGlvbiBlbWl0KHRhcmdldCwgdmFsdWUpIHtcclxuICAgIHRhcmdldC4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XHJcbiAgICB0YXJnZXQuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcclxufVxyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIGZpZWxkOiB0cnVlLFxyXG4gICAgcmVsYXRpb246IHtcclxuICAgICAgICBuYW1lOiAnY2hlY2tib3gtZ3JvdXAnLFxyXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXHJcbiAgICAgICAgbGlua2VkOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gdGFyZ2V0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5saW5rZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbGFzc2VzOiBbJ2ljb24tY2xhc3MnLCAnbGFiZWwtY2xhc3MnXSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdmFsdWU6IEJvb2xlYW4sXHJcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICAgICAgdXNlSWNvblNsb3Q6IEJvb2xlYW4sXHJcbiAgICAgICAgY2hlY2tlZENvbG9yOiBTdHJpbmcsXHJcbiAgICAgICAgbGFiZWxQb3NpdGlvbjogU3RyaW5nLFxyXG4gICAgICAgIGxhYmVsRGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICAgICAgc2hhcGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3JvdW5kJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaWNvblNpemU6IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRTaXplV2l0aFVuaXQnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBzaXplV2l0aFVuaXQ6ICcyMHB4J1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmVudFZhbHVlKHRoaXMucGFyZW50LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbWl0KHRoaXMsIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9nZ2xlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgZGlzYWJsZWQgPSBfYS5kaXNhYmxlZCwgdmFsdWUgPSBfYS52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKCFkaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCF2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xpY2tMYWJlbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGxhYmVsRGlzYWJsZWQgPSBfYS5sYWJlbERpc2FibGVkLCBkaXNhYmxlZCA9IF9hLmRpc2FibGVkLCB2YWx1ZSA9IF9hLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoIWRpc2FibGVkICYmICFsYWJlbERpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoIXZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGFyZW50VmFsdWU6IGZ1bmN0aW9uIChwYXJlbnQsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnRWYWx1ZSA9IHBhcmVudC5kYXRhLnZhbHVlLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIHZhciBuYW1lID0gdGhpcy5kYXRhLm5hbWU7XHJcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJlbnQuZGF0YS5tYXg7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1heCAmJiBwYXJlbnRWYWx1ZS5sZW5ndGggPj0gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudFZhbHVlLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VmFsdWUucHVzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBlbWl0KHBhcmVudCwgcGFyZW50VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyZW50VmFsdWUuaW5kZXhPZihuYW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVtaXQocGFyZW50LCBwYXJlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFNpemVXaXRoVW5pdDogZnVuY3Rpb24gKHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXQoe1xyXG4gICAgICAgICAgICAgICAgc2l6ZVdpdGhVbml0OiB1dGlsc18xLmFkZFVuaXQoc2l6ZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSk7XHJcbiJdfQ==