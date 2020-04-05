"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        type: 'descendant',
        name: 'goods-action-button',
        linked: function linked(child) {
            this.children.push(child);
        },
        unlinked: function unlinked(child) {
            this.children = this.children.filter(function (item) {
                return item !== child;
            });
        }
    },
    beforeCreate: function beforeCreate() {
        this.children = [];
    },
    props: {
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwidHlwZSIsIm5hbWUiLCJsaW5rZWQiLCJjaGlsZCIsImNoaWxkcmVuIiwicHVzaCIsInVubGlua2VkIiwiZmlsdGVyIiwiaXRlbSIsImJlZm9yZUNyZWF0ZSIsInByb3BzIiwic2FmZUFyZWFJbnNldEJvdHRvbSIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLGNBQVU7QUFDTkMsY0FBTSxZQURBO0FBRU5DLGNBQU0scUJBRkE7QUFHTkMsZ0JBQVEsZ0JBQVVDLEtBQVYsRUFBaUI7QUFDckIsaUJBQUtDLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQkYsS0FBbkI7QUFDSCxTQUxLO0FBTU5HLGtCQUFVLGtCQUFVSCxLQUFWLEVBQWlCO0FBQ3ZCLGlCQUFLQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0csTUFBZCxDQUFxQixVQUFVQyxJQUFWLEVBQWdCO0FBQUUsdUJBQU9BLFNBQVNMLEtBQWhCO0FBQXdCLGFBQS9ELENBQWhCO0FBQ0g7QUFSSyxLQURZO0FBV3RCTSxrQkFBYyx3QkFBWTtBQUN0QixhQUFLTCxRQUFMLEdBQWdCLEVBQWhCO0FBQ0gsS0FicUI7QUFjdEJNLFdBQU87QUFDSEMsNkJBQXFCO0FBQ2pCWCxrQkFBTVksT0FEVztBQUVqQmpCLG1CQUFPO0FBRlU7QUFEbEI7QUFkZSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIHJlbGF0aW9uOiB7XHJcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxyXG4gICAgICAgIG5hbWU6ICdnb29kcy1hY3Rpb24tYnV0dG9uJyxcclxuICAgICAgICBsaW5rZWQ6IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5saW5rZWQ6IGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0gIT09IGNoaWxkOyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgc2FmZUFyZWFJbnNldEJvdHRvbToge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==