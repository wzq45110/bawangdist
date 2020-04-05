"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    props: {
        dashed: {
            type: Boolean,
            value: false
        },
        hairline: {
            type: Boolean,
            value: false
        },
        contentPosition: {
            type: String,
            value: ''
        },
        fontSize: {
            type: Number,
            value: ''
        },
        borderColor: {
            type: String,
            value: ''
        },
        textColor: {
            type: String,
            value: ''
        },
        customStyle: {
            type: String,
            value: ''
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwiZGFzaGVkIiwidHlwZSIsIkJvb2xlYW4iLCJoYWlybGluZSIsImNvbnRlbnRQb3NpdGlvbiIsIlN0cmluZyIsImZvbnRTaXplIiwiTnVtYmVyIiwiYm9yZGVyQ29sb3IiLCJ0ZXh0Q29sb3IiLCJjdXN0b21TdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsV0FBTztBQUNIQyxnQkFBUTtBQUNKQyxrQkFBTUMsT0FERjtBQUVKUCxtQkFBTztBQUZILFNBREw7QUFLSFEsa0JBQVU7QUFDTkYsa0JBQU1DLE9BREE7QUFFTlAsbUJBQU87QUFGRCxTQUxQO0FBU0hTLHlCQUFpQjtBQUNiSCxrQkFBTUksTUFETztBQUViVixtQkFBTztBQUZNLFNBVGQ7QUFhSFcsa0JBQVU7QUFDTkwsa0JBQU1NLE1BREE7QUFFTlosbUJBQU87QUFGRCxTQWJQO0FBaUJIYSxxQkFBYTtBQUNUUCxrQkFBTUksTUFERztBQUVUVixtQkFBTztBQUZFLFNBakJWO0FBcUJIYyxtQkFBVztBQUNQUixrQkFBTUksTUFEQztBQUVQVixtQkFBTztBQUZBLFNBckJSO0FBeUJIZSxxQkFBYTtBQUNUVCxrQkFBTUksTUFERztBQUVUVixtQkFBTztBQUZFO0FBekJWO0FBRGUsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcclxuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGRhc2hlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhaXJsaW5lOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudFBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb250U2l6ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9yZGVyQ29sb3I6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRleHRDb2xvcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VzdG9tU3R5bGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=