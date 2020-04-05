"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var color_1 = require('./../common/color.js');
component_1.VantComponent({
    props: {
        message: String,
        background: String,
        type: {
            type: String,
            value: 'danger'
        },
        color: {
            type: String,
            value: color_1.WHITE
        },
        duration: {
            type: Number,
            value: 3000
        },
        zIndex: {
            type: Number,
            value: 110
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: false
        }
    },
    methods: {
        show: function show() {
            var _this = this;
            var _a = this.data,
                duration = _a.duration,
                onOpened = _a.onOpened;
            clearTimeout(this.timer);
            this.setData({
                show: true
            }, onOpened);
            if (duration > 0 && duration !== Infinity) {
                this.timer = setTimeout(function () {
                    _this.hide();
                }, duration);
            }
        },
        hide: function hide() {
            var onClose = this.data.onClose;
            clearTimeout(this.timer);
            this.setData({
                show: false
            }, onClose);
        },
        onTap: function onTap(event) {
            var onClick = this.data.onClick;
            if (onClick) {
                onClick(event.detail);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiY29sb3JfMSIsIlZhbnRDb21wb25lbnQiLCJwcm9wcyIsIm1lc3NhZ2UiLCJTdHJpbmciLCJiYWNrZ3JvdW5kIiwidHlwZSIsImNvbG9yIiwiV0hJVEUiLCJkdXJhdGlvbiIsIk51bWJlciIsInpJbmRleCIsInNhZmVBcmVhSW5zZXRUb3AiLCJCb29sZWFuIiwibWV0aG9kcyIsInNob3ciLCJfdGhpcyIsIl9hIiwiZGF0YSIsIm9uT3BlbmVkIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJzZXREYXRhIiwiSW5maW5pdHkiLCJzZXRUaW1lb3V0IiwiaGlkZSIsIm9uQ2xvc2UiLCJvblRhcCIsImV2ZW50Iiwib25DbGljayIsImRldGFpbCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLGlCQUFSLENBQWQ7QUFDQUQsWUFBWUcsYUFBWixDQUEwQjtBQUN0QkMsV0FBTztBQUNIQyxpQkFBU0MsTUFETjtBQUVIQyxvQkFBWUQsTUFGVDtBQUdIRSxjQUFNO0FBQ0ZBLGtCQUFNRixNQURKO0FBRUZQLG1CQUFPO0FBRkwsU0FISDtBQU9IVSxlQUFPO0FBQ0hELGtCQUFNRixNQURIO0FBRUhQLG1CQUFPRyxRQUFRUTtBQUZaLFNBUEo7QUFXSEMsa0JBQVU7QUFDTkgsa0JBQU1JLE1BREE7QUFFTmIsbUJBQU87QUFGRCxTQVhQO0FBZUhjLGdCQUFRO0FBQ0pMLGtCQUFNSSxNQURGO0FBRUpiLG1CQUFPO0FBRkgsU0FmTDtBQW1CSGUsMEJBQWtCO0FBQ2ROLGtCQUFNTyxPQURRO0FBRWRoQixtQkFBTztBQUZPO0FBbkJmLEtBRGU7QUF5QnRCaUIsYUFBUztBQUNMQyxjQUFNLGdCQUFZO0FBQ2QsZ0JBQUlDLFFBQVEsSUFBWjtBQUNBLGdCQUFJQyxLQUFLLEtBQUtDLElBQWQ7QUFBQSxnQkFBb0JULFdBQVdRLEdBQUdSLFFBQWxDO0FBQUEsZ0JBQTRDVSxXQUFXRixHQUFHRSxRQUExRDtBQUNBQyx5QkFBYSxLQUFLQyxLQUFsQjtBQUNBLGlCQUFLQyxPQUFMLENBQWE7QUFDVFAsc0JBQU07QUFERyxhQUFiLEVBRUdJLFFBRkg7QUFHQSxnQkFBSVYsV0FBVyxDQUFYLElBQWdCQSxhQUFhYyxRQUFqQyxFQUEyQztBQUN2QyxxQkFBS0YsS0FBTCxHQUFhRyxXQUFXLFlBQVk7QUFDaENSLDBCQUFNUyxJQUFOO0FBQ0gsaUJBRlksRUFFVmhCLFFBRlUsQ0FBYjtBQUdIO0FBQ0osU0FiSTtBQWNMZ0IsY0FBTSxnQkFBWTtBQUNkLGdCQUFJQyxVQUFVLEtBQUtSLElBQUwsQ0FBVVEsT0FBeEI7QUFDQU4seUJBQWEsS0FBS0MsS0FBbEI7QUFDQSxpQkFBS0MsT0FBTCxDQUFhO0FBQ1RQLHNCQUFNO0FBREcsYUFBYixFQUVHVyxPQUZIO0FBR0gsU0FwQkk7QUFxQkxDLGVBQU8sZUFBVUMsS0FBVixFQUFpQjtBQUNwQixnQkFBSUMsVUFBVSxLQUFLWCxJQUFMLENBQVVXLE9BQXhCO0FBQ0EsZ0JBQUlBLE9BQUosRUFBYTtBQUNUQSx3QkFBUUQsTUFBTUUsTUFBZDtBQUNIO0FBQ0o7QUExQkk7QUF6QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcclxudmFyIGNvbG9yXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbG9yXCIpO1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbWVzc2FnZTogU3RyaW5nLFxyXG4gICAgICAgIGJhY2tncm91bmQ6IFN0cmluZyxcclxuICAgICAgICB0eXBlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdkYW5nZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb2xvcl8xLldISVRFXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkdXJhdGlvbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAzMDAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB6SW5kZXg6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogMTEwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzYWZlQXJlYUluc2V0VG9wOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGR1cmF0aW9uID0gX2EuZHVyYXRpb24sIG9uT3BlbmVkID0gX2Eub25PcGVuZWQ7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHNob3c6IHRydWVcclxuICAgICAgICAgICAgfSwgb25PcGVuZWQpO1xyXG4gICAgICAgICAgICBpZiAoZHVyYXRpb24gPiAwICYmIGR1cmF0aW9uICE9PSBJbmZpbml0eSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH0sIGR1cmF0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgb25DbG9zZSA9IHRoaXMuZGF0YS5vbkNsb3NlO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9LCBvbkNsb3NlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uVGFwOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIG9uQ2xpY2sgPSB0aGlzLmRhdGEub25DbGljaztcclxuICAgICAgICAgICAgaWYgKG9uQ2xpY2spIHtcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2soZXZlbnQuZGV0YWlsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==