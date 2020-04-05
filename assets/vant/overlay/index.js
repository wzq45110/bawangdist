"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    props: {
        show: Boolean,
        customStyle: String,
        duration: {
            type: null,
            value: 300
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    methods: {
        onClick: function onClick() {
            this.$emit('click');
        },
        // for prevent touchmove
        noop: function noop() {}
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsImR1cmF0aW9uIiwidHlwZSIsInpJbmRleCIsIk51bWJlciIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiJGVtaXQiLCJub29wIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPO0FBQ0hDLGNBQU1DLE9BREg7QUFFSEMscUJBQWFDLE1BRlY7QUFHSEMsa0JBQVU7QUFDTkMsa0JBQU0sSUFEQTtBQUVOVixtQkFBTztBQUZELFNBSFA7QUFPSFcsZ0JBQVE7QUFDSkQsa0JBQU1FLE1BREY7QUFFSlosbUJBQU87QUFGSDtBQVBMLEtBRGU7QUFhdEJhLGFBQVM7QUFDTEMsaUJBQVMsbUJBQVk7QUFDakIsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FISTtBQUlMO0FBQ0FDLGNBQU0sZ0JBQVksQ0FBRztBQUxoQjtBQWJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBzaG93OiBCb29sZWFuLFxyXG4gICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICAgICAgZHVyYXRpb246IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgdmFsdWU6IDMwMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgekluZGV4OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDFcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIGZvciBwcmV2ZW50IHRvdWNobW92ZVxyXG4gICAgICAgIG5vb3A6IGZ1bmN0aW9uICgpIHsgfVxyXG4gICAgfVxyXG59KTtcclxuIl19