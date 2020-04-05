"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var color_1 = require('./../common/color.js');
var utils_1 = require('./../common/utils.js');
component_1.VantComponent({
    props: {
        inactive: Boolean,
        percentage: Number,
        pivotText: String,
        pivotColor: String,
        showPivot: {
            type: Boolean,
            value: true
        },
        color: {
            type: String,
            value: color_1.BLUE
        },
        textColor: {
            type: String,
            value: '#fff'
        },
        strokeWidth: {
            type: null,
            observer: 'setStrokeWidthUnit'
        }
    },
    data: {
        strokeWidthUnit: '4px'
    },
    methods: {
        setStrokeWidthUnit: function setStrokeWidthUnit(val) {
            this.setData({
                strokeWidthUnit: utils_1.addUnit(val)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiY29sb3JfMSIsInV0aWxzXzEiLCJWYW50Q29tcG9uZW50IiwicHJvcHMiLCJpbmFjdGl2ZSIsIkJvb2xlYW4iLCJwZXJjZW50YWdlIiwiTnVtYmVyIiwicGl2b3RUZXh0IiwiU3RyaW5nIiwicGl2b3RDb2xvciIsInNob3dQaXZvdCIsInR5cGUiLCJjb2xvciIsIkJMVUUiLCJ0ZXh0Q29sb3IiLCJzdHJva2VXaWR0aCIsIm9ic2VydmVyIiwiZGF0YSIsInN0cm9rZVdpZHRoVW5pdCIsIm1ldGhvZHMiLCJzZXRTdHJva2VXaWR0aFVuaXQiLCJ2YWwiLCJzZXREYXRhIiwiYWRkVW5pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLGlCQUFSLENBQWQ7QUFDQSxJQUFJRSxVQUFVRixRQUFRLGlCQUFSLENBQWQ7QUFDQUQsWUFBWUksYUFBWixDQUEwQjtBQUN0QkMsV0FBTztBQUNIQyxrQkFBVUMsT0FEUDtBQUVIQyxvQkFBWUMsTUFGVDtBQUdIQyxtQkFBV0MsTUFIUjtBQUlIQyxvQkFBWUQsTUFKVDtBQUtIRSxtQkFBVztBQUNQQyxrQkFBTVAsT0FEQztBQUVQUixtQkFBTztBQUZBLFNBTFI7QUFTSGdCLGVBQU87QUFDSEQsa0JBQU1ILE1BREg7QUFFSFosbUJBQU9HLFFBQVFjO0FBRlosU0FUSjtBQWFIQyxtQkFBVztBQUNQSCxrQkFBTUgsTUFEQztBQUVQWixtQkFBTztBQUZBLFNBYlI7QUFpQkhtQixxQkFBYTtBQUNUSixrQkFBTSxJQURHO0FBRVRLLHNCQUFVO0FBRkQ7QUFqQlYsS0FEZTtBQXVCdEJDLFVBQU07QUFDRkMseUJBQWlCO0FBRGYsS0F2QmdCO0FBMEJ0QkMsYUFBUztBQUNMQyw0QkFBb0IsNEJBQVVDLEdBQVYsRUFBZTtBQUMvQixpQkFBS0MsT0FBTCxDQUFhO0FBQ1RKLGlDQUFpQmxCLFFBQVF1QixPQUFSLENBQWdCRixHQUFoQjtBQURSLGFBQWI7QUFHSDtBQUxJO0FBMUJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbnZhciBjb2xvcl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb2xvclwiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3V0aWxzXCIpO1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgaW5hY3RpdmU6IEJvb2xlYW4sXHJcbiAgICAgICAgcGVyY2VudGFnZTogTnVtYmVyLFxyXG4gICAgICAgIHBpdm90VGV4dDogU3RyaW5nLFxyXG4gICAgICAgIHBpdm90Q29sb3I6IFN0cmluZyxcclxuICAgICAgICBzaG93UGl2b3Q6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6IGNvbG9yXzEuQkxVRVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGV4dENvbG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcjZmZmJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3Ryb2tlV2lkdGg6IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRTdHJva2VXaWR0aFVuaXQnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBzdHJva2VXaWR0aFVuaXQ6ICc0cHgnXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNldFN0cm9rZVdpZHRoVW5pdDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGhVbml0OiB1dGlsc18xLmFkZFVuaXQodmFsKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=