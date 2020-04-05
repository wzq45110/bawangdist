"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
component_1.VantComponent({
    field: true,
    classes: ['input-class', 'right-icon-class'],
    props: {
        size: String,
        icon: String,
        label: String,
        error: Boolean,
        fixed: Boolean,
        focus: Boolean,
        center: Boolean,
        isLink: Boolean,
        leftIcon: String,
        rightIcon: String,
        disabled: Boolean,
        autosize: Boolean,
        readonly: Boolean,
        required: Boolean,
        password: Boolean,
        iconClass: String,
        clearable: Boolean,
        clickable: Boolean,
        inputAlign: String,
        placeholder: String,
        customStyle: String,
        confirmType: String,
        confirmHold: Boolean,
        errorMessage: String,
        arrowDirection: String,
        placeholderStyle: String,
        errorMessageAlign: String,
        selectionEnd: {
            type: Number,
            value: -1
        },
        selectionStart: {
            type: Number,
            value: -1
        },
        showConfirmBar: {
            type: Boolean,
            value: true
        },
        adjustPosition: {
            type: Boolean,
            value: true
        },
        cursorSpacing: {
            type: Number,
            value: 50
        },
        maxlength: {
            type: Number,
            value: -1
        },
        type: {
            type: String,
            value: 'text'
        },
        border: {
            type: Boolean,
            value: true
        },
        titleWidth: {
            type: String,
            value: '90px'
        }
    },
    data: {
        focused: false,
        system: utils_1.getSystemInfoSync().system.split(' ').shift().toLowerCase()
    },
    methods: {
        onInput: function onInput(event) {
            var _this = this;
            var _a = (event.detail || {}).value,
                value = _a === void 0 ? '' : _a;
            this.setData({ value: value }, function () {
                _this.emitChange(value);
            });
        },
        onFocus: function onFocus(event) {
            this.setData({ focused: true });
            this.$emit('focus', event.detail);
        },
        onBlur: function onBlur(event) {
            this.setData({ focused: false });
            this.$emit('blur', event.detail);
        },
        onClickIcon: function onClickIcon() {
            this.$emit('click-icon');
        },
        onClear: function onClear() {
            var _this = this;
            this.setData({ value: '' }, function () {
                _this.emitChange('');
                _this.$emit('clear', '');
            });
        },
        onConfirm: function onConfirm() {
            this.$emit('confirm', this.data.value);
        },
        emitChange: function emitChange(value) {
            this.$emit('input', value);
            this.$emit('change', value);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsIlZhbnRDb21wb25lbnQiLCJmaWVsZCIsImNsYXNzZXMiLCJwcm9wcyIsInNpemUiLCJTdHJpbmciLCJpY29uIiwibGFiZWwiLCJlcnJvciIsIkJvb2xlYW4iLCJmaXhlZCIsImZvY3VzIiwiY2VudGVyIiwiaXNMaW5rIiwibGVmdEljb24iLCJyaWdodEljb24iLCJkaXNhYmxlZCIsImF1dG9zaXplIiwicmVhZG9ubHkiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwiaWNvbkNsYXNzIiwiY2xlYXJhYmxlIiwiY2xpY2thYmxlIiwiaW5wdXRBbGlnbiIsInBsYWNlaG9sZGVyIiwiY3VzdG9tU3R5bGUiLCJjb25maXJtVHlwZSIsImNvbmZpcm1Ib2xkIiwiZXJyb3JNZXNzYWdlIiwiYXJyb3dEaXJlY3Rpb24iLCJwbGFjZWhvbGRlclN0eWxlIiwiZXJyb3JNZXNzYWdlQWxpZ24iLCJzZWxlY3Rpb25FbmQiLCJ0eXBlIiwiTnVtYmVyIiwic2VsZWN0aW9uU3RhcnQiLCJzaG93Q29uZmlybUJhciIsImFkanVzdFBvc2l0aW9uIiwiY3Vyc29yU3BhY2luZyIsIm1heGxlbmd0aCIsImJvcmRlciIsInRpdGxlV2lkdGgiLCJkYXRhIiwiZm9jdXNlZCIsInN5c3RlbSIsImdldFN5c3RlbUluZm9TeW5jIiwic3BsaXQiLCJzaGlmdCIsInRvTG93ZXJDYXNlIiwibWV0aG9kcyIsIm9uSW5wdXQiLCJldmVudCIsIl90aGlzIiwiX2EiLCJkZXRhaWwiLCJzZXREYXRhIiwiZW1pdENoYW5nZSIsIm9uRm9jdXMiLCIkZW1pdCIsIm9uQmx1ciIsIm9uQ2xpY2tJY29uIiwib25DbGVhciIsIm9uQ29uZmlybSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStC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Q0gsU0FYSTtBQVlMSyxnQkFBUSxnQkFBVVIsS0FBVixFQUFpQjtBQUNyQixpQkFBS0ksT0FBTCxDQUFhLEVBQUVaLFNBQVMsS0FBWCxFQUFiO0FBQ0EsaUJBQUtlLEtBQUwsQ0FBVyxNQUFYLEVBQW1CUCxNQUFNRyxNQUF6QjtBQUNILFNBZkk7QUFnQkxNLHFCQUFhLHVCQUFZO0FBQ3JCLGlCQUFLRixLQUFMLENBQVcsWUFBWDtBQUNILFNBbEJJO0FBbUJMRyxpQkFBUyxtQkFBWTtBQUNqQixnQkFBSVQsUUFBUSxJQUFaO0FBQ0EsaUJBQUtHLE9BQUwsQ0FBYSxFQUFFNUQsT0FBTyxFQUFULEVBQWIsRUFBNEIsWUFBWTtBQUNwQ3lELHNCQUFNSSxVQUFOLENBQWlCLEVBQWpCO0FBQ0FKLHNCQUFNTSxLQUFOLENBQVksT0FBWixFQUFxQixFQUFyQjtBQUNILGFBSEQ7QUFJSCxTQXpCSTtBQTBCTEksbUJBQVcscUJBQVk7QUFDbkIsaUJBQUtKLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLEtBQUtoQixJQUFMLENBQVUvQyxLQUFoQztBQUNILFNBNUJJO0FBNkJMNkQsb0JBQVksb0JBQVU3RCxLQUFWLEVBQWlCO0FBQ3pCLGlCQUFLK0QsS0FBTCxDQUFXLE9BQVgsRUFBb0IvRCxLQUFwQjtBQUNBLGlCQUFLK0QsS0FBTCxDQUFXLFFBQVgsRUFBcUIvRCxLQUFyQjtBQUNIO0FBaENJO0FBeEVhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NvbW1vbi91dGlsc1wiKTtcclxuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XHJcbiAgICBmaWVsZDogdHJ1ZSxcclxuICAgIGNsYXNzZXM6IFsnaW5wdXQtY2xhc3MnLCAncmlnaHQtaWNvbi1jbGFzcyddLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBzaXplOiBTdHJpbmcsXHJcbiAgICAgICAgaWNvbjogU3RyaW5nLFxyXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXHJcbiAgICAgICAgZXJyb3I6IEJvb2xlYW4sXHJcbiAgICAgICAgZml4ZWQ6IEJvb2xlYW4sXHJcbiAgICAgICAgZm9jdXM6IEJvb2xlYW4sXHJcbiAgICAgICAgY2VudGVyOiBCb29sZWFuLFxyXG4gICAgICAgIGlzTGluazogQm9vbGVhbixcclxuICAgICAgICBsZWZ0SWNvbjogU3RyaW5nLFxyXG4gICAgICAgIHJpZ2h0SWNvbjogU3RyaW5nLFxyXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgICAgIGF1dG9zaXplOiBCb29sZWFuLFxyXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxyXG4gICAgICAgIHJlcXVpcmVkOiBCb29sZWFuLFxyXG4gICAgICAgIHBhc3N3b3JkOiBCb29sZWFuLFxyXG4gICAgICAgIGljb25DbGFzczogU3RyaW5nLFxyXG4gICAgICAgIGNsZWFyYWJsZTogQm9vbGVhbixcclxuICAgICAgICBjbGlja2FibGU6IEJvb2xlYW4sXHJcbiAgICAgICAgaW5wdXRBbGlnbjogU3RyaW5nLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXHJcbiAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcclxuICAgICAgICBjb25maXJtVHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGNvbmZpcm1Ib2xkOiBCb29sZWFuLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZTogU3RyaW5nLFxyXG4gICAgICAgIGFycm93RGlyZWN0aW9uOiBTdHJpbmcsXHJcbiAgICAgICAgcGxhY2Vob2xkZXJTdHlsZTogU3RyaW5nLFxyXG4gICAgICAgIGVycm9yTWVzc2FnZUFsaWduOiBTdHJpbmcsXHJcbiAgICAgICAgc2VsZWN0aW9uRW5kOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IC0xXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3Rpb25TdGFydDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAtMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0NvbmZpcm1CYXI6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkanVzdFBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjdXJzb3JTcGFjaW5nOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDUwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXhsZW5ndGg6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogLTFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHR5cGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3RleHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib3JkZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlV2lkdGg6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJzkwcHgnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBmb2N1c2VkOiBmYWxzZSxcclxuICAgICAgICBzeXN0ZW06IHV0aWxzXzEuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zeXN0ZW0uc3BsaXQoJyAnKS5zaGlmdCgpLnRvTG93ZXJDYXNlKClcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25JbnB1dDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IChldmVudC5kZXRhaWwgfHwge30pLnZhbHVlLCB2YWx1ZSA9IF9hID09PSB2b2lkIDAgPyAnJyA6IF9hO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyB2YWx1ZTogdmFsdWUgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdENoYW5nZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Gb2N1czogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGZvY3VzZWQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJywgZXZlbnQuZGV0YWlsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQmx1cjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGZvY3VzZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdibHVyJywgZXZlbnQuZGV0YWlsKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xpY2tJY29uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLWljb24nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xlYXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgdmFsdWU6ICcnIH0sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmVtaXRDaGFuZ2UoJycpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQoJ2NsZWFyJywgJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ29uZmlybTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjb25maXJtJywgdGhpcy5kYXRhLnZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==