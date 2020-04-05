"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        type: 'ancestor',
        name: 'sidebar',
        linked: function linked(target) {
            this.parent = target;
        }
    },
    props: {
        dot: Boolean,
        info: null,
        title: String
    },
    methods: {
        onClick: function onClick() {
            var _this = this;
            var parent = this.parent;
            if (!parent) {
                return;
            }
            var index = parent.items.indexOf(this);
            parent.setActive(index).then(function () {
                _this.$emit('click', index);
                parent.$emit('change', index);
            });
        },
        setActive: function setActive(active) {
            return this.setData({ active: active });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwidHlwZSIsIm5hbWUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJwYXJlbnQiLCJwcm9wcyIsImRvdCIsIkJvb2xlYW4iLCJpbmZvIiwidGl0bGUiLCJTdHJpbmciLCJtZXRob2RzIiwib25DbGljayIsIl90aGlzIiwiaW5kZXgiLCJpdGVtcyIsImluZGV4T2YiLCJzZXRBY3RpdmUiLCJ0aGVuIiwiJGVtaXQiLCJhY3RpdmUiLCJzZXREYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxjQUFVO0FBQ05DLGNBQU0sVUFEQTtBQUVOQyxjQUFNLFNBRkE7QUFHTkMsZ0JBQVEsZ0JBQVVDLE1BQVYsRUFBa0I7QUFDdEIsaUJBQUtDLE1BQUwsR0FBY0QsTUFBZDtBQUNIO0FBTEssS0FEWTtBQVF0QkUsV0FBTztBQUNIQyxhQUFLQyxPQURGO0FBRUhDLGNBQU0sSUFGSDtBQUdIQyxlQUFPQztBQUhKLEtBUmU7QUFhdEJDLGFBQVM7QUFDTEMsaUJBQVMsbUJBQVk7QUFDakIsZ0JBQUlDLFFBQVEsSUFBWjtBQUNBLGdCQUFJVCxTQUFTLEtBQUtBLE1BQWxCO0FBQ0EsZ0JBQUksQ0FBQ0EsTUFBTCxFQUFhO0FBQ1Q7QUFDSDtBQUNELGdCQUFJVSxRQUFRVixPQUFPVyxLQUFQLENBQWFDLE9BQWIsQ0FBcUIsSUFBckIsQ0FBWjtBQUNBWixtQkFBT2EsU0FBUCxDQUFpQkgsS0FBakIsRUFBd0JJLElBQXhCLENBQTZCLFlBQVk7QUFDckNMLHNCQUFNTSxLQUFOLENBQVksT0FBWixFQUFxQkwsS0FBckI7QUFDQVYsdUJBQU9lLEtBQVAsQ0FBYSxRQUFiLEVBQXVCTCxLQUF2QjtBQUNILGFBSEQ7QUFJSCxTQVpJO0FBYUxHLG1CQUFXLG1CQUFVRyxNQUFWLEVBQWtCO0FBQ3pCLG1CQUFPLEtBQUtDLE9BQUwsQ0FBYSxFQUFFRCxRQUFRQSxNQUFWLEVBQWIsQ0FBUDtBQUNIO0FBZkk7QUFiYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIHJlbGF0aW9uOiB7XHJcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJyxcclxuICAgICAgICBuYW1lOiAnc2lkZWJhcicsXHJcbiAgICAgICAgbGlua2VkOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGRvdDogQm9vbGVhbixcclxuICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgIHRpdGxlOiBTdHJpbmdcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XHJcbiAgICAgICAgICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyZW50Lml0ZW1zLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgICAgIHBhcmVudC5zZXRBY3RpdmUoaW5kZXgpLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQoJ2NsaWNrJywgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LiRlbWl0KCdjaGFuZ2UnLCBpbmRleCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0QWN0aXZlOiBmdW5jdGlvbiAoYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldERhdGEoeyBhY3RpdmU6IGFjdGl2ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=