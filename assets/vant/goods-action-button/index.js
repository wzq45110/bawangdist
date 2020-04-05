"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var link_1 = require('./../mixins/link.js');
var button_1 = require('./../mixins/button.js');
var open_type_1 = require('./../mixins/open-type.js');
component_1.VantComponent({
    mixins: [link_1.link, button_1.button, open_type_1.openType],
    relation: {
        type: 'ancestor',
        name: 'goods-action',
        linked: function linked(parent) {
            this.parent = parent;
        }
    },
    props: {
        text: String,
        color: String,
        loading: Boolean,
        disabled: Boolean,
        type: {
            type: String,
            value: 'danger'
        }
    },
    mounted: function mounted() {
        this.updateStyle();
    },
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        },
        updateStyle: function updateStyle() {
            var parent = this.parent;
            var _a = parent.children,
                children = _a === void 0 ? [] : _a;
            var index = children.indexOf(this);
            var length = children.length;
            var isFirst = false;
            var isLast = false;
            if (index === 0) {
                isFirst = true;
            }
            if (index === length - 1) {
                isLast = true;
            }
            this.setData({
                isFirst: isFirst,
                isLast: isLast
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwibGlua18xIiwiYnV0dG9uXzEiLCJvcGVuX3R5cGVfMSIsIlZhbnRDb21wb25lbnQiLCJtaXhpbnMiLCJsaW5rIiwiYnV0dG9uIiwib3BlblR5cGUiLCJyZWxhdGlvbiIsInR5cGUiLCJuYW1lIiwibGlua2VkIiwicGFyZW50IiwicHJvcHMiLCJ0ZXh0IiwiU3RyaW5nIiwiY29sb3IiLCJsb2FkaW5nIiwiQm9vbGVhbiIsImRpc2FibGVkIiwibW91bnRlZCIsInVwZGF0ZVN0eWxlIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIiwianVtcExpbmsiLCJfYSIsImNoaWxkcmVuIiwiaW5kZXgiLCJpbmRleE9mIiwibGVuZ3RoIiwiaXNGaXJzdCIsImlzTGFzdCIsInNldERhdGEiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsU0FBU0QsUUFBUSxnQkFBUixDQUFiO0FBQ0EsSUFBSUUsV0FBV0YsUUFBUSxrQkFBUixDQUFmO0FBQ0EsSUFBSUcsY0FBY0gsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZSyxhQUFaLENBQTBCO0FBQ3RCQyxZQUFRLENBQUNKLE9BQU9LLElBQVIsRUFBY0osU0FBU0ssTUFBdkIsRUFBK0JKLFlBQVlLLFFBQTNDLENBRGM7QUFFdEJDLGNBQVU7QUFDTkMsY0FBTSxVQURBO0FBRU5DLGNBQU0sY0FGQTtBQUdOQyxnQkFBUSxnQkFBVUMsTUFBVixFQUFrQjtBQUN0QixpQkFBS0EsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7QUFMSyxLQUZZO0FBU3RCQyxXQUFPO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsZUFBT0QsTUFGSjtBQUdIRSxpQkFBU0MsT0FITjtBQUlIQyxrQkFBVUQsT0FKUDtBQUtIVCxjQUFNO0FBQ0ZBLGtCQUFNTSxNQURKO0FBRUZsQixtQkFBTztBQUZMO0FBTEgsS0FUZTtBQW1CdEJ1QixhQUFTLG1CQUFZO0FBQ2pCLGFBQUtDLFdBQUw7QUFDSCxLQXJCcUI7QUFzQnRCQyxhQUFTO0FBQ0xDLGlCQUFTLGlCQUFVQyxLQUFWLEVBQWlCO0FBQ3RCLGlCQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsTUFBTUUsTUFBMUI7QUFDQSxpQkFBS0MsUUFBTDtBQUNILFNBSkk7QUFLTE4scUJBQWEsdUJBQVk7QUFDckIsZ0JBQUlULFNBQVMsS0FBS0EsTUFBbEI7QUFDQSxnQkFBSWdCLEtBQUtoQixPQUFPaUIsUUFBaEI7QUFBQSxnQkFBMEJBLFdBQVdELE9BQU8sS0FBSyxDQUFaLEdBQWdCLEVBQWhCLEdBQXFCQSxFQUExRDtBQUNBLGdCQUFJRSxRQUFRRCxTQUFTRSxPQUFULENBQWlCLElBQWpCLENBQVo7QUFDQSxnQkFBSUMsU0FBU0gsU0FBU0csTUFBdEI7QUFDQSxnQkFBSUMsVUFBVSxLQUFkO0FBQ0EsZ0JBQUlDLFNBQVMsS0FBYjtBQUNBLGdCQUFJSixVQUFVLENBQWQsRUFBaUI7QUFDYkcsMEJBQVUsSUFBVjtBQUNIO0FBQ0QsZ0JBQUlILFVBQVVFLFNBQVMsQ0FBdkIsRUFBMEI7QUFDdEJFLHlCQUFTLElBQVQ7QUFDSDtBQUNELGlCQUFLQyxPQUFMLENBQWE7QUFDVEYseUJBQVNBLE9BREE7QUFFVEMsd0JBQVFBO0FBRkMsYUFBYjtBQUlIO0FBdEJJO0FBdEJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbnZhciBsaW5rXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL2xpbmtcIik7XHJcbnZhciBidXR0b25fMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvYnV0dG9uXCIpO1xyXG52YXIgb3Blbl90eXBlXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL29wZW4tdHlwZVwiKTtcclxuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XHJcbiAgICBtaXhpbnM6IFtsaW5rXzEubGluaywgYnV0dG9uXzEuYnV0dG9uLCBvcGVuX3R5cGVfMS5vcGVuVHlwZV0sXHJcbiAgICByZWxhdGlvbjoge1xyXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXHJcbiAgICAgICAgbmFtZTogJ2dvb2RzLWFjdGlvbicsXHJcbiAgICAgICAgbGlua2VkOiBmdW5jdGlvbiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHRleHQ6IFN0cmluZyxcclxuICAgICAgICBjb2xvcjogU3RyaW5nLFxyXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4sXHJcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICAgICAgdHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnZGFuZ2VyJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZSgpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudC5kZXRhaWwpO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBMaW5rKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1cGRhdGVTdHlsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHBhcmVudC5jaGlsZHJlbiwgY2hpbGRyZW4gPSBfYSA9PT0gdm9pZCAwID8gW10gOiBfYTtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGxlbmd0aCA9IGNoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGlzRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgdmFyIGlzTGFzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gbGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgaXNMYXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgaXNGaXJzdDogaXNGaXJzdCxcclxuICAgICAgICAgICAgICAgIGlzTGFzdDogaXNMYXN0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==