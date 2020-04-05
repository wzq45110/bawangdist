"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'tabs',
        type: 'ancestor'
    },
    props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean,
        titleStyle: String,
        name: {
            type: [Number, String],
            value: '',
            observer: 'setComputedName'
        }
    },
    data: {
        width: null,
        inited: false,
        active: false,
        animated: false
    },
    watch: {
        title: 'update',
        disabled: 'update',
        dot: 'update',
        info: 'update',
        titleStyle: 'update'
    },
    methods: {
        setComputedName: function setComputedName() {
            this.computedName = this.data.name || this.index;
        },
        update: function update() {
            var parent = this.getRelationNodes('../tabs/index')[0];
            if (parent) {
                parent.updateTabs();
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsImRvdCIsIkJvb2xlYW4iLCJpbmZvIiwidGl0bGUiLCJTdHJpbmciLCJkaXNhYmxlZCIsInRpdGxlU3R5bGUiLCJOdW1iZXIiLCJvYnNlcnZlciIsImRhdGEiLCJ3aWR0aCIsImluaXRlZCIsImFjdGl2ZSIsImFuaW1hdGVkIiwid2F0Y2giLCJtZXRob2RzIiwic2V0Q29tcHV0ZWROYW1lIiwiY29tcHV0ZWROYW1lIiwiaW5kZXgiLCJ1cGRhdGUiLCJwYXJlbnQiLCJnZXRSZWxhdGlvbk5vZGVzIiwidXBkYXRlVGFicyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsY0FBVTtBQUNOQyxjQUFNLE1BREE7QUFFTkMsY0FBTTtBQUZBLEtBRFk7QUFLdEJDLFdBQU87QUFDSEMsYUFBS0MsT0FERjtBQUVIQyxjQUFNLElBRkg7QUFHSEMsZUFBT0MsTUFISjtBQUlIQyxrQkFBVUosT0FKUDtBQUtISyxvQkFBWUYsTUFMVDtBQU1IUCxjQUFNO0FBQ0ZDLGtCQUFNLENBQUNTLE1BQUQsRUFBU0gsTUFBVCxDQURKO0FBRUZaLG1CQUFPLEVBRkw7QUFHRmdCLHNCQUFVO0FBSFI7QUFOSCxLQUxlO0FBaUJ0QkMsVUFBTTtBQUNGQyxlQUFPLElBREw7QUFFRkMsZ0JBQVEsS0FGTjtBQUdGQyxnQkFBUSxLQUhOO0FBSUZDLGtCQUFVO0FBSlIsS0FqQmdCO0FBdUJ0QkMsV0FBTztBQUNIWCxlQUFPLFFBREo7QUFFSEUsa0JBQVUsUUFGUDtBQUdITCxhQUFLLFFBSEY7QUFJSEUsY0FBTSxRQUpIO0FBS0hJLG9CQUFZO0FBTFQsS0F2QmU7QUE4QnRCUyxhQUFTO0FBQ0xDLHlCQUFpQiwyQkFBWTtBQUN6QixpQkFBS0MsWUFBTCxHQUFvQixLQUFLUixJQUFMLENBQVVaLElBQVYsSUFBa0IsS0FBS3FCLEtBQTNDO0FBQ0gsU0FISTtBQUlMQyxnQkFBUSxrQkFBWTtBQUNoQixnQkFBSUMsU0FBUyxLQUFLQyxnQkFBTCxDQUFzQixlQUF0QixFQUF1QyxDQUF2QyxDQUFiO0FBQ0EsZ0JBQUlELE1BQUosRUFBWTtBQUNSQSx1QkFBT0UsVUFBUDtBQUNIO0FBQ0o7QUFUSTtBQTlCYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIHJlbGF0aW9uOiB7XHJcbiAgICAgICAgbmFtZTogJ3RhYnMnLFxyXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcidcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGRvdDogQm9vbGVhbixcclxuICAgICAgICBpbmZvOiBudWxsLFxyXG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXHJcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICAgICAgdGl0bGVTdHlsZTogU3RyaW5nLFxyXG4gICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgdHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldENvbXB1dGVkTmFtZSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YToge1xyXG4gICAgICAgIHdpZHRoOiBudWxsLFxyXG4gICAgICAgIGluaXRlZDogZmFsc2UsXHJcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBhbmltYXRlZDogZmFsc2VcclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIHRpdGxlOiAndXBkYXRlJyxcclxuICAgICAgICBkaXNhYmxlZDogJ3VwZGF0ZScsXHJcbiAgICAgICAgZG90OiAndXBkYXRlJyxcclxuICAgICAgICBpbmZvOiAndXBkYXRlJyxcclxuICAgICAgICB0aXRsZVN0eWxlOiAndXBkYXRlJ1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzZXRDb21wdXRlZE5hbWU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wdXRlZE5hbWUgPSB0aGlzLmRhdGEubmFtZSB8fCB0aGlzLmluZGV4O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3RhYnMvaW5kZXgnKVswXTtcclxuICAgICAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnVwZGF0ZVRhYnMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==