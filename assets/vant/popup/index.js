"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var transition_1 = require('./../mixins/transition.js');
component_1.VantComponent({
    classes: ['enter-class', 'enter-active-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class'],
    mixins: [transition_1.transition(false)],
    props: {
        round: Boolean,
        closeable: Boolean,
        customStyle: String,
        overlayStyle: String,
        transition: {
            type: String,
            observer: 'observeClass'
        },
        zIndex: {
            type: Number,
            value: 100
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeIcon: {
            type: String,
            value: 'cross'
        },
        closeIconPosition: {
            type: String,
            value: 'top-right'
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        position: {
            type: String,
            value: 'center',
            observer: 'observeClass'
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: false
        }
    },
    created: function created() {
        this.observeClass();
    },
    methods: {
        onClickCloseIcon: function onClickCloseIcon() {
            this.$emit('close');
        },
        onClickOverlay: function onClickOverlay() {
            this.$emit('click-overlay');
            if (this.data.closeOnClickOverlay) {
                this.$emit('close');
            }
        },
        observeClass: function observeClass() {
            var _a = this.data,
                transition = _a.transition,
                position = _a.position;
            var updateData = {
                name: transition || position
            };
            if (transition === 'none') {
                updateData.duration = 0;
            }
            this.setData(updateData);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidHJhbnNpdGlvbl8xIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJtaXhpbnMiLCJ0cmFuc2l0aW9uIiwicHJvcHMiLCJyb3VuZCIsIkJvb2xlYW4iLCJjbG9zZWFibGUiLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsIm92ZXJsYXlTdHlsZSIsInR5cGUiLCJvYnNlcnZlciIsInpJbmRleCIsIk51bWJlciIsIm92ZXJsYXkiLCJjbG9zZUljb24iLCJjbG9zZUljb25Qb3NpdGlvbiIsImNsb3NlT25DbGlja092ZXJsYXkiLCJwb3NpdGlvbiIsInNhZmVBcmVhSW5zZXRCb3R0b20iLCJzYWZlQXJlYUluc2V0VG9wIiwiY3JlYXRlZCIsIm9ic2VydmVDbGFzcyIsIm1ldGhvZHMiLCJvbkNsaWNrQ2xvc2VJY29uIiwiJGVtaXQiLCJvbkNsaWNrT3ZlcmxheSIsImRhdGEiLCJfYSIsInVwZGF0ZURhdGEiLCJuYW1lIiwiZHVyYXRpb24iLCJzZXREYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElBQUlDLGVBQWVELFFBQVEsc0JBQVIsQ0FBbkI7QUFDQUQsWUFBWUcsYUFBWixDQUEwQjtBQUN0QkMsYUFBUyxDQUNMLGFBREssRUFFTCxvQkFGSyxFQUdMLGdCQUhLLEVBSUwsYUFKSyxFQUtMLG9CQUxLLEVBTUwsZ0JBTkssQ0FEYTtBQVN0QkMsWUFBUSxDQUFDSCxhQUFhSSxVQUFiLENBQXdCLEtBQXhCLENBQUQsQ0FUYztBQVV0QkMsV0FBTztBQUNIQyxlQUFPQyxPQURKO0FBRUhDLG1CQUFXRCxPQUZSO0FBR0hFLHFCQUFhQyxNQUhWO0FBSUhDLHNCQUFjRCxNQUpYO0FBS0hOLG9CQUFZO0FBQ1JRLGtCQUFNRixNQURFO0FBRVJHLHNCQUFVO0FBRkYsU0FMVDtBQVNIQyxnQkFBUTtBQUNKRixrQkFBTUcsTUFERjtBQUVKbEIsbUJBQU87QUFGSCxTQVRMO0FBYUhtQixpQkFBUztBQUNMSixrQkFBTUwsT0FERDtBQUVMVixtQkFBTztBQUZGLFNBYk47QUFpQkhvQixtQkFBVztBQUNQTCxrQkFBTUYsTUFEQztBQUVQYixtQkFBTztBQUZBLFNBakJSO0FBcUJIcUIsMkJBQW1CO0FBQ2ZOLGtCQUFNRixNQURTO0FBRWZiLG1CQUFPO0FBRlEsU0FyQmhCO0FBeUJIc0IsNkJBQXFCO0FBQ2pCUCxrQkFBTUwsT0FEVztBQUVqQlYsbUJBQU87QUFGVSxTQXpCbEI7QUE2Qkh1QixrQkFBVTtBQUNOUixrQkFBTUYsTUFEQTtBQUVOYixtQkFBTyxRQUZEO0FBR05nQixzQkFBVTtBQUhKLFNBN0JQO0FBa0NIUSw2QkFBcUI7QUFDakJULGtCQUFNTCxPQURXO0FBRWpCVixtQkFBTztBQUZVLFNBbENsQjtBQXNDSHlCLDBCQUFrQjtBQUNkVixrQkFBTUwsT0FEUTtBQUVkVixtQkFBTztBQUZPO0FBdENmLEtBVmU7QUFxRHRCMEIsYUFBUyxtQkFBWTtBQUNqQixhQUFLQyxZQUFMO0FBQ0gsS0F2RHFCO0FBd0R0QkMsYUFBUztBQUNMQywwQkFBa0IsNEJBQVk7QUFDMUIsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FISTtBQUlMQyx3QkFBZ0IsMEJBQVk7QUFDeEIsaUJBQUtELEtBQUwsQ0FBVyxlQUFYO0FBQ0EsZ0JBQUksS0FBS0UsSUFBTCxDQUFVVixtQkFBZCxFQUFtQztBQUMvQixxQkFBS1EsS0FBTCxDQUFXLE9BQVg7QUFDSDtBQUNKLFNBVEk7QUFVTEgsc0JBQWMsd0JBQVk7QUFDdEIsZ0JBQUlNLEtBQUssS0FBS0QsSUFBZDtBQUFBLGdCQUFvQnpCLGFBQWEwQixHQUFHMUIsVUFBcEM7QUFBQSxnQkFBZ0RnQixXQUFXVSxHQUFHVixRQUE5RDtBQUNBLGdCQUFJVyxhQUFhO0FBQ2JDLHNCQUFNNUIsY0FBY2dCO0FBRFAsYUFBakI7QUFHQSxnQkFBSWhCLGVBQWUsTUFBbkIsRUFBMkI7QUFDdkIyQiwyQkFBV0UsUUFBWCxHQUFzQixDQUF0QjtBQUNIO0FBQ0QsaUJBQUtDLE9BQUwsQ0FBYUgsVUFBYjtBQUNIO0FBbkJJO0FBeERhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbnZhciB0cmFuc2l0aW9uXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL3RyYW5zaXRpb25cIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgY2xhc3NlczogW1xyXG4gICAgICAgICdlbnRlci1jbGFzcycsXHJcbiAgICAgICAgJ2VudGVyLWFjdGl2ZS1jbGFzcycsXHJcbiAgICAgICAgJ2VudGVyLXRvLWNsYXNzJyxcclxuICAgICAgICAnbGVhdmUtY2xhc3MnLFxyXG4gICAgICAgICdsZWF2ZS1hY3RpdmUtY2xhc3MnLFxyXG4gICAgICAgICdsZWF2ZS10by1jbGFzcydcclxuICAgIF0sXHJcbiAgICBtaXhpbnM6IFt0cmFuc2l0aW9uXzEudHJhbnNpdGlvbihmYWxzZSldLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICByb3VuZDogQm9vbGVhbixcclxuICAgICAgICBjbG9zZWFibGU6IEJvb2xlYW4sXHJcbiAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcclxuICAgICAgICBvdmVybGF5U3R5bGU6IFN0cmluZyxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdvYnNlcnZlQ2xhc3MnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB6SW5kZXg6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogMTAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvdmVybGF5OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbG9zZUljb246IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2Nyb3NzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xvc2VJY29uUG9zaXRpb246IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3RvcC1yaWdodCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsb3NlT25DbGlja092ZXJsYXk6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ29ic2VydmVDbGFzcydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNhZmVBcmVhSW5zZXRCb3R0b206IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNhZmVBcmVhSW5zZXRUb3A6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm9ic2VydmVDbGFzcygpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkNsaWNrQ2xvc2VJY29uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrT3ZlcmxheTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljay1vdmVybGF5Jyk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2xvc2VPbkNsaWNrT3ZlcmxheSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb2JzZXJ2ZUNsYXNzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgdHJhbnNpdGlvbiA9IF9hLnRyYW5zaXRpb24sIHBvc2l0aW9uID0gX2EucG9zaXRpb247XHJcbiAgICAgICAgICAgIHZhciB1cGRhdGVEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdHJhbnNpdGlvbiB8fCBwb3NpdGlvblxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAodHJhbnNpdGlvbiA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVEYXRhLmR1cmF0aW9uID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEodXBkYXRlRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19