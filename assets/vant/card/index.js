"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require('./../mixins/link.js');
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    classes: ['num-class', 'desc-class', 'thumb-class', 'title-class', 'price-class', 'origin-price-class'],
    mixins: [link_1.link],
    props: {
        tag: String,
        num: String,
        desc: String,
        thumb: String,
        title: String,
        price: String,
        centered: Boolean,
        lazyLoad: Boolean,
        thumbLink: String,
        originPrice: String,
        thumbMode: {
            type: String,
            value: 'aspectFit'
        },
        currency: {
            type: String,
            value: '¥'
        }
    },
    methods: {
        onClickThumb: function onClickThumb() {
            this.jumpLink('thumbLink');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibGlua18xIiwicmVxdWlyZSIsImNvbXBvbmVudF8xIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwicHJvcHMiLCJ0YWciLCJTdHJpbmciLCJudW0iLCJkZXNjIiwidGh1bWIiLCJ0aXRsZSIsInByaWNlIiwiY2VudGVyZWQiLCJCb29sZWFuIiwibGF6eUxvYWQiLCJ0aHVtYkxpbmsiLCJvcmlnaW5QcmljZSIsInRodW1iTW9kZSIsInR5cGUiLCJjdXJyZW5jeSIsIm1ldGhvZHMiLCJvbkNsaWNrVGh1bWIiLCJqdW1wTGluayJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLFNBQVNDLFFBQVEsZ0JBQVIsQ0FBYjtBQUNBLElBQUlDLGNBQWNELFFBQVEscUJBQVIsQ0FBbEI7QUFDQUMsWUFBWUMsYUFBWixDQUEwQjtBQUN0QkMsYUFBUyxDQUNMLFdBREssRUFFTCxZQUZLLEVBR0wsYUFISyxFQUlMLGFBSkssRUFLTCxhQUxLLEVBTUwsb0JBTkssQ0FEYTtBQVN0QkMsWUFBUSxDQUFDTCxPQUFPTSxJQUFSLENBVGM7QUFVdEJDLFdBQU87QUFDSEMsYUFBS0MsTUFERjtBQUVIQyxhQUFLRCxNQUZGO0FBR0hFLGNBQU1GLE1BSEg7QUFJSEcsZUFBT0gsTUFKSjtBQUtISSxlQUFPSixNQUxKO0FBTUhLLGVBQU9MLE1BTko7QUFPSE0sa0JBQVVDLE9BUFA7QUFRSEMsa0JBQVVELE9BUlA7QUFTSEUsbUJBQVdULE1BVFI7QUFVSFUscUJBQWFWLE1BVlY7QUFXSFcsbUJBQVc7QUFDUEMsa0JBQU1aLE1BREM7QUFFUFYsbUJBQU87QUFGQSxTQVhSO0FBZUh1QixrQkFBVTtBQUNORCxrQkFBTVosTUFEQTtBQUVOVixtQkFBTztBQUZEO0FBZlAsS0FWZTtBQThCdEJ3QixhQUFTO0FBQ0xDLHNCQUFjLHdCQUFZO0FBQ3RCLGlCQUFLQyxRQUFMLENBQWMsV0FBZDtBQUNIO0FBSEk7QUE5QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgbGlua18xID0gcmVxdWlyZShcIi4uL21peGlucy9saW5rXCIpO1xyXG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcclxuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XHJcbiAgICBjbGFzc2VzOiBbXHJcbiAgICAgICAgJ251bS1jbGFzcycsXHJcbiAgICAgICAgJ2Rlc2MtY2xhc3MnLFxyXG4gICAgICAgICd0aHVtYi1jbGFzcycsXHJcbiAgICAgICAgJ3RpdGxlLWNsYXNzJyxcclxuICAgICAgICAncHJpY2UtY2xhc3MnLFxyXG4gICAgICAgICdvcmlnaW4tcHJpY2UtY2xhc3MnLFxyXG4gICAgXSxcclxuICAgIG1peGluczogW2xpbmtfMS5saW5rXSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdGFnOiBTdHJpbmcsXHJcbiAgICAgICAgbnVtOiBTdHJpbmcsXHJcbiAgICAgICAgZGVzYzogU3RyaW5nLFxyXG4gICAgICAgIHRodW1iOiBTdHJpbmcsXHJcbiAgICAgICAgdGl0bGU6IFN0cmluZyxcclxuICAgICAgICBwcmljZTogU3RyaW5nLFxyXG4gICAgICAgIGNlbnRlcmVkOiBCb29sZWFuLFxyXG4gICAgICAgIGxhenlMb2FkOiBCb29sZWFuLFxyXG4gICAgICAgIHRodW1iTGluazogU3RyaW5nLFxyXG4gICAgICAgIG9yaWdpblByaWNlOiBTdHJpbmcsXHJcbiAgICAgICAgdGh1bWJNb2RlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdhc3BlY3RGaXQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdXJyZW5jeToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnwqUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkNsaWNrVGh1bWI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5qdW1wTGluaygndGh1bWJMaW5rJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19