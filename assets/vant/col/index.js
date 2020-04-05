"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'row',
        type: 'ancestor'
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        style: ''
    },
    methods: {
        setGutter: function setGutter(gutter) {
            var padding = gutter / 2 + "px";
            var style = gutter ? "padding-left: " + padding + "; padding-right: " + padding + ";" : '';
            if (style !== this.data.style) {
                this.setData({ style: style });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsInNwYW4iLCJOdW1iZXIiLCJvZmZzZXQiLCJkYXRhIiwic3R5bGUiLCJtZXRob2RzIiwic2V0R3V0dGVyIiwiZ3V0dGVyIiwicGFkZGluZyIsInNldERhdGEiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLGNBQVU7QUFDTkMsY0FBTSxLQURBO0FBRU5DLGNBQU07QUFGQSxLQURZO0FBS3RCQyxXQUFPO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsZ0JBQVFEO0FBRkwsS0FMZTtBQVN0QkUsVUFBTTtBQUNGQyxlQUFPO0FBREwsS0FUZ0I7QUFZdEJDLGFBQVM7QUFDTEMsbUJBQVcsbUJBQVVDLE1BQVYsRUFBa0I7QUFDekIsZ0JBQUlDLFVBQVVELFNBQVMsQ0FBVCxHQUFhLElBQTNCO0FBQ0EsZ0JBQUlILFFBQVFHLFNBQVMsbUJBQW1CQyxPQUFuQixHQUE2QixtQkFBN0IsR0FBbURBLE9BQW5ELEdBQTZELEdBQXRFLEdBQTRFLEVBQXhGO0FBQ0EsZ0JBQUlKLFVBQVUsS0FBS0QsSUFBTCxDQUFVQyxLQUF4QixFQUErQjtBQUMzQixxQkFBS0ssT0FBTCxDQUFhLEVBQUVMLE9BQU9BLEtBQVQsRUFBYjtBQUNIO0FBQ0o7QUFQSTtBQVphLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgcmVsYXRpb246IHtcclxuICAgICAgICBuYW1lOiAncm93JyxcclxuICAgICAgICB0eXBlOiAnYW5jZXN0b3InXHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBzcGFuOiBOdW1iZXIsXHJcbiAgICAgICAgb2Zmc2V0OiBOdW1iZXJcclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgc3R5bGU6ICcnXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNldEd1dHRlcjogZnVuY3Rpb24gKGd1dHRlcikge1xyXG4gICAgICAgICAgICB2YXIgcGFkZGluZyA9IGd1dHRlciAvIDIgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGd1dHRlciA/IFwicGFkZGluZy1sZWZ0OiBcIiArIHBhZGRpbmcgKyBcIjsgcGFkZGluZy1yaWdodDogXCIgKyBwYWRkaW5nICsgXCI7XCIgOiAnJztcclxuICAgICAgICAgICAgaWYgKHN0eWxlICE9PSB0aGlzLmRhdGEuc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHN0eWxlOiBzdHlsZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==