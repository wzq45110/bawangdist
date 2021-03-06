"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require('./../common/color.js');
var defaultOptions = {
    selector: '#van-notify',
    type: 'danger',
    message: '',
    background: '',
    duration: 3000,
    zIndex: 110,
    color: color_1.WHITE,
    safeAreaInsetTop: false,
    onClick: function onClick() {},
    onOpened: function onOpened() {},
    onClose: function onClose() {}
};
function parseOptions(message) {
    return typeof message === 'string' ? { message: message } : message;
}
function getContext() {
    var pages = getCurrentPages();
    return pages[pages.length - 1];
}
function Notify(options) {
    options = Object.assign({}, defaultOptions, parseOptions(options));
    var context = options.context || getContext();
    var notify = context.selectComponent(options.selector);
    delete options.context;
    delete options.selector;
    if (notify) {
        notify.set(options);
        notify.show();
    } else {
        console.warn('未找到 van-notify 节点，请确认 selector 及 context 是否正确');
    }
}
exports.default = Notify;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmeS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImNvbG9yXzEiLCJyZXF1aXJlIiwiZGVmYXVsdE9wdGlvbnMiLCJzZWxlY3RvciIsInR5cGUiLCJtZXNzYWdlIiwiYmFja2dyb3VuZCIsImR1cmF0aW9uIiwiekluZGV4IiwiY29sb3IiLCJXSElURSIsInNhZmVBcmVhSW5zZXRUb3AiLCJvbkNsaWNrIiwib25PcGVuZWQiLCJvbkNsb3NlIiwicGFyc2VPcHRpb25zIiwiZ2V0Q29udGV4dCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwibGVuZ3RoIiwiTm90aWZ5Iiwib3B0aW9ucyIsImFzc2lnbiIsImNvbnRleHQiLCJub3RpZnkiLCJzZWxlY3RDb21wb25lbnQiLCJzZXQiLCJzaG93IiwiY29uc29sZSIsIndhcm4iLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsVUFBVUMsUUFBUSxpQkFBUixDQUFkO0FBQ0EsSUFBSUMsaUJBQWlCO0FBQ2pCQyxjQUFVLGFBRE87QUFFakJDLFVBQU0sUUFGVztBQUdqQkMsYUFBUyxFQUhRO0FBSWpCQyxnQkFBWSxFQUpLO0FBS2pCQyxjQUFVLElBTE87QUFNakJDLFlBQVEsR0FOUztBQU9qQkMsV0FBT1QsUUFBUVUsS0FQRTtBQVFqQkMsc0JBQWtCLEtBUkQ7QUFTakJDLGFBQVMsbUJBQVksQ0FBRyxDQVRQO0FBVWpCQyxjQUFVLG9CQUFZLENBQUcsQ0FWUjtBQVdqQkMsYUFBUyxtQkFBWSxDQUFHO0FBWFAsQ0FBckI7QUFhQSxTQUFTQyxZQUFULENBQXNCVixPQUF0QixFQUErQjtBQUMzQixXQUFPLE9BQU9BLE9BQVAsS0FBbUIsUUFBbkIsR0FBOEIsRUFBRUEsU0FBU0EsT0FBWCxFQUE5QixHQUFxREEsT0FBNUQ7QUFDSDtBQUNELFNBQVNXLFVBQVQsR0FBc0I7QUFDbEIsUUFBSUMsUUFBUUMsaUJBQVo7QUFDQSxXQUFPRCxNQUFNQSxNQUFNRSxNQUFOLEdBQWUsQ0FBckIsQ0FBUDtBQUNIO0FBQ0QsU0FBU0MsTUFBVCxDQUFnQkMsT0FBaEIsRUFBeUI7QUFDckJBLGNBQVV6QixPQUFPMEIsTUFBUCxDQUFjLEVBQWQsRUFBa0JwQixjQUFsQixFQUFrQ2EsYUFBYU0sT0FBYixDQUFsQyxDQUFWO0FBQ0EsUUFBSUUsVUFBVUYsUUFBUUUsT0FBUixJQUFtQlAsWUFBakM7QUFDQSxRQUFJUSxTQUFTRCxRQUFRRSxlQUFSLENBQXdCSixRQUFRbEIsUUFBaEMsQ0FBYjtBQUNBLFdBQU9rQixRQUFRRSxPQUFmO0FBQ0EsV0FBT0YsUUFBUWxCLFFBQWY7QUFDQSxRQUFJcUIsTUFBSixFQUFZO0FBQ1JBLGVBQU9FLEdBQVAsQ0FBV0wsT0FBWDtBQUNBRyxlQUFPRyxJQUFQO0FBQ0gsS0FIRCxNQUlLO0FBQ0RDLGdCQUFRQyxJQUFSLENBQWEsK0NBQWI7QUFDSDtBQUNKO0FBQ0QvQixRQUFRZ0MsT0FBUixHQUFrQlYsTUFBbEIiLCJmaWxlIjoibm90aWZ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbG9yXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbG9yXCIpO1xyXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XHJcbiAgICBzZWxlY3RvcjogJyN2YW4tbm90aWZ5JyxcclxuICAgIHR5cGU6ICdkYW5nZXInLFxyXG4gICAgbWVzc2FnZTogJycsXHJcbiAgICBiYWNrZ3JvdW5kOiAnJyxcclxuICAgIGR1cmF0aW9uOiAzMDAwLFxyXG4gICAgekluZGV4OiAxMTAsXHJcbiAgICBjb2xvcjogY29sb3JfMS5XSElURSxcclxuICAgIHNhZmVBcmVhSW5zZXRUb3A6IGZhbHNlLFxyXG4gICAgb25DbGljazogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgb25PcGVuZWQ6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHsgfVxyXG59O1xyXG5mdW5jdGlvbiBwYXJzZU9wdGlvbnMobWVzc2FnZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJyA/IHsgbWVzc2FnZTogbWVzc2FnZSB9IDogbWVzc2FnZTtcclxufVxyXG5mdW5jdGlvbiBnZXRDb250ZXh0KCkge1xyXG4gICAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICByZXR1cm4gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbn1cclxuZnVuY3Rpb24gTm90aWZ5KG9wdGlvbnMpIHtcclxuICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucywgcGFyc2VPcHRpb25zKG9wdGlvbnMpKTtcclxuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0IHx8IGdldENvbnRleHQoKTtcclxuICAgIHZhciBub3RpZnkgPSBjb250ZXh0LnNlbGVjdENvbXBvbmVudChvcHRpb25zLnNlbGVjdG9yKTtcclxuICAgIGRlbGV0ZSBvcHRpb25zLmNvbnRleHQ7XHJcbiAgICBkZWxldGUgb3B0aW9ucy5zZWxlY3RvcjtcclxuICAgIGlmIChub3RpZnkpIHtcclxuICAgICAgICBub3RpZnkuc2V0KG9wdGlvbnMpO1xyXG4gICAgICAgIG5vdGlmeS5zaG93KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oJ+acquaJvuWIsCB2YW4tbm90aWZ5IOiKgueCue+8jOivt+ehruiupCBzZWxlY3RvciDlj4ogY29udGV4dCDmmK/lkKbmraPnoa4nKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBOb3RpZnk7XHJcbiJdfQ==