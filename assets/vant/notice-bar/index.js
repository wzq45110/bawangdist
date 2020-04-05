"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var FONT_COLOR = '#ed6a0c';
var BG_COLOR = '#fffbe8';
component_1.VantComponent({
    props: {
        text: {
            type: String,
            value: ''
        },
        mode: {
            type: String,
            value: ''
        },
        url: {
            type: String,
            value: ''
        },
        openType: {
            type: String,
            value: 'navigate'
        },
        delay: {
            type: Number,
            value: 1
        },
        speed: {
            type: Number,
            value: 50
        },
        scrollable: {
            type: Boolean,
            value: true
        },
        leftIcon: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: FONT_COLOR
        },
        backgroundColor: {
            type: String,
            value: BG_COLOR
        },
        wrapable: Boolean
    },
    data: {
        show: true
    },
    watch: {
        text: function text() {
            this.setData({}, this.init);
        }
    },
    created: function created() {
        this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: 'linear'
        });
    },
    destroyed: function destroyed() {
        this.timer && clearTimeout(this.timer);
    },
    methods: {
        init: function init() {
            var _this = this;
            Promise.all([this.getRect('.van-notice-bar__content'), this.getRect('.van-notice-bar__wrap')]).then(function (rects) {
                var contentRect = rects[0],
                    wrapRect = rects[1];
                if (contentRect == null || wrapRect == null || !contentRect.width || !wrapRect.width) {
                    return;
                }
                var _a = _this.data,
                    speed = _a.speed,
                    scrollable = _a.scrollable,
                    delay = _a.delay;
                if (scrollable && wrapRect.width < contentRect.width) {
                    var duration = contentRect.width / speed * 1000;
                    _this.wrapWidth = wrapRect.width;
                    _this.contentWidth = contentRect.width;
                    _this.duration = duration;
                    _this.animation = wx.createAnimation({
                        duration: duration,
                        timingFunction: 'linear',
                        delay: delay
                    });
                    _this.scroll();
                }
            });
        },
        scroll: function scroll() {
            var _this = this;
            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.setData({
                animationData: this.resetAnimation.translateX(this.wrapWidth).step().export()
            });
            setTimeout(function () {
                _this.setData({
                    animationData: _this.animation.translateX(-_this.contentWidth).step().export()
                });
            }, 20);
            this.timer = setTimeout(function () {
                _this.scroll();
            }, this.duration);
        },
        onClickIcon: function onClickIcon() {
            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.setData({ show: false });
        },
        onClick: function onClick(event) {
            this.$emit('click', event);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiRk9OVF9DT0xPUiIsIkJHX0NPTE9SIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJtb2RlIiwidXJsIiwib3BlblR5cGUiLCJkZWxheSIsIk51bWJlciIsInNwZWVkIiwic2Nyb2xsYWJsZSIsIkJvb2xlYW4iLCJsZWZ0SWNvbiIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwid3JhcGFibGUiLCJkYXRhIiwic2hvdyIsIndhdGNoIiwic2V0RGF0YSIsImluaXQiLCJjcmVhdGVkIiwicmVzZXRBbmltYXRpb24iLCJ3eCIsImNyZWF0ZUFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJkZXN0cm95ZWQiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsIm1ldGhvZHMiLCJfdGhpcyIsIlByb21pc2UiLCJhbGwiLCJnZXRSZWN0IiwidGhlbiIsInJlY3RzIiwiY29udGVudFJlY3QiLCJ3cmFwUmVjdCIsIndpZHRoIiwiX2EiLCJ3cmFwV2lkdGgiLCJjb250ZW50V2lkdGgiLCJhbmltYXRpb24iLCJzY3JvbGwiLCJhbmltYXRpb25EYXRhIiwidHJhbnNsYXRlWCIsInN0ZXAiLCJleHBvcnQiLCJzZXRUaW1lb3V0Iiwib25DbGlja0ljb24iLCJvbkNsaWNrIiwiZXZlbnQiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxhQUFhLFNBQWpCO0FBQ0EsSUFBSUMsV0FBVyxTQUFmO0FBQ0FILFlBQVlJLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU87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TCxJQUFjQyxhQUFhLEtBQUtELEtBQWxCLENBQWQ7QUFDQSxpQkFBS0EsS0FBTCxHQUFhLElBQWI7QUFDQSxpQkFBS1QsT0FBTCxDQUFhO0FBQ1QwQiwrQkFBZSxLQUFLdkIsY0FBTCxDQUNWd0IsVUFEVSxDQUNDLEtBQUtMLFNBRE4sRUFFVk0sSUFGVSxHQUdWQyxNQUhVO0FBRE4sYUFBYjtBQU1BQyx1QkFBVyxZQUFZO0FBQ25CbEIsc0JBQU1aLE9BQU4sQ0FBYztBQUNWMEIsbUNBQWVkLE1BQU1ZLFNBQU4sQ0FDVkcsVUFEVSxDQUNDLENBQUNmLE1BQU1XLFlBRFIsRUFFVkssSUFGVSxHQUdWQyxNQUhVO0FBREwsaUJBQWQ7QUFNSCxhQVBELEVBT0csRUFQSDtBQVFBLGlCQUFLcEIsS0FBTCxHQUFhcUIsV0FBVyxZQUFZO0FBQ2hDbEIsc0JBQU1hLE1BQU47QUFDSCxhQUZZLEVBRVYsS0FBS25CLFFBRkssQ0FBYjtBQUdILFNBbERJO0FBbURMeUIscUJBQWEsdUJBQVk7QUFDckIsaUJBQUt0QixLQUFMLElBQWNDLGFBQWEsS0FBS0QsS0FBbEIsQ0FBZDtBQUNBLGlCQUFLQSxLQUFMLEdBQWEsSUFBYjtBQUNBLGlCQUFLVCxPQUFMLENBQWEsRUFBRUYsTUFBTSxLQUFSLEVBQWI7QUFDSCxTQXZESTtBQXdETGtDLGlCQUFTLGlCQUFVQyxLQUFWLEVBQWlCO0FBQ3RCLGlCQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsS0FBcEI7QUFDSDtBQTFESTtBQTdEYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG52YXIgRk9OVF9DT0xPUiA9ICcjZWQ2YTBjJztcclxudmFyIEJHX0NPTE9SID0gJyNmZmZiZTgnO1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9kZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXJsOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvcGVuVHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnbmF2aWdhdGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWxheToge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAxXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcGVlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiA1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Nyb2xsYWJsZToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGVmdEljb246IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6IEZPTlRfQ09MT1JcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBCR19DT0xPUlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgd3JhcGFibGU6IEJvb2xlYW5cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgdGV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe30sIHRoaXMuaW5pdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnJlc2V0QW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDAsXHJcbiAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGRlc3Ryb3llZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi1ub3RpY2UtYmFyX19jb250ZW50JyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tbm90aWNlLWJhcl9fd3JhcCcpXHJcbiAgICAgICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKHJlY3RzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudFJlY3QgPSByZWN0c1swXSwgd3JhcFJlY3QgPSByZWN0c1sxXTtcclxuICAgICAgICAgICAgICAgIGlmIChjb250ZW50UmVjdCA9PSBudWxsIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcFJlY3QgPT0gbnVsbCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICFjb250ZW50UmVjdC53aWR0aCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICF3cmFwUmVjdC53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBfYSA9IF90aGlzLmRhdGEsIHNwZWVkID0gX2Euc3BlZWQsIHNjcm9sbGFibGUgPSBfYS5zY3JvbGxhYmxlLCBkZWxheSA9IF9hLmRlbGF5O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbGFibGUgJiYgd3JhcFJlY3Qud2lkdGggPCBjb250ZW50UmVjdC53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IChjb250ZW50UmVjdC53aWR0aCAvIHNwZWVkKSAqIDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMud3JhcFdpZHRoID0gd3JhcFJlY3Qud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY29udGVudFdpZHRoID0gY29udGVudFJlY3Qud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsYXk6IGRlbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2Nyb2xsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2Nyb2xsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IHRoaXMucmVzZXRBbmltYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAudHJhbnNsYXRlWCh0aGlzLndyYXBXaWR0aClcclxuICAgICAgICAgICAgICAgICAgICAuc3RlcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgLmV4cG9ydCgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IF90aGlzLmFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJhbnNsYXRlWCgtX3RoaXMuY29udGVudFdpZHRoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RlcCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5leHBvcnQoKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDIwKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2Nyb2xsKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DbGlja0ljb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBzaG93OiBmYWxzZSB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=