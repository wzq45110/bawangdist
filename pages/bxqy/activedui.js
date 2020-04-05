'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$page) {
  _inherits(_default, _wepy$page);

  function _default() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      // 轮播图数据
      swiperbxList: [{ image_src: '../../assets/images/logoo_02.png' }, { image_src: '../../assets/images/logoo_02.png' }, { image_src: '../../assets/images/logoo_02.png' }],
      show: false,
      shwl: false,
      showw: false
    }, _this.methods = {
      // 触发显示
      showPopup: function showPopup() {
        this.show = true;
      },
      showPopupjia: function showPopupjia() {
        this.showw = true;
      },

      // 关闭弹出层
      onClose: function onClose() {
        this.show = this.showw = false;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return _default;
}(_wepy2.default.page);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2ZWR1aS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic3dpcGVyYnhMaXN0IiwiaW1hZ2Vfc3JjIiwic2hvdyIsInNod2wiLCJzaG93dyIsIm1ldGhvZHMiLCJzaG93UG9wdXAiLCJzaG93UG9wdXBqaWEiLCJvbkNsb3NlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MExBRUVBLEksR0FBTztBQUNMO0FBQ0FDLG9CQUFjLENBQ1osRUFBRUMsV0FBVyxrQ0FBYixFQURZLEVBRVosRUFBRUEsV0FBVyxrQ0FBYixFQUZZLEVBR1osRUFBRUEsV0FBVyxrQ0FBYixFQUhZLENBRlQ7QUFPTEMsWUFBTSxLQVBEO0FBUUxDLFlBQU0sS0FSRDtBQVNMQyxhQUFPO0FBVEYsSyxRQVdQQyxPLEdBQVU7QUFDUjtBQUNBQyxlQUZRLHVCQUVJO0FBQ1YsYUFBS0osSUFBTCxHQUFZLElBQVo7QUFDRCxPQUpPO0FBS1JLLGtCQUxRLDBCQUtPO0FBQ2IsYUFBS0gsS0FBTCxHQUFhLElBQWI7QUFDRCxPQVBPOztBQVFSO0FBQ0FJLGFBVFEscUJBU0U7QUFDUixhQUFLTixJQUFMLEdBQVksS0FBS0UsS0FBTCxHQUFhLEtBQXpCO0FBQ0Q7QUFYTyxLOzs7O0VBWmlCSyxlQUFLQyxJIiwiZmlsZSI6ImFjdGl2ZWR1aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgZGF0YSA9IHtcclxuICAgIC8vIOi9ruaSreWbvuaVsOaNrlxyXG4gICAgc3dpcGVyYnhMaXN0OiBbXHJcbiAgICAgIHsgaW1hZ2Vfc3JjOiAnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvb18wMi5wbmcnIH0sXHJcbiAgICAgIHsgaW1hZ2Vfc3JjOiAnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvb18wMi5wbmcnIH0sXHJcbiAgICAgIHsgaW1hZ2Vfc3JjOiAnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvb18wMi5wbmcnIH1cclxuICAgIF0sXHJcbiAgICBzaG93OiBmYWxzZSxcclxuICAgIHNod2w6IGZhbHNlLFxyXG4gICAgc2hvd3c6IGZhbHNlXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICAvLyDop6blj5HmmL7npLpcclxuICAgIHNob3dQb3B1cCgpIHtcclxuICAgICAgdGhpcy5zaG93ID0gdHJ1ZVxyXG4gICAgfSxcclxuICAgIHNob3dQb3B1cGppYSgpIHtcclxuICAgICAgdGhpcy5zaG93dyA9IHRydWVcclxuICAgIH0sXHJcbiAgICAvLyDlhbPpl63lvLnlh7rlsYJcclxuICAgIG9uQ2xvc2UoKSB7XHJcbiAgICAgIHRoaXMuc2hvdyA9IHRoaXMuc2hvd3cgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=