"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    classes: ['field-class', 'input-class', 'cancel-class'],
    props: {
        label: String,
        focus: Boolean,
        error: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        inputAlign: String,
        showAction: Boolean,
        useActionSlot: Boolean,
        useLeftIconSlot: Boolean,
        useRightIconSlot: Boolean,
        leftIcon: {
            type: String,
            value: 'search'
        },
        rightIcon: String,
        placeholder: String,
        placeholderStyle: String,
        actionText: {
            type: String,
            value: '取消'
        },
        background: {
            type: String,
            value: '#ffffff'
        },
        maxlength: {
            type: Number,
            value: -1
        },
        shape: {
            type: String,
            value: 'square'
        },
        clearable: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onChange: function onChange(event) {
            this.setData({ value: event.detail });
            this.$emit('change', event.detail);
        },
        onCancel: function onCancel() {
            var _this = this;
            /**
             * 修复修改输入框值时，输入框失焦和赋值同时触发，赋值失效
             * https://github.com/youzan/vant-weapp/issues/1768
             */
            setTimeout(function () {
                _this.setData({ value: '' });
                _this.$emit('cancel');
                _this.$emit('change', '');
            }, 200);
        },
        onSearch: function onSearch() {
            this.$emit('search', this.data.value);
        },
        onFocus: function onFocus() {
            this.$emit('focus');
        },
        onBlur: function onBlur() {
            this.$emit('blur');
        },
        onClear: function onClear() {
            this.$emit('clear');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwibGFiZWwiLCJTdHJpbmciLCJmb2N1cyIsIkJvb2xlYW4iLCJlcnJvciIsImRpc2FibGVkIiwicmVhZG9ubHkiLCJpbnB1dEFsaWduIiwic2hvd0FjdGlvbiIsInVzZUFjdGlvblNsb3QiLCJ1c2VMZWZ0SWNvblNsb3QiLCJ1c2VSaWdodEljb25TbG90IiwibGVmdEljb24iLCJ0eXBlIiwicmlnaHRJY29uIiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclN0eWxlIiwiYWN0aW9uVGV4dCIsImJhY2tncm91bmQiLCJtYXhsZW5ndGgiLCJOdW1iZXIiLCJzaGFwZSIsImNsZWFyYWJsZSIsIm1ldGhvZHMiLCJvbkNoYW5nZSIsImV2ZW50Iiwic2V0RGF0YSIsImRldGFpbCIsIiRlbWl0Iiwib25DYW5jZWwiLCJfdGhpcyIsInNldFRpbWVvdXQiLCJvblNlYXJjaCIsImRhdGEiLCJvbkZvY3VzIiwib25CbHVyIiwib25DbGVhciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsV0FBTyxJQURlO0FBRXRCQyxhQUFTLENBQUMsYUFBRCxFQUFnQixhQUFoQixFQUErQixjQUEvQixDQUZhO0FBR3RCQyxXQUFPO0FBQ0hDLGVBQU9DLE1BREo7QUFFSEMsZUFBT0MsT0FGSjtBQUdIQyxlQUFPRCxPQUhKO0FBSUhFLGtCQUFVRixPQUpQO0FBS0hHLGtCQUFVSCxPQUxQO0FBTUhJLG9CQUFZTixNQU5UO0FBT0hPLG9CQUFZTCxPQVBUO0FBUUhNLHVCQUFlTixPQVJaO0FBU0hPLHlCQUFpQlAsT0FUZDtBQVVIUSwwQkFBa0JSLE9BVmY7QUFXSFMsa0JBQVU7QUFDTkMsa0JBQU1aLE1BREE7QUFFTlIsbUJBQU87QUFGRCxTQVhQO0FBZUhxQixtQkFBV2IsTUFmUjtBQWdCSGMscUJBQWFkLE1BaEJWO0FBaUJIZSwwQkFBa0JmLE1BakJmO0FBa0JIZ0Isb0JBQVk7QUFDUkosa0JBQU1aLE1BREU7QUFFUlIsbUJBQU87QUFGQyxTQWxCVDtBQXNCSHlCLG9CQUFZO0FBQ1JMLGtCQUFNWixNQURFO0FBRVJSLG1CQUFPO0FBRkMsU0F0QlQ7QUEwQkgwQixtQkFBVztBQUNQTixrQkFBTU8sTUFEQztBQUVQM0IsbUJBQU8sQ0FBQztBQUZELFNBMUJSO0FBOEJINEIsZUFBTztBQUNIUixrQkFBTVosTUFESDtBQUVIUixtQkFBTztBQUZKLFNBOUJKO0FBa0NINkIsbUJBQVc7QUFDUFQsa0JBQU1WLE9BREM7QUFFUFYsbUJBQU87QUFGQTtBQWxDUixLQUhlO0FBMEN0QjhCLGFBQVM7QUFDTEMsa0JBQVUsa0JBQVVDLEtBQVYsRUFBaUI7QUFDdkIsaUJBQUtDLE9BQUwsQ0FBYSxFQUFFakMsT0FBT2dDLE1BQU1FLE1BQWYsRUFBYjtBQUNBLGlCQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQkgsTUFBTUUsTUFBM0I7QUFDSCxTQUpJO0FBS0xFLGtCQUFVLG9CQUFZO0FBQ2xCLGdCQUFJQyxRQUFRLElBQVo7QUFDQTs7OztBQUlBQyx1QkFBVyxZQUFZO0FBQ25CRCxzQkFBTUosT0FBTixDQUFjLEVBQUVqQyxPQUFPLEVBQVQsRUFBZDtBQUNBcUMsc0JBQU1GLEtBQU4sQ0FBWSxRQUFaO0FBQ0FFLHNCQUFNRixLQUFOLENBQVksUUFBWixFQUFzQixFQUF0QjtBQUNILGFBSkQsRUFJRyxHQUpIO0FBS0gsU0FoQkk7QUFpQkxJLGtCQUFVLG9CQUFZO0FBQ2xCLGlCQUFLSixLQUFMLENBQVcsUUFBWCxFQUFxQixLQUFLSyxJQUFMLENBQVV4QyxLQUEvQjtBQUNILFNBbkJJO0FBb0JMeUMsaUJBQVMsbUJBQVk7QUFDakIsaUJBQUtOLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0F0Qkk7QUF1QkxPLGdCQUFRLGtCQUFZO0FBQ2hCLGlCQUFLUCxLQUFMLENBQVcsTUFBWDtBQUNILFNBekJJO0FBMEJMUSxpQkFBUyxtQkFBWTtBQUNqQixpQkFBS1IsS0FBTCxDQUFXLE9BQVg7QUFDSDtBQTVCSTtBQTFDYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIGZpZWxkOiB0cnVlLFxyXG4gICAgY2xhc3NlczogWydmaWVsZC1jbGFzcycsICdpbnB1dC1jbGFzcycsICdjYW5jZWwtY2xhc3MnXSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbGFiZWw6IFN0cmluZyxcclxuICAgICAgICBmb2N1czogQm9vbGVhbixcclxuICAgICAgICBlcnJvcjogQm9vbGVhbixcclxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcclxuICAgICAgICByZWFkb25seTogQm9vbGVhbixcclxuICAgICAgICBpbnB1dEFsaWduOiBTdHJpbmcsXHJcbiAgICAgICAgc2hvd0FjdGlvbjogQm9vbGVhbixcclxuICAgICAgICB1c2VBY3Rpb25TbG90OiBCb29sZWFuLFxyXG4gICAgICAgIHVzZUxlZnRJY29uU2xvdDogQm9vbGVhbixcclxuICAgICAgICB1c2VSaWdodEljb25TbG90OiBCb29sZWFuLFxyXG4gICAgICAgIGxlZnRJY29uOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdzZWFyY2gnXHJcbiAgICAgICAgfSxcclxuICAgICAgICByaWdodEljb246IFN0cmluZyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyU3R5bGU6IFN0cmluZyxcclxuICAgICAgICBhY3Rpb25UZXh0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICflj5bmtognXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcjZmZmZmZmJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWF4bGVuZ3RoOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IC0xXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaGFwZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnc3F1YXJlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xlYXJhYmxlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHZhbHVlOiBldmVudC5kZXRhaWwgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGV2ZW50LmRldGFpbCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNhbmNlbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICog5L+u5aSN5L+u5pS56L6T5YWl5qGG5YC85pe277yM6L6T5YWl5qGG5aSx54Sm5ZKM6LWL5YC85ZCM5pe26Kem5Y+R77yM6LWL5YC85aSx5pWIXHJcbiAgICAgICAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS95b3V6YW4vdmFudC13ZWFwcC9pc3N1ZXMvMTc2OFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHsgdmFsdWU6ICcnIH0pO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQoJ2NhbmNlbCcpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQoJ2NoYW5nZScsICcnKTtcclxuICAgICAgICAgICAgfSwgMjAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU2VhcmNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NlYXJjaCcsIHRoaXMuZGF0YS52YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkZvY3VzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkJsdXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DbGVhcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGVhcicpO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=