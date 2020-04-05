"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
component_1.VantComponent({
    props: {
        dot: Boolean,
        info: null,
        size: {
            type: null,
            observer: 'setSizeWithUnit'
        },
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            value: 'van-icon'
        },
        name: {
            type: String,
            observer: function observer(val) {
                this.setData({
                    isImageName: val.indexOf('/') !== -1
                });
            }
        }
    },
    data: {
        sizeWithUnit: null
    },
    methods: {
        onClick: function onClick() {
            this.$emit('click');
        },
        setSizeWithUnit: function setSizeWithUnit(size) {
            this.setData({
                sizeWithUnit: utils_1.addUnit(size)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsIlZhbnRDb21wb25lbnQiLCJwcm9wcyIsImRvdCIsIkJvb2xlYW4iLCJpbmZvIiwic2l6ZSIsInR5cGUiLCJvYnNlcnZlciIsImNvbG9yIiwiU3RyaW5nIiwiY3VzdG9tU3R5bGUiLCJjbGFzc1ByZWZpeCIsIm5hbWUiLCJ2YWwiLCJzZXREYXRhIiwiaXNJbWFnZU5hbWUiLCJpbmRleE9mIiwiZGF0YSIsInNpemVXaXRoVW5pdCIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiJGVtaXQiLCJzZXRTaXplV2l0aFVuaXQiLCJhZGRVbml0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElBQUlDLFVBQVVELFFBQVEsaUJBQVIsQ0FBZDtBQUNBRCxZQUFZRyxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPO0FBQ0hDLGFBQUtDLE9BREY7QUFFSEMsY0FBTSxJQUZIO0FBR0hDLGNBQU07QUFDRkMsa0JBQU0sSUFESjtBQUVGQyxzQkFBVTtBQUZSLFNBSEg7QUFPSEMsZUFBT0MsTUFQSjtBQVFIQyxxQkFBYUQsTUFSVjtBQVNIRSxxQkFBYTtBQUNUTCxrQkFBTUcsTUFERztBQUVUYixtQkFBTztBQUZFLFNBVFY7QUFhSGdCLGNBQU07QUFDRk4sa0JBQU1HLE1BREo7QUFFRkYsc0JBQVUsa0JBQVVNLEdBQVYsRUFBZTtBQUNyQixxQkFBS0MsT0FBTCxDQUFhO0FBQ1RDLGlDQUFhRixJQUFJRyxPQUFKLENBQVksR0FBWixNQUFxQixDQUFDO0FBRDFCLGlCQUFiO0FBR0g7QUFOQztBQWJILEtBRGU7QUF1QnRCQyxVQUFNO0FBQ0ZDLHNCQUFjO0FBRFosS0F2QmdCO0FBMEJ0QkMsYUFBUztBQUNMQyxpQkFBUyxtQkFBWTtBQUNqQixpQkFBS0MsS0FBTCxDQUFXLE9BQVg7QUFDSCxTQUhJO0FBSUxDLHlCQUFpQix5QkFBVWpCLElBQVYsRUFBZ0I7QUFDN0IsaUJBQUtTLE9BQUwsQ0FBYTtBQUNUSSw4QkFBY25CLFFBQVF3QixPQUFSLENBQWdCbEIsSUFBaEI7QUFETCxhQUFiO0FBR0g7QUFSSTtBQTFCYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHNcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBkb3Q6IEJvb2xlYW4sXHJcbiAgICAgICAgaW5mbzogbnVsbCxcclxuICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0U2l6ZVdpdGhVbml0J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3I6IFN0cmluZyxcclxuICAgICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxyXG4gICAgICAgIGNsYXNzUHJlZml4OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICd2YW4taWNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ltYWdlTmFtZTogdmFsLmluZGV4T2YoJy8nKSAhPT0gLTFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBzaXplV2l0aFVuaXQ6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFNpemVXaXRoVW5pdDogZnVuY3Rpb24gKHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHNpemVXaXRoVW5pdDogdXRpbHNfMS5hZGRVbml0KHNpemUpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==