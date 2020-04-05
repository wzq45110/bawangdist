"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'sidebar-item',
        type: 'descendant',
        linked: function linked(target) {
            this.items.push(target);
            this.setActive(this.data.active);
        },
        unlinked: function unlinked(target) {
            this.items = this.items.filter(function (item) {
                return item !== target;
            });
            this.setActive(this.data.active);
        }
    },
    props: {
        active: {
            type: Number,
            value: 0,
            observer: 'setActive'
        }
    },
    beforeCreate: function beforeCreate() {
        this.items = [];
        this.currentActive = -1;
    },
    methods: {
        setActive: function setActive(active) {
            var _a = this,
                items = _a.items,
                currentActive = _a.currentActive;
            if (!items.length) {
                return Promise.resolve();
            }
            this.currentActive = active;
            var stack = [];
            if (currentActive !== active && items[currentActive]) {
                stack.push(items[currentActive].setActive(false));
            }
            if (items[active]) {
                stack.push(items[active].setActive(true));
            }
            return Promise.all(stack);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJpdGVtcyIsInB1c2giLCJzZXRBY3RpdmUiLCJkYXRhIiwiYWN0aXZlIiwidW5saW5rZWQiLCJmaWx0ZXIiLCJpdGVtIiwicHJvcHMiLCJOdW1iZXIiLCJvYnNlcnZlciIsImJlZm9yZUNyZWF0ZSIsImN1cnJlbnRBY3RpdmUiLCJtZXRob2RzIiwiX2EiLCJsZW5ndGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsInN0YWNrIiwiYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxjQUFVO0FBQ05DLGNBQU0sY0FEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsZ0JBQVEsZ0JBQVVDLE1BQVYsRUFBa0I7QUFDdEIsaUJBQUtDLEtBQUwsQ0FBV0MsSUFBWCxDQUFnQkYsTUFBaEI7QUFDQSxpQkFBS0csU0FBTCxDQUFlLEtBQUtDLElBQUwsQ0FBVUMsTUFBekI7QUFDSCxTQU5LO0FBT05DLGtCQUFVLGtCQUFVTixNQUFWLEVBQWtCO0FBQ3hCLGlCQUFLQyxLQUFMLEdBQWEsS0FBS0EsS0FBTCxDQUFXTSxNQUFYLENBQWtCLFVBQVVDLElBQVYsRUFBZ0I7QUFBRSx1QkFBT0EsU0FBU1IsTUFBaEI7QUFBeUIsYUFBN0QsQ0FBYjtBQUNBLGlCQUFLRyxTQUFMLENBQWUsS0FBS0MsSUFBTCxDQUFVQyxNQUF6QjtBQUNIO0FBVkssS0FEWTtBQWF0QkksV0FBTztBQUNISixnQkFBUTtBQUNKUCxrQkFBTVksTUFERjtBQUVKbEIsbUJBQU8sQ0FGSDtBQUdKbUIsc0JBQVU7QUFITjtBQURMLEtBYmU7QUFvQnRCQyxrQkFBYyx3QkFBWTtBQUN0QixhQUFLWCxLQUFMLEdBQWEsRUFBYjtBQUNBLGFBQUtZLGFBQUwsR0FBcUIsQ0FBQyxDQUF0QjtBQUNILEtBdkJxQjtBQXdCdEJDLGFBQVM7QUFDTFgsbUJBQVcsbUJBQVVFLE1BQVYsRUFBa0I7QUFDekIsZ0JBQUlVLEtBQUssSUFBVDtBQUFBLGdCQUFlZCxRQUFRYyxHQUFHZCxLQUExQjtBQUFBLGdCQUFpQ1ksZ0JBQWdCRSxHQUFHRixhQUFwRDtBQUNBLGdCQUFJLENBQUNaLE1BQU1lLE1BQVgsRUFBbUI7QUFDZix1QkFBT0MsUUFBUUMsT0FBUixFQUFQO0FBQ0g7QUFDRCxpQkFBS0wsYUFBTCxHQUFxQlIsTUFBckI7QUFDQSxnQkFBSWMsUUFBUSxFQUFaO0FBQ0EsZ0JBQUlOLGtCQUFrQlIsTUFBbEIsSUFBNEJKLE1BQU1ZLGFBQU4sQ0FBaEMsRUFBc0Q7QUFDbERNLHNCQUFNakIsSUFBTixDQUFXRCxNQUFNWSxhQUFOLEVBQXFCVixTQUFyQixDQUErQixLQUEvQixDQUFYO0FBQ0g7QUFDRCxnQkFBSUYsTUFBTUksTUFBTixDQUFKLEVBQW1CO0FBQ2ZjLHNCQUFNakIsSUFBTixDQUFXRCxNQUFNSSxNQUFOLEVBQWNGLFNBQWQsQ0FBd0IsSUFBeEIsQ0FBWDtBQUNIO0FBQ0QsbUJBQU9jLFFBQVFHLEdBQVIsQ0FBWUQsS0FBWixDQUFQO0FBQ0g7QUFmSTtBQXhCYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIHJlbGF0aW9uOiB7XHJcbiAgICAgICAgbmFtZTogJ3NpZGViYXItaXRlbScsXHJcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxyXG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2godGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUodGhpcy5kYXRhLmFjdGl2ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1bmxpbmtlZDogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0gIT09IHRhcmdldDsgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuZGF0YS5hY3RpdmUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIGFjdGl2ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldEFjdGl2ZSdcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZSA9IC0xO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uIChhY3RpdmUpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgaXRlbXMgPSBfYS5pdGVtcywgY3VycmVudEFjdGl2ZSA9IF9hLmN1cnJlbnRBY3RpdmU7XHJcbiAgICAgICAgICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QWN0aXZlID0gYWN0aXZlO1xyXG4gICAgICAgICAgICB2YXIgc3RhY2sgPSBbXTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmUgIT09IGFjdGl2ZSAmJiBpdGVtc1tjdXJyZW50QWN0aXZlXSkge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChpdGVtc1tjdXJyZW50QWN0aXZlXS5zZXRBY3RpdmUoZmFsc2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXRlbXNbYWN0aXZlXSkge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaChpdGVtc1thY3RpdmVdLnNldEFjdGl2ZSh0cnVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=