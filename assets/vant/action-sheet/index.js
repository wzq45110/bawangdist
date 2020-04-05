"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
        round: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 100
        },
        actions: {
            type: Array,
            value: []
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        closeOnClickAction: {
            type: Boolean,
            value: true
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onSelect: function onSelect(event) {
            var index = event.currentTarget.dataset.index;
            var item = this.data.actions[index];
            if (item && !item.disabled && !item.loading) {
                this.$emit('select', item);
                if (this.data.closeOnClickAction) {
                    this.onClose();
                }
            }
        },
        onCancel: function onCancel() {
            this.$emit('cancel');
        },
        onClose: function onClose() {
            this.$emit('close');
        },
        onClickOverlay: function onClickOverlay() {
            this.$emit('click-overlay');
            this.onClose();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJ0aXRsZSIsIlN0cmluZyIsImNhbmNlbFRleHQiLCJyb3VuZCIsInR5cGUiLCJ6SW5kZXgiLCJOdW1iZXIiLCJhY3Rpb25zIiwiQXJyYXkiLCJvdmVybGF5IiwiY2xvc2VPbkNsaWNrT3ZlcmxheSIsImNsb3NlT25DbGlja0FjdGlvbiIsInNhZmVBcmVhSW5zZXRCb3R0b20iLCJtZXRob2RzIiwib25TZWxlY3QiLCJldmVudCIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpdGVtIiwiZGF0YSIsImRpc2FibGVkIiwibG9hZGluZyIsIiRlbWl0Iiwib25DbG9zZSIsIm9uQ2FuY2VsIiwib25DbGlja092ZXJsYXkiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU87QUFDSEMsY0FBTUMsT0FESDtBQUVIQyxlQUFPQyxNQUZKO0FBR0hDLG9CQUFZRCxNQUhUO0FBSUhFLGVBQU87QUFDSEMsa0JBQU1MLE9BREg7QUFFSE4sbUJBQU87QUFGSixTQUpKO0FBUUhZLGdCQUFRO0FBQ0pELGtCQUFNRSxNQURGO0FBRUpiLG1CQUFPO0FBRkgsU0FSTDtBQVlIYyxpQkFBUztBQUNMSCxrQkFBTUksS0FERDtBQUVMZixtQkFBTztBQUZGLFNBWk47QUFnQkhnQixpQkFBUztBQUNMTCxrQkFBTUwsT0FERDtBQUVMTixtQkFBTztBQUZGLFNBaEJOO0FBb0JIaUIsNkJBQXFCO0FBQ2pCTixrQkFBTUwsT0FEVztBQUVqQk4sbUJBQU87QUFGVSxTQXBCbEI7QUF3QkhrQiw0QkFBb0I7QUFDaEJQLGtCQUFNTCxPQURVO0FBRWhCTixtQkFBTztBQUZTLFNBeEJqQjtBQTRCSG1CLDZCQUFxQjtBQUNqQlIsa0JBQU1MLE9BRFc7QUFFakJOLG1CQUFPO0FBRlU7QUE1QmxCLEtBRGU7QUFrQ3RCb0IsYUFBUztBQUNMQyxrQkFBVSxrQkFBVUMsS0FBVixFQUFpQjtBQUN2QixnQkFBSUMsUUFBUUQsTUFBTUUsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJGLEtBQXhDO0FBQ0EsZ0JBQUlHLE9BQU8sS0FBS0MsSUFBTCxDQUFVYixPQUFWLENBQWtCUyxLQUFsQixDQUFYO0FBQ0EsZ0JBQUlHLFFBQVEsQ0FBQ0EsS0FBS0UsUUFBZCxJQUEwQixDQUFDRixLQUFLRyxPQUFwQyxFQUE2QztBQUN6QyxxQkFBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJKLElBQXJCO0FBQ0Esb0JBQUksS0FBS0MsSUFBTCxDQUFVVCxrQkFBZCxFQUFrQztBQUM5Qix5QkFBS2EsT0FBTDtBQUNIO0FBQ0o7QUFDSixTQVZJO0FBV0xDLGtCQUFVLG9CQUFZO0FBQ2xCLGlCQUFLRixLQUFMLENBQVcsUUFBWDtBQUNILFNBYkk7QUFjTEMsaUJBQVMsbUJBQVk7QUFDakIsaUJBQUtELEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FoQkk7QUFpQkxHLHdCQUFnQiwwQkFBWTtBQUN4QixpQkFBS0gsS0FBTCxDQUFXLGVBQVg7QUFDQSxpQkFBS0MsT0FBTDtBQUNIO0FBcEJJO0FBbENhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBzaG93OiBCb29sZWFuLFxyXG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXHJcbiAgICAgICAgY2FuY2VsVGV4dDogU3RyaW5nLFxyXG4gICAgICAgIHJvdW5kOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICB6SW5kZXg6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogMTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3Rpb25zOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgICAgICB2YWx1ZTogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIG92ZXJsYXk6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlT25DbGlja092ZXJsYXk6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlT25DbGlja0FjdGlvbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2FmZUFyZWFJbnNldEJvdHRvbToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpcy5kYXRhLmFjdGlvbnNbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSAmJiAhaXRlbS5kaXNhYmxlZCAmJiAhaXRlbS5sb2FkaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBpdGVtKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2xvc2VPbkNsaWNrQWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2FuY2VsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbCcpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DbGlja092ZXJsYXk6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2stb3ZlcmxheScpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=