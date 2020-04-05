"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
component_1.VantComponent({
    props: {
        zIndex: {
            type: Number,
            value: 99
        },
        offsetTop: {
            type: Number,
            value: 0
        }
    },
    data: {
        position: '',
        height: 0,
        wrapStyle: '',
        containerStyle: ''
    },
    methods: {
        setWrapStyle: function setWrapStyle() {
            var _a = this.data,
                offsetTop = _a.offsetTop,
                position = _a.position;
            var wrapStyle;
            var containerStyle;
            switch (position) {
                case 'top':
                    wrapStyle = "\n            top: " + offsetTop + "px;\n            position: fixed;\n          ";
                    containerStyle = "height: " + this.itemHeight + "px;";
                    break;
                case 'bottom':
                    wrapStyle = "\n            top: auto;\n            bottom: 0;\n          ";
                    containerStyle = '';
                    break;
                default:
                    wrapStyle = '';
                    containerStyle = '';
            }
            var data = {};
            if (wrapStyle !== this.data.wrapStyle) {
                data.wrapStyle = wrapStyle;
            }
            if (containerStyle !== this.data.containerStyle) {
                data.containerStyle = containerStyle;
            }
            if (JSON.stringify(data) !== '{}') {
                this.setData(data);
            }
        },
        setPosition: function setPosition(position) {
            var _this = this;
            if (position !== this.data.position) {
                this.setData({ position: position });
                utils_1.nextTick(function () {
                    _this.setWrapStyle();
                });
            }
        },
        observerContentScroll: function observerContentScroll() {
            var _this = this;
            var _a = this.data.offsetTop,
                offsetTop = _a === void 0 ? 0 : _a;
            var windowHeight = wx.getSystemInfoSync().windowHeight;
            this.createIntersectionObserver({}).disconnect();
            // @ts-ignore
            this.createIntersectionObserver().relativeToViewport({ top: -(this.itemHeight + offsetTop) }).observe('.van-sticky', function (res) {
                var top = res.boundingClientRect.top;
                if (top > offsetTop) {
                    return;
                }
                var position = 'top';
                _this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: true
                });
                _this.setPosition(position);
            });
            // @ts-ignore
            this.createIntersectionObserver().relativeToViewport({ bottom: -(windowHeight - 1 - offsetTop) }).observe('.van-sticky', function (res) {
                var _a = res.boundingClientRect,
                    top = _a.top,
                    bottom = _a.bottom;
                if (bottom <= _this.itemHeight - 1) {
                    return;
                }
                var position = res.intersectionRatio > 0 ? 'top' : '';
                _this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                _this.setPosition(position);
            });
        }
    },
    mounted: function mounted() {
        var _this = this;
        this.getRect('.van-sticky').then(function (rect) {
            _this.itemHeight = rect.height;
            _this.itemTop = rect.top;
            _this.observerContentScroll();
        });
    },
    destroyed: function destroyed() {
        this.createIntersectionObserver({}).disconnect();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsIlZhbnRDb21wb25lbnQiLCJwcm9wcyIsInpJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJvZmZzZXRUb3AiLCJkYXRhIiwicG9zaXRpb24iLCJoZWlnaHQiLCJ3cmFwU3R5bGUiLCJjb250YWluZXJTdHlsZSIsIm1ldGhvZHMiLCJzZXRXcmFwU3R5bGUiLCJfYSIsIml0ZW1IZWlnaHQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2V0RGF0YSIsInNldFBvc2l0aW9uIiwiX3RoaXMiLCJuZXh0VGljayIsIm9ic2VydmVyQ29udGVudFNjcm9sbCIsIndpbmRvd0hlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2Nvbm5lY3QiLCJyZWxhdGl2ZVRvVmlld3BvcnQiLCJ0b3AiLCJvYnNlcnZlIiwicmVzIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiJGVtaXQiLCJzY3JvbGxUb3AiLCJpc0ZpeGVkIiwiYm90dG9tIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJtb3VudGVkIiwiZ2V0UmVjdCIsInRoZW4iLCJyZWN0IiwiaXRlbVRvcCIsImRlc3Ryb3llZCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLGlCQUFSLENBQWQ7QUFDQUQsWUFBWUcsYUFBWixDQUEwQjtBQUN0QkMsV0FBTztBQUNIQyxnQkFBUTtBQUNKQyxrQkFBTUMsTUFERjtBQUVKUixtQkFBTztBQUZILFNBREw7QUFLSFMsbUJBQVc7QUFDUEYsa0JBQU1DLE1BREM7QUFFUFIsbUJBQU87QUFGQTtBQUxSLEtBRGU7QUFXdEJVLFVBQU07QUFDRkMsa0JBQVUsRUFEUjtBQUVGQyxnQkFBUSxDQUZOO0FBR0ZDLG1CQUFXLEVBSFQ7QUFJRkMsd0JBQWdCO0FBSmQsS0FYZ0I7QUFpQnRCQyxhQUFTO0FBQ0xDLHNCQUFjLHdCQUFZO0FBQ3RCLGdCQUFJQyxLQUFLLEtBQUtQLElBQWQ7QUFBQSxnQkFBb0JELFlBQVlRLEdBQUdSLFNBQW5DO0FBQUEsZ0JBQThDRSxXQUFXTSxHQUFHTixRQUE1RDtBQUNBLGdCQUFJRSxTQUFKO0FBQ0EsZ0JBQUlDLGNBQUo7QUFDQSxvQkFBUUgsUUFBUjtBQUNJLHFCQUFLLEtBQUw7QUFDSUUsZ0NBQVksd0JBQXdCSixTQUF4QixHQUFvQywrQ0FBaEQ7QUFDQUsscUNBQWlCLGFBQWEsS0FBS0ksVUFBbEIsR0FBK0IsS0FBaEQ7QUFDQTtBQUNKLHFCQUFLLFFBQUw7QUFDSUwsZ0NBQVksOERBQVo7QUFDQUMscUNBQWlCLEVBQWpCO0FBQ0E7QUFDSjtBQUNJRCxnQ0FBWSxFQUFaO0FBQ0FDLHFDQUFpQixFQUFqQjtBQVhSO0FBYUEsZ0JBQUlKLE9BQU8sRUFBWDtBQUNBLGdCQUFJRyxjQUFjLEtBQUtILElBQUwsQ0FBVUcsU0FBNUIsRUFBdUM7QUFDbkNILHFCQUFLRyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNIO0FBQ0QsZ0JBQUlDLG1CQUFtQixLQUFLSixJQUFMLENBQVVJLGNBQWpDLEVBQWlEO0FBQzdDSixxQkFBS0ksY0FBTCxHQUFzQkEsY0FBdEI7QUFDSDtBQUNELGdCQUFJSyxLQUFLQyxTQUFMLENBQWVWLElBQWYsTUFBeUIsSUFBN0IsRUFBbUM7QUFDL0IscUJBQUtXLE9BQUwsQ0FBYVgsSUFBYjtBQUNIO0FBQ0osU0E1Qkk7QUE2QkxZLHFCQUFhLHFCQUFVWCxRQUFWLEVBQW9CO0FBQzdCLGdCQUFJWSxRQUFRLElBQVo7QUFDQSxnQkFBSVosYUFBYSxLQUFLRCxJQUFMLENBQVVDLFFBQTNCLEVBQXFDO0FBQ2pDLHFCQUFLVSxPQUFMLENBQWEsRUFBRVYsVUFBVUEsUUFBWixFQUFiO0FBQ0FSLHdCQUFRcUIsUUFBUixDQUFpQixZQUFZO0FBQ3pCRCwwQkFBTVAsWUFBTjtBQUNILGlCQUZEO0FBR0g7QUFDSixTQXJDSTtBQXNDTFMsK0JBQXVCLGlDQUFZO0FBQy9CLGdCQUFJRixRQUFRLElBQVo7QUFDQSxnQkFBSU4sS0FBSyxLQUFLUCxJQUFMLENBQVVELFNBQW5CO0FBQUEsZ0JBQThCQSxZQUFZUSxPQUFPLEtBQUssQ0FBWixHQUFnQixDQUFoQixHQUFvQkEsRUFBOUQ7QUFDQSxnQkFBSVMsZUFBZUMsR0FBR0MsaUJBQUgsR0FBdUJGLFlBQTFDO0FBQ0EsaUJBQUtHLDBCQUFMLENBQWdDLEVBQWhDLEVBQW9DQyxVQUFwQztBQUNBO0FBQ0EsaUJBQUtELDBCQUFMLEdBQ0tFLGtCQURMLENBQ3dCLEVBQUVDLEtBQUssRUFBRSxLQUFLZCxVQUFMLEdBQWtCVCxTQUFwQixDQUFQLEVBRHhCLEVBRUt3QixPQUZMLENBRWEsYUFGYixFQUU0QixVQUFVQyxHQUFWLEVBQWU7QUFDdkMsb0JBQUlGLE1BQU1FLElBQUlDLGtCQUFKLENBQXVCSCxHQUFqQztBQUNBLG9CQUFJQSxNQUFNdkIsU0FBVixFQUFxQjtBQUNqQjtBQUNIO0FBQ0Qsb0JBQUlFLFdBQVcsS0FBZjtBQUNBWSxzQkFBTWEsS0FBTixDQUFZLFFBQVosRUFBc0I7QUFDbEJDLCtCQUFXTCxNQUFNdkIsU0FEQztBQUVsQjZCLDZCQUFTO0FBRlMsaUJBQXRCO0FBSUFmLHNCQUFNRCxXQUFOLENBQWtCWCxRQUFsQjtBQUNILGFBYkQ7QUFjQTtBQUNBLGlCQUFLa0IsMEJBQUwsR0FDS0Usa0JBREwsQ0FDd0IsRUFBRVEsUUFBUSxFQUFFYixlQUFlLENBQWYsR0FBbUJqQixTQUFyQixDQUFWLEVBRHhCLEVBRUt3QixPQUZMLENBRWEsYUFGYixFQUU0QixVQUFVQyxHQUFWLEVBQWU7QUFDdkMsb0JBQUlqQixLQUFLaUIsSUFBSUMsa0JBQWI7QUFBQSxvQkFBaUNILE1BQU1mLEdBQUdlLEdBQTFDO0FBQUEsb0JBQStDTyxTQUFTdEIsR0FBR3NCLE1BQTNEO0FBQ0Esb0JBQUlBLFVBQVVoQixNQUFNTCxVQUFOLEdBQW1CLENBQWpDLEVBQW9DO0FBQ2hDO0FBQ0g7QUFDRCxvQkFBSVAsV0FBV3VCLElBQUlNLGlCQUFKLEdBQXdCLENBQXhCLEdBQTRCLEtBQTVCLEdBQW9DLEVBQW5EO0FBQ0FqQixzQkFBTWEsS0FBTixDQUFZLFFBQVosRUFBc0I7QUFDbEJDLCtCQUFXTCxNQUFNdkIsU0FEQztBQUVsQjZCLDZCQUFTM0IsYUFBYTtBQUZKLGlCQUF0QjtBQUlBWSxzQkFBTUQsV0FBTixDQUFrQlgsUUFBbEI7QUFDSCxhQWJEO0FBY0g7QUF6RUksS0FqQmE7QUE0RnRCOEIsYUFBUyxtQkFBWTtBQUNqQixZQUFJbEIsUUFBUSxJQUFaO0FBQ0EsYUFBS21CLE9BQUwsQ0FBYSxhQUFiLEVBQTRCQyxJQUE1QixDQUFpQyxVQUFVQyxJQUFWLEVBQWdCO0FBQzdDckIsa0JBQU1MLFVBQU4sR0FBbUIwQixLQUFLaEMsTUFBeEI7QUFDQVcsa0JBQU1zQixPQUFOLEdBQWdCRCxLQUFLWixHQUFyQjtBQUNBVCxrQkFBTUUscUJBQU47QUFDSCxTQUpEO0FBS0gsS0FuR3FCO0FBb0d0QnFCLGVBQVcscUJBQVk7QUFDbkIsYUFBS2pCLDBCQUFMLENBQWdDLEVBQWhDLEVBQW9DQyxVQUFwQztBQUNIO0FBdEdxQixDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHNcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICB6SW5kZXg6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogOTlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9mZnNldFRvcDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBwb3NpdGlvbjogJycsXHJcbiAgICAgICAgaGVpZ2h0OiAwLFxyXG4gICAgICAgIHdyYXBTdHlsZTogJycsXHJcbiAgICAgICAgY29udGFpbmVyU3R5bGU6ICcnXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNldFdyYXBTdHlsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIG9mZnNldFRvcCA9IF9hLm9mZnNldFRvcCwgcG9zaXRpb24gPSBfYS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdmFyIHdyYXBTdHlsZTtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lclN0eWxlO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0b3AnOlxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBTdHlsZSA9IFwiXFxuICAgICAgICAgICAgdG9wOiBcIiArIG9mZnNldFRvcCArIFwicHg7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICBcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJTdHlsZSA9IFwiaGVpZ2h0OiBcIiArIHRoaXMuaXRlbUhlaWdodCArIFwicHg7XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgICAgICAgICAgICAgIHdyYXBTdHlsZSA9IFwiXFxuICAgICAgICAgICAgdG9wOiBhdXRvO1xcbiAgICAgICAgICAgIGJvdHRvbTogMDtcXG4gICAgICAgICAgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyU3R5bGUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcFN0eWxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyU3R5bGUgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBpZiAod3JhcFN0eWxlICE9PSB0aGlzLmRhdGEud3JhcFN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLndyYXBTdHlsZSA9IHdyYXBTdHlsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyU3R5bGUgIT09IHRoaXMuZGF0YS5jb250YWluZXJTdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5jb250YWluZXJTdHlsZSA9IGNvbnRhaW5lclN0eWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChKU09OLnN0cmluZ2lmeShkYXRhKSAhPT0gJ3t9Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQb3NpdGlvbjogZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiAhPT0gdGhpcy5kYXRhLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBwb3NpdGlvbjogcG9zaXRpb24gfSk7XHJcbiAgICAgICAgICAgICAgICB1dGlsc18xLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRXcmFwU3R5bGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvYnNlcnZlckNvbnRlbnRTY3JvbGw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLm9mZnNldFRvcCwgb2Zmc2V0VG9wID0gX2EgPT09IHZvaWQgMCA/IDAgOiBfYTtcclxuICAgICAgICAgICAgdmFyIHdpbmRvd0hlaWdodCA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93SGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKHt9KS5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcigpXHJcbiAgICAgICAgICAgICAgICAucmVsYXRpdmVUb1ZpZXdwb3J0KHsgdG9wOiAtKHRoaXMuaXRlbUhlaWdodCArIG9mZnNldFRvcCkgfSlcclxuICAgICAgICAgICAgICAgIC5vYnNlcnZlKCcudmFuLXN0aWNreScsIGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0b3AgPSByZXMuYm91bmRpbmdDbGllbnRSZWN0LnRvcDtcclxuICAgICAgICAgICAgICAgIGlmICh0b3AgPiBvZmZzZXRUb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSAndG9wJztcclxuICAgICAgICAgICAgICAgIF90aGlzLiRlbWl0KCdzY3JvbGwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0b3AgKyBvZmZzZXRUb3AsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNGaXhlZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKVxyXG4gICAgICAgICAgICAgICAgLnJlbGF0aXZlVG9WaWV3cG9ydCh7IGJvdHRvbTogLSh3aW5kb3dIZWlnaHQgLSAxIC0gb2Zmc2V0VG9wKSB9KVxyXG4gICAgICAgICAgICAgICAgLm9ic2VydmUoJy52YW4tc3RpY2t5JywgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gcmVzLmJvdW5kaW5nQ2xpZW50UmVjdCwgdG9wID0gX2EudG9wLCBib3R0b20gPSBfYS5ib3R0b207XHJcbiAgICAgICAgICAgICAgICBpZiAoYm90dG9tIDw9IF90aGlzLml0ZW1IZWlnaHQgLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gcmVzLmludGVyc2VjdGlvblJhdGlvID4gMCA/ICd0b3AnIDogJyc7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnc2Nyb2xsJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdG9wICsgb2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzRml4ZWQ6IHBvc2l0aW9uID09PSAndG9wJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRQb3NpdGlvbihwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tc3RpY2t5JykudGhlbihmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgICAgICBfdGhpcy5pdGVtSGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XHJcbiAgICAgICAgICAgIF90aGlzLml0ZW1Ub3AgPSByZWN0LnRvcDtcclxuICAgICAgICAgICAgX3RoaXMub2JzZXJ2ZXJDb250ZW50U2Nyb2xsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZGVzdHJveWVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcih7fSkuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG59KTtcclxuIl19