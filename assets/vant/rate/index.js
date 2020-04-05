"use strict";

var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
component_1.VantComponent({
    field: true,
    classes: ['icon-class'],
    props: {
        value: Number,
        readonly: Boolean,
        disabled: Boolean,
        allowHalf: Boolean,
        size: {
            type: null,
            observer: 'setSizeWithUnit'
        },
        icon: {
            type: String,
            value: 'star'
        },
        voidIcon: {
            type: String,
            value: 'star-o'
        },
        color: {
            type: String,
            value: '#ffd21e'
        },
        voidColor: {
            type: String,
            value: '#c7c7c7'
        },
        disabledColor: {
            type: String,
            value: '#bdbdbd'
        },
        count: {
            type: Number,
            value: 5
        },
        gutter: {
            type: null,
            observer: 'setGutterWithUnit'
        },
        touchable: {
            type: Boolean,
            value: true
        }
    },
    data: {
        innerValue: 0,
        gutterWithUnit: undefined,
        sizeWithUnit: '20px'
    },
    watch: {
        value: function value(_value) {
            if (_value !== this.data.innerValue) {
                this.setData({ innerValue: _value });
            }
        }
    },
    methods: {
        setSizeWithUnit: function setSizeWithUnit(val) {
            this.setData({
                sizeWithUnit: utils_1.addUnit(val)
            });
        },
        setGutterWithUnit: function setGutterWithUnit(val) {
            this.setData({
                gutterWithUnit: utils_1.addUnit(val)
            });
        },
        onSelect: function onSelect(event) {
            var data = this.data;
            var score = event.currentTarget.dataset.score;
            if (!data.disabled && !data.readonly) {
                this.setData({ innerValue: score + 1 });
                this.$emit('input', score + 1);
                this.$emit('change', score + 1);
            }
        },
        onTouchMove: function onTouchMove(event) {
            var _this = this;
            var touchable = this.data.touchable;
            if (!touchable) return;
            var clientX = event.touches[0].clientX;
            this.getRect('.van-rate__icon', true).then(function (list) {
                var target = list.sort(function (item) {
                    return item.right - item.left;
                }).find(function (item) {
                    return clientX >= item.left && clientX <= item.right;
                });
                if (target != null) {
                    _this.onSelect(__assign(__assign({}, event), { currentTarget: target }));
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsIlZhbnRDb21wb25lbnQiLCJmaWVsZCIsImNsYXNzZXMiLCJwcm9wcyIsIk51bWJlciIsInJlYWRvbmx5IiwiQm9vbGVhbiIsImRpc2FibGVkIiwiYWxsb3dIYWxmIiwic2l6ZSIsInR5cGUiLCJvYnNlcnZlciIsImljb24iLCJTdHJpbmciLCJ2b2lkSWNvbiIsImNvbG9yIiwidm9pZENvbG9yIiwiZGlzYWJsZWRDb2xvciIsImNvdW50IiwiZ3V0dGVyIiwidG91Y2hhYmxlIiwiZGF0YSIsImlubmVyVmFsdWUiLCJndXR0ZXJXaXRoVW5pdCIsInVuZGVmaW5lZCIsInNpemVXaXRoVW5pdCIsIndhdGNoIiwic2V0RGF0YSIsIm1ldGhvZHMiLCJzZXRTaXplV2l0aFVuaXQiLCJ2YWwiLCJhZGRVbml0Iiwic2V0R3V0dGVyV2l0aFVuaXQiLCJvblNlbGVjdCIsImV2ZW50Iiwic2NvcmUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIiRlbWl0Iiwib25Ub3VjaE1vdmUiLCJfdGhpcyIsImNsaWVudFgiLCJ0b3VjaGVzIiwiZ2V0UmVjdCIsInRoZW4iLCJsaXN0IiwidGFyZ2V0Iiwic29ydCIsIml0ZW0iLCJyaWdodCIsImxlZnQiLCJmaW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQSxJQUFJQSxXQUFZLGFBQVEsVUFBS0EsUUFBZCxJQUEyQixZQUFZO0FBQ2xEQSxlQUFXQyxPQUFPQyxNQUFQLElBQWlCLFVBQVNDLENBQVQsRUFBWTtBQUNwQyxhQUFLLElBQUlDLENBQUosRUFBT0MsSUFBSSxDQUFYLEVBQWNDLElBQUlDLFVBQVVDLE1BQWpDLEVBQXlDSCxJQUFJQyxDQUE3QyxFQUFnREQsR0FBaEQsRUFBcUQ7QUFDakRELGdCQUFJRyxVQUFVRixDQUFWLENBQUo7QUFDQSxpQkFBSyxJQUFJSSxDQUFULElBQWNMLENBQWQ7QUFBaUIsb0JBQUlILE9BQU9TLFNBQVAsQ0FBaUJDLGNBQWpCLENBQWdDQyxJQUFoQyxDQUFxQ1IsQ0FBckMsRUFBd0NLLENBQXhDLENBQUosRUFDYk4sRUFBRU0sQ0FBRixJQUFPTCxFQUFFSyxDQUFGLENBQVA7QUFESjtBQUVIO0FBQ0QsZUFBT04sQ0FBUDtBQUNILEtBUEQ7QUFRQSxXQUFPSCxTQUFTYSxLQUFULENBQWUsSUFBZixFQUFxQk4sU0FBckIsQ0FBUDtBQUNILENBVkQ7QUFXQU4sT0FBT2EsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElBQUlDLFVBQVVELFFBQVEsaUJBQVIsQ0FBZDtBQUNBRCxZQUFZRyxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPLElBRGU7QUFFdEJDLGFBQVMsQ0FBQyxZQUFELENBRmE7QUFHdEJDLFdBQU87QUFDSFAsZUFBT1EsTUFESjtBQUVIQyxrQkFBVUMsT0FGUDtBQUdIQyxrQkFBVUQsT0FIUDtBQUlIRSxtQkFBV0YsT0FKUjtBQUtIRyxjQUFNO0FBQ0ZDLGtCQUFNLElBREo7QUFFRkMsc0JBQVU7QUFGUixTQUxIO0FBU0hDLGNBQU07QUFDRkYsa0JBQU1HLE1BREo7QUFFRmpCLG1CQUFPO0FBRkwsU0FUSDtBQWFIa0Isa0JBQVU7QUFDTkosa0JBQU1HLE1BREE7QUFFTmpCLG1CQUFPO0FBRkQsU0FiUDtBQWlCSG1CLGVBQU87QUFDSEwsa0JBQU1HLE1BREg7QUFFSGpCLG1CQUFPO0FBRkosU0FqQko7QUFxQkhvQixtQkFBVztBQUNQTixrQkFBTUcsTUFEQztBQUVQakIsbUJBQU87QUFGQSxTQXJCUjtBQXlCSHFCLHVCQUFlO0FBQ1hQLGtCQUFNRyxNQURLO0FBRVhqQixtQkFBTztBQUZJLFNBekJaO0FBNkJIc0IsZUFBTztBQUNIUixrQkFBTU4sTUFESDtBQUVIUixtQkFBTztBQUZKLFNBN0JKO0FBaUNIdUIsZ0JBQVE7QUFDSlQsa0JBQU0sSUFERjtBQUVKQyxzQkFBVTtBQUZOLFNBakNMO0FBcUNIUyxtQkFBVztBQUNQVixrQkFBTUosT0FEQztBQUVQVixtQkFBTztBQUZBO0FBckNSLEtBSGU7QUE2Q3RCeUIsVUFBTTtBQUNGQyxvQkFBWSxDQURWO0FBRUZDLHdCQUFnQkMsU0FGZDtBQUdGQyxzQkFBYztBQUhaLEtBN0NnQjtBQWtEdEJDLFdBQU87QUFDSDlCLGVBQU8sZUFBVUEsTUFBVixFQUFpQjtBQUNwQixnQkFBSUEsV0FBVSxLQUFLeUIsSUFBTCxDQUFVQyxVQUF4QixFQUFvQztBQUNoQyxxQkFBS0ssT0FBTCxDQUFhLEVBQUVMLFlBQVkxQixNQUFkLEVBQWI7QUFDSDtBQUNKO0FBTEUsS0FsRGU7QUF5RHRCZ0MsYUFBUztBQUNMQyx5QkFBaUIseUJBQVVDLEdBQVYsRUFBZTtBQUM1QixpQkFBS0gsT0FBTCxDQUFhO0FBQ1RGLDhCQUFjMUIsUUFBUWdDLE9BQVIsQ0FBZ0JELEdBQWhCO0FBREwsYUFBYjtBQUdILFNBTEk7QUFNTEUsMkJBQW1CLDJCQUFVRixHQUFWLEVBQWU7QUFDOUIsaUJBQUtILE9BQUwsQ0FBYTtBQUNUSixnQ0FBZ0J4QixRQUFRZ0MsT0FBUixDQUFnQkQsR0FBaEI7QUFEUCxhQUFiO0FBR0gsU0FWSTtBQVdMRyxrQkFBVSxrQkFBVUMsS0FBVixFQUFpQjtBQUN2QixnQkFBSWIsT0FBTyxLQUFLQSxJQUFoQjtBQUNBLGdCQUFJYyxRQUFRRCxNQUFNRSxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkYsS0FBeEM7QUFDQSxnQkFBSSxDQUFDZCxLQUFLZCxRQUFOLElBQWtCLENBQUNjLEtBQUtoQixRQUE1QixFQUFzQztBQUNsQyxxQkFBS3NCLE9BQUwsQ0FBYSxFQUFFTCxZQUFZYSxRQUFRLENBQXRCLEVBQWI7QUFDQSxxQkFBS0csS0FBTCxDQUFXLE9BQVgsRUFBb0JILFFBQVEsQ0FBNUI7QUFDQSxxQkFBS0csS0FBTCxDQUFXLFFBQVgsRUFBcUJILFFBQVEsQ0FBN0I7QUFDSDtBQUNKLFNBbkJJO0FBb0JMSSxxQkFBYSxxQkFBVUwsS0FBVixFQUFpQjtBQUMxQixnQkFBSU0sUUFBUSxJQUFaO0FBQ0EsZ0JBQUlwQixZQUFZLEtBQUtDLElBQUwsQ0FBVUQsU0FBMUI7QUFDQSxnQkFBSSxDQUFDQSxTQUFMLEVBQ0k7QUFDSixnQkFBSXFCLFVBQVVQLE1BQU1RLE9BQU4sQ0FBYyxDQUFkLEVBQWlCRCxPQUEvQjtBQUNBLGlCQUFLRSxPQUFMLENBQWEsaUJBQWIsRUFBZ0MsSUFBaEMsRUFBc0NDLElBQXRDLENBQTJDLFVBQVVDLElBQVYsRUFBZ0I7QUFDdkQsb0JBQUlDLFNBQVNELEtBQ1JFLElBRFEsQ0FDSCxVQUFVQyxJQUFWLEVBQWdCO0FBQUUsMkJBQU9BLEtBQUtDLEtBQUwsR0FBYUQsS0FBS0UsSUFBekI7QUFBZ0MsaUJBRC9DLEVBRVJDLElBRlEsQ0FFSCxVQUFVSCxJQUFWLEVBQWdCO0FBQUUsMkJBQU9QLFdBQVdPLEtBQUtFLElBQWhCLElBQXdCVCxXQUFXTyxLQUFLQyxLQUEvQztBQUF1RCxpQkFGdEUsQ0FBYjtBQUdBLG9CQUFJSCxVQUFVLElBQWQsRUFBb0I7QUFDaEJOLDBCQUFNUCxRQUFOLENBQWVyRCxTQUFTQSxTQUFTLEVBQVQsRUFBYXNELEtBQWIsQ0FBVCxFQUE4QixFQUFFRSxlQUFlVSxNQUFqQixFQUE5QixDQUFmO0FBQ0g7QUFDSixhQVBEO0FBUUg7QUFsQ0k7QUF6RGEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxyXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHNcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgZmllbGQ6IHRydWUsXHJcbiAgICBjbGFzc2VzOiBbJ2ljb24tY2xhc3MnXSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdmFsdWU6IE51bWJlcixcclxuICAgICAgICByZWFkb25seTogQm9vbGVhbixcclxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcclxuICAgICAgICBhbGxvd0hhbGY6IEJvb2xlYW4sXHJcbiAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBudWxsLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldFNpemVXaXRoVW5pdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3N0YXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2b2lkSWNvbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnc3Rhci1vJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJyNmZmQyMWUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2b2lkQ29sb3I6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJyNjN2M3YzcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXNhYmxlZENvbG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcjYmRiZGJkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY291bnQ6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogNVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3V0dGVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0R3V0dGVyV2l0aFVuaXQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaGFibGU6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIGlubmVyVmFsdWU6IDAsXHJcbiAgICAgICAgZ3V0dGVyV2l0aFVuaXQ6IHVuZGVmaW5lZCxcclxuICAgICAgICBzaXplV2l0aFVuaXQ6ICcyMHB4J1xyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuZGF0YS5pbm5lclZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBpbm5lclZhbHVlOiB2YWx1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc2V0U2l6ZVdpdGhVbml0OiBmdW5jdGlvbiAodmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBzaXplV2l0aFVuaXQ6IHV0aWxzXzEuYWRkVW5pdCh2YWwpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0R3V0dGVyV2l0aFVuaXQ6IGZ1bmN0aW9uICh2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIGd1dHRlcldpdGhVbml0OiB1dGlsc18xLmFkZFVuaXQodmFsKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU2VsZWN0OiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgICAgICAgIHZhciBzY29yZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5zY29yZTtcclxuICAgICAgICAgICAgaWYgKCFkYXRhLmRpc2FibGVkICYmICFkYXRhLnJlYWRvbmx5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBpbm5lclZhbHVlOiBzY29yZSArIDEgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHNjb3JlICsgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBzY29yZSArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciB0b3VjaGFibGUgPSB0aGlzLmRhdGEudG91Y2hhYmxlO1xyXG4gICAgICAgICAgICBpZiAoIXRvdWNoYWJsZSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIGNsaWVudFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi1yYXRlX19pY29uJywgdHJ1ZSkudGhlbihmdW5jdGlvbiAobGlzdCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAuc29ydChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5yaWdodCAtIGl0ZW0ubGVmdDsgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZmluZChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gY2xpZW50WCA+PSBpdGVtLmxlZnQgJiYgY2xpZW50WCA8PSBpdGVtLnJpZ2h0OyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9uU2VsZWN0KF9fYXNzaWduKF9fYXNzaWduKHt9LCBldmVudCksIHsgY3VycmVudFRhcmdldDogdGFyZ2V0IH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19