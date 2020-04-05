"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var touch_1 = require('./../mixins/touch.js');
var THRESHOLD = 0.3;
var ARRAY = [];
component_1.VantComponent({
    props: {
        disabled: Boolean,
        leftWidth: {
            type: Number,
            value: 0
        },
        rightWidth: {
            type: Number,
            value: 0
        },
        asyncClose: Boolean,
        name: {
            type: [Number, String],
            value: ''
        }
    },
    mixins: [touch_1.touch],
    data: {
        catchMove: false
    },
    created: function created() {
        this.offset = 0;
        ARRAY.push(this);
    },
    destroyed: function destroyed() {
        var _this = this;
        ARRAY = ARRAY.filter(function (item) {
            return item !== _this;
        });
    },
    methods: {
        open: function open(position) {
            var _a = this.data,
                leftWidth = _a.leftWidth,
                rightWidth = _a.rightWidth;
            var offset = position === 'left' ? leftWidth : -rightWidth;
            this.swipeMove(offset);
        },
        close: function close() {
            this.swipeMove(0);
        },
        swipeMove: function swipeMove(offset) {
            if (offset === void 0) {
                offset = 0;
            }
            this.offset = offset;
            var transform = "translate3d(" + offset + "px, 0, 0)";
            var transition = this.draging ? 'none' : 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)';
            this.setData({
                wrapperStyle: "\n        -webkit-transform: " + transform + ";\n        -webkit-transition: " + transition + ";\n        transform: " + transform + ";\n        transition: " + transition + ";\n      "
            });
        },
        swipeLeaveTransition: function swipeLeaveTransition() {
            var _a = this.data,
                leftWidth = _a.leftWidth,
                rightWidth = _a.rightWidth;
            var offset = this.offset;
            if (rightWidth > 0 && -offset > rightWidth * THRESHOLD) {
                this.open('right');
            } else if (leftWidth > 0 && offset > leftWidth * THRESHOLD) {
                this.open('left');
            } else {
                this.swipeMove(0);
            }
            this.setData({ catchMove: false });
        },
        startDrag: function startDrag(event) {
            var _this = this;
            if (this.data.disabled) {
                return;
            }
            ARRAY.forEach(function (item) {
                if (item !== _this) {
                    item.close();
                }
            });
            this.draging = true;
            this.startOffset = this.offset;
            this.firstDirection = '';
            this.touchStart(event);
        },
        noop: function noop() {},
        onDrag: function onDrag(event) {
            if (this.data.disabled) {
                return;
            }
            this.touchMove(event);
            if (!this.firstDirection) {
                this.firstDirection = this.direction;
                this.setData({ catchMove: this.firstDirection === 'horizontal' });
            }
            if (this.firstDirection === 'vertical') {
                return;
            }
            var _a = this.data,
                leftWidth = _a.leftWidth,
                rightWidth = _a.rightWidth;
            var offset = this.startOffset + this.deltaX;
            if (rightWidth > 0 && -offset > rightWidth || leftWidth > 0 && offset > leftWidth) {
                return;
            }
            this.swipeMove(offset);
        },
        endDrag: function endDrag() {
            if (this.data.disabled) {
                return;
            }
            this.draging = false;
            this.swipeLeaveTransition();
        },
        onClick: function onClick(event) {
            var _a = event.currentTarget.dataset.key,
                position = _a === void 0 ? 'outside' : _a;
            this.$emit('click', position);
            if (!this.offset) {
                return;
            }
            if (this.data.asyncClose) {
                this.$emit('close', { position: position, instance: this, name: this.data.name });
            } else {
                this.swipeMove(0);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidG91Y2hfMSIsIlRIUkVTSE9MRCIsIkFSUkFZIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibGVmdFdpZHRoIiwidHlwZSIsIk51bWJlciIsInJpZ2h0V2lkdGgiLCJhc3luY0Nsb3NlIiwibmFtZSIsIlN0cmluZyIsIm1peGlucyIsInRvdWNoIiwiZGF0YSIsImNhdGNoTW92ZSIsImNyZWF0ZWQiLCJvZmZzZXQiLCJwdXNoIiwiZGVzdHJveWVkIiwiX3RoaXMiLCJmaWx0ZXIiLCJpdGVtIiwibWV0aG9kcyIsIm9wZW4iLCJwb3NpdGlvbiIsIl9hIiwic3dpcGVNb3ZlIiwiY2xvc2UiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwiZHJhZ2luZyIsInNldERhdGEiLCJ3cmFwcGVyU3R5bGUiLCJzd2lwZUxlYXZlVHJhbnNpdGlvbiIsInN0YXJ0RHJhZyIsImV2ZW50IiwiZm9yRWFjaCIsInN0YXJ0T2Zmc2V0IiwiZmlyc3REaXJlY3Rpb24iLCJ0b3VjaFN0YXJ0Iiwibm9vcCIsIm9uRHJhZyIsInRvdWNoTW92ZSIsImRpcmVjdGlvbiIsImRlbHRhWCIsImVuZERyYWciLCJvbkNsaWNrIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJrZXkiLCIkZW1pdCIsImluc3RhbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElBQUlDLFVBQVVELFFBQVEsaUJBQVIsQ0FBZDtBQUNBLElBQUlFLFlBQVksR0FBaEI7QUFDQSxJQUFJQyxRQUFRLEVBQVo7QUFDQUosWUFBWUssYUFB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QUFDSCxTQTVFSTtBQTZFTGEsaUJBQVMsaUJBQVVYLEtBQVYsRUFBaUI7QUFDdEIsZ0JBQUlWLEtBQUtVLE1BQU1ZLGFBQU4sQ0FBb0JDLE9BQXBCLENBQTRCQyxHQUFyQztBQUFBLGdCQUEwQ3pCLFdBQVdDLE9BQU8sS0FBSyxDQUFaLEdBQWdCLFNBQWhCLEdBQTRCQSxFQUFqRjtBQUNBLGlCQUFLeUIsS0FBTCxDQUFXLE9BQVgsRUFBb0IxQixRQUFwQjtBQUNBLGdCQUFJLENBQUMsS0FBS1IsTUFBVixFQUFrQjtBQUNkO0FBQ0g7QUFDRCxnQkFBSSxLQUFLSCxJQUFMLENBQVVMLFVBQWQsRUFBMEI7QUFDdEIscUJBQUswQyxLQUFMLENBQVcsT0FBWCxFQUFvQixFQUFFMUIsVUFBVUEsUUFBWixFQUFzQjJCLFVBQVUsSUFBaEMsRUFBc0MxQyxNQUFNLEtBQUtJLElBQUwsQ0FBVUosSUFBdEQsRUFBcEI7QUFDSCxhQUZELE1BR0s7QUFDRCxxQkFBS2lCLFNBQUwsQ0FBZSxDQUFmO0FBQ0g7QUFDSjtBQXpGSTtBQTdCYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG52YXIgdG91Y2hfMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvdG91Y2hcIik7XHJcbnZhciBUSFJFU0hPTEQgPSAwLjM7XHJcbnZhciBBUlJBWSA9IFtdO1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICAgICAgbGVmdFdpZHRoOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJpZ2h0V2lkdGg6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmNDbG9zZTogQm9vbGVhbixcclxuICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtaXhpbnM6IFt0b3VjaF8xLnRvdWNoXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBjYXRjaE1vdmU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcclxuICAgICAgICBBUlJBWS5wdXNoKHRoaXMpO1xyXG4gICAgfSxcclxuICAgIGRlc3Ryb3llZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgQVJSQVkgPSBBUlJBWS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0gIT09IF90aGlzOyB9KTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb3BlbjogZnVuY3Rpb24gKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgbGVmdFdpZHRoID0gX2EubGVmdFdpZHRoLCByaWdodFdpZHRoID0gX2EucmlnaHRXaWR0aDtcclxuICAgICAgICAgICAgdmFyIG9mZnNldCA9IHBvc2l0aW9uID09PSAnbGVmdCcgPyBsZWZ0V2lkdGggOiAtcmlnaHRXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5zd2lwZU1vdmUob2Zmc2V0KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3dpcGVNb3ZlOiBmdW5jdGlvbiAob2Zmc2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPT09IHZvaWQgMCkgeyBvZmZzZXQgPSAwOyB9XHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgICAgICB2YXIgdHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIG9mZnNldCArIFwicHgsIDAsIDApXCI7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2l0aW9uID0gdGhpcy5kcmFnaW5nXHJcbiAgICAgICAgICAgICAgICA/ICdub25lJ1xyXG4gICAgICAgICAgICAgICAgOiAndHJhbnNmb3JtIC42cyBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMSknO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlOiBcIlxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IFwiICsgdHJhbnNmb3JtICsgXCI7XFxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IFwiICsgdHJhbnNpdGlvbiArIFwiO1xcbiAgICAgICAgdHJhbnNmb3JtOiBcIiArIHRyYW5zZm9ybSArIFwiO1xcbiAgICAgICAgdHJhbnNpdGlvbjogXCIgKyB0cmFuc2l0aW9uICsgXCI7XFxuICAgICAgXCJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzd2lwZUxlYXZlVHJhbnNpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGxlZnRXaWR0aCA9IF9hLmxlZnRXaWR0aCwgcmlnaHRXaWR0aCA9IF9hLnJpZ2h0V2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLm9mZnNldDtcclxuICAgICAgICAgICAgaWYgKHJpZ2h0V2lkdGggPiAwICYmIC1vZmZzZXQgPiByaWdodFdpZHRoICogVEhSRVNIT0xEKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oJ3JpZ2h0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobGVmdFdpZHRoID4gMCAmJiBvZmZzZXQgPiBsZWZ0V2lkdGggKiBUSFJFU0hPTEQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BlbignbGVmdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2lwZU1vdmUoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgY2F0Y2hNb3ZlOiBmYWxzZSB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0RHJhZzogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBBUlJBWS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAhPT0gX3RoaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmRyYWdpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0T2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3REaXJlY3Rpb24gPSAnJztcclxuICAgICAgICAgICAgdGhpcy50b3VjaFN0YXJ0KGV2ZW50KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vb3A6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgICAgICBvbkRyYWc6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50b3VjaE1vdmUoZXZlbnQpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZmlyc3REaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3REaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGNhdGNoTW92ZTogdGhpcy5maXJzdERpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0RGlyZWN0aW9uID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBsZWZ0V2lkdGggPSBfYS5sZWZ0V2lkdGgsIHJpZ2h0V2lkdGggPSBfYS5yaWdodFdpZHRoO1xyXG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5zdGFydE9mZnNldCArIHRoaXMuZGVsdGFYO1xyXG4gICAgICAgICAgICBpZiAoKHJpZ2h0V2lkdGggPiAwICYmIC1vZmZzZXQgPiByaWdodFdpZHRoKSB8fFxyXG4gICAgICAgICAgICAgICAgKGxlZnRXaWR0aCA+IDAgJiYgb2Zmc2V0ID4gbGVmdFdpZHRoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKG9mZnNldCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmREcmFnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRyYWdpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zd2lwZUxlYXZlVHJhbnNpdGlvbigpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5rZXksIHBvc2l0aW9uID0gX2EgPT09IHZvaWQgMCA/ICdvdXRzaWRlJyA6IF9hO1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm9mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuYXN5bmNDbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnLCB7IHBvc2l0aW9uOiBwb3NpdGlvbiwgaW5zdGFuY2U6IHRoaXMsIG5hbWU6IHRoaXMuZGF0YS5uYW1lIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zd2lwZU1vdmUoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=