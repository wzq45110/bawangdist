"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var button_1 = require('./../mixins/button.js');
var open_type_1 = require('./../mixins/open-type.js');
component_1.VantComponent({
    mixins: [button_1.button, open_type_1.openType],
    classes: ['hover-class', 'loading-class'],
    data: {
        style: ''
    },
    props: {
        icon: String,
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
        customStyle: String,
        loadingType: {
            type: String,
            value: 'circular'
        },
        type: {
            type: String,
            value: 'default'
        },
        size: {
            type: String,
            value: 'normal'
        },
        loadingSize: {
            type: String,
            value: '20px'
        },
        color: {
            type: String,
            observer: function observer(color) {
                var style = '';
                if (color) {
                    style += "color: " + (this.data.plain ? color : 'white') + ";";
                    if (!this.data.plain) {
                        // Use background instead of backgroundColor to make linear-gradient work
                        style += "background: " + color + ";";
                    }
                    // hide border when color is linear-gradient
                    if (color.indexOf('gradient') !== -1) {
                        style += 'border: 0;';
                    } else {
                        style += "border-color: " + color + ";";
                    }
                }
                if (style !== this.data.style) {
                    this.setData({ style: style });
                }
            }
        }
    },
    methods: {
        onClick: function onClick() {
            if (!this.data.disabled && !this.data.loading) {
                this.$emit('click');
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiYnV0dG9uXzEiLCJvcGVuX3R5cGVfMSIsIlZhbnRDb21wb25lbnQiLCJtaXhpbnMiLCJidXR0b24iLCJvcGVuVHlwZSIsImNsYXNzZXMiLCJkYXRhIiwic3R5bGUiLCJwcm9wcyIsImljb24iLCJTdHJpbmciLCJwbGFpbiIsIkJvb2xlYW4iLCJibG9jayIsInJvdW5kIiwic3F1YXJlIiwibG9hZGluZyIsImhhaXJsaW5lIiwiZGlzYWJsZWQiLCJsb2FkaW5nVGV4dCIsImN1c3RvbVN0eWxlIiwibG9hZGluZ1R5cGUiLCJ0eXBlIiwic2l6ZSIsImxvYWRpbmdTaXplIiwiY29sb3IiLCJvYnNlcnZlciIsImluZGV4T2YiLCJzZXREYXRhIiwibWV0aG9kcyIsIm9uQ2xpY2siLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxXQUFXRCxRQUFRLGtCQUFSLENBQWY7QUFDQSxJQUFJRSxjQUFjRixRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlJLGFBQVosQ0FBMEI7QUFDdEJDLFlBQVEsQ0FBQ0gsU0FBU0ksTUFBVixFQUFrQkgsWUFBWUksUUFBOUIsQ0FEYztBQUV0QkMsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsZUFBaEIsQ0FGYTtBQUd0QkMsVUFBTTtBQUNGQyxlQUFPO0FBREwsS0FIZ0I7QUFNdEJDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxlQUFPQyxPQUZKO0FBR0hDLGVBQU9ELE9BSEo7QUFJSEUsZUFBT0YsT0FKSjtBQUtIRyxnQkFBUUgsT0FMTDtBQU1ISSxpQkFBU0osT0FOTjtBQU9ISyxrQkFBVUwsT0FQUDtBQVFITSxrQkFBVU4sT0FSUDtBQVNITyxxQkFBYVQsTUFUVjtBQVVIVSxxQkFBYVYsTUFWVjtBQVdIVyxxQkFBYTtBQUNUQyxrQkFBTVosTUFERztBQUVUZCxtQkFBTztBQUZFLFNBWFY7QUFlSDBCLGNBQU07QUFDRkEsa0JBQU1aLE1BREo7QUFFRmQsbUJBQU87QUFGTCxTQWZIO0FBbUJIMkIsY0FBTTtBQUNGRCxrQkFBTVosTUFESjtBQUVGZCxtQkFBTztBQUZMLFNBbkJIO0FBdUJINEIscUJBQWE7QUFDVEYsa0JBQU1aLE1BREc7QUFFVGQsbUJBQU87QUFGRSxTQXZCVjtBQTJCSDZCLGVBQU87QUFDSEgsa0JBQU1aLE1BREg7QUFFSGdCLHNCQUFVLGtCQUFVRCxLQUFWLEVBQWlCO0FBQ3ZCLG9CQUFJbEIsUUFBUSxFQUFaO0FBQ0Esb0JBQUlrQixLQUFKLEVBQVc7QUFDUGxCLDZCQUFTLGFBQWEsS0FBS0QsSUFBTCxDQUFVSyxLQUFWLEdBQWtCYyxLQUFsQixHQUEwQixPQUF2QyxJQUFrRCxHQUEzRDtBQUNBLHdCQUFJLENBQUMsS0FBS25CLElBQUwsQ0FBVUssS0FBZixFQUFzQjtBQUNsQjtBQUNBSixpQ0FBUyxpQkFBaUJrQixLQUFqQixHQUF5QixHQUFsQztBQUNIO0FBQ0Q7QUFDQSx3QkFBSUEsTUFBTUUsT0FBTixDQUFjLFVBQWQsTUFBOEIsQ0FBQyxDQUFuQyxFQUFzQztBQUNsQ3BCLGlDQUFTLFlBQVQ7QUFDSCxxQkFGRCxNQUdLO0FBQ0RBLGlDQUFTLG1CQUFtQmtCLEtBQW5CLEdBQTJCLEdBQXBDO0FBQ0g7QUFDSjtBQUNELG9CQUFJbEIsVUFBVSxLQUFLRCxJQUFMLENBQVVDLEtBQXhCLEVBQStCO0FBQzNCLHlCQUFLcUIsT0FBTCxDQUFhLEVBQUVyQixPQUFPQSxLQUFULEVBQWI7QUFDSDtBQUNKO0FBckJFO0FBM0JKLEtBTmU7QUF5RHRCc0IsYUFBUztBQUNMQyxpQkFBUyxtQkFBWTtBQUNqQixnQkFBSSxDQUFDLEtBQUt4QixJQUFMLENBQVVZLFFBQVgsSUFBdUIsQ0FBQyxLQUFLWixJQUFMLENBQVVVLE9BQXRDLEVBQStDO0FBQzNDLHFCQUFLZSxLQUFMLENBQVcsT0FBWDtBQUNIO0FBQ0o7QUFMSTtBQXpEYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG52YXIgYnV0dG9uXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL2J1dHRvblwiKTtcclxudmFyIG9wZW5fdHlwZV8xID0gcmVxdWlyZShcIi4uL21peGlucy9vcGVuLXR5cGVcIik7XHJcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xyXG4gICAgbWl4aW5zOiBbYnV0dG9uXzEuYnV0dG9uLCBvcGVuX3R5cGVfMS5vcGVuVHlwZV0sXHJcbiAgICBjbGFzc2VzOiBbJ2hvdmVyLWNsYXNzJywgJ2xvYWRpbmctY2xhc3MnXSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBzdHlsZTogJydcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGljb246IFN0cmluZyxcclxuICAgICAgICBwbGFpbjogQm9vbGVhbixcclxuICAgICAgICBibG9jazogQm9vbGVhbixcclxuICAgICAgICByb3VuZDogQm9vbGVhbixcclxuICAgICAgICBzcXVhcmU6IEJvb2xlYW4sXHJcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcclxuICAgICAgICBoYWlybGluZTogQm9vbGVhbixcclxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcclxuICAgICAgICBsb2FkaW5nVGV4dDogU3RyaW5nLFxyXG4gICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICAgICAgbG9hZGluZ1R5cGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ2NpcmN1bGFyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdHlwZToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAnZGVmYXVsdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpemU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ25vcm1hbCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvYWRpbmdTaXplOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6ICcyMHB4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sb3I6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKGNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChjb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICs9IFwiY29sb3I6IFwiICsgKHRoaXMuZGF0YS5wbGFpbiA/IGNvbG9yIDogJ3doaXRlJykgKyBcIjtcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5wbGFpbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgYmFja2dyb3VuZCBpbnN0ZWFkIG9mIGJhY2tncm91bmRDb2xvciB0byBtYWtlIGxpbmVhci1ncmFkaWVudCB3b3JrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICs9IFwiYmFja2dyb3VuZDogXCIgKyBjb2xvciArIFwiO1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBoaWRlIGJvcmRlciB3aGVuIGNvbG9yIGlzIGxpbmVhci1ncmFkaWVudFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvci5pbmRleE9mKCdncmFkaWVudCcpICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSArPSAnYm9yZGVyOiAwOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSArPSBcImJvcmRlci1jb2xvcjogXCIgKyBjb2xvciArIFwiO1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzdHlsZSAhPT0gdGhpcy5kYXRhLnN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgc3R5bGU6IHN0eWxlIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmRpc2FibGVkICYmICF0aGlzLmRhdGEubG9hZGluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==