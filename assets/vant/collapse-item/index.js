"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var nextTick = function nextTick() {
    return new Promise(function (resolve) {
        return setTimeout(resolve, 20);
    });
};
component_1.VantComponent({
    classes: ['title-class', 'content-class'],
    relation: {
        name: 'collapse',
        type: 'ancestor',
        linked: function linked(parent) {
            this.parent = parent;
        }
    },
    props: {
        name: null,
        title: null,
        value: null,
        icon: String,
        label: String,
        disabled: Boolean,
        clickable: Boolean,
        border: {
            type: Boolean,
            value: true
        },
        isLink: {
            type: Boolean,
            value: true
        }
    },
    data: {
        contentHeight: 0,
        expanded: false,
        transition: false
    },
    mounted: function mounted() {
        var _this = this;
        this.updateExpanded().then(nextTick).then(function () {
            var data = { transition: true };
            if (_this.data.expanded) {
                data.contentHeight = 'auto';
            }
            _this.setData(data);
        });
    },
    methods: {
        updateExpanded: function updateExpanded() {
            if (!this.parent) {
                return Promise.resolve();
            }
            var _a = this.parent.data,
                value = _a.value,
                accordion = _a.accordion;
            var _b = this.parent.children,
                children = _b === void 0 ? [] : _b;
            var name = this.data.name;
            var index = children.indexOf(this);
            var currentName = name == null ? index : name;
            var expanded = accordion ? value === currentName : (value || []).some(function (name) {
                return name === currentName;
            });
            var stack = [];
            if (expanded !== this.data.expanded) {
                stack.push(this.updateStyle(expanded));
            }
            stack.push(this.set({ index: index, expanded: expanded }));
            return Promise.all(stack);
        },
        updateStyle: function updateStyle(expanded) {
            var _this = this;
            return this.getRect('.van-collapse-item__content').then(function (rect) {
                return rect.height;
            }).then(function (height) {
                if (expanded) {
                    return _this.set({
                        contentHeight: height ? height + "px" : 'auto'
                    });
                }
                return _this.set({ contentHeight: height + "px" }).then(nextTick).then(function () {
                    return _this.set({ contentHeight: 0 });
                });
            });
        },
        onClick: function onClick() {
            if (this.data.disabled) {
                return;
            }
            var _a = this.data,
                name = _a.name,
                expanded = _a.expanded;
            var index = this.parent.children.indexOf(this);
            var currentName = name == null ? index : name;
            this.parent.switch(currentName, !expanded);
        },
        onTransitionEnd: function onTransitionEnd() {
            if (this.data.expanded) {
                this.setData({
                    contentHeight: 'auto'
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwibmV4dFRpY2siLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJWYW50Q29tcG9uZW50IiwiY2xhc3NlcyIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJwYXJlbnQiLCJwcm9wcyIsInRpdGxlIiwiaWNvbiIsIlN0cmluZyIsImxhYmVsIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwiY2xpY2thYmxlIiwiYm9yZGVyIiwiaXNMaW5rIiwiZGF0YSIsImNvbnRlbnRIZWlnaHQiLCJleHBhbmRlZCIsInRyYW5zaXRpb24iLCJtb3VudGVkIiwiX3RoaXMiLCJ1cGRhdGVFeHBhbmRlZCIsInRoZW4iLCJzZXREYXRhIiwibWV0aG9kcyIsIl9hIiwiYWNjb3JkaW9uIiwiX2IiLCJjaGlsZHJlbiIsImluZGV4IiwiaW5kZXhPZiIsImN1cnJlbnROYW1lIiwic29tZSIsInN0YWNrIiwicHVzaCIsInVwZGF0ZVN0eWxlIiwic2V0IiwiYWxsIiwiZ2V0UmVjdCIsInJlY3QiLCJoZWlnaHQiLCJvbkNsaWNrIiwic3dpdGNoIiwib25UcmFuc2l0aW9uRW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElBQUlDLFdBQVcsU0FBWEEsUUFBVyxHQUFZO0FBQUUsV0FBTyxJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQjtBQUFFLGVBQU9DLFdBQVdELE9BQVgsRUFBb0IsRUFBcEIsQ0FBUDtBQUFpQyxLQUFsRSxDQUFQO0FBQTZFLENBQTFHO0FBQ0FKLFlBQVlNLGFBQVosQ0FBMEI7QUFDdEJDLGFB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LEVBQWM7QUFDViwyQkFBT0csTUFBTWdCLEdBQU4sQ0FBVTtBQUNicEIsdUNBQWV3QixTQUFTQSxTQUFTLElBQWxCLEdBQXlCO0FBRDNCLHFCQUFWLENBQVA7QUFHSDtBQUNELHVCQUFPcEIsTUFBTWdCLEdBQU4sQ0FBVSxFQUFFcEIsZUFBZXdCLFNBQVMsSUFBMUIsRUFBVixFQUNGbEIsSUFERSxDQUNHNUIsUUFESCxFQUVGNEIsSUFGRSxDQUVHLFlBQVk7QUFBRSwyQkFBT0YsTUFBTWdCLEdBQU4sQ0FBVSxFQUFFcEIsZUFBZSxDQUFqQixFQUFWLENBQVA7QUFBeUMsaUJBRjFELENBQVA7QUFHSCxhQVhNLENBQVA7QUFZSCxTQWxDSTtBQW1DTHlCLGlCQUFTLG1CQUFZO0FBQ2pCLGdCQUFJLEtBQUsxQixJQUFMLENBQVVMLFFBQWQsRUFBd0I7QUFDcEI7QUFDSDtBQUNELGdCQUFJZSxLQUFLLEtBQUtWLElBQWQ7QUFBQSxnQkFBb0JkLE9BQU93QixHQUFHeEIsSUFBOUI7QUFBQSxnQkFBb0NnQixXQUFXUSxHQUFHUixRQUFsRDtBQUNBLGdCQUFJWSxRQUFRLEtBQUt6QixNQUFMLENBQVl3QixRQUFaLENBQXFCRSxPQUFyQixDQUE2QixJQUE3QixDQUFaO0FBQ0EsZ0JBQUlDLGNBQWM5QixRQUFRLElBQVIsR0FBZTRCLEtBQWYsR0FBdUI1QixJQUF6QztBQUNBLGlCQUFLRyxNQUFMLENBQVlzQyxNQUFaLENBQW1CWCxXQUFuQixFQUFnQyxDQUFDZCxRQUFqQztBQUNILFNBM0NJO0FBNENMMEIseUJBQWlCLDJCQUFZO0FBQ3pCLGdCQUFJLEtBQUs1QixJQUFMLENBQVVFLFFBQWQsRUFBd0I7QUFDcEIscUJBQUtNLE9BQUwsQ0FBYTtBQUNUUCxtQ0FBZTtBQUROLGlCQUFiO0FBR0g7QUFDSjtBQWxESTtBQTNDYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xyXG52YXIgbmV4dFRpY2sgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXR1cm4gc2V0VGltZW91dChyZXNvbHZlLCAyMCk7IH0pOyB9O1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIGNsYXNzZXM6IFsndGl0bGUtY2xhc3MnLCAnY29udGVudC1jbGFzcyddLFxyXG4gICAgcmVsYXRpb246IHtcclxuICAgICAgICBuYW1lOiAnY29sbGFwc2UnLFxyXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXHJcbiAgICAgICAgbGlua2VkOiBmdW5jdGlvbiAocGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIG5hbWU6IG51bGwsXHJcbiAgICAgICAgdGl0bGU6IG51bGwsXHJcbiAgICAgICAgdmFsdWU6IG51bGwsXHJcbiAgICAgICAgaWNvbjogU3RyaW5nLFxyXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXHJcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICAgICAgY2xpY2thYmxlOiBCb29sZWFuLFxyXG4gICAgICAgIGJvcmRlcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNMaW5rOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGE6IHtcclxuICAgICAgICBjb250ZW50SGVpZ2h0OiAwLFxyXG4gICAgICAgIGV4cGFuZGVkOiBmYWxzZSxcclxuICAgICAgICB0cmFuc2l0aW9uOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRXhwYW5kZWQoKVxyXG4gICAgICAgICAgICAudGhlbihuZXh0VGljaylcclxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHsgdHJhbnNpdGlvbjogdHJ1ZSB9O1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMuZGF0YS5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5jb250ZW50SGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF90aGlzLnNldERhdGEoZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHVwZGF0ZUV4cGFuZGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLnBhcmVudC5kYXRhLCB2YWx1ZSA9IF9hLnZhbHVlLCBhY2NvcmRpb24gPSBfYS5hY2NvcmRpb247XHJcbiAgICAgICAgICAgIHZhciBfYiA9IHRoaXMucGFyZW50LmNoaWxkcmVuLCBjaGlsZHJlbiA9IF9iID09PSB2b2lkIDAgPyBbXSA6IF9iO1xyXG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMuZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudE5hbWUgPSBuYW1lID09IG51bGwgPyBpbmRleCA6IG5hbWU7XHJcbiAgICAgICAgICAgIHZhciBleHBhbmRlZCA9IGFjY29yZGlvblxyXG4gICAgICAgICAgICAgICAgPyB2YWx1ZSA9PT0gY3VycmVudE5hbWVcclxuICAgICAgICAgICAgICAgIDogKHZhbHVlIHx8IFtdKS5zb21lKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBuYW1lID09PSBjdXJyZW50TmFtZTsgfSk7XHJcbiAgICAgICAgICAgIHZhciBzdGFjayA9IFtdO1xyXG4gICAgICAgICAgICBpZiAoZXhwYW5kZWQgIT09IHRoaXMuZGF0YS5leHBhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucHVzaCh0aGlzLnVwZGF0ZVN0eWxlKGV4cGFuZGVkKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RhY2sucHVzaCh0aGlzLnNldCh7IGluZGV4OiBpbmRleCwgZXhwYW5kZWQ6IGV4cGFuZGVkIH0pKTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZVN0eWxlOiBmdW5jdGlvbiAoZXhwYW5kZWQpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVjdCgnLnZhbi1jb2xsYXBzZS1pdGVtX19jb250ZW50JylcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZWN0KSB7IHJldHVybiByZWN0LmhlaWdodDsgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChoZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChleHBhbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50SGVpZ2h0OiBoZWlnaHQgPyBoZWlnaHQgKyBcInB4XCIgOiAnYXV0bydcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXQoeyBjb250ZW50SGVpZ2h0OiBoZWlnaHQgKyBcInB4XCIgfSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihuZXh0VGljaylcclxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5zZXQoeyBjb250ZW50SGVpZ2h0OiAwIH0pOyB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIG5hbWUgPSBfYS5uYW1lLCBleHBhbmRlZCA9IF9hLmV4cGFuZGVkO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgY3VycmVudE5hbWUgPSBuYW1lID09IG51bGwgPyBpbmRleCA6IG5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnN3aXRjaChjdXJyZW50TmFtZSwgIWV4cGFuZGVkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmV4cGFuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRIZWlnaHQ6ICdhdXRvJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=