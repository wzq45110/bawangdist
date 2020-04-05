"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var button_1 = require('./../mixins/button.js');
var open_type_1 = require('./../mixins/open-type.js');
var color_1 = require('./../common/color.js');
component_1.VantComponent({
    mixins: [button_1.button, open_type_1.openType],
    props: {
        show: Boolean,
        title: String,
        message: String,
        useSlot: Boolean,
        className: String,
        customStyle: String,
        asyncClose: Boolean,
        messageAlign: String,
        useTitleSlot: Boolean,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
        zIndex: {
            type: Number,
            value: 2000
        },
        confirmButtonText: {
            type: String,
            value: '确认'
        },
        cancelButtonText: {
            type: String,
            value: '取消'
        },
        confirmButtonColor: {
            type: String,
            value: color_1.BLUE
        },
        cancelButtonColor: {
            type: String,
            value: color_1.GRAY
        },
        showConfirmButton: {
            type: Boolean,
            value: true
        },
        overlay: {
            type: Boolean,
            value: true
        },
        transition: {
            type: String,
            value: 'scale'
        }
    },
    data: {
        loading: {
            confirm: false,
            cancel: false
        }
    },
    watch: {
        show: function show(_show) {
            !_show && this.stopLoading();
        }
    },
    methods: {
        onConfirm: function onConfirm() {
            this.handleAction('confirm');
        },
        onCancel: function onCancel() {
            this.handleAction('cancel');
        },
        onClickOverlay: function onClickOverlay() {
            this.onClose('overlay');
        },
        handleAction: function handleAction(action) {
            var _a;
            if (this.data.asyncClose) {
                this.setData((_a = {}, _a["loading." + action] = true, _a));
            }
            this.onClose(action);
        },
        close: function close() {
            this.setData({
                show: false
            });
        },
        stopLoading: function stopLoading() {
            this.setData({
                loading: {
                    confirm: false,
                    cancel: false
                }
            });
        },
        onClose: function onClose(action) {
            if (!this.data.asyncClose) {
                this.close();
            }
            this.$emit('close', action);
            // 把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading
            this.$emit(action, { dialog: this });
            var callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];
            if (callback) {
                callback(this);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiYnV0dG9uXzEiLCJvcGVuX3R5cGVfMSIsImNvbG9yXzEiLCJWYW50Q29tcG9uZW50IiwibWl4aW5zIiwiYnV0dG9uIiwib3BlblR5cGUiLCJwcm9wcyIsInNob3ciLCJCb29sZWFuIiwidGl0bGUiLCJTdHJpbmciLCJtZXNzYWdlIiwidXNlU2xvdCIsImNsYXNzTmFtZSIsImN1c3RvbVN0eWxlIiwiYXN5bmNDbG9zZSIsIm1lc3NhZ2VBbGlnbiIsInVzZVRpdGxlU2xvdCIsInNob3dDYW5jZWxCdXR0b24iLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwiY29uZmlybUJ1dHRvbk9wZW5UeXBlIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImNvbmZpcm1CdXR0b25Db2xvciIsIkJMVUUiLCJjYW5jZWxCdXR0b25Db2xvciIsIkdSQVkiLCJzaG93Q29uZmlybUJ1dHRvbiIsIm92ZXJsYXkiLCJ0cmFuc2l0aW9uIiwiZGF0YSIsImxvYWRpbmciLCJjb25maXJtIiwiY2FuY2VsIiwid2F0Y2giLCJzdG9wTG9hZGluZyIsIm1ldGhvZHMiLCJvbkNvbmZpcm0iLCJoYW5kbGVBY3Rpb24iLCJvbkNhbmNlbCIsIm9uQ2xpY2tPdmVybGF5Iiwib25DbG9zZSIsImFjdGlvbiIsIl9hIiwic2V0RGF0YSIsImNsb3NlIiwiJGVtaXQiLCJkaWFsb2ciLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxXQUFXRCxRQUFRLGtCQUFSLENBQWY7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LGdCQUFJQyxXQUFXLEtBQUtsQixJQUFMLENBQVVZLFdBQVcsU0FBWCxHQUF1QixXQUF2QixHQUFxQyxVQUEvQyxDQUFmO0FBQ0EsZ0JBQUlNLFFBQUosRUFBYztBQUNWQSx5QkFBUyxJQUFUO0FBQ0g7QUFDSjtBQTNDSTtBQTNEYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG52YXIgYnV0dG9uXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL2J1dHRvblwiKTtcclxudmFyIG9wZW5fdHlwZV8xID0gcmVxdWlyZShcIi4uL21peGlucy9vcGVuLXR5cGVcIik7XHJcbnZhciBjb2xvcl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb2xvclwiKTtcclxuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XHJcbiAgICBtaXhpbnM6IFtidXR0b25fMS5idXR0b24sIG9wZW5fdHlwZV8xLm9wZW5UeXBlXSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgc2hvdzogQm9vbGVhbixcclxuICAgICAgICB0aXRsZTogU3RyaW5nLFxyXG4gICAgICAgIG1lc3NhZ2U6IFN0cmluZyxcclxuICAgICAgICB1c2VTbG90OiBCb29sZWFuLFxyXG4gICAgICAgIGNsYXNzTmFtZTogU3RyaW5nLFxyXG4gICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICAgICAgYXN5bmNDbG9zZTogQm9vbGVhbixcclxuICAgICAgICBtZXNzYWdlQWxpZ246IFN0cmluZyxcclxuICAgICAgICB1c2VUaXRsZVNsb3Q6IEJvb2xlYW4sXHJcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogQm9vbGVhbixcclxuICAgICAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiBCb29sZWFuLFxyXG4gICAgICAgIGNvbmZpcm1CdXR0b25PcGVuVHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHpJbmRleDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAyMDAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb25maXJtQnV0dG9uVGV4dDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAn56Gu6K6kJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAn5Y+W5raIJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29uZmlybUJ1dHRvbkNvbG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6IGNvbG9yXzEuQkxVRVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uQ29sb3I6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogY29sb3JfMS5HUkFZXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb3ZlcmxheToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnc2NhbGUnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBsb2FkaW5nOiB7XHJcbiAgICAgICAgICAgIGNvbmZpcm06IGZhbHNlLFxyXG4gICAgICAgICAgICBjYW5jZWw6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgc2hvdzogZnVuY3Rpb24gKHNob3cpIHtcclxuICAgICAgICAgICAgIXNob3cgJiYgdGhpcy5zdG9wTG9hZGluZygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25Db25maXJtOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWN0aW9uKCdjb25maXJtJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNhbmNlbDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFjdGlvbignY2FuY2VsJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrT3ZlcmxheTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UoJ292ZXJsYXknKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZUFjdGlvbjogZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuYXN5bmNDbG9zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKChfYSA9IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIF9hW1wibG9hZGluZy5cIiArIGFjdGlvbl0gPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIF9hKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vbkNsb3NlKGFjdGlvbik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdG9wTG9hZGluZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgbG9hZGluZzoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm06IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsb3NlOiBmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmFzeW5jQ2xvc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIC8vIOaKiiBkaWFsb2cg5a6e5L6L5Lyg6YCS5Ye65Y6777yM5Y+v5Lul6YCa6L+HIHN0b3BMb2FkaW5nKCkg5Zyo5aSW6YOo5YWz6Zet5oyJ6ZKu55qEIGxvYWRpbmdcclxuICAgICAgICAgICAgdGhpcy4kZW1pdChhY3Rpb24sIHsgZGlhbG9nOiB0aGlzIH0pO1xyXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmRhdGFbYWN0aW9uID09PSAnY29uZmlybScgPyAnb25Db25maXJtJyA6ICdvbkNhbmNlbCddO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19