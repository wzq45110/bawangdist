"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
var LONG_PRESS_START_TIME = 600;
var LONG_PRESS_INTERVAL = 200;
component_1.VantComponent({
    field: true,
    classes: ['input-class', 'plus-class', 'minus-class'],
    props: {
        value: null,
        integer: Boolean,
        disabled: Boolean,
        inputWidth: null,
        buttonSize: null,
        asyncChange: Boolean,
        disableInput: Boolean,
        decimalLength: Number,
        min: {
            type: null,
            value: 1
        },
        max: {
            type: null,
            value: Number.MAX_SAFE_INTEGER
        },
        step: {
            type: null,
            value: 1
        },
        showPlus: {
            type: Boolean,
            value: true
        },
        showMinus: {
            type: Boolean,
            value: true
        }
    },
    watch: {
        value: function value(_value) {
            if (_value === '') {
                return;
            }
            var newValue = this.range(_value);
            if (typeof newValue === 'number' && +this.data.value !== newValue) {
                this.setData({ value: newValue });
            }
        },
        inputWidth: function inputWidth() {
            this.set({
                inputStyle: this.computeInputStyle()
            });
        },
        buttonSize: function buttonSize() {
            this.set({
                inputStyle: this.computeInputStyle(),
                buttonStyle: this.computeButtonStyle()
            });
        }
    },
    data: {
        focus: false,
        inputStyle: '',
        buttonStyle: ''
    },
    created: function created() {
        this.setData({
            value: this.range(this.data.value)
        });
    },
    methods: {
        isDisabled: function isDisabled(type) {
            if (type === 'plus') {
                return this.data.disabled || this.data.value >= this.data.max;
            }
            return this.data.disabled || this.data.value <= this.data.min;
        },
        onFocus: function onFocus(event) {
            this.$emit('focus', event.detail);
        },
        onBlur: function onBlur(event) {
            var value = this.range(this.data.value);
            this.triggerInput(value);
            this.$emit('blur', event.detail);
        },
        // limit value range
        range: function range(value) {
            value = String(value).replace(/[^0-9.-]/g, '');
            // format range
            value = value === '' ? 0 : +value;
            value = Math.max(Math.min(this.data.max, value), this.data.min);
            // format decimal
            if (utils_1.isDef(this.data.decimalLength)) {
                value = value.toFixed(this.data.decimalLength);
            }
            return value;
        },
        onInput: function onInput(event) {
            var _a = (event.detail || {}).value,
                value = _a === void 0 ? '' : _a;
            this.triggerInput(value);
        },
        onChange: function onChange() {
            var type = this.type;
            if (this.isDisabled(type)) {
                this.$emit('overlimit', type);
                return;
            }
            var diff = type === 'minus' ? -this.data.step : +this.data.step;
            var value = +this.data.value + diff;
            if (!utils_1.isDef(this.data.decimalLength)) {
                value = Math.round(value * 100) / 100;
            }
            this.triggerInput(this.range(value));
            this.$emit(type);
        },
        longPressStep: function longPressStep() {
            var _this = this;
            this.longPressTimer = setTimeout(function () {
                _this.onChange();
                _this.longPressStep();
            }, LONG_PRESS_INTERVAL);
        },
        onTap: function onTap(event) {
            var type = event.currentTarget.dataset.type;
            this.type = type;
            this.onChange();
        },
        onTouchStart: function onTouchStart(event) {
            var _this = this;
            clearTimeout(this.longPressTimer);
            var type = event.currentTarget.dataset.type;
            this.type = type;
            this.isLongPress = false;
            this.longPressTimer = setTimeout(function () {
                _this.isLongPress = true;
                _this.onChange();
                _this.longPressStep();
            }, LONG_PRESS_START_TIME);
        },
        onTouchEnd: function onTouchEnd() {
            clearTimeout(this.longPressTimer);
        },
        triggerInput: function triggerInput(value) {
            this.setData({
                value: this.data.asyncChange ? this.data.value : value
            });
            this.$emit('change', value);
        },
        computeInputStyle: function computeInputStyle() {
            var style = '';
            if (this.data.inputWidth) {
                style = "width: " + utils_1.addUnit(this.data.inputWidth) + ";";
            }
            if (this.data.buttonSize) {
                style += "height: " + utils_1.addUnit(this.data.buttonSize) + ";";
            }
            return style;
        },
        computeButtonStyle: function computeButtonStyle() {
            var style = '';
            var size = utils_1.addUnit(this.data.buttonSize);
            if (this.data.buttonSize) {
                style = "width: " + size + ";height: " + size + ";";
            }
            return style;
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsIkxPTkdfUFJFU1NfU1RBUlRfVElNRSIsIkxPTkdfUFJFU1NfSU5URVJWQUwiLCJWYW50Q29tcG9uZW50IiwiZmllbGQiLCJjbGFzc2VzIiwicHJvcHMiLCJpbnRlZ2VyIiwiQm9vbGVhbiIsImRpc2FibGVkIiwiaW5wdXRXaWR0aCIsImJ1dHRvblNpemUiLCJhc3luY0NoYW5nZSIsImRpc2FibGVJbnB1dCIsImRlY2ltYWxMZW5ndGgiLCJOdW1iZXIiLCJtaW4iLCJ0eXBlIiwibWF4IiwiTUFYX1NBRkVfSU5URUdFUiIsInN0ZXAiLCJzaG93UGx1cyIsInNob3dNaW51cyIsIndhdGNoIiwibmV3VmFsdWUiLCJyYW5nZSIsImRhdGEiLCJzZXREYXRhIiwic2V0IiwiaW5wdXRTdHlsZSIsImNvbXB1dGVJbnB1dFN0eWxlIiwiYnV0dG9uU3R5bGUiLCJjb21wdXRlQnV0dG9uU3R5bGUiLCJmb2N1cyIsImNyZWF0ZWQiLCJtZXRob2RzIiwiaXNEaXNhYmxlZCIsIm9uRm9jdXMiLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIiwib25CbHVyIiwidHJpZ2dlcklucHV0IiwiU3RyaW5nIiwicmVwbGFjZSIsIk1hdGgiLCJpc0RlZiIsInRvRml4ZWQiLCJvbklucHV0IiwiX2EiLCJvbkNoYW5nZSIsImRpZmYiLCJyb3VuZCIsImxvbmdQcmVzc1N0ZXAiLCJfdGhpcyIsImxvbmdQcmVzc1RpbWVyIiwic2V0VGltZW91dCIsIm9uVGFwIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJvblRvdWNoU3RhcnQiLCJjbGVhclRpbWVvdXQiLCJpc0xvbmdQcmVzcyIsIm9uVG91Y2hFbmQiLCJzdHlsZSIsImFkZFVuaXQiLCJzaXplIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxD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V0FBbkIsR0FBaUNBLElBQWpDLEdBQXdDLEdBQWhEO0FBQ0g7QUFDRCxtQkFBT0YsS0FBUDtBQUNIO0FBL0ZJO0FBakVhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NvbW1vbi91dGlsc1wiKTtcclxudmFyIExPTkdfUFJFU1NfU1RBUlRfVElNRSA9IDYwMDtcclxudmFyIExPTkdfUFJFU1NfSU5URVJWQUwgPSAyMDA7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgZmllbGQ6IHRydWUsXHJcbiAgICBjbGFzc2VzOiBbJ2lucHV0LWNsYXNzJywgJ3BsdXMtY2xhc3MnLCAnbWludXMtY2xhc3MnXSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgaW50ZWdlcjogQm9vbGVhbixcclxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcclxuICAgICAgICBpbnB1dFdpZHRoOiBudWxsLFxyXG4gICAgICAgIGJ1dHRvblNpemU6IG51bGwsXHJcbiAgICAgICAgYXN5bmNDaGFuZ2U6IEJvb2xlYW4sXHJcbiAgICAgICAgZGlzYWJsZUlucHV0OiBCb29sZWFuLFxyXG4gICAgICAgIGRlY2ltYWxMZW5ndGg6IE51bWJlcixcclxuICAgICAgICBtaW46IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgdmFsdWU6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1heDoge1xyXG4gICAgICAgICAgICB0eXBlOiBudWxsLFxyXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0ZXA6IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgdmFsdWU6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dQbHVzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93TWludXM6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLnJhbmdlKHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ251bWJlcicgJiYgK3RoaXMuZGF0YS52YWx1ZSAhPT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHZhbHVlOiBuZXdWYWx1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5wdXRXaWR0aDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldCh7XHJcbiAgICAgICAgICAgICAgICBpbnB1dFN0eWxlOiB0aGlzLmNvbXB1dGVJbnB1dFN0eWxlKClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBidXR0b25TaXplOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0KHtcclxuICAgICAgICAgICAgICAgIGlucHV0U3R5bGU6IHRoaXMuY29tcHV0ZUlucHV0U3R5bGUoKSxcclxuICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlOiB0aGlzLmNvbXB1dGVCdXR0b25TdHlsZSgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgZm9jdXM6IGZhbHNlLFxyXG4gICAgICAgIGlucHV0U3R5bGU6ICcnLFxyXG4gICAgICAgIGJ1dHRvblN0eWxlOiAnJ1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5yYW5nZSh0aGlzLmRhdGEudmFsdWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGlzRGlzYWJsZWQ6IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09PSAncGx1cycpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZGlzYWJsZWQgfHwgdGhpcy5kYXRhLnZhbHVlID49IHRoaXMuZGF0YS5tYXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5kaXNhYmxlZCB8fCB0aGlzLmRhdGEudmFsdWUgPD0gdGhpcy5kYXRhLm1pbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRm9jdXM6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdmb2N1cycsIGV2ZW50LmRldGFpbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkJsdXI6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnJhbmdlKHRoaXMuZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcklucHV0KHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicsIGV2ZW50LmRldGFpbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBsaW1pdCB2YWx1ZSByYW5nZVxyXG4gICAgICAgIHJhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1teMC05Li1dL2csICcnKTtcclxuICAgICAgICAgICAgLy8gZm9ybWF0IHJhbmdlXHJcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgPT09ICcnID8gMCA6ICt2YWx1ZTtcclxuICAgICAgICAgICAgdmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLmRhdGEubWF4LCB2YWx1ZSksIHRoaXMuZGF0YS5taW4pO1xyXG4gICAgICAgICAgICAvLyBmb3JtYXQgZGVjaW1hbFxyXG4gICAgICAgICAgICBpZiAodXRpbHNfMS5pc0RlZih0aGlzLmRhdGEuZGVjaW1hbExlbmd0aCkpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudG9GaXhlZCh0aGlzLmRhdGEuZGVjaW1hbExlbmd0aCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25JbnB1dDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IChldmVudC5kZXRhaWwgfHwge30pLnZhbHVlLCB2YWx1ZSA9IF9hID09PSB2b2lkIDAgPyAnJyA6IF9hO1xyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJJbnB1dCh2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdHlwZSA9IHRoaXMudHlwZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCh0eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb3ZlcmxpbWl0JywgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGRpZmYgPSB0eXBlID09PSAnbWludXMnID8gLXRoaXMuZGF0YS5zdGVwIDogK3RoaXMuZGF0YS5zdGVwO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSArdGhpcy5kYXRhLnZhbHVlICsgZGlmZjtcclxuICAgICAgICAgICAgaWYgKCF1dGlsc18xLmlzRGVmKHRoaXMuZGF0YS5kZWNpbWFsTGVuZ3RoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJJbnB1dCh0aGlzLnJhbmdlKHZhbHVlKSk7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQodHlwZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb25nUHJlc3NTdGVwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMubG9uZ1ByZXNzVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9uQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5sb25nUHJlc3NTdGVwKCk7XHJcbiAgICAgICAgICAgIH0sIExPTkdfUFJFU1NfSU5URVJWQUwpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25UYXA6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgdHlwZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50eXBlO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5sb25nUHJlc3NUaW1lcik7XHJcbiAgICAgICAgICAgIHZhciB0eXBlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb25nUHJlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sb25nUHJlc3NUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuaXNMb25nUHJlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMub25DaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmxvbmdQcmVzc1N0ZXAoKTtcclxuICAgICAgICAgICAgfSwgTE9OR19QUkVTU19TVEFSVF9USU1FKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uVG91Y2hFbmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubG9uZ1ByZXNzVGltZXIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJpZ2dlcklucHV0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmRhdGEuYXN5bmNDaGFuZ2UgPyB0aGlzLmRhdGEudmFsdWUgOiB2YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29tcHV0ZUlucHV0U3R5bGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHN0eWxlID0gJyc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuaW5wdXRXaWR0aCkge1xyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBcIndpZHRoOiBcIiArIHV0aWxzXzEuYWRkVW5pdCh0aGlzLmRhdGEuaW5wdXRXaWR0aCkgKyBcIjtcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmJ1dHRvblNpemUpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlICs9IFwiaGVpZ2h0OiBcIiArIHV0aWxzXzEuYWRkVW5pdCh0aGlzLmRhdGEuYnV0dG9uU2l6ZSkgKyBcIjtcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3R5bGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wdXRlQnV0dG9uU3R5bGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHN0eWxlID0gJyc7XHJcbiAgICAgICAgICAgIHZhciBzaXplID0gdXRpbHNfMS5hZGRVbml0KHRoaXMuZGF0YS5idXR0b25TaXplKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5idXR0b25TaXplKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IFwid2lkdGg6IFwiICsgc2l6ZSArIFwiO2hlaWdodDogXCIgKyBzaXplICsgXCI7XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==