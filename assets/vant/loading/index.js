"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
component_1.VantComponent({
    props: {
        size: {
            type: String,
            observer: 'setSizeWithUnit'
        },
        type: {
            type: String,
            value: 'circular'
        },
        color: {
            type: String,
            value: '#c9c9c9'
        }
    },
    data: {
        sizeWithUnit: '30px'
    },
    methods: {
        setSizeWithUnit: function setSizeWithUnit(size) {
            this.setData({
                sizeWithUnit: utils_1.addUnit(size)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsIlZhbnRDb21wb25lbnQiLCJwcm9wcyIsInNpemUiLCJ0eXBlIiwiU3RyaW5nIiwib2JzZXJ2ZXIiLCJjb2xvciIsImRhdGEiLCJzaXplV2l0aFVuaXQiLCJtZXRob2RzIiwic2V0U2l6ZVdpdGhVbml0Iiwic2V0RGF0YSIsImFkZFVuaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxpQkFBUixDQUFkO0FBQ0FELFlBQVlHLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU87QUFDSEMsY0FBTTtBQUNGQyxrQkFBTUMsTUFESjtBQUVGQyxzQkFBVTtBQUZSLFNBREg7QUFLSEYsY0FBTTtBQUNGQSxrQkFBTUMsTUFESjtBQUVGUixtQkFBTztBQUZMLFNBTEg7QUFTSFUsZUFBTztBQUNISCxrQkFBTUMsTUFESDtBQUVIUixtQkFBTztBQUZKO0FBVEosS0FEZTtBQWV0QlcsVUFBTTtBQUNGQyxzQkFBYztBQURaLEtBZmdCO0FBa0J0QkMsYUFBUztBQUNMQyx5QkFBaUIseUJBQVVSLElBQVYsRUFBZ0I7QUFDN0IsaUJBQUtTLE9BQUwsQ0FBYTtBQUNUSCw4QkFBY1QsUUFBUWEsT0FBUixDQUFnQlYsSUFBaEI7QUFETCxhQUFiO0FBR0g7QUFMSTtBQWxCYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHNcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBzaXplOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRTaXplV2l0aFVuaXQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdjaXJjdWxhcidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcjYzljOWM5J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgc2l6ZVdpdGhVbml0OiAnMzBweCdcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc2V0U2l6ZVdpdGhVbml0OiBmdW5jdGlvbiAoc2l6ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgc2l6ZVdpdGhVbml0OiB1dGlsc18xLmFkZFVuaXQoc2l6ZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19