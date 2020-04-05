"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var touch_1 = require('./../mixins/touch.js');
var utils_1 = require('./../common/utils.js');
component_1.VantComponent({
    mixins: [touch_1.touch],
    classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
    relation: {
        name: 'tab',
        type: 'descendant',
        linked: function linked(child) {
            child.index = this.children.length;
            child.setComputedName();
            this.children.push(child);
            this.updateTabs(this.data.tabs.concat(child.data));
        },
        unlinked: function unlinked(child) {
            var index = this.children.indexOf(child);
            var tabs = this.data.tabs;
            tabs.splice(index, 1);
            this.children.splice(index, 1);
            var i = index;
            while (i >= 0 && i < this.children.length) {
                var currentChild = this.children[i];
                currentChild.index--;
                currentChild.setComputedName();
                i++;
            }
            this.updateTabs(tabs);
        }
    },
    props: {
        color: String,
        sticky: Boolean,
        animated: Boolean,
        swipeable: Boolean,
        lineWidth: {
            type: [String, Number],
            value: -1
        },
        lineHeight: {
            type: [String, Number],
            value: -1
        },
        active: {
            type: [String, Number],
            value: 0
        },
        type: {
            type: String,
            value: 'line'
        },
        border: {
            type: Boolean,
            value: true
        },
        duration: {
            type: Number,
            value: 0.3
        },
        zIndex: {
            type: Number,
            value: 1
        },
        swipeThreshold: {
            type: Number,
            value: 4
        },
        offsetTop: {
            type: Number,
            value: 0
        }
    },
    data: {
        tabs: [],
        lineStyle: '',
        scrollLeft: 0,
        scrollable: false,
        trackStyle: '',
        wrapStyle: '',
        position: '',
        currentIndex: null
    },
    watch: {
        swipeThreshold: function swipeThreshold() {
            this.setData({
                scrollable: this.children.length > this.data.swipeThreshold
            });
        },
        color: 'setLine',
        lineWidth: 'setLine',
        lineHeight: 'setLine',
        active: 'setActiveTab',
        animated: 'setTrack',
        offsetTop: 'setWrapStyle'
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },
    mounted: function mounted() {
        var _this = this;
        this.setLine(true);
        this.setTrack();
        this.scrollIntoView();
        this.getRect('.van-tabs__wrap').then(function (rect) {
            _this.navHeight = rect.height;
            _this.observerContentScroll();
        });
    },
    destroyed: function destroyed() {
        // @ts-ignore
        this.createIntersectionObserver().disconnect();
    },
    methods: {
        updateTabs: function updateTabs(tabs) {
            tabs = tabs || this.data.tabs;
            this.setData({
                tabs: tabs,
                scrollable: tabs.length > this.data.swipeThreshold
            });
            this.setActiveTab();
        },
        trigger: function trigger(eventName, name) {
            var _a = this.data,
                tabs = _a.tabs,
                currentIndex = _a.currentIndex;
            this.$emit(eventName, {
                name: name,
                title: tabs[currentIndex].title
            });
        },
        onTap: function onTap(event) {
            var index = event.currentTarget.dataset.index;
            var child = this.children[index];
            if (this.data.tabs[index].disabled) {
                this.trigger('disabled', child.computedName);
            } else {
                this.trigger('click', child.computedName);
                this.setActive(child.computedName);
            }
        },
        setActive: function setActive(computedName) {
            if (computedName !== this.currentName) {
                this.currentName = computedName;
                this.trigger('change', computedName);
                this.setActiveTab();
            }
        },
        setLine: function setLine(skipTransition) {
            var _this = this;
            if (this.data.type !== 'line') {
                return;
            }
            var _a = this.data,
                color = _a.color,
                duration = _a.duration,
                currentIndex = _a.currentIndex,
                lineWidth = _a.lineWidth,
                lineHeight = _a.lineHeight;
            this.getRect('.van-tab', true).then(function (rects) {
                var rect = rects[currentIndex];
                var width = lineWidth !== -1 ? lineWidth : rect.width / 2;
                var height = lineHeight !== -1 ? "height: " + utils_1.addUnit(lineHeight) + "; border-radius: " + utils_1.addUnit(lineHeight) + ";" : '';
                var left = rects.slice(0, currentIndex).reduce(function (prev, curr) {
                    return prev + curr.width;
                }, 0);
                left += (rect.width - width) / 2;
                var transition = skipTransition ? '' : "transition-duration: " + duration + "s; -webkit-transition-duration: " + duration + "s;";
                _this.setData({
                    lineStyle: "\n            " + height + "\n            width: " + utils_1.addUnit(width) + ";\n            background-color: " + color + ";\n            -webkit-transform: translateX(" + left + "px);\n            transform: translateX(" + left + "px);\n            " + transition + "\n          "
                });
            });
        },
        setTrack: function setTrack() {
            var _this = this;
            var _a = this.data,
                animated = _a.animated,
                duration = _a.duration,
                currentIndex = _a.currentIndex;
            if (!animated) return '';
            this.getRect('.van-tabs__content').then(function (rect) {
                var width = rect.width;
                _this.setData({
                    trackStyle: "\n              width: " + width * _this.children.length + "px;\n              left: " + -1 * currentIndex * width + "px;\n              transition: left " + duration + "s;\n              display: -webkit-box;\n              display: flex;\n            "
                });
                var data = { width: width, animated: animated };
                _this.children.forEach(function (item) {
                    item.setData(data);
                });
            });
        },
        setActiveTab: function setActiveTab() {
            var _this = this;
            if (!utils_1.isDef(this.currentName)) {
                this.currentName = this.data.active || this.children[0].computedName;
            }
            this.children.forEach(function (item, index) {
                var data = {
                    active: item.computedName === _this.currentName
                };
                if (data.active) {
                    _this.setData({
                        currentIndex: index
                    });
                    data.inited = true;
                }
                if (data.active !== item.data.active) {
                    item.setData(data);
                }
            });
            utils_1.nextTick(function () {
                _this.setLine();
                _this.setTrack();
                _this.scrollIntoView();
            });
        },
        // scroll active tab into view
        scrollIntoView: function scrollIntoView() {
            var _this = this;
            var _a = this.data,
                currentIndex = _a.currentIndex,
                scrollable = _a.scrollable;
            if (!scrollable) {
                return;
            }
            Promise.all([this.getRect('.van-tab', true), this.getRect('.van-tabs__nav')]).then(function (_a) {
                var tabRects = _a[0],
                    navRect = _a[1];
                var tabRect = tabRects[currentIndex];
                var offsetLeft = tabRects.slice(0, currentIndex).reduce(function (prev, curr) {
                    return prev + curr.width;
                }, 0);
                _this.setData({
                    scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
                });
            });
        },
        onTouchStart: function onTouchStart(event) {
            if (!this.data.swipeable) return;
            this.touchStart(event);
        },
        onTouchMove: function onTouchMove(event) {
            if (!this.data.swipeable) return;
            this.touchMove(event);
        },
        // watch swipe touch end
        onTouchEnd: function onTouchEnd() {
            if (!this.data.swipeable) return;
            var _a = this.data,
                tabs = _a.tabs,
                currentIndex = _a.currentIndex;
            var _b = this,
                direction = _b.direction,
                deltaX = _b.deltaX,
                offsetX = _b.offsetX;
            var minSwipeDistance = 50;
            if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
                if (deltaX > 0 && currentIndex !== 0) {
                    this.setActive(this.children[currentIndex - 1].computedName);
                } else if (deltaX < 0 && currentIndex !== tabs.length - 1) {
                    this.setActive(this.children[currentIndex + 1].computedName);
                }
            }
        },
        setWrapStyle: function setWrapStyle() {
            var _a = this.data,
                offsetTop = _a.offsetTop,
                position = _a.position;
            var wrapStyle;
            switch (position) {
                case 'top':
                    wrapStyle = "\n            top: " + offsetTop + "px;\n            position: fixed;\n          ";
                    break;
                case 'bottom':
                    wrapStyle = "\n            top: auto;\n            bottom: 0;\n          ";
                    break;
                default:
                    wrapStyle = '';
            }
            if (wrapStyle !== this.data.wrapStyle) {
                this.setData({ wrapStyle: wrapStyle });
            }
        },
        observerContentScroll: function observerContentScroll() {
            var _this = this;
            if (!this.data.sticky) {
                return;
            }
            var offsetTop = this.data.offsetTop;
            var windowHeight = wx.getSystemInfoSync().windowHeight;
            // @ts-ignore
            this.createIntersectionObserver().disconnect();
            // @ts-ignore
            this.createIntersectionObserver().relativeToViewport({ top: -(this.navHeight + offsetTop) }).observe('.van-tabs', function (res) {
                var top = res.boundingClientRect.top;
                if (top > offsetTop) {
                    return;
                }
                var position = res.intersectionRatio > 0 ? 'top' : 'bottom';
                _this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                _this.setPosition(position);
            });
            // @ts-ignore
            this.createIntersectionObserver().relativeToViewport({ bottom: -(windowHeight - 1 - offsetTop) }).observe('.van-tabs', function (res) {
                var _a = res.boundingClientRect,
                    top = _a.top,
                    bottom = _a.bottom;
                if (bottom < _this.navHeight) {
                    return;
                }
                var position = res.intersectionRatio > 0 ? 'top' : '';
                _this.$emit('scroll', {
                    scrollTop: top + offsetTop,
                    isFixed: position === 'top'
                });
                _this.setPosition(position);
            });
        },
        setPosition: function setPosition(position) {
            var _this = this;
            if (position !== this.data.position) {
                this.set({ position: position }).then(function () {
                    _this.setWrapStyle();
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidG91Y2hfMSIsInV0aWxzXzEiLCJWYW50Q29tcG9uZW50IiwibWl4aW5zIiwidG91Y2giLCJjbGFzc2VzIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsImNoaWxkIiwiaW5kZXgiLCJjaGlsZHJlbiIsImxlbmd0aCIsInNldENvbXB1dGVkTmFtZSIsInB1c2giLCJ1cGRhdGVUYWJzIiwiZGF0YSIsInRhYnMiLCJjb25jYXQiLCJ1bmxpbmtlZCIsImluZGV4T2YiLCJzcGxpY2UiLCJpIiwiY3VycmVudENoaWxkIiwicHJvcHMiLCJjb2xvciIsIlN0cmluZyIsInN0aWNreSIsIkJvb2xlYW4iLCJhbmltYXRlZCIsInN3aXBlYWJsZSIsImxpbmVXaWR0aCIsIk51bWJlciIsImxpbmVIZWlnaHQiLCJhY3RpdmUiLCJib3JkZXIiLCJkdXJhdGlvbiIsInpJbmRleCIsInN3aXBlVGhyZXNob2xkIiwib2Zmc2V0VG9wIiwibGluZVN0eWxlIiwic2Nyb2xsTGVmdCIsInNjcm9sbGFibGUiLCJ0cmFja1N0eWxlIiwid3JhcFN0eWxlIiwicG9zaXRpb24iLCJjdXJyZW50SW5kZXgiLCJ3YXRjaCIsInNldERhdGEiLCJiZWZvcmVDcmVhdGUiLCJtb3VudGVkIiwiX3RoaXMiLCJzZXRMaW5lIiwic2V0VHJhY2siLCJzY3JvbGxJbnRvVmlldyIsImdldFJlY3QiLCJ0aGVuIiwicmVjdCIsIm5hdkhlaWdodCIsImhlaWdodCIsIm9ic2VydmVyQ29udGVudFNjcm9sbCIsImRlc3Ryb3llZCIsImNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzY29ubmVjdCIsIm1ldGhvZHMiLCJzZXRBY3RpdmVUYWIiLCJ0cmlnZ2VyIiwiZXZlbnROYW1lIiwiX2EiLCIkZW1pdCIsInRpdGxlIiwib25UYXAiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZGlzYWJsZWQiLCJjb21wdXRlZE5hbWUiLCJzZXRBY3RpdmUiLCJjdXJyZW50TmFtZSIsInNraXBUcmFuc2l0aW9uIiwicmVjdHMiLCJ3aWR0aCIsImFkZFVuaXQiLCJsZWZ0Iiwic2xpY2UiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsInRyYW5zaXRpb24iLCJmb3JFYWNoIiwiaXRlbSIsImlzRGVmIiwiaW5pdGVkIiwibmV4dFRpY2siLCJQcm9taXNlIiwiYWxsIiwidGFiUmVjdHMiLCJuYXZSZWN0IiwidGFiUmVjdCIsIm9mZnNldExlZnQiLCJvblRvdWNoU3RhcnQiLCJ0b3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmUiLCJvblRvdWNoRW5kIiwiX2IiLCJkaXJlY3Rpb24iLCJkZWx0YVgiLCJvZmZzZXRYIiwibWluU3dpcGVEaXN0YW5jZSIsInNldFdyYXBTdHlsZSIsIndpbmRvd0hlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJyZWxhdGl2ZVRvVmlld3BvcnQiLCJ0b3AiLCJvYnNlcnZlIiwicmVzIiwiYm91bmRpbmdDbGllbnRSZWN0IiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJzY3JvbGxUb3AiLCJpc0ZpeGVkIiwic2V0UG9zaXRpb24iLCJib3R0b20iLCJzZXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxpQkFBUixDQUFkO0FBQ0EsSUFBSUUsVUFBVUYsUUFBUSxpQkFBUixDQUFkO0FBQ0FELFlBQVlJLGFBQVosQ0FBMEI7QUFDdEJDLFlBQVEsQ0FBQ0gsUUFBUUksS0FBVCxDQURjO0FBRXRCQyxhQUFTLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsa0JBQTNCLEVBQStDLFlBQS9D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RUFBaUNXLElBQWpDLENBQXNDLFlBQVk7QUFDOUNMLDBCQUFNMkQsWUFBTjtBQUNILGlCQUZEO0FBR0g7QUFDSjtBQWhOSTtBQTdHYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG52YXIgdG91Y2hfMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvdG91Y2hcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NvbW1vbi91dGlsc1wiKTtcclxuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XHJcbiAgICBtaXhpbnM6IFt0b3VjaF8xLnRvdWNoXSxcclxuICAgIGNsYXNzZXM6IFsnbmF2LWNsYXNzJywgJ3RhYi1jbGFzcycsICd0YWItYWN0aXZlLWNsYXNzJywgJ2xpbmUtY2xhc3MnXSxcclxuICAgIHJlbGF0aW9uOiB7XHJcbiAgICAgICAgbmFtZTogJ3RhYicsXHJcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxyXG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmluZGV4ID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIGNoaWxkLnNldENvbXB1dGVkTmFtZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRhYnModGhpcy5kYXRhLnRhYnMuY29uY2F0KGNoaWxkLmRhdGEpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVubGlua2VkOiBmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLmRhdGEudGFicztcclxuICAgICAgICAgICAgdGFicy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHZhciBpID0gaW5kZXg7XHJcbiAgICAgICAgICAgIHdoaWxlIChpID49IDAgJiYgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudENoaWxkID0gdGhpcy5jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDaGlsZC5pbmRleC0tO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudENoaWxkLnNldENvbXB1dGVkTmFtZSgpO1xyXG4gICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGFicyh0YWJzKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBjb2xvcjogU3RyaW5nLFxyXG4gICAgICAgIHN0aWNreTogQm9vbGVhbixcclxuICAgICAgICBhbmltYXRlZDogQm9vbGVhbixcclxuICAgICAgICBzd2lwZWFibGU6IEJvb2xlYW4sXHJcbiAgICAgICAgbGluZVdpZHRoOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcbiAgICAgICAgICAgIHZhbHVlOiAtMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGluZUhlaWdodDoge1xyXG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG4gICAgICAgICAgICB2YWx1ZTogLTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxyXG4gICAgICAgICAgICB2YWx1ZTogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2xpbmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib3JkZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGR1cmF0aW9uOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDAuM1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgekluZGV4OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN3aXBlVGhyZXNob2xkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDRcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9mZnNldFRvcDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICB0YWJzOiBbXSxcclxuICAgICAgICBsaW5lU3R5bGU6ICcnLFxyXG4gICAgICAgIHNjcm9sbExlZnQ6IDAsXHJcbiAgICAgICAgc2Nyb2xsYWJsZTogZmFsc2UsXHJcbiAgICAgICAgdHJhY2tTdHlsZTogJycsXHJcbiAgICAgICAgd3JhcFN0eWxlOiAnJyxcclxuICAgICAgICBwb3NpdGlvbjogJycsXHJcbiAgICAgICAgY3VycmVudEluZGV4OiBudWxsLFxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgc3dpcGVUaHJlc2hvbGQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbGFibGU6IHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gdGhpcy5kYXRhLnN3aXBlVGhyZXNob2xkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3I6ICdzZXRMaW5lJyxcclxuICAgICAgICBsaW5lV2lkdGg6ICdzZXRMaW5lJyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAnc2V0TGluZScsXHJcbiAgICAgICAgYWN0aXZlOiAnc2V0QWN0aXZlVGFiJyxcclxuICAgICAgICBhbmltYXRlZDogJ3NldFRyYWNrJyxcclxuICAgICAgICBvZmZzZXRUb3A6ICdzZXRXcmFwU3R5bGUnXHJcbiAgICB9LFxyXG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc2V0TGluZSh0cnVlKTtcclxuICAgICAgICB0aGlzLnNldFRyYWNrKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi10YWJzX193cmFwJykudGhlbihmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgICAgICBfdGhpcy5uYXZIZWlnaHQgPSByZWN0LmhlaWdodDtcclxuICAgICAgICAgICAgX3RoaXMub2JzZXJ2ZXJDb250ZW50U2Nyb2xsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZGVzdHJveWVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgIHRoaXMuY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKS5kaXNjb25uZWN0KCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHVwZGF0ZVRhYnM6IGZ1bmN0aW9uICh0YWJzKSB7XHJcbiAgICAgICAgICAgIHRhYnMgPSB0YWJzIHx8IHRoaXMuZGF0YS50YWJzO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgdGFiczogdGFicyxcclxuICAgICAgICAgICAgICAgIHNjcm9sbGFibGU6IHRhYnMubGVuZ3RoID4gdGhpcy5kYXRhLnN3aXBlVGhyZXNob2xkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVRhYigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgbmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIHRhYnMgPSBfYS50YWJzLCBjdXJyZW50SW5kZXggPSBfYS5jdXJyZW50SW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoZXZlbnROYW1lLCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRhYnNbY3VycmVudEluZGV4XS50aXRsZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uVGFwOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS50YWJzW2luZGV4XS5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdkaXNhYmxlZCcsIGNoaWxkLmNvbXB1dGVkTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ2NsaWNrJywgY2hpbGQuY29tcHV0ZWROYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKGNoaWxkLmNvbXB1dGVkTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEFjdGl2ZTogZnVuY3Rpb24gKGNvbXB1dGVkTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoY29tcHV0ZWROYW1lICE9PSB0aGlzLmN1cnJlbnROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnROYW1lID0gY29tcHV0ZWROYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnLCBjb21wdXRlZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmVUYWIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TGluZTogZnVuY3Rpb24gKHNraXBUcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudHlwZSAhPT0gJ2xpbmUnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBjb2xvciA9IF9hLmNvbG9yLCBkdXJhdGlvbiA9IF9hLmR1cmF0aW9uLCBjdXJyZW50SW5kZXggPSBfYS5jdXJyZW50SW5kZXgsIGxpbmVXaWR0aCA9IF9hLmxpbmVXaWR0aCwgbGluZUhlaWdodCA9IF9hLmxpbmVIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi10YWInLCB0cnVlKS50aGVuKGZ1bmN0aW9uIChyZWN0cykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlY3QgPSByZWN0c1tjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gbGluZVdpZHRoICE9PSAtMSA/IGxpbmVXaWR0aCA6IHJlY3Qud2lkdGggLyAyO1xyXG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGxpbmVIZWlnaHQgIT09IC0xID8gXCJoZWlnaHQ6IFwiICsgdXRpbHNfMS5hZGRVbml0KGxpbmVIZWlnaHQpICsgXCI7IGJvcmRlci1yYWRpdXM6IFwiICsgdXRpbHNfMS5hZGRVbml0KGxpbmVIZWlnaHQpICsgXCI7XCIgOiAnJztcclxuICAgICAgICAgICAgICAgIHZhciBsZWZ0ID0gcmVjdHNcclxuICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgY3VycmVudEluZGV4KVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHsgcmV0dXJuIHByZXYgKyBjdXJyLndpZHRoOyB9LCAwKTtcclxuICAgICAgICAgICAgICAgIGxlZnQgKz0gKHJlY3Qud2lkdGggLSB3aWR0aCkgLyAyO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRyYW5zaXRpb24gPSBza2lwVHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgID8gJydcclxuICAgICAgICAgICAgICAgICAgICA6IFwidHJhbnNpdGlvbi1kdXJhdGlvbjogXCIgKyBkdXJhdGlvbiArIFwiczsgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiBcIiArIGR1cmF0aW9uICsgXCJzO1wiO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZVN0eWxlOiBcIlxcbiAgICAgICAgICAgIFwiICsgaGVpZ2h0ICsgXCJcXG4gICAgICAgICAgICB3aWR0aDogXCIgKyB1dGlsc18xLmFkZFVuaXQod2lkdGgpICsgXCI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIgKyBjb2xvciArIFwiO1xcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgbGVmdCArIFwicHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGxlZnQgKyBcInB4KTtcXG4gICAgICAgICAgICBcIiArIHRyYW5zaXRpb24gKyBcIlxcbiAgICAgICAgICBcIlxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0VHJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBhbmltYXRlZCA9IF9hLmFuaW1hdGVkLCBkdXJhdGlvbiA9IF9hLmR1cmF0aW9uLCBjdXJyZW50SW5kZXggPSBfYS5jdXJyZW50SW5kZXg7XHJcbiAgICAgICAgICAgIGlmICghYW5pbWF0ZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi10YWJzX19jb250ZW50JykudGhlbihmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gcmVjdC53aWR0aDtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYWNrU3R5bGU6IFwiXFxuICAgICAgICAgICAgICB3aWR0aDogXCIgKyB3aWR0aCAqIF90aGlzLmNoaWxkcmVuLmxlbmd0aCArIFwicHg7XFxuICAgICAgICAgICAgICBsZWZ0OiBcIiArIC0xICogY3VycmVudEluZGV4ICogd2lkdGggKyBcInB4O1xcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbGVmdCBcIiArIGR1cmF0aW9uICsgXCJzO1xcbiAgICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0geyB3aWR0aDogd2lkdGgsIGFuaW1hdGVkOiBhbmltYXRlZCB9O1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0RGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEFjdGl2ZVRhYjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoIXV0aWxzXzEuaXNEZWYodGhpcy5jdXJyZW50TmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudE5hbWUgPSB0aGlzLmRhdGEuYWN0aXZlIHx8IHRoaXMuY2hpbGRyZW5bMF0uY29tcHV0ZWROYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogaXRlbS5jb21wdXRlZE5hbWUgPT09IF90aGlzLmN1cnJlbnROYW1lXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleDogaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmluaXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3RpdmUgIT09IGl0ZW0uZGF0YS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB1dGlsc18xLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldExpbmUoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFRyYWNrKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zY3JvbGxJbnRvVmlldygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIHNjcm9sbCBhY3RpdmUgdGFiIGludG8gdmlld1xyXG4gICAgICAgIHNjcm9sbEludG9WaWV3OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgY3VycmVudEluZGV4ID0gX2EuY3VycmVudEluZGV4LCBzY3JvbGxhYmxlID0gX2Euc2Nyb2xsYWJsZTtcclxuICAgICAgICAgICAgaWYgKCFzY3JvbGxhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXRhYicsIHRydWUpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXRhYnNfX25hdicpXHJcbiAgICAgICAgICAgIF0pLnRoZW4oZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFiUmVjdHMgPSBfYVswXSwgbmF2UmVjdCA9IF9hWzFdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYlJlY3QgPSB0YWJSZWN0c1tjdXJyZW50SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldExlZnQgPSB0YWJSZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBjdXJyZW50SW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycikgeyByZXR1cm4gcHJldiArIGN1cnIud2lkdGg7IH0sIDApO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsTGVmdDogb2Zmc2V0TGVmdCAtIChuYXZSZWN0LndpZHRoIC0gdGFiUmVjdC53aWR0aCkgLyAyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zd2lwZWFibGUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2hTdGFydChldmVudCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnN3aXBlYWJsZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy50b3VjaE1vdmUoZXZlbnQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gd2F0Y2ggc3dpcGUgdG91Y2ggZW5kXHJcbiAgICAgICAgb25Ub3VjaEVuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zd2lwZWFibGUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgdGFicyA9IF9hLnRhYnMsIGN1cnJlbnRJbmRleCA9IF9hLmN1cnJlbnRJbmRleDtcclxuICAgICAgICAgICAgdmFyIF9iID0gdGhpcywgZGlyZWN0aW9uID0gX2IuZGlyZWN0aW9uLCBkZWx0YVggPSBfYi5kZWx0YVgsIG9mZnNldFggPSBfYi5vZmZzZXRYO1xyXG4gICAgICAgICAgICB2YXIgbWluU3dpcGVEaXN0YW5jZSA9IDUwO1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgJiYgb2Zmc2V0WCA+PSBtaW5Td2lwZURpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVsdGFYID4gMCAmJiBjdXJyZW50SW5kZXggIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZSh0aGlzLmNoaWxkcmVuW2N1cnJlbnRJbmRleCAtIDFdLmNvbXB1dGVkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWx0YVggPCAwICYmIGN1cnJlbnRJbmRleCAhPT0gdGFicy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUodGhpcy5jaGlsZHJlbltjdXJyZW50SW5kZXggKyAxXS5jb21wdXRlZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRXcmFwU3R5bGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBvZmZzZXRUb3AgPSBfYS5vZmZzZXRUb3AsIHBvc2l0aW9uID0gX2EucG9zaXRpb247XHJcbiAgICAgICAgICAgIHZhciB3cmFwU3R5bGU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAocG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3RvcCc6XHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcFN0eWxlID0gXCJcXG4gICAgICAgICAgICB0b3A6IFwiICsgb2Zmc2V0VG9wICsgXCJweDtcXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICAgIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICAgICAgICAgICAgICB3cmFwU3R5bGUgPSBcIlxcbiAgICAgICAgICAgIHRvcDogYXV0bztcXG4gICAgICAgICAgICBib3R0b206IDA7XFxuICAgICAgICAgIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICB3cmFwU3R5bGUgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAod3JhcFN0eWxlICE9PSB0aGlzLmRhdGEud3JhcFN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyB3cmFwU3R5bGU6IHdyYXBTdHlsZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2JzZXJ2ZXJDb250ZW50U2Nyb2xsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnN0aWNreSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBvZmZzZXRUb3AgPSB0aGlzLmRhdGEub2Zmc2V0VG9wO1xyXG4gICAgICAgICAgICB2YXIgd2luZG93SGVpZ2h0ID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dIZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcigpLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKClcclxuICAgICAgICAgICAgICAgIC5yZWxhdGl2ZVRvVmlld3BvcnQoeyB0b3A6IC0odGhpcy5uYXZIZWlnaHQgKyBvZmZzZXRUb3ApIH0pXHJcbiAgICAgICAgICAgICAgICAub2JzZXJ2ZSgnLnZhbi10YWJzJywgZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcCA9IHJlcy5ib3VuZGluZ0NsaWVudFJlY3QudG9wO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvcCA+IG9mZnNldFRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHJlcy5pbnRlcnNlY3Rpb25SYXRpbyA+IDAgPyAndG9wJyA6ICdib3R0b20nO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQoJ3Njcm9sbCcsIHtcclxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRvcCArIG9mZnNldFRvcCxcclxuICAgICAgICAgICAgICAgICAgICBpc0ZpeGVkOiBwb3NpdGlvbiA9PT0gJ3RvcCdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0UG9zaXRpb24ocG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKClcclxuICAgICAgICAgICAgICAgIC5yZWxhdGl2ZVRvVmlld3BvcnQoeyBib3R0b206IC0od2luZG93SGVpZ2h0IC0gMSAtIG9mZnNldFRvcCkgfSlcclxuICAgICAgICAgICAgICAgIC5vYnNlcnZlKCcudmFuLXRhYnMnLCBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSByZXMuYm91bmRpbmdDbGllbnRSZWN0LCB0b3AgPSBfYS50b3AsIGJvdHRvbSA9IF9hLmJvdHRvbTtcclxuICAgICAgICAgICAgICAgIGlmIChib3R0b20gPCBfdGhpcy5uYXZIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zaXRpb24gPSByZXMuaW50ZXJzZWN0aW9uUmF0aW8gPiAwID8gJ3RvcCcgOiAnJztcclxuICAgICAgICAgICAgICAgIF90aGlzLiRlbWl0KCdzY3JvbGwnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0b3AgKyBvZmZzZXRUb3AsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNGaXhlZDogcG9zaXRpb24gPT09ICd0b3AnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIF90aGlzLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQb3NpdGlvbjogZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiAhPT0gdGhpcy5kYXRhLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldCh7IHBvc2l0aW9uOiBwb3NpdGlvbiB9KS50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRXcmFwU3R5bGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19