"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var basic_1 = require('./../mixins/basic.js');
var index_1 = require('./../mixins/observer/index.js');
function mapKeys(source, target, map) {
    Object.keys(map).forEach(function (key) {
        if (source[key]) {
            target[map[key]] = source[key];
        }
    });
}
function VantComponent(vantOptions) {
    var _a;
    if (vantOptions === void 0) {
        vantOptions = {};
    }
    var options = {};
    mapKeys(vantOptions, options, {
        data: 'data',
        props: 'properties',
        mixins: 'behaviors',
        methods: 'methods',
        beforeCreate: 'created',
        created: 'attached',
        mounted: 'ready',
        relations: 'relations',
        destroyed: 'detached',
        classes: 'externalClasses'
    });
    var relation = vantOptions.relation;
    if (relation) {
        options.relations = Object.assign(options.relations || {}, (_a = {}, _a["../" + relation.name + "/index"] = relation, _a));
    }
    // add default externalClasses
    options.externalClasses = options.externalClasses || [];
    options.externalClasses.push('custom-class');
    // add default behaviors
    options.behaviors = options.behaviors || [];
    options.behaviors.push(basic_1.basic);
    // map field to form-field behavior
    if (vantOptions.field) {
        options.behaviors.push('wx://form-field');
    }
    // add default options
    options.options = {
        multipleSlots: true,
        addGlobalClass: true
    };
    index_1.observe(vantOptions, options);
    Component(options);
}
exports.VantComponent = VantComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImJhc2ljXzEiLCJyZXF1aXJlIiwiaW5kZXhfMSIsIm1hcEtleXMiLCJzb3VyY2UiLCJ0YXJnZXQiLCJtYXAiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsIlZhbnRDb21wb25lbnQiLCJ2YW50T3B0aW9ucyIsIl9hIiwib3B0aW9ucyIsImRhdGEiLCJwcm9wcyIsIm1peGlucyIsIm1ldGhvZHMiLCJiZWZvcmVDcmVhdGUiLCJjcmVhdGVkIiwibW91bnRlZCIsInJlbGF0aW9ucyIsImRlc3Ryb3llZCIsImNsYXNzZXMiLCJyZWxhdGlvbiIsImFzc2lnbiIsIm5hbWUiLCJleHRlcm5hbENsYXNzZXMiLCJwdXNoIiwiYmVoYXZpb3JzIiwiYmFzaWMiLCJmaWVsZCIsIm11bHRpcGxlU2xvdHMiLCJhZGRHbG9iYWxDbGFzcyIsIm9ic2VydmUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxVQUFVQyxRQUFRLGlCQUFSLENBQWQ7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLDBCQUFSLENBQWQ7QUFDQSxTQUFTRSxPQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ2xDVixXQUFPVyxJQUFQLENBQVlELEdBQVosRUFBaUJFLE9BQWpCLENBQXlCLFVBQVVDLEdBQVYsRUFBZTtBQUNwQyxZQUFJTCxPQUFPSyxHQUFQLENBQUosRUFBaUI7QUFDYkosbUJBQU9DLElBQUlHLEdBQUosQ0FBUCxJQUFtQkwsT0FBT0ssR0FBUCxDQUFuQjtBQUNIO0FBQ0osS0FKRDtBQUtIO0FBQ0QsU0FBU0MsYUFBVCxDQUF1QkMsV0FBdkIsRUFBb0M7QUFDaEMsUUFBSUMsRUFBSjtBQUNBLFFBQUlELGdCQUFnQixLQUFLLENBQXpCLEVBQTRCO0FBQUVBLHNCQUFjLEVBQWQ7QUFBbUI7QUFDakQsUUFBSUUsVUFBVSxFQUFkO0FBQ0FWLFlBQVFRLFdBQVIsRUFBcUJFLE9BQXJCLEVBQThCO0FBQzFCQyxjQUFNLE1BRG9CO0FBRTFCQyxlQUFPLFlBRm1CO0FBRzFCQyxnQkFBUSxXQUhrQjtBQUkxQkMsaUJBQVMsU0FKaUI7QUFLMUJDLHNCQUFjLFNBTFk7QUFNMUJDLGlCQUFTLFVBTmlCO0FBTzFCQyxpQkFBUyxPQVBpQjtBQVExQkMsbUJBQVcsV0FSZTtBQVMxQkMsbUJBQVcsVUFUZTtBQVUxQkMsaUJBQVM7QUFWaUIsS0FBOUI7QUFZQSxRQUFJQyxXQUFXYixZQUFZYSxRQUEzQjtBQUNBLFFBQUlBLFFBQUosRUFBYztBQUNWWCxnQkFBUVEsU0FBUixHQUFvQnpCLE9BQU82QixNQUFQLENBQWNaLFFBQVFRLFNBQVIsSUFBcUIsRUFBbkMsR0FBd0NULEtBQUssRUFBTCxFQUN4REEsR0FBRyxRQUFRWSxTQUFTRSxJQUFqQixHQUF3QixRQUEzQixJQUF1Q0YsUUFEaUIsRUFFeERaLEVBRmdCLEVBQXBCO0FBR0g7QUFDRDtBQUNBQyxZQUFRYyxlQUFSLEdBQTBCZCxRQUFRYyxlQUFSLElBQTJCLEVBQXJEO0FBQ0FkLFlBQVFjLGVBQVIsQ0FBd0JDLElBQXhCLENBQTZCLGNBQTdCO0FBQ0E7QUFDQWYsWUFBUWdCLFNBQVIsR0FBb0JoQixRQUFRZ0IsU0FBUixJQUFxQixFQUF6QztBQUNBaEIsWUFBUWdCLFNBQVIsQ0FBa0JELElBQWxCLENBQXVCNUIsUUFBUThCLEtBQS9CO0FBQ0E7QUFDQSxRQUFJbkIsWUFBWW9CLEtBQWhCLEVBQXVCO0FBQ25CbEIsZ0JBQVFnQixTQUFSLENBQWtCRCxJQUFsQixDQUF1QixpQkFBdkI7QUFDSDtBQUNEO0FBQ0FmLFlBQVFBLE9BQVIsR0FBa0I7QUFDZG1CLHVCQUFlLElBREQ7QUFFZEMsd0JBQWdCO0FBRkYsS0FBbEI7QUFJQS9CLFlBQVFnQyxPQUFSLENBQWdCdkIsV0FBaEIsRUFBNkJFLE9BQTdCO0FBQ0FzQixjQUFVdEIsT0FBVjtBQUNIO0FBQ0RmLFFBQVFZLGFBQVIsR0FBd0JBLGFBQXhCIiwiZmlsZSI6ImNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBiYXNpY18xID0gcmVxdWlyZShcIi4uL21peGlucy9iYXNpY1wiKTtcclxudmFyIGluZGV4XzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL29ic2VydmVyL2luZGV4XCIpO1xyXG5mdW5jdGlvbiBtYXBLZXlzKHNvdXJjZSwgdGFyZ2V0LCBtYXApIHtcclxuICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgaWYgKHNvdXJjZVtrZXldKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFttYXBba2V5XV0gPSBzb3VyY2Vba2V5XTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBWYW50Q29tcG9uZW50KHZhbnRPcHRpb25zKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBpZiAodmFudE9wdGlvbnMgPT09IHZvaWQgMCkgeyB2YW50T3B0aW9ucyA9IHt9OyB9XHJcbiAgICB2YXIgb3B0aW9ucyA9IHt9O1xyXG4gICAgbWFwS2V5cyh2YW50T3B0aW9ucywgb3B0aW9ucywge1xyXG4gICAgICAgIGRhdGE6ICdkYXRhJyxcclxuICAgICAgICBwcm9wczogJ3Byb3BlcnRpZXMnLFxyXG4gICAgICAgIG1peGluczogJ2JlaGF2aW9ycycsXHJcbiAgICAgICAgbWV0aG9kczogJ21ldGhvZHMnLFxyXG4gICAgICAgIGJlZm9yZUNyZWF0ZTogJ2NyZWF0ZWQnLFxyXG4gICAgICAgIGNyZWF0ZWQ6ICdhdHRhY2hlZCcsXHJcbiAgICAgICAgbW91bnRlZDogJ3JlYWR5JyxcclxuICAgICAgICByZWxhdGlvbnM6ICdyZWxhdGlvbnMnLFxyXG4gICAgICAgIGRlc3Ryb3llZDogJ2RldGFjaGVkJyxcclxuICAgICAgICBjbGFzc2VzOiAnZXh0ZXJuYWxDbGFzc2VzJ1xyXG4gICAgfSk7XHJcbiAgICB2YXIgcmVsYXRpb24gPSB2YW50T3B0aW9ucy5yZWxhdGlvbjtcclxuICAgIGlmIChyZWxhdGlvbikge1xyXG4gICAgICAgIG9wdGlvbnMucmVsYXRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLnJlbGF0aW9ucyB8fCB7fSwgKF9hID0ge30sXHJcbiAgICAgICAgICAgIF9hW1wiLi4vXCIgKyByZWxhdGlvbi5uYW1lICsgXCIvaW5kZXhcIl0gPSByZWxhdGlvbixcclxuICAgICAgICAgICAgX2EpKTtcclxuICAgIH1cclxuICAgIC8vIGFkZCBkZWZhdWx0IGV4dGVybmFsQ2xhc3Nlc1xyXG4gICAgb3B0aW9ucy5leHRlcm5hbENsYXNzZXMgPSBvcHRpb25zLmV4dGVybmFsQ2xhc3NlcyB8fCBbXTtcclxuICAgIG9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzLnB1c2goJ2N1c3RvbS1jbGFzcycpO1xyXG4gICAgLy8gYWRkIGRlZmF1bHQgYmVoYXZpb3JzXHJcbiAgICBvcHRpb25zLmJlaGF2aW9ycyA9IG9wdGlvbnMuYmVoYXZpb3JzIHx8IFtdO1xyXG4gICAgb3B0aW9ucy5iZWhhdmlvcnMucHVzaChiYXNpY18xLmJhc2ljKTtcclxuICAgIC8vIG1hcCBmaWVsZCB0byBmb3JtLWZpZWxkIGJlaGF2aW9yXHJcbiAgICBpZiAodmFudE9wdGlvbnMuZmllbGQpIHtcclxuICAgICAgICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKCd3eDovL2Zvcm0tZmllbGQnKTtcclxuICAgIH1cclxuICAgIC8vIGFkZCBkZWZhdWx0IG9wdGlvbnNcclxuICAgIG9wdGlvbnMub3B0aW9ucyA9IHtcclxuICAgICAgICBtdWx0aXBsZVNsb3RzOiB0cnVlLFxyXG4gICAgICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgaW5kZXhfMS5vYnNlcnZlKHZhbnRPcHRpb25zLCBvcHRpb25zKTtcclxuICAgIENvbXBvbmVudChvcHRpb25zKTtcclxufVxyXG5leHBvcnRzLlZhbnRDb21wb25lbnQgPSBWYW50Q29tcG9uZW50O1xyXG4iXX0=