"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'tabbar-item',
        type: 'descendant',
        linked: function linked(target) {
            this.children.push(target);
            target.parent = this;
            target.updateFromParent();
        },
        unlinked: function unlinked(target) {
            this.children = this.children.filter(function (item) {
                return item !== target;
            });
            this.updateChildren();
        }
    },
    props: {
        active: {
            type: null,
            observer: 'updateChildren'
        },
        activeColor: {
            type: String,
            observer: 'updateChildren'
        },
        inactiveColor: {
            type: String,
            observer: 'updateChildren'
        },
        fixed: {
            type: Boolean,
            value: true
        },
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },
    methods: {
        updateChildren: function updateChildren() {
            var children = this.children;
            if (!Array.isArray(children) || !children.length) {
                return Promise.resolve();
            }
            return Promise.all(children.map(function (child) {
                return child.updateFromParent();
            }));
        },
        onChange: function onChange(child) {
            var index = this.children.indexOf(child);
            var active = child.data.name || index;
            if (active !== this.data.active) {
                this.$emit('change', active);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJjaGlsZHJlbiIsInB1c2giLCJwYXJlbnQiLCJ1cGRhdGVGcm9tUGFyZW50IiwidW5saW5rZWQiLCJmaWx0ZXIiLCJpdGVtIiwidXBkYXRlQ2hpbGRyZW4iLCJwcm9wcyIsImFjdGl2ZSIsIm9ic2VydmVyIiwiYWN0aXZlQ29sb3IiLCJTdHJpbmciLCJpbmFjdGl2ZUNvbG9yIiwiZml4ZWQiLCJCb29sZWFuIiwiYm9yZGVyIiwiekluZGV4IiwiTnVtYmVyIiwic2FmZUFyZWFJbnNldEJvdHRvbSIsImJlZm9yZUNyZWF0ZSIsIm1ldGhvZHMiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFsbCIsIm1hcCIsImNoaWxkIiwib25DaGFuZ2UiLCJpbmRleCIsImluZGV4T2YiLCJkYXRhIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLGNBQVU7QUFDTkMsY0FBTSxhQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxnQkFBUSxnQkFBVUMsTUFBVixFQUFrQjtBQUN0QixpQkFBS0MsUUFBTCxDQUFjQyxJQUFkLENBQW1CRixNQUFuQjtBQUNBQSxtQkFBT0csTUFBUCxHQUFnQixJQUFoQjtBQUNBSCxtQkFBT0ksZ0JBQVA7QUFDSCxTQVBLO0FBUU5DLGtCQUFVLGtCQUFVTCxNQUFWLEVBQWtCO0FBQ3hCLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0ssTUFBZCxDQUFxQixVQUFVQyxJQUFWLEVBQWdCO0FBQUUsdUJBQU9BLFNBQVNQLE1BQWhCO0FBQXlCLGFBQWhFLENBQWhCO0FBQ0EsaUJBQUtRLGNBQUw7QUFDSDtBQVhLLEtBRFk7QUFjdEJDLFdBQU87QUFDSEMsZ0JBQVE7QUFDSlosa0JBQU0sSUFERjtBQUVKYSxzQkFBVTtBQUZOLFNBREw7QUFLSEMscUJBQWE7QUFDVGQsa0JBQU1lLE1BREc7QUFFVEYsc0JBQVU7QUFGRCxTQUxWO0FBU0hHLHVCQUFlO0FBQ1hoQixrQkFBTWUsTUFESztBQUVYRixzQkFBVTtBQUZDLFNBVFo7QUFhSEksZUFBTztBQUNIakIsa0JBQU1rQixPQURIO0FBRUh4QixtQkFBTztBQUZKLFNBYko7QUFpQkh5QixnQkFBUTtBQUNKbkIsa0JBQU1rQixPQURGO0FBRUp4QixtQkFBTztBQUZILFNBakJMO0FBcUJIMEIsZ0JBQVE7QUFDSnBCLGtCQUFNcUIsTUFERjtBQUVKM0IsbUJBQU87QUFGSCxTQXJCTDtBQXlCSDRCLDZCQUFxQjtBQUNqQnRCLGtCQUFNa0IsT0FEVztBQUVqQnhCLG1CQUFPO0FBRlU7QUF6QmxCLEtBZGU7QUE0Q3RCNkIsa0JBQWMsd0JBQVk7QUFDdEIsYUFBS3BCLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSCxLQTlDcUI7QUErQ3RCcUIsYUFBUztBQUNMZCx3QkFBZ0IsMEJBQVk7QUFDeEIsZ0JBQUlQLFdBQVcsS0FBS0EsUUFBcEI7QUFDQSxnQkFBSSxDQUFDc0IsTUFBTUMsT0FBTixDQUFjdkIsUUFBZCxDQUFELElBQTRCLENBQUNBLFNBQVN3QixNQUExQyxFQUFrRDtBQUM5Qyx1QkFBT0MsUUFBUUMsT0FBUixFQUFQO0FBQ0g7QUFDRCxtQkFBT0QsUUFBUUUsR0FBUixDQUFZM0IsU0FBUzRCLEdBQVQsQ0FBYSxVQUFVQyxLQUFWLEVBQWlCO0FBQUUsdUJBQU9BLE1BQU0xQixnQkFBTixFQUFQO0FBQWtDLGFBQWxFLENBQVosQ0FBUDtBQUNILFNBUEk7QUFRTDJCLGtCQUFVLGtCQUFVRCxLQUFWLEVBQWlCO0FBQ3ZCLGdCQUFJRSxRQUFRLEtBQUsvQixRQUFMLENBQWNnQyxPQUFkLENBQXNCSCxLQUF0QixDQUFaO0FBQ0EsZ0JBQUlwQixTQUFTb0IsTUFBTUksSUFBTixDQUFXckMsSUFBWCxJQUFtQm1DLEtBQWhDO0FBQ0EsZ0JBQUl0QixXQUFXLEtBQUt3QixJQUFMLENBQVV4QixNQUF6QixFQUFpQztBQUM3QixxQkFBS3lCLEtBQUwsQ0FBVyxRQUFYLEVBQXFCekIsTUFBckI7QUFDSDtBQUNKO0FBZEk7QUEvQ2EsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcclxuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XHJcbiAgICByZWxhdGlvbjoge1xyXG4gICAgICAgIG5hbWU6ICd0YWJiYXItaXRlbScsXHJcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxyXG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2godGFyZ2V0KTtcclxuICAgICAgICAgICAgdGFyZ2V0LnBhcmVudCA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRhcmdldC51cGRhdGVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB1bmxpbmtlZDogZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0gIT09IHRhcmdldDsgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBhY3RpdmU6IHtcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFjdGl2ZUNvbG9yOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGluYWN0aXZlQ29sb3I6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZml4ZWQ6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvcmRlcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgekluZGV4OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICAgICAgdmFsdWU6IDFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNhZmVBcmVhSW5zZXRCb3R0b206IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB1cGRhdGVDaGlsZHJlbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pIHx8ICFjaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQudXBkYXRlRnJvbVBhcmVudCgpOyB9KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgICAgIHZhciBhY3RpdmUgPSBjaGlsZC5kYXRhLm5hbWUgfHwgaW5kZXg7XHJcbiAgICAgICAgICAgIGlmIChhY3RpdmUgIT09IHRoaXMuZGF0YS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGFjdGl2ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=