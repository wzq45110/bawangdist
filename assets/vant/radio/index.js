"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
component_1.VantComponent({
    field: true,
    relation: {
        name: 'radio-group',
        type: 'ancestor',
        linked: function linked(target) {
            this.parent = target;
        },
        unlinked: function unlinked() {
            this.parent = null;
        }
    },
    classes: ['icon-class', 'label-class'],
    props: {
        value: null,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: {
            type: String,
            value: 'right'
        },
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: 'round'
        },
        iconSize: {
            type: null,
            observer: 'setIconSizeUnit'
        }
    },
    data: {
        iconSizeWithUnit: '20px'
    },
    methods: {
        setIconSizeUnit: function setIconSizeUnit(val) {
            this.setData({
                iconSizeWithUnit: utils_1.addUnit(val)
            });
        },
        emitChange: function emitChange(value) {
            var instance = this.parent || this;
            instance.$emit('input', value);
            instance.$emit('change', value);
        },
        onChange: function onChange(event) {
            console.log(event);
            this.emitChange(this.data.name);
        },
        onClickLabel: function onClickLabel() {
            var _a = this.data,
                disabled = _a.disabled,
                labelDisabled = _a.labelDisabled,
                name = _a.name;
            if (!disabled && !labelDisabled) {
                this.emitChange(name);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsIlZhbnRDb21wb25lbnQiLCJmaWVsZCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJwYXJlbnQiLCJ1bmxpbmtlZCIsImNsYXNzZXMiLCJwcm9wcyIsImRpc2FibGVkIiwiQm9vbGVhbiIsInVzZUljb25TbG90IiwiY2hlY2tlZENvbG9yIiwiU3RyaW5nIiwibGFiZWxQb3NpdGlvbiIsImxhYmVsRGlzYWJsZWQiLCJzaGFwZSIsImljb25TaXplIiwib2JzZXJ2ZXIiLCJkYXRhIiwiaWNvblNpemVXaXRoVW5pdCIsIm1ldGhvZHMiLCJzZXRJY29uU2l6ZVVuaXQiLCJ2YWwiLCJzZXREYXRhIiwiYWRkVW5pdCIsImVtaXRDaGFuZ2UiLCJpbnN0YW5jZSIsIiRlbWl0Iiwib25DaGFuZ2UiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrTGFiZWwiLCJfYSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLGlCQUFSLENBQWQ7QUFDQUQsWUFBWUcsYUFBWixDQUEwQjtBQUN0QkMsV0FBTyxJQURlO0FBRXRCQyxjQUFVO0FBQ05DLGNBQU0sYUFEQTtBQUVOQyxjQUFNLFVBRkE7QUFHTkMsZ0JBQVEsZ0JBQVVDLE1BQVYsRUFBa0I7QUFDdEIsaUJBQUtDLE1BQUwsR0FBY0QsTUFBZDtBQUNILFNBTEs7QUFNTkUsa0JBQVUsb0JBQVk7QUFDbEIsaUJBQUtELE1BQUwsR0FBYyxJQUFkO0FBQ0g7QUFSSyxLQUZZO0FBWXRCRSxhQUFTLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FaYTtBQWF0QkMsV0FBTztBQUNIZCxlQUFPLElBREo7QUFFSGUsa0JBQVVDLE9BRlA7QUFHSEMscUJBQWFELE9BSFY7QUFJSEUsc0JBQWNDLE1BSlg7QUFLSEMsdUJBQWU7QUFDWFosa0JBQU1XLE1BREs7QUFFWG5CLG1CQUFPO0FBRkksU0FMWjtBQVNIcUIsdUJBQWVMLE9BVFo7QUFVSE0sZUFBTztBQUNIZCxrQkFBTVcsTUFESDtBQUVIbkIsbUJBQU87QUFGSixTQVZKO0FBY0h1QixrQkFBVTtBQUNOZixrQkFBTSxJQURBO0FBRU5nQixzQkFBVTtBQUZKO0FBZFAsS0FiZTtBQWdDdEJDLFVBQU07QUFDRkMsMEJBQWtCO0FBRGhCLEtBaENnQjtBQW1DdEJDLGFBQVM7QUFDTEMseUJBQWlCLHlCQUFVQyxHQUFWLEVBQWU7QUFDNUIsaUJBQUtDLE9BQUwsQ0FBYTtBQUNUSixrQ0FBa0J2QixRQUFRNEIsT0FBUixDQUFnQkYsR0FBaEI7QUFEVCxhQUFiO0FBR0gsU0FMSTtBQU1MRyxvQkFBWSxvQkFBVWhDLEtBQVYsRUFBaUI7QUFDekIsZ0JBQUlpQyxXQUFXLEtBQUt0QixNQUFMLElBQWUsSUFBOUI7QUFDQXNCLHFCQUFTQyxLQUFULENBQWUsT0FBZixFQUF3QmxDLEtBQXhCO0FBQ0FpQyxxQkFBU0MsS0FBVCxDQUFlLFFBQWYsRUFBeUJsQyxLQUF6QjtBQUNILFNBVkk7QUFXTG1DLGtCQUFVLGtCQUFVQyxLQUFWLEVBQWlCO0FBQ3ZCQyxvQkFBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0EsaUJBQUtKLFVBQUwsQ0FBZ0IsS0FBS1AsSUFBTCxDQUFVbEIsSUFBMUI7QUFDSCxTQWRJO0FBZUxnQyxzQkFBYyx3QkFBWTtBQUN0QixnQkFBSUMsS0FBSyxLQUFLZixJQUFkO0FBQUEsZ0JBQW9CVixXQUFXeUIsR0FBR3pCLFFBQWxDO0FBQUEsZ0JBQTRDTSxnQkFBZ0JtQixHQUFHbkIsYUFBL0Q7QUFBQSxnQkFBOEVkLE9BQU9pQyxHQUFHakMsSUFBeEY7QUFDQSxnQkFBSSxDQUFDUSxRQUFELElBQWEsQ0FBQ00sYUFBbEIsRUFBaUM7QUFDN0IscUJBQUtXLFVBQUwsQ0FBZ0J6QixJQUFoQjtBQUNIO0FBQ0o7QUFwQkk7QUFuQ2EsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcclxudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3V0aWxzXCIpO1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIGZpZWxkOiB0cnVlLFxyXG4gICAgcmVsYXRpb246IHtcclxuICAgICAgICBuYW1lOiAncmFkaW8tZ3JvdXAnLFxyXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXHJcbiAgICAgICAgbGlua2VkOiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gdGFyZ2V0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5saW5rZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbGFzc2VzOiBbJ2ljb24tY2xhc3MnLCAnbGFiZWwtY2xhc3MnXSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICAgICAgdXNlSWNvblNsb3Q6IEJvb2xlYW4sXHJcbiAgICAgICAgY2hlY2tlZENvbG9yOiBTdHJpbmcsXHJcbiAgICAgICAgbGFiZWxQb3NpdGlvbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAncmlnaHQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsYWJlbERpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgICAgIHNoYXBlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdyb3VuZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb25TaXplOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0SWNvblNpemVVbml0J1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgICAgaWNvblNpemVXaXRoVW5pdDogJzIwcHgnXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHNldEljb25TaXplVW5pdDogZnVuY3Rpb24gKHZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgaWNvblNpemVXaXRoVW5pdDogdXRpbHNfMS5hZGRVbml0KHZhbClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5wYXJlbnQgfHwgdGhpcztcclxuICAgICAgICAgICAgaW5zdGFuY2UuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuZW1pdENoYW5nZSh0aGlzLmRhdGEubmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrTGFiZWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBkaXNhYmxlZCA9IF9hLmRpc2FibGVkLCBsYWJlbERpc2FibGVkID0gX2EubGFiZWxEaXNhYmxlZCwgbmFtZSA9IF9hLm5hbWU7XHJcbiAgICAgICAgICAgIGlmICghZGlzYWJsZWQgJiYgIWxhYmVsRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENoYW5nZShuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==