"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
var color_1 = require('./../common/color.js');
function format(rate) {
    return Math.min(Math.max(rate, 0), 100);
}
var PERIMETER = 2 * Math.PI;
var BEGIN_ANGLE = -Math.PI / 2;
var STEP = 1;
component_1.VantComponent({
    props: {
        text: String,
        lineCap: {
            type: String,
            value: 'round'
        },
        value: {
            type: Number,
            value: 0,
            observer: 'reRender'
        },
        speed: {
            type: Number,
            value: 50
        },
        size: {
            type: Number,
            value: 100,
            observer: 'setStyle'
        },
        fill: String,
        layerColor: {
            type: String,
            value: color_1.WHITE
        },
        color: {
            type: [String, Object],
            value: color_1.BLUE,
            observer: 'setHoverColor'
        },
        strokeWidth: {
            type: Number,
            value: 4
        },
        clockwise: {
            type: Boolean,
            value: true
        }
    },
    data: {
        style: 'width: 100px; height: 100px;',
        hoverColor: color_1.BLUE
    },
    methods: {
        getContext: function getContext() {
            if (!this.ctx) {
                this.ctx = wx.createCanvasContext('van-circle', this);
            }
            return this.ctx;
        },
        setHoverColor: function setHoverColor() {
            var context = this.getContext();
            var _a = this.data,
                color = _a.color,
                size = _a.size;
            var hoverColor = color;
            if (utils_1.isObj(color)) {
                var LinearColor_1 = context.createLinearGradient(size, 0, 0, 0);
                Object.keys(color).sort(function (a, b) {
                    return parseFloat(a) - parseFloat(b);
                }).map(function (key) {
                    return LinearColor_1.addColorStop(parseFloat(key) / 100, color[key]);
                });
                hoverColor = LinearColor_1;
            }
            this.setData({ hoverColor: hoverColor });
        },
        setStyle: function setStyle() {
            var size = this.data.size;
            var style = "width: " + size + "px; height: " + size + "px;";
            this.setData({ style: style });
        },
        presetCanvas: function presetCanvas(context, strokeStyle, beginAngle, endAngle, fill) {
            var _a = this.data,
                strokeWidth = _a.strokeWidth,
                lineCap = _a.lineCap,
                clockwise = _a.clockwise,
                size = _a.size;
            var position = size / 2;
            var radius = position - strokeWidth / 2;
            context.setStrokeStyle(strokeStyle);
            context.setLineWidth(strokeWidth);
            context.setLineCap(lineCap);
            context.beginPath();
            context.arc(position, position, radius, beginAngle, endAngle, !clockwise);
            context.stroke();
            if (fill) {
                context.setFillStyle(fill);
                context.fill();
            }
        },
        renderLayerCircle: function renderLayerCircle(context) {
            var _a = this.data,
                layerColor = _a.layerColor,
                fill = _a.fill;
            this.presetCanvas(context, layerColor, 0, PERIMETER, fill);
        },
        renderHoverCircle: function renderHoverCircle(context, formatValue) {
            var _a = this.data,
                clockwise = _a.clockwise,
                hoverColor = _a.hoverColor;
            // 结束角度
            var progress = PERIMETER * (formatValue / 100);
            var endAngle = clockwise ? BEGIN_ANGLE + progress : 3 * Math.PI - (BEGIN_ANGLE + progress);
            this.presetCanvas(context, hoverColor, BEGIN_ANGLE, endAngle);
        },
        drawCircle: function drawCircle(currentValue) {
            var context = this.getContext();
            var size = this.data.size;
            context.clearRect(0, 0, size, size);
            this.renderLayerCircle(context);
            var formatValue = format(currentValue);
            if (formatValue !== 0) {
                this.renderHoverCircle(context, formatValue);
            }
            context.draw();
        },
        reRender: function reRender() {
            var _this = this;
            // tofector 动画暂时没有想到好的解决方案
            var _a = this.data,
                value = _a.value,
                speed = _a.speed;
            if (speed <= 0 || speed > 1000) {
                this.drawCircle(value);
                return;
            }
            this.clearInterval();
            this.currentValue = this.currentValue || 0;
            this.interval = setInterval(function () {
                if (_this.currentValue !== value) {
                    if (_this.currentValue < value) {
                        _this.currentValue += STEP;
                    } else {
                        _this.currentValue -= STEP;
                    }
                    _this.drawCircle(_this.currentValue);
                } else {
                    _this.clearInterval();
                }
            }, 1000 / speed);
        },
        clearInterval: function (_clearInterval) {
            function clearInterval() {
                return _clearInterval.apply(this, arguments);
            }

            clearInterval.toString = function () {
                return _clearInterval.toString();
            };

            return clearInterval;
        }(function () {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        })
    },
    created: function created() {
        var value = this.data.value;
        this.currentValue = value;
        this.drawCircle(value);
    },
    destroyed: function destroyed() {
        this.ctx = null;
        this.clearInterval();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsImNvbG9yXzEiLCJmb3JtYXQiLCJyYXRlIiwiTWF0aCIsIm1pbiIsIm1heCIsIlBFUklNRVRFUiIsIlBJIiwiQkVHSU5fQU5HTEUiLCJTVEVQIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwidGV4dCIsIlN0cmluZyIsImxpbmVDYXAiLCJ0eXBlIiwiTnVtYmVyIiwib2JzZXJ2ZXIiLCJzcGVlZCIsInNpemUiLCJmaWxsIiwibGF5ZXJDb2xvciIsIldISVRFIiwiY29sb3IiLCJCTFVFIiwic3Ryb2tlV2lkdGgiLCJjbG9ja3dpc2UiLCJCb29sZWFuIiwiZGF0YSIsInN0eWxlIiwiaG92ZXJDb2xvciIsIm1ldGhvZHMiLCJnZXRDb250ZXh0IiwiY3R4Iiwid3giLCJjcmVhdGVDYW52YXNDb250ZXh0Iiwic2V0SG92ZXJDb2xvciIsImNvbnRleHQiLCJfYSIsImlzT2JqIiwiTGluZWFyQ29sb3JfMSIsImNyZWF0ZUxpbmVhckdyYWRpZW50Iiwia2V5cyIsInNvcnQiLCJhIiwiYiIsInBhcnNlRmxvYXQiLCJtYXAiLCJrZXkiLCJhZGRDb2xvclN0b3AiLCJzZXREYXRhIiwic2V0U3R5bGUiLCJwcmVzZXRDYW52YXMiLCJzdHJva2VTdHlsZSIsImJlZ2luQW5nbGUiLCJlbmRBbmdsZSIsInBvc2l0aW9uIiwicmFkaXVzIiwic2V0U3Ryb2tlU3R5bGUiLCJzZXRMaW5lV2lkdGgiLCJzZXRMaW5lQ2FwIiwiYmVnaW5QYXRoIiwiYXJjIiwic3Ryb2tlIiwic2V0RmlsbFN0eWxlIiwicmVuZGVyTGF5ZXJDaXJjbGUiLCJyZW5kZXJIb3ZlckNpcmNsZSIsImZvcm1hdFZhbHVlIiwicHJvZ3Jlc3MiLCJkcmF3Q2lyY2xlIiwiY3VycmVudFZhbHVlIiwiY2xlYXJSZWN0IiwiZHJhdyIsInJlUmVuZGVyIiwiX3RoaXMiLCJjbGVhckludGVydmFsIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNyZWF0ZWQiLCJkZXN0cm95ZWQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxpQkFBUixDQUFkO0FBQ0EsSUFBSUUsVUFBVUYsUUFBUSxpQkFBUixDQUFkO0FBQ0EsU0FBU0csTUFBVCxDQUFnQkMsSUFBaEIsRUFBc0I7QUFDbEIsV0FBT0MsS0FBS0MsR0FBTCxDQUFTRCxLQUFLRSxHQUFMLENBQVNILElBQVQsRUFBZSxDQUFmLENBQVQsRUFBNEIsR0FBNUIsQ0FBUDtBQUNIO0FBQ0QsSUFBSUksWUFBWSxJQUFJSCxLQUFLSSxFQUF6QjtBQUNBLElBQUlDLGNBQWMsQ0FBQ0wsS0FBS0ksRUFBTixHQUFXLENBQTdCO0FBQ0EsSUFBSUUsT0FBTyxDQUFYO0FBQ0FaLFlBQVlhLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxpQkFBUztBQUNMQyxrQkFBTUYsTUFERDtBQUVMakIsbUJBQU87QUFGRixTQUZOO0FBTUhBLGVBQU87QUFDSG1CLGtCQUFNQyxNQURIO0FBRUhwQixtQkFBTyxDQUZKO0FBR0hxQixzQkFBVTtBQUhQLFNBTko7QUFXSEMsZUFBTztBQUNISCxrQkFBTUMsTUFESDtBQUVIcEIsbUJBQU87QUFGSixTQVhKO0FBZUh1QixjQUFNO0FBQ0ZKLGtCQUFNQyxNQURKO0FBRUZwQixtQkFBTyxHQUZMO0FBR0ZxQixzQkFBVTtBQUhSLFNBZkg7QUFvQkhHLGNBQU1QLE1BcEJIO0FBcUJIUSxvQkFBWTtBQUNSTixrQkFBTUYsTUFERTtBQUVSakIsbUJBQU9JLFFBQVFzQjtBQUZQLFNBckJUO0FBeUJIQyxlQUFPO0FBQ0hSLGtCQUFNLENBQUNGLE1B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SUFBaEI7QUFDSDtBQUNKLFNBTEQ7QUF6RkssS0E1Q2E7QUE0SXRCRSxhQUFTLG1CQUFZO0FBQ2pCLFlBQUlsRixRQUFRLEtBQUtnQyxJQUFMLENBQVVoQyxLQUF0QjtBQUNBLGFBQUswRSxZQUFMLEdBQW9CMUUsS0FBcEI7QUFDQSxhQUFLeUUsVUFBTCxDQUFnQnpFLEtBQWhCO0FBQ0gsS0FoSnFCO0FBaUp0Qm1GLGVBQVcscUJBQVk7QUFDbkIsYUFBSzlDLEdBQUwsR0FBVyxJQUFYO0FBQ0EsYUFBSzBDLGFBQUw7QUFDSDtBQXBKcUIsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3V0aWxzXCIpO1xyXG52YXIgY29sb3JfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29sb3JcIik7XHJcbmZ1bmN0aW9uIGZvcm1hdChyYXRlKSB7XHJcbiAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgocmF0ZSwgMCksIDEwMCk7XHJcbn1cclxudmFyIFBFUklNRVRFUiA9IDIgKiBNYXRoLlBJO1xyXG52YXIgQkVHSU5fQU5HTEUgPSAtTWF0aC5QSSAvIDI7XHJcbnZhciBTVEVQID0gMTtcclxuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHRleHQ6IFN0cmluZyxcclxuICAgICAgICBsaW5lQ2FwOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdyb3VuZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiAncmVSZW5kZXInXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzcGVlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiA1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2l6ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAxMDAsXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0U3R5bGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWxsOiBTdHJpbmcsXHJcbiAgICAgICAgbGF5ZXJDb2xvcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjb2xvcl8xLldISVRFXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBPYmplY3RdLFxyXG4gICAgICAgICAgICB2YWx1ZTogY29sb3JfMS5CTFVFLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldEhvdmVyQ29sb3InXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdHJva2VXaWR0aDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiA0XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9ja3dpc2U6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHN0eWxlOiAnd2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4OycsXHJcbiAgICAgICAgaG92ZXJDb2xvcjogY29sb3JfMS5CTFVFXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdldENvbnRleHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmN0eCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdHggPSB3eC5jcmVhdGVDYW52YXNDb250ZXh0KCd2YW4tY2lyY2xlJywgdGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3R4O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0SG92ZXJDb2xvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGNvbG9yID0gX2EuY29sb3IsIHNpemUgPSBfYS5zaXplO1xyXG4gICAgICAgICAgICB2YXIgaG92ZXJDb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICBpZiAodXRpbHNfMS5pc09iaihjb2xvcikpIHtcclxuICAgICAgICAgICAgICAgIHZhciBMaW5lYXJDb2xvcl8xID0gY29udGV4dC5jcmVhdGVMaW5lYXJHcmFkaWVudChzaXplLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbG9yKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBwYXJzZUZsb2F0KGEpIC0gcGFyc2VGbG9hdChiKTsgfSlcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIExpbmVhckNvbG9yXzEuYWRkQ29sb3JTdG9wKHBhcnNlRmxvYXQoa2V5KSAvIDEwMCwgY29sb3Jba2V5XSk7IH0pO1xyXG4gICAgICAgICAgICAgICAgaG92ZXJDb2xvciA9IExpbmVhckNvbG9yXzE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgaG92ZXJDb2xvcjogaG92ZXJDb2xvciB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFN0eWxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzaXplID0gdGhpcy5kYXRhLnNpemU7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IFwid2lkdGg6IFwiICsgc2l6ZSArIFwicHg7IGhlaWdodDogXCIgKyBzaXplICsgXCJweDtcIjtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgc3R5bGU6IHN0eWxlIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJlc2V0Q2FudmFzOiBmdW5jdGlvbiAoY29udGV4dCwgc3Ryb2tlU3R5bGUsIGJlZ2luQW5nbGUsIGVuZEFuZ2xlLCBmaWxsKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgc3Ryb2tlV2lkdGggPSBfYS5zdHJva2VXaWR0aCwgbGluZUNhcCA9IF9hLmxpbmVDYXAsIGNsb2Nrd2lzZSA9IF9hLmNsb2Nrd2lzZSwgc2l6ZSA9IF9hLnNpemU7XHJcbiAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHNpemUgLyAyO1xyXG4gICAgICAgICAgICB2YXIgcmFkaXVzID0gcG9zaXRpb24gLSBzdHJva2VXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc2V0U3Ryb2tlU3R5bGUoc3Ryb2tlU3R5bGUpO1xyXG4gICAgICAgICAgICBjb250ZXh0LnNldExpbmVXaWR0aChzdHJva2VXaWR0aCk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZUNhcChsaW5lQ2FwKTtcclxuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY29udGV4dC5hcmMocG9zaXRpb24sIHBvc2l0aW9uLCByYWRpdXMsIGJlZ2luQW5nbGUsIGVuZEFuZ2xlLCAhY2xvY2t3aXNlKTtcclxuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICAgICAgaWYgKGZpbGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRleHQuc2V0RmlsbFN0eWxlKGZpbGwpO1xyXG4gICAgICAgICAgICAgICAgY29udGV4dC5maWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbmRlckxheWVyQ2lyY2xlOiBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGxheWVyQ29sb3IgPSBfYS5sYXllckNvbG9yLCBmaWxsID0gX2EuZmlsbDtcclxuICAgICAgICAgICAgdGhpcy5wcmVzZXRDYW52YXMoY29udGV4dCwgbGF5ZXJDb2xvciwgMCwgUEVSSU1FVEVSLCBmaWxsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbmRlckhvdmVyQ2lyY2xlOiBmdW5jdGlvbiAoY29udGV4dCwgZm9ybWF0VmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBjbG9ja3dpc2UgPSBfYS5jbG9ja3dpc2UsIGhvdmVyQ29sb3IgPSBfYS5ob3ZlckNvbG9yO1xyXG4gICAgICAgICAgICAvLyDnu5PmnZ/op5LluqZcclxuICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gUEVSSU1FVEVSICogKGZvcm1hdFZhbHVlIC8gMTAwKTtcclxuICAgICAgICAgICAgdmFyIGVuZEFuZ2xlID0gY2xvY2t3aXNlXHJcbiAgICAgICAgICAgICAgICA/IEJFR0lOX0FOR0xFICsgcHJvZ3Jlc3NcclxuICAgICAgICAgICAgICAgIDogMyAqIE1hdGguUEkgLSAoQkVHSU5fQU5HTEUgKyBwcm9ncmVzcyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJlc2V0Q2FudmFzKGNvbnRleHQsIGhvdmVyQ29sb3IsIEJFR0lOX0FOR0xFLCBlbmRBbmdsZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkcmF3Q2lyY2xlOiBmdW5jdGlvbiAoY3VycmVudFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XHJcbiAgICAgICAgICAgIHZhciBzaXplID0gdGhpcy5kYXRhLnNpemU7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHNpemUsIHNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckxheWVyQ2lyY2xlKGNvbnRleHQpO1xyXG4gICAgICAgICAgICB2YXIgZm9ybWF0VmFsdWUgPSBmb3JtYXQoY3VycmVudFZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGZvcm1hdFZhbHVlICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckhvdmVyQ2lyY2xlKGNvbnRleHQsIGZvcm1hdFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXcoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlUmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIC8vIHRvZmVjdG9yIOWKqOeUu+aaguaXtuayoeacieaDs+WIsOWlveeahOino+WGs+aWueahiFxyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIHZhbHVlID0gX2EudmFsdWUsIHNwZWVkID0gX2Euc3BlZWQ7XHJcbiAgICAgICAgICAgIGlmIChzcGVlZCA8PSAwIHx8IHNwZWVkID4gMTAwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3Q2lyY2xlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmN1cnJlbnRWYWx1ZSB8fCAwO1xyXG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmN1cnJlbnRWYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoX3RoaXMuY3VycmVudFZhbHVlIDwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudFZhbHVlICs9IFNURVA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jdXJyZW50VmFsdWUgLT0gU1RFUDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHJhd0NpcmNsZShfdGhpcy5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2xlYXJJbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxMDAwIC8gc3BlZWQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmRhdGEudmFsdWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmRyYXdDaXJjbGUodmFsdWUpO1xyXG4gICAgfSxcclxuICAgIGRlc3Ryb3llZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY3R4ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==