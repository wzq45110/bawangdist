"use strict";

var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var shared_1 = require('./shared.js');
component_1.VantComponent({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: __assign(__assign({}, shared_1.pickerProps), { valueKey: {
            type: String,
            value: 'text'
        }, toolbarPosition: {
            type: String,
            value: 'top'
        }, defaultIndex: {
            type: Number,
            value: 0
        }, columns: {
            type: Array,
            value: [],
            observer: function observer(columns) {
                if (columns === void 0) {
                    columns = [];
                }
                this.simple = columns.length && !columns[0].values;
                this.children = this.selectAllComponents('.van-picker__column');
                if (Array.isArray(this.children) && this.children.length) {
                    this.setColumns().catch(function () {});
                }
            }
        } }),
    beforeCreate: function beforeCreate() {
        this.children = [];
    },
    methods: {
        noop: function noop() {},
        setColumns: function setColumns() {
            var _this = this;
            var data = this.data;
            var columns = this.simple ? [{ values: data.columns }] : data.columns;
            var stack = columns.map(function (column, index) {
                return _this.setColumnValues(index, column.values);
            });
            return Promise.all(stack);
        },
        emit: function emit(event) {
            var type = event.currentTarget.dataset.type;
            if (this.simple) {
                this.$emit(type, {
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit(type, {
                    value: this.getValues(),
                    index: this.getIndexes()
                });
            }
        },
        onChange: function onChange(event) {
            if (this.simple) {
                this.$emit('change', {
                    picker: this,
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit('change', {
                    picker: this,
                    value: this.getValues(),
                    index: event.currentTarget.dataset.index
                });
            }
        },
        // get column instance by index
        getColumn: function getColumn(index) {
            return this.children[index];
        },
        // get column value by index
        getColumnValue: function getColumnValue(index) {
            var column = this.getColumn(index);
            return column && column.getValue();
        },
        // set column value by index
        setColumnValue: function setColumnValue(index, value) {
            var column = this.getColumn(index);
            if (column == null) {
                return Promise.reject(new Error('setColumnValue: 对应列不存在'));
            }
            return column.setValue(value);
        },
        // get column option index by column index
        getColumnIndex: function getColumnIndex(columnIndex) {
            return (this.getColumn(columnIndex) || {}).data.currentIndex;
        },
        // set column option index by column index
        setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
            var column = this.getColumn(columnIndex);
            if (column == null) {
                return Promise.reject(new Error('setColumnIndex: 对应列不存在'));
            }
            return column.setIndex(optionIndex);
        },
        // get options of column by index
        getColumnValues: function getColumnValues(index) {
            return (this.children[index] || {}).data.options;
        },
        // set options of column by index
        setColumnValues: function setColumnValues(index, options, needReset) {
            if (needReset === void 0) {
                needReset = true;
            }
            var column = this.children[index];
            if (column == null) {
                return Promise.reject(new Error('setColumnValues: 对应列不存在'));
            }
            var isSame = JSON.stringify(column.data.options) === JSON.stringify(options);
            if (isSame) {
                return Promise.resolve();
            }
            return column.set({ options: options }).then(function () {
                if (needReset) {
                    column.setIndex(0);
                }
            });
        },
        // get values of all columns
        getValues: function getValues() {
            return this.children.map(function (child) {
                return child.getValue();
            });
        },
        // set values of all columns
        setValues: function setValues(values) {
            var _this = this;
            var stack = values.map(function (value, index) {
                return _this.setColumnValue(index, value);
            });
            return Promise.all(stack);
        },
        // get indexes of all columns
        getIndexes: function getIndexes() {
            return this.children.map(function (child) {
                return child.data.currentIndex;
            });
        },
        // set indexes of all columns
        setIndexes: function setIndexes(indexes) {
            var _this = this;
            var stack = indexes.map(function (optionIndex, columnIndex) {
                return _this.setColumnIndex(columnIndex, optionIndex);
            });
            return Promise.all(stack);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwic2hhcmVkXzEiLCJWYW50Q29tcG9uZW50IiwiY2xhc3NlcyIsInByb3BzIiwicGlja2VyUHJvcHMiLCJ2YWx1ZUtleSIsInR5cGUiLCJTdHJpbmciLCJ0b29sYmFyUG9zaXRpb24iLCJkZWZhdWx0SW5kZXgiLCJOdW1iZXIiLCJjb2x1bW5zIiwiQXJyYXkiLCJvYnNlcnZlciIsInNpbXBsZSIsInZhbHVlcyIsImNoaWxkcmVuIiwic2VsZWN0QWxsQ29tcG9uZW50cyIsImlzQXJyYXkiLCJzZXRDb2x1bW5zIiwiY2F0Y2giLCJiZWZvcmVDcmVhdGUiLCJtZXRob2RzIiwibm9vcCIsIl90aGlzIiwiZGF0YSIsInN0YWNrIiwibWFwIiwiY29sdW1uIiwiaW5kZXgiLCJzZXRDb2x1bW5WYWx1ZXMiLCJQcm9taXNlIiwiYWxsIiwiZW1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCIkZW1pdCIsImdldENvbHVtblZhbHVlIiwiZ2V0Q29sdW1uSW5kZXgiLCJnZXRWYWx1ZXMiLCJnZXRJbmRleGVzIiwib25DaGFuZ2UiLCJwaWNrZXIiLCJnZXRDb2x1bW4iLCJnZXRWYWx1ZSIsInNldENvbHVtblZhbHVlIiwicmVqZWN0IiwiRXJyb3IiLCJzZXRWYWx1ZSIsImNvbHVtbkluZGV4IiwiY3VycmVudEluZGV4Iiwic2V0Q29sdW1uSW5kZXgiLCJvcHRpb25JbmRleCIsInNldEluZGV4IiwiZ2V0Q29sdW1uVmFsdWVzIiwib3B0aW9ucyIsIm5lZWRSZXNldCIsImlzU2FtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNvbHZlIiwic2V0IiwidGhlbiIsImNoaWxkIiwic2V0VmFsdWVzIiwic2V0SW5kZXhlcyIsImluZGV4ZXMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBLElBQUlBLFdBQVksYUFBUSxVQUFLQSxRQUFkLElBQTJCLFlBQVk7QUFDbERBLGVBQVdDLE9BQU9DLE1BQVAsSUFBaUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3BDLGFBQUssSUFBSUMsQ0FBSixFQUFPQyxJQUFJLENBQVgsRUFBY0MsSUFBSUMsVUFBVUMsTUFBakMsRUFBeUNILElBQUlDLENBQTdDLEVBQWdERCxHQUFoRCxFQUFxRDtBQUNqREQsZ0JBQUlHLFVBQVVGLENBQVYsQ0FBSjtBQUNBLGlCQUFLLElBQUlJLENBQVQsSUFBY0wsQ0FBZDtBQUFpQixvQkFBSUgsT0FBT1MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDUixDQUFyQyxFQUF3Q0ssQ0FBeEMsQ0FBSixFQUNiTixFQUFFTSxDQUFGLElBQU9MLEVBQUVLLENBQUYsQ0FBUDtBQURKO0FBRUg7QUFDRCxlQUFPTixDQUFQO0FBQ0gsS0FQRDtBQVFBLFdBQU9ILFNBQVNhLEtBQVQsQ0FBZSxJQUFmLEVBQXFCTixTQUFyQixDQUFQO0FBQ0gsQ0FWRDtBQVdBTixPQUFPYSxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsV0FBV0QsUUFBUSxVQUFSLENBQWY7QUFDQUQsWUFBWUcsYUFBWixDQUEwQjtBQUN0QkMsYUFBUyxDQUFDLGNBQUQsRUFBaUIsZUFBakIsRUFBa0MsY0FBbEMsQ0FEYTtBQUV0QkMsV0FBT3RCLFNBQVNBLFNBQVMsRUFBVCxFQUFhbUIsU0FBU0ksV0FBdEIsQ0FBVCxFQUE2QyxFQUFFQyxVQUFVO0FBQ3hEQyxrQkFBTUMsTUFEa0Q7QUFFeERWLG1CQUFPO0FBRmlELFNBQVosRUFHN0NXLGlCQUFpQjtBQUNo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LG1CQUFPa0MsUUFBUUMsR0FBUixDQUFZTixLQUFaLENBQVA7QUFDSCxTQXZHSTtBQXdHTDtBQUNBZSxvQkFBWSxzQkFBWTtBQUNwQixtQkFBTyxLQUFLekIsUUFBTCxDQUFjVyxHQUFkLENBQWtCLFVBQVVxQyxLQUFWLEVBQWlCO0FBQUUsdUJBQU9BLE1BQU12QyxJQUFOLENBQVcwQixZQUFsQjtBQUFpQyxhQUF0RSxDQUFQO0FBQ0gsU0EzR0k7QUE0R0w7QUFDQWUsb0JBQVksb0JBQVVDLE9BQVYsRUFBbUI7QUFDM0IsZ0JBQUkzQyxRQUFRLElBQVo7QUFDQSxnQkFBSUUsUUFBUXlDLFFBQVF4QyxHQUFSLENBQVksVUFBVTBCLFdBQVYsRUFBdUJILFdBQXZCLEVBQW9DO0FBQ3hELHVCQUFPMUIsTUFBTTRCLGNBQU4sQ0FBcUJGLFdBQXJCLEVBQWtDRyxXQUFsQyxDQUFQO0FBQ0gsYUFGVyxDQUFaO0FBR0EsbUJBQU90QixRQUFRQyxHQUFSLENBQVlOLEtBQVosQ0FBUDtBQUNIO0FBbkhJO0FBMUJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcclxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcclxudmFyIHNoYXJlZF8xID0gcmVxdWlyZShcIi4vc2hhcmVkXCIpO1xyXG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcclxuICAgIGNsYXNzZXM6IFsnYWN0aXZlLWNsYXNzJywgJ3Rvb2xiYXItY2xhc3MnLCAnY29sdW1uLWNsYXNzJ10sXHJcbiAgICBwcm9wczogX19hc3NpZ24oX19hc3NpZ24oe30sIHNoYXJlZF8xLnBpY2tlclByb3BzKSwgeyB2YWx1ZUtleToge1xyXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiAndGV4dCdcclxuICAgICAgICB9LCB0b29sYmFyUG9zaXRpb246IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ3RvcCdcclxuICAgICAgICB9LCBkZWZhdWx0SW5kZXg6IHtcclxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgICAgICB2YWx1ZTogMFxyXG4gICAgICAgIH0sIGNvbHVtbnM6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgICAgIHZhbHVlOiBbXSxcclxuICAgICAgICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uIChjb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1ucyA9PT0gdm9pZCAwKSB7IGNvbHVtbnMgPSBbXTsgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaW1wbGUgPSBjb2x1bW5zLmxlbmd0aCAmJiAhY29sdW1uc1swXS52YWx1ZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5zZWxlY3RBbGxDb21wb25lbnRzKCcudmFuLXBpY2tlcl9fY29sdW1uJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmNoaWxkcmVuKSAmJiB0aGlzLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29sdW1ucygpLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IH0pLFxyXG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBub29wOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICAgICAgc2V0Q29sdW1uczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbnMgPSB0aGlzLnNpbXBsZSA/IFt7IHZhbHVlczogZGF0YS5jb2x1bW5zIH1dIDogZGF0YS5jb2x1bW5zO1xyXG4gICAgICAgICAgICB2YXIgc3RhY2sgPSBjb2x1bW5zLm1hcChmdW5jdGlvbiAoY29sdW1uLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNldENvbHVtblZhbHVlcyhpbmRleCwgY29sdW1uLnZhbHVlcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc3RhY2spO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW1pdDogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHZhciB0eXBlID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnR5cGU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXBsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCh0eXBlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29sdW1uVmFsdWUoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0Q29sdW1uSW5kZXgoMClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCh0eXBlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0VmFsdWVzKCksXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0SW5kZXhlcygpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaW1wbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcclxuICAgICAgICAgICAgICAgICAgICBwaWNrZXI6IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZ2V0Q29sdW1uVmFsdWUoMCksXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0Q29sdW1uSW5kZXgoMClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBpY2tlcjogdGhpcyxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRWYWx1ZXMoKSxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZ2V0IGNvbHVtbiBpbnN0YW5jZSBieSBpbmRleFxyXG4gICAgICAgIGdldENvbHVtbjogZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2luZGV4XTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIGdldCBjb2x1bW4gdmFsdWUgYnkgaW5kZXhcclxuICAgICAgICBnZXRDb2x1bW5WYWx1ZTogZnVuY3Rpb24gKGluZGV4KSB7XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihpbmRleCk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4gJiYgY29sdW1uLmdldFZhbHVlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBzZXQgY29sdW1uIHZhbHVlIGJ5IGluZGV4XHJcbiAgICAgICAgc2V0Q29sdW1uVmFsdWU6IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKGluZGV4KTtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdzZXRDb2x1bW5WYWx1ZTog5a+55bqU5YiX5LiN5a2Y5ZyoJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4uc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZ2V0IGNvbHVtbiBvcHRpb24gaW5kZXggYnkgY29sdW1uIGluZGV4XHJcbiAgICAgICAgZ2V0Q29sdW1uSW5kZXg6IGZ1bmN0aW9uIChjb2x1bW5JbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZ2V0Q29sdW1uKGNvbHVtbkluZGV4KSB8fCB7fSkuZGF0YS5jdXJyZW50SW5kZXg7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBzZXQgY29sdW1uIG9wdGlvbiBpbmRleCBieSBjb2x1bW4gaW5kZXhcclxuICAgICAgICBzZXRDb2x1bW5JbmRleDogZnVuY3Rpb24gKGNvbHVtbkluZGV4LCBvcHRpb25JbmRleCkge1xyXG4gICAgICAgICAgICB2YXIgY29sdW1uID0gdGhpcy5nZXRDb2x1bW4oY29sdW1uSW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoY29sdW1uID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ3NldENvbHVtbkluZGV4OiDlr7nlupTliJfkuI3lrZjlnKgnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5zZXRJbmRleChvcHRpb25JbmRleCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBnZXQgb3B0aW9ucyBvZiBjb2x1bW4gYnkgaW5kZXhcclxuICAgICAgICBnZXRDb2x1bW5WYWx1ZXM6IGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuY2hpbGRyZW5baW5kZXhdIHx8IHt9KS5kYXRhLm9wdGlvbnM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBzZXQgb3B0aW9ucyBvZiBjb2x1bW4gYnkgaW5kZXhcclxuICAgICAgICBzZXRDb2x1bW5WYWx1ZXM6IGZ1bmN0aW9uIChpbmRleCwgb3B0aW9ucywgbmVlZFJlc2V0KSB7XHJcbiAgICAgICAgICAgIGlmIChuZWVkUmVzZXQgPT09IHZvaWQgMCkgeyBuZWVkUmVzZXQgPSB0cnVlOyB9XHJcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmNoaWxkcmVuW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdzZXRDb2x1bW5WYWx1ZXM6IOWvueW6lOWIl+S4jeWtmOWcqCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgaXNTYW1lID0gSlNPTi5zdHJpbmdpZnkoY29sdW1uLmRhdGEub3B0aW9ucykgPT09IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpO1xyXG4gICAgICAgICAgICBpZiAoaXNTYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5zZXQoeyBvcHRpb25zOiBvcHRpb25zIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5lZWRSZXNldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zZXRJbmRleCgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBnZXQgdmFsdWVzIG9mIGFsbCBjb2x1bW5zXHJcbiAgICAgICAgZ2V0VmFsdWVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLmdldFZhbHVlKCk7IH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gc2V0IHZhbHVlcyBvZiBhbGwgY29sdW1uc1xyXG4gICAgICAgIHNldFZhbHVlczogZnVuY3Rpb24gKHZhbHVlcykge1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgc3RhY2sgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRDb2x1bW5WYWx1ZShpbmRleCwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIGdldCBpbmRleGVzIG9mIGFsbCBjb2x1bW5zXHJcbiAgICAgICAgZ2V0SW5kZXhlczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC5kYXRhLmN1cnJlbnRJbmRleDsgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBzZXQgaW5kZXhlcyBvZiBhbGwgY29sdW1uc1xyXG4gICAgICAgIHNldEluZGV4ZXM6IGZ1bmN0aW9uIChpbmRleGVzKSB7XHJcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciBzdGFjayA9IGluZGV4ZXMubWFwKGZ1bmN0aW9uIChvcHRpb25JbmRleCwgY29sdW1uSW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRDb2x1bW5JbmRleChjb2x1bW5JbmRleCwgb3B0aW9uSW5kZXgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHN0YWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=