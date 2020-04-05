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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2ZXcuanMiXSwibmFtZXMiOlsiZGF0YSIsInN3aXBlcmJ4TGlzdCIsImltYWdlX3NyYyIsInNob3ciLCJzaHdsIiwic2hvd3ciLCJtZXRob2RzIiwic2hvd1BvcHVwIiwic2hvd1BvcHVwamlhIiwib25DbG9zZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBMQUVFQSxJLEdBQU87QUFDTDtBQUNBQyxvQkFBYyxDQUNaLEVBQUVDLFdBQVcsa0NBQWIsRUFEWSxFQUVaLEVBQUVBLFdBQVcsa0NBQWIsRUFGWSxFQUdaLEVBQUVBLFdBQVcsa0NBQWIsRUFIWSxDQUZUO0FBT0xDLFlBQU0sS0FQRDtBQVFMQyxZQUFNLEtBUkQ7QUFTTEMsYUFBTztBQVRGLEssUUFXUEMsTyxHQUFVO0FBQ1I7QUFDQUMsZUFGUSx1QkFFSTtBQUNWLGFBQUtKLElBQUwsR0FBWSxJQUFaO0FBQ0QsT0FKTztBQUtSSyxrQkFMUSwwQkFLTztBQUNiLGFBQUtILEtBQUwsR0FBYSxJQUFiO0FBQ0QsT0FQTzs7QUFRUjtBQUNBSSxhQVRRLHFCQVNFO0FBQ1IsYUFBS04sSUFBTCxHQUFZLEtBQUtFLEtBQUwsR0FBYSxLQUF6QjtBQUNEO0FBWE8sSzs7OztFQVppQkssZUFBS0MsSSIsImZpbGUiOiJhY3RpdmV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBkYXRhID0ge1xyXG4gICAgLy8g6L2u5pKt5Zu+5pWw5o2uXHJcbiAgICBzd2lwZXJieExpc3Q6IFtcclxuICAgICAgeyBpbWFnZV9zcmM6ICcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ29vXzAyLnBuZycgfSxcclxuICAgICAgeyBpbWFnZV9zcmM6ICcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ29vXzAyLnBuZycgfSxcclxuICAgICAgeyBpbWFnZV9zcmM6ICcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ29vXzAyLnBuZycgfVxyXG4gICAgXSxcclxuICAgIHNob3c6IGZhbHNlLFxyXG4gICAgc2h3bDogZmFsc2UsXHJcbiAgICBzaG93dzogZmFsc2VcclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIC8vIOinpuWPkeaYvuekulxyXG4gICAgc2hvd1BvcHVwKCkge1xyXG4gICAgICB0aGlzLnNob3cgPSB0cnVlXHJcbiAgICB9LFxyXG4gICAgc2hvd1BvcHVwamlhKCkge1xyXG4gICAgICB0aGlzLnNob3d3ID0gdHJ1ZVxyXG4gICAgfSxcclxuICAgIC8vIOWFs+mXreW8ueWHuuWxglxyXG4gICAgb25DbG9zZSgpIHtcclxuICAgICAgdGhpcy5zaG93ID0gdGhpcy5zaG93dyA9IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==