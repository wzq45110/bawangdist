"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var color_1 = require('./../common/color.js');
component_1.VantComponent({
    props: {
        icon: String,
        steps: Array,
        active: Number,
        direction: {
            type: String,
            value: 'horizontal'
        },
        activeColor: {
            type: String,
            value: color_1.GREEN
        },
        activeIcon: {
            type: String,
            value: 'checked'
        },
        inactiveIcon: String
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiY29sb3JfMSIsIlZhbnRDb21wb25lbnQiLCJwcm9wcyIsImljb24iLCJTdHJpbmciLCJzdGVwcyIsIkFycmF5IiwiYWN0aXZlIiwiTnVtYmVyIiwiZGlyZWN0aW9uIiwidHlwZSIsImFjdGl2ZUNvbG9yIiwiR1JFRU4iLCJhY3RpdmVJY29uIiwiaW5hY3RpdmVJY29uIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElBQUlDLFVBQVVELFFBQVEsaUJBQVIsQ0FBZDtBQUNBRCxZQUFZRyxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsZUFBT0MsS0FGSjtBQUdIQyxnQkFBUUMsTUFITDtBQUlIQyxtQkFBVztBQUNQQyxrQkFBTU4sTUFEQztBQUVQUCxtQkFBTztBQUZBLFNBSlI7QUFRSGMscUJBQWE7QUFDVEQsa0JBQU1OLE1BREc7QUFFVFAsbUJBQU9HLFFBQVFZO0FBRk4sU0FSVjtBQVlIQyxvQkFBWTtBQUNSSCxrQkFBTU4sTUFERTtBQUVSUCxtQkFBTztBQUZDLFNBWlQ7QUFnQkhpQixzQkFBY1Y7QUFoQlg7QUFEZSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG52YXIgY29sb3JfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29sb3JcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBpY29uOiBTdHJpbmcsXHJcbiAgICAgICAgc3RlcHM6IEFycmF5LFxyXG4gICAgICAgIGFjdGl2ZTogTnVtYmVyLFxyXG4gICAgICAgIGRpcmVjdGlvbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnaG9yaXpvbnRhbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGl2ZUNvbG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6IGNvbG9yXzEuR1JFRU5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGl2ZUljb246IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2NoZWNrZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmFjdGl2ZUljb246IFN0cmluZ1xyXG4gICAgfVxyXG59KTtcclxuIl19