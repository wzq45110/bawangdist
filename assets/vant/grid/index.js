"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'grid-item',
        type: 'descendant',
        linked: function linked(child) {
            this.children.push(child);
        },
        unlinked: function unlinked(child) {
            this.children = this.children.filter(function (item) {
                return item !== child;
            });
        }
    },
    props: {
        square: {
            type: Boolean,
            observer: 'updateChildren'
        },
        gutter: {
            type: [Number, String],
            value: 0,
            observer: 'updateChildren'
        },
        clickable: {
            type: Boolean,
            observer: 'updateChildren'
        },
        columnNum: {
            type: Number,
            value: 4,
            observer: 'updateChildren'
        },
        center: {
            type: Boolean,
            value: true,
            observer: 'updateChildren'
        },
        border: {
            type: Boolean,
            value: true,
            observer: 'updateChildren'
        }
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },
    created: function created() {
        var gutter = this.data.gutter;
        if (gutter) {
            this.setData({
                style: "padding-left: " + gutter + "px"
            });
        }
    },
    methods: {
        updateChildren: function updateChildren() {
            this.children.forEach(function (child) {
                child.updateStyle();
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJjaGlsZCIsImNoaWxkcmVuIiwicHVzaCIsInVubGlua2VkIiwiZmlsdGVyIiwiaXRlbSIsInByb3BzIiwic3F1YXJlIiwiQm9vbGVhbiIsIm9ic2VydmVyIiwiZ3V0dGVyIiwiTnVtYmVyIiwiU3RyaW5nIiwiY2xpY2thYmxlIiwiY29sdW1uTnVtIiwiY2VudGVyIiwiYm9yZGVyIiwiYmVmb3JlQ3JlYXRlIiwiY3JlYXRlZCIsImRhdGEiLCJzZXREYXRhIiwic3R5bGUiLCJtZXRob2RzIiwidXBkYXRlQ2hpbGRyZW4iLCJmb3JFYWNoIiwidXBkYXRlU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLGNBQVU7QUFDTkMsY0FBTSxXQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxnQkFBUSxnQkFBVUMsS0FBVixFQUFpQjtBQUNyQixpQkFBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CRixLQUFuQjtBQUNILFNBTEs7QUFNTkcsa0JBQVUsa0JBQVVILEtBQVYsRUFBaUI7QUFDdkIsaUJBQUtDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjRyxNQUFkLENBQXFCLFVBQVVDLElBQVYsRUFBZ0I7QUFBRSx1QkFBT0EsU0FBU0wsS0FBaEI7QUFBd0IsYUFBL0QsQ0FBaEI7QUFDSDtBQVJLLEtBRFk7QUFXdEJNLFdBQU87QUFDSEMsZ0JBQVE7QUFDSlQsa0JBQU1VLE9BREY7QUFFSkMsc0JBQVU7QUFGTixTQURMO0FBS0hDLGdCQUFRO0FBQ0paLGtCQUFNLENBQUNhLE1BQUQsRUFBU0MsTUFBVCxDQURGO0FBRUpwQixtQkFBTyxDQUZIO0FBR0ppQixzQkFBVTtBQUhOLFNBTEw7QUFVSEksbUJBQVc7QUFDUGYsa0JBQU1VLE9BREM7QUFFUEMsc0JBQVU7QUFGSCxTQVZSO0FBY0hLLG1CQUFXO0FBQ1BoQixrQkFBTWEsTUFEQztBQUVQbkIsbUJBQU8sQ0FGQTtBQUdQaUIsc0JBQVU7QUFISCxTQWRSO0FBbUJITSxnQkFBUTtBQUNKakIsa0JBQU1VLE9BREY7QUFFSmhCLG1CQUFPLElBRkg7QUFHSmlCLHNCQUFVO0FBSE4sU0FuQkw7QUF3QkhPLGdCQUFRO0FBQ0psQixrQkFBTVUsT0FERjtBQUVKaEIsbUJBQU8sSUFGSDtBQUdKaUIsc0JBQVU7QUFITjtBQXhCTCxLQVhlO0FBeUN0QlEsa0JBQWMsd0JBQVk7QUFDdEIsYUFBS2hCLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSCxLQTNDcUI7QUE0Q3RCaUIsYUFBUyxtQkFBWTtBQUNqQixZQUFJUixTQUFTLEtBQUtTLElBQUwsQ0FBVVQsTUFBdkI7QUFDQSxZQUFJQSxNQUFKLEVBQVk7QUFDUixpQkFBS1UsT0FBTCxDQUFhO0FBQ1RDLHVCQUFPLG1CQUFtQlgsTUFBbkIsR0FBNEI7QUFEMUIsYUFBYjtBQUdIO0FBQ0osS0FuRHFCO0FBb0R0QlksYUFBUztBQUNMQyx3QkFBZ0IsMEJBQVk7QUFDeEIsaUJBQUt0QixRQUFMLENBQWN1QixPQUFkLENBQXNCLFVBQVV4QixLQUFWLEVBQWlCO0FBQ25DQSxzQkFBTXlCLFdBQU47QUFDSCxhQUZEO0FBR0g7QUFMSTtBQXBEYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIHJlbGF0aW9uOiB7XHJcbiAgICAgICAgbmFtZTogJ2dyaWQtaXRlbScsXHJcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxyXG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1bmxpbmtlZDogZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbSAhPT0gY2hpbGQ7IH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHNxdWFyZToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3V0dGVyOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXHJcbiAgICAgICAgICAgIHZhbHVlOiAwLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xpY2thYmxlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2x1bW5OdW06IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogNCxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNlbnRlcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvcmRlcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZ3V0dGVyID0gdGhpcy5kYXRhLmd1dHRlcjtcclxuICAgICAgICBpZiAoZ3V0dGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICBzdHlsZTogXCJwYWRkaW5nLWxlZnQ6IFwiICsgZ3V0dGVyICsgXCJweFwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdXBkYXRlQ2hpbGRyZW46IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlU3R5bGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19