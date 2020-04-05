"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    classes: ['bar-class', 'price-class', 'button-class'],
    props: {
        tip: {
            type: null,
            observer: 'updateTip'
        },
        tipIcon: String,
        type: Number,
        price: {
            type: null,
            observer: 'updatePrice'
        },
        label: String,
        loading: Boolean,
        disabled: Boolean,
        buttonText: String,
        currency: {
            type: String,
            value: '¥'
        },
        buttonType: {
            type: String,
            value: 'danger'
        },
        decimalLength: {
            type: Number,
            value: 2,
            observer: 'updatePrice'
        },
        suffixLabel: String,
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        updatePrice: function updatePrice() {
            var _a = this.data,
                price = _a.price,
                decimalLength = _a.decimalLength;
            this.setData({
                hasPrice: typeof price === 'number',
                priceStr: (price / 100).toFixed(decimalLength)
            });
        },
        updateTip: function updateTip() {
            this.setData({ hasTip: typeof this.data.tip === 'string' });
        },
        onSubmit: function onSubmit(event) {
            this.$emit('submit', event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJwcm9wcyIsInRpcCIsInR5cGUiLCJvYnNlcnZlciIsInRpcEljb24iLCJTdHJpbmciLCJOdW1iZXIiLCJwcmljZSIsImxhYmVsIiwibG9hZGluZyIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsImJ1dHRvblRleHQiLCJjdXJyZW5jeSIsImJ1dHRvblR5cGUiLCJkZWNpbWFsTGVuZ3RoIiwic3VmZml4TGFiZWwiLCJzYWZlQXJlYUluc2V0Qm90dG9tIiwibWV0aG9kcyIsInVwZGF0ZVByaWNlIiwiX2EiLCJkYXRhIiwic2V0RGF0YSIsImhhc1ByaWNlIiwicHJpY2VTdHIiLCJ0b0ZpeGVkIiwidXBkYXRlVGlwIiwiaGFzVGlwIiwib25TdWJtaXQiLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxhQUFTLENBQ0wsV0FESyxFQUVMLGFBRkssRUFHTCxjQUhLLENBRGE7QUFNdEJDLFdBQU87QUFDSEMsYUFBSztBQUNEQyxrQkFBTSxJQURMO0FBRURDLHNCQUFVO0FBRlQsU0FERjtBQUtIQyxpQkFBU0MsTUFMTjtBQU1ISCxjQUFNSSxNQU5IO0FBT0hDLGVBQU87QUFDSEwsa0JBQU0sSUFESDtBQUVIQyxzQkFBVTtBQUZQLFNBUEo7QUFXSEssZUFBT0gsTUFYSjtBQVlISSxpQkFBU0MsT0FaTjtBQWFIQyxrQkFBVUQsT0FiUDtBQWNIRSxvQkFBWVAsTUFkVDtBQWVIUSxrQkFBVTtBQUNOWCxrQkFBTUcsTUFEQTtBQUVOVixtQkFBTztBQUZELFNBZlA7QUFtQkhtQixvQkFBWTtBQUNSWixrQkFBTUcsTUFERTtBQUVSVixtQkFBTztBQUZDLFNBbkJUO0FBdUJIb0IsdUJBQWU7QUFDWGIsa0JBQU1JLE1BREs7QUFFWFgsbUJBQU8sQ0FGSTtBQUdYUSxzQkFBVTtBQUhDLFNBdkJaO0FBNEJIYSxxQkFBYVgsTUE1QlY7QUE2QkhZLDZCQUFxQjtBQUNqQmYsa0JBQU1RLE9BRFc7QUFFakJmLG1CQUFPO0FBRlU7QUE3QmxCLEtBTmU7QUF3Q3RCdUIsYUFBUztBQUNMQyxxQkFBYSx1QkFBWTtBQUNyQixnQkFBSUMsS0FBSyxLQUFLQyxJQUFkO0FBQUEsZ0JBQW9CZCxRQUFRYSxHQUFHYixLQUEvQjtBQUFBLGdCQUFzQ1EsZ0JBQWdCSyxHQUFHTCxhQUF6RDtBQUNBLGlCQUFLTyxPQUFMLENBQWE7QUFDVEMsMEJBQVUsT0FBT2hCLEtBQVAsS0FBaUIsUUFEbEI7QUFFVGlCLDBCQUFVLENBQUNqQixRQUFRLEdBQVQsRUFBY2tCLE9BQWQsQ0FBc0JWLGFBQXRCO0FBRkQsYUFBYjtBQUlILFNBUEk7QUFRTFcsbUJBQVcscUJBQVk7QUFDbkIsaUJBQUtKLE9BQUwsQ0FBYSxFQUFFSyxRQUFRLE9BQU8sS0FBS04sSUFBTCxDQUFVcEIsR0FBakIsS0FBeUIsUUFBbkMsRUFBYjtBQUNILFNBVkk7QUFXTDJCLGtCQUFVLGtCQUFVQyxLQUFWLEVBQWlCO0FBQ3ZCLGlCQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQkQsTUFBTUUsTUFBM0I7QUFDSDtBQWJJO0FBeENhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgY2xhc3NlczogW1xyXG4gICAgICAgICdiYXItY2xhc3MnLFxyXG4gICAgICAgICdwcmljZS1jbGFzcycsXHJcbiAgICAgICAgJ2J1dHRvbi1jbGFzcydcclxuICAgIF0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHRpcDoge1xyXG4gICAgICAgICAgICB0eXBlOiBudWxsLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZVRpcCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpcEljb246IFN0cmluZyxcclxuICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgcHJpY2U6IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVQcmljZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXHJcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcclxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcclxuICAgICAgICBidXR0b25UZXh0OiBTdHJpbmcsXHJcbiAgICAgICAgY3VycmVuY3k6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ8KlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnV0dG9uVHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnZGFuZ2VyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGVjaW1hbExlbmd0aDoge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAyLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZVByaWNlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VmZml4TGFiZWw6IFN0cmluZyxcclxuICAgICAgICBzYWZlQXJlYUluc2V0Qm90dG9tOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB1cGRhdGVQcmljZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIHByaWNlID0gX2EucHJpY2UsIGRlY2ltYWxMZW5ndGggPSBfYS5kZWNpbWFsTGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgaGFzUHJpY2U6IHR5cGVvZiBwcmljZSA9PT0gJ251bWJlcicsXHJcbiAgICAgICAgICAgICAgICBwcmljZVN0cjogKHByaWNlIC8gMTAwKS50b0ZpeGVkKGRlY2ltYWxMZW5ndGgpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlVGlwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGhhc1RpcDogdHlwZW9mIHRoaXMuZGF0YS50aXAgPT09ICdzdHJpbmcnIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TdWJtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzdWJtaXQnLCBldmVudC5kZXRhaWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==