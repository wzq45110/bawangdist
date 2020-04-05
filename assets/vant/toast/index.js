"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    props: {
        show: Boolean,
        mask: Boolean,
        message: String,
        forbidClick: Boolean,
        zIndex: {
            type: Number,
            value: 1000
        },
        type: {
            type: String,
            value: 'text'
        },
        loadingType: {
            type: String,
            value: 'circular'
        },
        position: {
            type: String,
            value: 'middle'
        }
    },
    methods: {
        // for prevent touchmove
        noop: function noop() {}
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJtYXNrIiwibWVzc2FnZSIsIlN0cmluZyIsImZvcmJpZENsaWNrIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsImxvYWRpbmdUeXBlIiwicG9zaXRpb24iLCJtZXRob2RzIiwibm9vcCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsV0FBTztBQUNIQyxjQUFNQyxPQURIO0FBRUhDLGNBQU1ELE9BRkg7QUFHSEUsaUJBQVNDLE1BSE47QUFJSEMscUJBQWFKLE9BSlY7QUFLSEssZ0JBQVE7QUFDSkMsa0JBQU1DLE1BREY7QUFFSmIsbUJBQU87QUFGSCxTQUxMO0FBU0hZLGNBQU07QUFDRkEsa0JBQU1ILE1BREo7QUFFRlQsbUJBQU87QUFGTCxTQVRIO0FBYUhjLHFCQUFhO0FBQ1RGLGtCQUFNSCxNQURHO0FBRVRULG1CQUFPO0FBRkUsU0FiVjtBQWlCSGUsa0JBQVU7QUFDTkgsa0JBQU1ILE1BREE7QUFFTlQsbUJBQU87QUFGRDtBQWpCUCxLQURlO0FBdUJ0QmdCLGFBQVM7QUFDTDtBQUNBQyxjQUFNLGdCQUFZLENBQUc7QUFGaEI7QUF2QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcclxuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHNob3c6IEJvb2xlYW4sXHJcbiAgICAgICAgbWFzazogQm9vbGVhbixcclxuICAgICAgICBtZXNzYWdlOiBTdHJpbmcsXHJcbiAgICAgICAgZm9yYmlkQ2xpY2s6IEJvb2xlYW4sXHJcbiAgICAgICAgekluZGV4OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDEwMDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3RleHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkaW5nVHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnY2lyY3VsYXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnbWlkZGxlJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLy8gZm9yIHByZXZlbnQgdG91Y2htb3ZlXHJcbiAgICAgICAgbm9vcDogZnVuY3Rpb24gKCkgeyB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=