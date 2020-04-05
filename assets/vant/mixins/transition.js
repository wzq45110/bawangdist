"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require('./../common/utils.js');
var getClassNames = function getClassNames(name) {
    return {
        enter: "van-" + name + "-enter van-" + name + "-enter-active enter-class enter-active-class",
        'enter-to': "van-" + name + "-enter-to van-" + name + "-enter-active enter-to-class enter-active-class",
        leave: "van-" + name + "-leave van-" + name + "-leave-active leave-class leave-active-class",
        'leave-to': "van-" + name + "-leave-to van-" + name + "-leave-active leave-to-class leave-active-class"
    };
};
var nextTick = function nextTick() {
    return new Promise(function (resolve) {
        return setTimeout(resolve, 1000 / 30);
    });
};
exports.transition = function (showDefaultValue) {
    return Behavior({
        properties: {
            customStyle: String,
            // @ts-ignore
            show: {
                type: Boolean,
                value: showDefaultValue,
                observer: 'observeShow'
            },
            // @ts-ignore
            duration: {
                type: null,
                value: 300,
                observer: 'observeDuration'
            },
            name: {
                type: String,
                value: 'fade'
            }
        },
        data: {
            type: '',
            inited: false,
            display: false
        },
        attached: function attached() {
            if (this.data.show) {
                this.enter();
            }
        },
        methods: {
            observeShow: function observeShow(value) {
                if (value) {
                    this.enter();
                } else {
                    this.leave();
                }
            },
            enter: function enter() {
                var _this = this;
                var _a = this.data,
                    duration = _a.duration,
                    name = _a.name;
                var classNames = getClassNames(name);
                var currentDuration = utils_1.isObj(duration) ? duration.enter : duration;
                this.status = 'enter';
                Promise.resolve().then(nextTick).then(function () {
                    _this.checkStatus('enter');
                    _this.setData({
                        inited: true,
                        display: true,
                        classes: classNames.enter,
                        currentDuration: currentDuration
                    });
                }).then(nextTick).then(function () {
                    _this.checkStatus('enter');
                    _this.setData({
                        classes: classNames['enter-to']
                    });
                }).catch(function () {});
            },
            leave: function leave() {
                var _this = this;
                var _a = this.data,
                    duration = _a.duration,
                    name = _a.name;
                var classNames = getClassNames(name);
                var currentDuration = utils_1.isObj(duration) ? duration.leave : duration;
                this.status = 'leave';
                Promise.resolve().then(nextTick).then(function () {
                    _this.checkStatus('leave');
                    _this.setData({
                        classes: classNames.leave,
                        currentDuration: currentDuration
                    });
                }).then(function () {
                    return setTimeout(function () {
                        return _this.onTransitionEnd();
                    }, currentDuration);
                }).then(nextTick).then(function () {
                    _this.checkStatus('leave');
                    _this.setData({
                        classes: classNames['leave-to']
                    });
                }).catch(function () {});
            },
            checkStatus: function checkStatus(status) {
                if (status !== this.status) {
                    throw new Error("incongruent status: " + status);
                }
            },
            onTransitionEnd: function onTransitionEnd() {
                if (!this.data.show) {
                    this.set({ display: false });
                    this.$emit('transitionend');
                }
            }
        }
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zaXRpb24uanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJ1dGlsc18xIiwicmVxdWlyZSIsImdldENsYXNzTmFtZXMiLCJuYW1lIiwiZW50ZXIiLCJsZWF2ZSIsIm5leHRUaWNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidHJhbnNpdGlvbiIsInNob3dEZWZhdWx0VmFsdWUiLCJCZWhhdmlvciIsInByb3BlcnRpZXMiLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsInNob3ciLCJ0eXBlIiwiQm9vbGVhbiIsIm9ic2VydmVyIiwiZHVyYXRpb24iLCJkYXRhIiwiaW5pdGVkIiwiZGlzcGxheSIsImF0dGFjaGVkIiwibWV0aG9kcyIsIm9ic2VydmVTaG93IiwiX3RoaXMiLCJfYSIsImNsYXNzTmFtZXMiLCJjdXJyZW50RHVyYXRpb24iLCJpc09iaiIsInN0YXR1cyIsInRoZW4iLCJjaGVja1N0YXR1cyIsInNldERhdGEiLCJjbGFzc2VzIiwiY2F0Y2giLCJvblRyYW5zaXRpb25FbmQiLCJFcnJvciIsInNldCIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsVUFBVUMsUUFBUSxpQkFBUixDQUFkO0FBQ0EsSUFBSUMsZ0JBQWdCLFNBQWhCQSxhQUFnQixDQUFVQyxJQUFWLEVBQWdCO0FBQUUsV0FBUTtBQUMxQ0MsZUFBTyxTQUFTRCxJQUFULEdBQWdCLGFBQWhCLEdBQWdDQSxJQUFoQyxHQUF1Qyw4Q0FESjtBQUUxQyxvQkFBWSxTQUFTQSxJQUFULEdBQWdCLGdCQUFoQixHQUFtQ0EsSUFBbkMsR0FBMEMsaURBRlo7QUFHMUNFLGVBQU8sU0FBU0YsSUFBVCxHQUFnQixhQUFoQixHQUFnQ0EsSUFBaEMsR0FBdUMsOENBSEo7QUFJMUMs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LElBREwsQ0FDVTNCLFFBRFYsRUFFSzJCLElBRkwsQ0FFVSxZQUFZO0FBQ2xCTiwwQkFBTU8sV0FBTixDQUFrQixPQUFsQjtBQUNBUCwwQkFBTVEsT0FBTixDQUFjO0FBQ1ZDLGlDQUFTUCxXQUFXeEIsS0FEVjtBQUVWeUIseUNBQWlCQTtBQUZQLHFCQUFkO0FBSUgsaUJBUkQsRUFTS0csSUFUTCxDQVNVLFlBQVk7QUFBRSwyQkFBT3hCLFdBQVcsWUFBWTtBQUFFLCtCQUFPa0IsTUFBTVcsZUFBTixFQUFQO0FBQWlDLHFCQUExRCxFQUE0RFIsZUFBNUQsQ0FBUDtBQUFzRixpQkFUOUcsRUFVS0csSUFWTCxDQVVVM0IsUUFWVixFQVdLMkIsSUFYTCxDQVdVLFlBQVk7QUFDbEJOLDBCQUFNTyxXQUFOLENBQWtCLE9BQWxCO0FBQ0FQLDBCQUFNUSxPQUFOLENBQWM7QUFDVkMsaUNBQVNQLFdBQVcsVUFBWDtBQURDLHFCQUFkO0FBR0gsaUJBaEJELEVBaUJLUSxLQWpCTCxDQWlCVyxZQUFZLENBQUcsQ0FqQjFCO0FBa0JILGFBM0RJO0FBNERMSCx5QkFBYSxxQkFBVUYsTUFBVixFQUFrQjtBQUMzQixvQkFBSUEsV0FBVyxLQUFLQSxNQUFwQixFQUE0QjtBQUN4QiwwQkFBTSxJQUFJTyxLQUFKLENBQVUseUJBQXlCUCxNQUFuQyxDQUFOO0FBQ0g7QUFDSixhQWhFSTtBQWlFTE0sNkJBQWlCLDJCQUFZO0FBQ3pCLG9CQUFJLENBQUMsS0FBS2pCLElBQUwsQ0FBVUwsSUFBZixFQUFxQjtBQUNqQix5QkFBS3dCLEdBQUwsQ0FBUyxFQUFFakIsU0FBUyxLQUFYLEVBQVQ7QUFDQSx5QkFBS2tCLEtBQUwsQ0FBVyxlQUFYO0FBQ0g7QUFDSjtBQXRFSTtBQTlCRyxLQUFULENBQVA7QUF1R0gsQ0F4R0QiLCJmaWxlIjoidHJhbnNpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NvbW1vbi91dGlsc1wiKTtcclxudmFyIGdldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gKHtcclxuICAgIGVudGVyOiBcInZhbi1cIiArIG5hbWUgKyBcIi1lbnRlciB2YW4tXCIgKyBuYW1lICsgXCItZW50ZXItYWN0aXZlIGVudGVyLWNsYXNzIGVudGVyLWFjdGl2ZS1jbGFzc1wiLFxyXG4gICAgJ2VudGVyLXRvJzogXCJ2YW4tXCIgKyBuYW1lICsgXCItZW50ZXItdG8gdmFuLVwiICsgbmFtZSArIFwiLWVudGVyLWFjdGl2ZSBlbnRlci10by1jbGFzcyBlbnRlci1hY3RpdmUtY2xhc3NcIixcclxuICAgIGxlYXZlOiBcInZhbi1cIiArIG5hbWUgKyBcIi1sZWF2ZSB2YW4tXCIgKyBuYW1lICsgXCItbGVhdmUtYWN0aXZlIGxlYXZlLWNsYXNzIGxlYXZlLWFjdGl2ZS1jbGFzc1wiLFxyXG4gICAgJ2xlYXZlLXRvJzogXCJ2YW4tXCIgKyBuYW1lICsgXCItbGVhdmUtdG8gdmFuLVwiICsgbmFtZSArIFwiLWxlYXZlLWFjdGl2ZSBsZWF2ZS10by1jbGFzcyBsZWF2ZS1hY3RpdmUtY2xhc3NcIlxyXG59KTsgfTtcclxudmFyIG5leHRUaWNrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCAvIDMwKTsgfSk7IH07XHJcbmV4cG9ydHMudHJhbnNpdGlvbiA9IGZ1bmN0aW9uIChzaG93RGVmYXVsdFZhbHVlKSB7XHJcbiAgICByZXR1cm4gQmVoYXZpb3Ioe1xyXG4gICAgICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBzaG93OiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNob3dEZWZhdWx0VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlcjogJ29ic2VydmVTaG93J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDMwMCxcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyOiAnb2JzZXJ2ZUR1cmF0aW9uJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZhZGUnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgdHlwZTogJycsXHJcbiAgICAgICAgICAgIGluaXRlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdHRhY2hlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnNob3cpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvYnNlcnZlU2hvdzogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVudGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlYXZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBkdXJhdGlvbiA9IF9hLmR1cmF0aW9uLCBuYW1lID0gX2EubmFtZTtcclxuICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWVzID0gZ2V0Q2xhc3NOYW1lcyhuYW1lKTtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RHVyYXRpb24gPSB1dGlsc18xLmlzT2JqKGR1cmF0aW9uKSA/IGR1cmF0aW9uLmVudGVyIDogZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdlbnRlcic7XHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG5leHRUaWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGVja1N0YXR1cygnZW50ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBjbGFzc05hbWVzLmVudGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHVyYXRpb246IGN1cnJlbnREdXJhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihuZXh0VGljaylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tTdGF0dXMoJ2VudGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZXNbJ2VudGVyLXRvJ11cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxlYXZlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBkdXJhdGlvbiA9IF9hLmR1cmF0aW9uLCBuYW1lID0gX2EubmFtZTtcclxuICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWVzID0gZ2V0Q2xhc3NOYW1lcyhuYW1lKTtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RHVyYXRpb24gPSB1dGlsc18xLmlzT2JqKGR1cmF0aW9uKSA/IGR1cmF0aW9uLmxlYXZlIDogZHVyYXRpb247XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9ICdsZWF2ZSc7XHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG5leHRUaWNrKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGVja1N0YXR1cygnbGVhdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NOYW1lcy5sZWF2ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudER1cmF0aW9uOiBjdXJyZW50RHVyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5vblRyYW5zaXRpb25FbmQoKTsgfSwgY3VycmVudER1cmF0aW9uKTsgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihuZXh0VGljaylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tTdGF0dXMoJ2xlYXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZXNbJ2xlYXZlLXRvJ11cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoZWNrU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzICE9PSB0aGlzLnN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImluY29uZ3J1ZW50IHN0YXR1czogXCIgKyBzdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnNob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldCh7IGRpc3BsYXk6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RyYW5zaXRpb25lbmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG4iXX0=