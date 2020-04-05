"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require('./../mixins/link.js');
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'grid',
        type: 'ancestor',
        linked: function linked(parent) {
            this.parent = parent;
        }
    },
    mixins: [link_1.link],
    props: {
        icon: String,
        dot: Boolean,
        info: null,
        text: String,
        useSlot: Boolean
    },
    mounted: function mounted() {
        this.updateStyle();
    },
    methods: {
        updateStyle: function updateStyle() {
            if (!this.parent) {
                return;
            }
            var _a = this.parent,
                data = _a.data,
                children = _a.children;
            var columnNum = data.columnNum,
                border = data.border,
                square = data.square,
                gutter = data.gutter,
                clickable = data.clickable,
                center = data.center;
            var width = 100 / columnNum + "%";
            var styleWrapper = [];
            styleWrapper.push("width: " + width);
            if (square) {
                styleWrapper.push("padding-top: " + width);
            }
            if (gutter) {
                styleWrapper.push("padding-right: " + gutter + "px");
                var index = children.indexOf(this);
                if (index >= columnNum) {
                    styleWrapper.push("margin-top: " + gutter + "px");
                }
            }
            this.setData({
                style: styleWrapper.join('; '),
                center: center,
                border: border,
                square: square,
                gutter: gutter,
                clickable: clickable
            });
        },
        onClick: function onClick() {
            this.$emit('click');
            this.jumpLink();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibGlua18xIiwicmVxdWlyZSIsImNvbXBvbmVudF8xIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJwYXJlbnQiLCJtaXhpbnMiLCJsaW5rIiwicHJvcHMiLCJpY29uIiwiU3RyaW5nIiwiZG90IiwiQm9vbGVhbiIsImluZm8iLCJ0ZXh0IiwidXNlU2xvdCIsIm1vdW50ZWQiLCJ1cGRhdGVTdHlsZSIsIm1ldGhvZHMiLCJfYSIsImRhdGEiLCJjaGlsZHJlbiIsImNvbHVtbk51bSIsImJvcmRlciIsInNxdWFyZSIsImd1dHRlciIsImNsaWNrYWJsZSIsImNlbnRlciIsIndpZHRoIiwic3R5bGVXcmFwcGVyIiwicHVzaCIsImluZGV4IiwiaW5kZXhPZiIsInNldERhdGEiLCJzdHlsZSIsImpvaW4iLCJvbkNsaWNrIiwiJGVtaXQiLCJqdW1wTGluayJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLFNBQVNDLFFBQVEsZ0JBQVIsQ0FBYjtBQUNBLElBQUlDLGNBQWNELFFBQVEscUJBQVIsQ0FBbEI7QUFDQUMsWUFBWUMsYUFBWixDQUEwQjtBQUN0QkMsY0FBVTtBQUNOQyxjQUFNLE1BREE7QUFFTkMsY0FBTSxVQUZBO0FBR05DLGdCQUFRLGdCQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLGlCQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDSDtBQUxLLEtBRFk7QUFRdEJDLFlBQVEsQ0FBQ1QsT0FBT1UsSUFBUixDQVJjO0FBU3RCQyxXQUFPO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsYUFBS0MsT0FGRjtBQUdIQyxjQUFNLElBSEg7QUFJSEMsY0FBTUosTUFKSDtBQUtISyxpQkFBU0g7QUFMTixLQVRlO0FBZ0J0QkksYUFBUyxtQkFBWTtBQUNqQixhQUFLQyxXQUFMO0FBQ0gsS0FsQnFCO0FBbUJ0QkMsYUFBUztBQUNMRCxxQkFBYSx1QkFBWTtBQUNyQixnQkFBSSxDQUFDLEtBQUtaLE1BQVYsRUFBa0I7QUFDZDtBQUNIO0FBQ0QsZ0JBQUljLEtBQUssS0FBS2QsTUFBZDtBQUFBLGdCQUFzQmUsT0FBT0QsR0FBR0MsSUFBaEM7QUFBQSxnQkFBc0NDLFdBQVdGLEdBQUdFLFFBQXBEO0FBQ0EsZ0JBQUlDLFlBQVlGLEtBQUtFLFNBQXJCO0FBQUEsZ0JBQWdDQyxTQUFTSCxLQUFLRyxNQUE5QztBQUFBLGdCQUFzREMsU0FBU0osS0FBS0ksTUFBcEU7QUFBQSxnQkFBNEVDLFNBQVNMLEtBQUtLLE1BQTFGO0FBQUEsZ0JBQWtHQyxZQUFZTixLQUFLTSxTQUFuSDtBQUFBLGdCQUE4SEMsU0FBU1AsS0FBS08sTUFBNUk7QUFDQSxnQkFBSUMsUUFBUSxNQUFNTixTQUFOLEdBQWtCLEdBQTlCO0FBQ0EsZ0JBQUlPLGVBQWUsRUFBbkI7QUFDQUEseUJBQWFDLElBQWIsQ0FBa0IsWUFBWUYsS0FBOUI7QUFDQSxnQkFBSUosTUFBSixFQUFZO0FBQ1JLLDZCQUFhQyxJQUFiLENBQWtCLGtCQUFrQkYsS0FBcEM7QUFDSDtBQUNELGdCQUFJSCxNQUFKLEVBQVk7QUFDUkksNkJBQWFDLElBQWIsQ0FBa0Isb0JBQW9CTCxNQUFwQixHQUE2QixJQUEvQztBQUNBLG9CQUFJTSxRQUFRVixTQUFTVyxPQUFULENBQWlCLElBQWpCLENBQVo7QUFDQSxvQkFBSUQsU0FBU1QsU0FBYixFQUF3QjtBQUNwQk8saUNBQWFDLElBQWIsQ0FBa0IsaUJBQWlCTCxNQUFqQixHQUEwQixJQUE1QztBQUNIO0FBQ0o7QUFDRCxpQkFBS1EsT0FBTCxDQUFhO0FBQ1RDLHVCQUFPTCxhQUFhTSxJQUFiLENBQWtCLElBQWxCLENBREU7QUFFVFIsd0JBQVFBLE1BRkM7QUFHVEosd0JBQVFBLE1BSEM7QUFJVEMsd0JBQVFBLE1BSkM7QUFLVEMsd0JBQVFBLE1BTEM7QUFNVEMsMkJBQVdBO0FBTkYsYUFBYjtBQVFILFNBNUJJO0FBNkJMVSxpQkFBUyxtQkFBWTtBQUNqQixpQkFBS0MsS0FBTCxDQUFXLE9BQVg7QUFDQSxpQkFBS0MsUUFBTDtBQUNIO0FBaENJO0FBbkJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGxpbmtfMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvbGlua1wiKTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgcmVsYXRpb246IHtcclxuICAgICAgICBuYW1lOiAnZ3JpZCcsXHJcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJyxcclxuICAgICAgICBsaW5rZWQ6IGZ1bmN0aW9uIChwYXJlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1peGluczogW2xpbmtfMS5saW5rXSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgaWNvbjogU3RyaW5nLFxyXG4gICAgICAgIGRvdDogQm9vbGVhbixcclxuICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgIHRleHQ6IFN0cmluZyxcclxuICAgICAgICB1c2VTbG90OiBCb29sZWFuXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGUoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdXBkYXRlU3R5bGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucGFyZW50LCBkYXRhID0gX2EuZGF0YSwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbk51bSA9IGRhdGEuY29sdW1uTnVtLCBib3JkZXIgPSBkYXRhLmJvcmRlciwgc3F1YXJlID0gZGF0YS5zcXVhcmUsIGd1dHRlciA9IGRhdGEuZ3V0dGVyLCBjbGlja2FibGUgPSBkYXRhLmNsaWNrYWJsZSwgY2VudGVyID0gZGF0YS5jZW50ZXI7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IDEwMCAvIGNvbHVtbk51bSArIFwiJVwiO1xyXG4gICAgICAgICAgICB2YXIgc3R5bGVXcmFwcGVyID0gW107XHJcbiAgICAgICAgICAgIHN0eWxlV3JhcHBlci5wdXNoKFwid2lkdGg6IFwiICsgd2lkdGgpO1xyXG4gICAgICAgICAgICBpZiAoc3F1YXJlKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVdyYXBwZXIucHVzaChcInBhZGRpbmctdG9wOiBcIiArIHdpZHRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZ3V0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVdyYXBwZXIucHVzaChcInBhZGRpbmctcmlnaHQ6IFwiICsgZ3V0dGVyICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGNoaWxkcmVuLmluZGV4T2YodGhpcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPj0gY29sdW1uTnVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVXcmFwcGVyLnB1c2goXCJtYXJnaW4tdG9wOiBcIiArIGd1dHRlciArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHN0eWxlOiBzdHlsZVdyYXBwZXIuam9pbignOyAnKSxcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogY2VudGVyLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBib3JkZXIsXHJcbiAgICAgICAgICAgICAgICBzcXVhcmU6IHNxdWFyZSxcclxuICAgICAgICAgICAgICAgIGd1dHRlcjogZ3V0dGVyLFxyXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlOiBjbGlja2FibGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcExpbmsoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=