"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require('./../mixins/link.js');
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    classes: ['title-class', 'label-class', 'value-class', 'right-icon-class', 'hover-class'],
    mixins: [link_1.link],
    props: {
        title: null,
        value: null,
        icon: String,
        size: String,
        label: String,
        center: Boolean,
        isLink: Boolean,
        required: Boolean,
        clickable: Boolean,
        titleWidth: String,
        customStyle: String,
        arrowDirection: String,
        useLabelSlot: Boolean,
        border: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibGlua18xIiwicmVxdWlyZSIsImNvbXBvbmVudF8xIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwicHJvcHMiLCJ0aXRsZSIsImljb24iLCJTdHJpbmciLCJzaXplIiwibGFiZWwiLCJjZW50ZXIiLCJCb29sZWFuIiwiaXNMaW5rIiwicmVxdWlyZWQiLCJjbGlja2FibGUiLCJ0aXRsZVdpZHRoIiwiY3VzdG9tU3R5bGUiLCJhcnJvd0RpcmVjdGlvbiIsInVzZUxhYmVsU2xvdCIsImJvcmRlciIsInR5cGUiLCJtZXRob2RzIiwib25DbGljayIsImV2ZW50IiwiJGVtaXQiLCJkZXRhaWwiLCJqdW1wTGluayJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLFNBQVNDLFFBQVEsZ0JBQVIsQ0FBYjtBQUNBLElBQUlDLGNBQWNELFFBQVEscUJBQVIsQ0FBbEI7QUFDQUMsWUFBWUMsYUFBWixDQUEwQjtBQUN0QkMsYUFBUyxDQUNMLGFBREssRUFFTCxhQUZLLEVBR0wsYUFISyxFQUlMLGtCQUpLLEVBS0wsYUFMSyxDQURhO0FBUXRCQyxZQUFRLENBQUNMLE9BQU9NLElBQVIsQ0FSYztBQVN0QkMsV0FBTztBQUNIQyxlQUFPLElBREo7QUFFSFQsZUFBTyxJQUZKO0FBR0hVLGNBQU1DLE1BSEg7QUFJSEMsY0FBTUQsTUFKSDtBQUtIRSxlQUFPRixNQUxKO0FBTUhHLGdCQUFRQyxPQU5MO0FBT0hDLGdCQUFRRCxPQVBMO0FBUUhFLGtCQUFVRixPQVJQO0FBU0hHLG1CQUFXSCxPQVRSO0FBVUhJLG9CQUFZUixNQVZUO0FBV0hTLHFCQUFhVCxNQVhWO0FBWUhVLHdCQUFnQlYsTUFaYjtBQWFIVyxzQkFBY1AsT0FiWDtBQWNIUSxnQkFBUTtBQUNKQyxrQkFBTVQsT0FERjtBQUVKZixtQkFBTztBQUZIO0FBZEwsS0FUZTtBQTRCdEJ5QixhQUFTO0FBQ0xDLGlCQUFTLGlCQUFVQyxLQUFWLEVBQWlCO0FBQ3RCLGlCQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsTUFBTUUsTUFBMUI7QUFDQSxpQkFBS0MsUUFBTDtBQUNIO0FBSkk7QUE1QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbGlua18xID0gcmVxdWlyZShcIi4uL21peGlucy9saW5rXCIpO1xyXG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcclxuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XHJcbiAgICBjbGFzc2VzOiBbXHJcbiAgICAgICAgJ3RpdGxlLWNsYXNzJyxcclxuICAgICAgICAnbGFiZWwtY2xhc3MnLFxyXG4gICAgICAgICd2YWx1ZS1jbGFzcycsXHJcbiAgICAgICAgJ3JpZ2h0LWljb24tY2xhc3MnLFxyXG4gICAgICAgICdob3Zlci1jbGFzcydcclxuICAgIF0sXHJcbiAgICBtaXhpbnM6IFtsaW5rXzEubGlua10sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHRpdGxlOiBudWxsLFxyXG4gICAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICAgIGljb246IFN0cmluZyxcclxuICAgICAgICBzaXplOiBTdHJpbmcsXHJcbiAgICAgICAgbGFiZWw6IFN0cmluZyxcclxuICAgICAgICBjZW50ZXI6IEJvb2xlYW4sXHJcbiAgICAgICAgaXNMaW5rOiBCb29sZWFuLFxyXG4gICAgICAgIHJlcXVpcmVkOiBCb29sZWFuLFxyXG4gICAgICAgIGNsaWNrYWJsZTogQm9vbGVhbixcclxuICAgICAgICB0aXRsZVdpZHRoOiBTdHJpbmcsXHJcbiAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcclxuICAgICAgICBhcnJvd0RpcmVjdGlvbjogU3RyaW5nLFxyXG4gICAgICAgIHVzZUxhYmVsU2xvdDogQm9vbGVhbixcclxuICAgICAgICBib3JkZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50LmRldGFpbCk7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcExpbmsoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=