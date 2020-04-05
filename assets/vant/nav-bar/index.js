"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    classes: ['title-class'],
    props: {
        title: String,
        fixed: Boolean,
        leftText: String,
        rightText: String,
        leftArrow: Boolean,
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onClickLeft: function onClickLeft() {
            this.$emit('click-left');
        },
        onClickRight: function onClickRight() {
            this.$emit('click-right');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwiZml4ZWQiLCJCb29sZWFuIiwibGVmdFRleHQiLCJyaWdodFRleHQiLCJsZWZ0QXJyb3ciLCJib3JkZXIiLCJ0eXBlIiwiekluZGV4IiwiTnVtYmVyIiwic2FmZUFyZWFJbnNldFRvcCIsIm1ldGhvZHMiLCJvbkNsaWNrTGVmdCIsIiRlbWl0Iiwib25DbGlja1JpZ2h0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxhQUFTLENBQUMsYUFBRCxDQURhO0FBRXRCQyxXQUFPO0FBQ0hDLGVBQU9DLE1BREo7QUFFSEMsZUFBT0MsT0FGSjtBQUdIQyxrQkFBVUgsTUFIUDtBQUlISSxtQkFBV0osTUFKUjtBQUtISyxtQkFBV0gsT0FMUjtBQU1ISSxnQkFBUTtBQUNKQyxrQkFBTUwsT0FERjtBQUVKVCxtQkFBTztBQUZILFNBTkw7QUFVSGUsZ0JBQVE7QUFDSkQsa0JBQU1FLE1BREY7QUFFSmhCLG1CQUFPO0FBRkgsU0FWTDtBQWNIaUIsMEJBQWtCO0FBQ2RILGtCQUFNTCxPQURRO0FBRWRULG1CQUFPO0FBRk87QUFkZixLQUZlO0FBcUJ0QmtCLGFBQVM7QUFDTEMscUJBQWEsdUJBQVk7QUFDckIsaUJBQUtDLEtBQUwsQ0FBVyxZQUFYO0FBQ0gsU0FISTtBQUlMQyxzQkFBYyx3QkFBWTtBQUN0QixpQkFBS0QsS0FBTCxDQUFXLGFBQVg7QUFDSDtBQU5JO0FBckJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgY2xhc3NlczogWyd0aXRsZS1jbGFzcyddLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICB0aXRsZTogU3RyaW5nLFxyXG4gICAgICAgIGZpeGVkOiBCb29sZWFuLFxyXG4gICAgICAgIGxlZnRUZXh0OiBTdHJpbmcsXHJcbiAgICAgICAgcmlnaHRUZXh0OiBTdHJpbmcsXHJcbiAgICAgICAgbGVmdEFycm93OiBCb29sZWFuLFxyXG4gICAgICAgIGJvcmRlcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgekluZGV4OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNhZmVBcmVhSW5zZXRUb3A6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkNsaWNrTGVmdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljay1sZWZ0Jyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrUmlnaHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2stcmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=