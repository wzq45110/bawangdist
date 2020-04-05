"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'collapse-item',
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
        value: {
            type: null,
            observer: 'updateExpanded'
        },
        accordion: {
            type: Boolean,
            observer: 'updateExpanded'
        },
        border: {
            type: Boolean,
            value: true
        }
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },
    methods: {
        updateExpanded: function updateExpanded() {
            this.children.forEach(function (child) {
                child.updateExpanded();
            });
        },
        switch: function _switch(name, expanded) {
            var _a = this.data,
                accordion = _a.accordion,
                value = _a.value;
            if (!accordion) {
                name = expanded ? (value || []).concat(name) : (value || []).filter(function (activeName) {
                    return activeName !== name;
                });
            } else {
                name = expanded ? name : '';
            }
            this.$emit('change', name);
            this.$emit('input', name);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJjaGlsZCIsImNoaWxkcmVuIiwicHVzaCIsInVubGlua2VkIiwiZmlsdGVyIiwiaXRlbSIsInByb3BzIiwib2JzZXJ2ZXIiLCJhY2NvcmRpb24iLCJCb29sZWFuIiwiYm9yZGVyIiwiYmVmb3JlQ3JlYXRlIiwibWV0aG9kcyIsInVwZGF0ZUV4cGFuZGVkIiwiZm9yRWFjaCIsInN3aXRjaCIsImV4cGFuZGVkIiwiX2EiLCJkYXRhIiwiY29uY2F0IiwiYWN0aXZlTmFtZSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxjQUFVO0FBQ05DLGNBQU0sZUFEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsZ0JBQVEsZ0JBQVVDLEtBQVYsRUFBaUI7QUFDckIsaUJBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQkYsS0FBbkI7QUFDSCxTQUxLO0FBTU5HLGtCQUFVLGtCQUFVSCxLQUFWLEVBQWlCO0FBQ3ZCLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0csTUFBZCxDQUFxQixVQUFVQyxJQUFWLEVBQWdCO0FBQUUsdUJBQU9BLFNBQVNMLEtBQWhCO0FBQXdCLGFBQS9ELENBQWhCO0FBQ0g7QUFSSyxLQURZO0FBV3RCTSxXQUFPO0FBQ0hkLGVBQU87QUFDSE0sa0JBQU0sSUFESDtBQUVIUyxzQkFBVTtBQUZQLFNBREo7QUFLSEMsbUJBQVc7QUFDUFYsa0JBQU1XLE9BREM7QUFFUEYsc0JBQVU7QUFGSCxTQUxSO0FBU0hHLGdCQUFRO0FBQ0paLGtCQUFNVyxPQURGO0FBRUpqQixtQkFBTztBQUZIO0FBVEwsS0FYZTtBQXlCdEJtQixrQkFBYyx3QkFBWTtBQUN0QixhQUFLVixRQUFMLEdBQWdCLEVBQWhCO0FBQ0gsS0EzQnFCO0FBNEJ0QlcsYUFBUztBQUNMQyx3QkFBZ0IsMEJBQVk7QUFDeEIsaUJBQUtaLFFBQUwsQ0FBY2EsT0FBZCxDQUFzQixVQUFVZCxLQUFWLEVBQWlCO0FBQ25DQSxzQkFBTWEsY0FBTjtBQUNILGFBRkQ7QUFHSCxTQUxJO0FBTUxFLGdCQUFRLGlCQUFVbEIsSUFBVixFQUFnQm1CLFFBQWhCLEVBQTBCO0FBQzlCLGdCQUFJQyxLQUFLLEtBQUtDLElBQWQ7QUFBQSxnQkFBb0JWLFlBQVlTLEdBQUdULFNBQW5DO0FBQUEsZ0JBQThDaEIsUUFBUXlCLEdBQUd6QixLQUF6RDtBQUNBLGdCQUFJLENBQUNnQixTQUFMLEVBQWdCO0FBQ1pYLHVCQUFPbUIsV0FDRCxDQUFDeEIsU0FBUyxFQUFWLEVBQWMyQixNQUFkLENBQXFCdEIsSUFBckIsQ0FEQyxHQUVELENBQUNMLFNBQVMsRUFBVixFQUFjWSxNQUFkLENBQXFCLFVBQVVnQixVQUFWLEVBQXNCO0FBQUUsMkJBQU9BLGVBQWV2QixJQUF0QjtBQUE2QixpQkFBMUUsQ0FGTjtBQUdILGFBSkQsTUFLSztBQUNEQSx1QkFBT21CLFdBQVduQixJQUFYLEdBQWtCLEVBQXpCO0FBQ0g7QUFDRCxpQkFBS3dCLEtBQUwsQ0FBVyxRQUFYLEVBQXFCeEIsSUFBckI7QUFDQSxpQkFBS3dCLEtBQUwsQ0FBVyxPQUFYLEVBQW9CeEIsSUFBcEI7QUFDSDtBQWxCSTtBQTVCYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIHJlbGF0aW9uOiB7XHJcbiAgICAgICAgbmFtZTogJ2NvbGxhcHNlLWl0ZW0nLFxyXG4gICAgICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcclxuICAgICAgICBsaW5rZWQ6IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5saW5rZWQ6IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0gIT09IGNoaWxkOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBudWxsLFxyXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUV4cGFuZGVkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWNjb3JkaW9uOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlRXhwYW5kZWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib3JkZXI6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgdmFsdWU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB1cGRhdGVFeHBhbmRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGVFeHBhbmRlZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN3aXRjaDogZnVuY3Rpb24gKG5hbWUsIGV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgYWNjb3JkaW9uID0gX2EuYWNjb3JkaW9uLCB2YWx1ZSA9IF9hLnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoIWFjY29yZGlvbikge1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IGV4cGFuZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyAodmFsdWUgfHwgW10pLmNvbmNhdChuYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgIDogKHZhbHVlIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24gKGFjdGl2ZU5hbWUpIHsgcmV0dXJuIGFjdGl2ZU5hbWUgIT09IG5hbWU7IH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbmFtZSA9IGV4cGFuZGVkID8gbmFtZSA6ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIG5hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIG5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==