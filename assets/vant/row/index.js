"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'col',
        type: 'descendant',
        linked: function linked(target) {
            if (this.data.gutter) {
                target.setGutter(this.data.gutter);
            }
        }
    },
    props: {
        gutter: Number
    },
    watch: {
        gutter: 'setGutter'
    },
    mounted: function mounted() {
        if (this.data.gutter) {
            this.setGutter();
        }
    },
    methods: {
        setGutter: function setGutter() {
            var _this = this;
            var gutter = this.data.gutter;
            var margin = "-" + Number(gutter) / 2 + "px";
            var style = gutter ? "margin-right: " + margin + "; margin-left: " + margin + ";" : '';
            this.setData({ style: style });
            this.getRelationNodes('../col/index').forEach(function (col) {
                col.setGutter(_this.data.gutter);
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJkYXRhIiwiZ3V0dGVyIiwic2V0R3V0dGVyIiwicHJvcHMiLCJOdW1iZXIiLCJ3YXRjaCIsIm1vdW50ZWQiLCJtZXRob2RzIiwiX3RoaXMiLCJtYXJnaW4iLCJzdHlsZSIsInNldERhdGEiLCJnZXRSZWxhdGlvbk5vZGVzIiwiZm9yRWFjaCIsImNvbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsY0FBVTtBQUNOQyxjQUFNLEtBREE7QUFFTkMsY0FBTSxZQUZBO0FBR05DLGdCQUFRLGdCQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLGdCQUFJLEtBQUtDLElBQUwsQ0FBVUMsTUFBZCxFQUFzQjtBQUNsQkYsdUJBQU9HLFNBQVAsQ0FBaUIsS0FBS0YsSUFBTCxDQUFVQyxNQUEzQjtBQUNIO0FBQ0o7QUFQSyxLQURZO0FBVXRCRSxXQUFPO0FBQ0hGLGdCQUFRRztBQURMLEtBVmU7QUFhdEJDLFdBQU87QUFDSEosZ0JBQVE7QUFETCxLQWJlO0FBZ0J0QkssYUFBUyxtQkFBWTtBQUNqQixZQUFJLEtBQUtOLElBQUwsQ0FBVUMsTUFBZCxFQUFzQjtBQUNsQixpQkFBS0MsU0FBTDtBQUNIO0FBQ0osS0FwQnFCO0FBcUJ0QkssYUFBUztBQUNMTCxtQkFBVyxxQkFBWTtBQUNuQixnQkFBSU0sUUFBUSxJQUFaO0FBQ0EsZ0JBQUlQLFNBQVMsS0FBS0QsSUFBTCxDQUFVQyxNQUF2QjtBQUNBLGdCQUFJUSxTQUFTLE1BQU1MLE9BQU9ILE1BQVAsSUFBaUIsQ0FBdkIsR0FBMkIsSUFBeEM7QUFDQSxnQkFBSVMsUUFBUVQsU0FDTixtQkFBbUJRLE1BQW5CLEdBQTRCLGlCQUE1QixHQUFnREEsTUFBaEQsR0FBeUQsR0FEbkQsR0FFTixFQUZOO0FBR0EsaUJBQUtFLE9BQUwsQ0FBYSxFQUFFRCxPQUFPQSxLQUFULEVBQWI7QUFDQSxpQkFBS0UsZ0JBQUwsQ0FBc0IsY0FBdEIsRUFBc0NDLE9BQXRDLENBQThDLFVBQVVDLEdBQVYsRUFBZTtBQUN6REEsb0JBQUlaLFNBQUosQ0FBY00sTUFBTVIsSUFBTixDQUFXQyxNQUF6QjtBQUNILGFBRkQ7QUFHSDtBQVpJO0FBckJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgcmVsYXRpb246IHtcclxuICAgICAgICBuYW1lOiAnY29sJyxcclxuICAgICAgICB0eXBlOiAnZGVzY2VuZGFudCcsXHJcbiAgICAgICAgbGlua2VkOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZ3V0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0R3V0dGVyKHRoaXMuZGF0YS5ndXR0ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZ3V0dGVyOiBOdW1iZXJcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIGd1dHRlcjogJ3NldEd1dHRlcidcclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5ndXR0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRHdXR0ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNldEd1dHRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgZ3V0dGVyID0gdGhpcy5kYXRhLmd1dHRlcjtcclxuICAgICAgICAgICAgdmFyIG1hcmdpbiA9IFwiLVwiICsgTnVtYmVyKGd1dHRlcikgLyAyICsgXCJweFwiO1xyXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBndXR0ZXJcclxuICAgICAgICAgICAgICAgID8gXCJtYXJnaW4tcmlnaHQ6IFwiICsgbWFyZ2luICsgXCI7IG1hcmdpbi1sZWZ0OiBcIiArIG1hcmdpbiArIFwiO1wiXHJcbiAgICAgICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBzdHlsZTogc3R5bGUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vY29sL2luZGV4JykuZm9yRWFjaChmdW5jdGlvbiAoY29sKSB7XHJcbiAgICAgICAgICAgICAgICBjb2wuc2V0R3V0dGVyKF90aGlzLmRhdGEuZ3V0dGVyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19