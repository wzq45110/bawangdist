'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTextStyle: 'white',
      navigationBarTitleText: '霸王详情'
      // backgroundColor: '#eeeeee',
    }, _this.data = {
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/bxfb/activede'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2ZWRlLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInN3aXBlcmJ4TGlzdCIsImltYWdlX3NyYyIsInNob3ciLCJzaHdsIiwic2hvd3ciLCJtZXRob2RzIiwic2hvd1BvcHVwIiwic2hvd1BvcHVwamlhIiwib25DbG9zZSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBMQUVFQSxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLDhCQUF3QjtBQUN4QjtBQUhPLEssUUFLVEMsSSxHQUFPO0FBQ0w7QUFDQUMsb0JBQWMsQ0FDWixFQUFFQyxXQUFXLGtDQUFiLEVBRFksRUFFWixFQUFFQSxXQUFXLGtDQUFiLEVBRlksRUFHWixFQUFFQSxXQUFXLGtDQUFiLEVBSFksQ0FGVDtBQU9MQyxZQUFNLEtBUEQ7QUFRTEMsWUFBTSxLQVJEO0FBU0xDLGFBQU87QUFURixLLFFBV1BDLE8sR0FBVTtBQUNSO0FBQ0FDLGVBRlEsdUJBRUk7QUFDVixhQUFLSixJQUFMLEdBQVksSUFBWjtBQUNELE9BSk87QUFLUkssa0JBTFEsMEJBS087QUFDYixhQUFLSCxLQUFMLEdBQWEsSUFBYjtBQUNELE9BUE87O0FBUVI7QUFDQUksYUFUUSxxQkFTRTtBQUNSLGFBQUtOLElBQUwsR0FBWSxLQUFLRSxLQUFMLEdBQWEsS0FBekI7QUFDRDtBQVhPLEs7Ozs7RUFqQmlCSyxlQUFLQyxJIiwiZmlsZSI6ImFjdGl2ZWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Zy4546L6K+m5oOFJ1xuICAgIC8vIGJhY2tncm91bmRDb2xvcjogJyNlZWVlZWUnLFxuICB9XG4gIGRhdGEgPSB7XG4gICAgLy8g6L2u5pKt5Zu+5pWw5o2uXG4gICAgc3dpcGVyYnhMaXN0OiBbXG4gICAgICB7IGltYWdlX3NyYzogJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb29fMDIucG5nJyB9LFxuICAgICAgeyBpbWFnZV9zcmM6ICcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ29vXzAyLnBuZycgfSxcbiAgICAgIHsgaW1hZ2Vfc3JjOiAnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvb18wMi5wbmcnIH1cbiAgICBdLFxuICAgIHNob3c6IGZhbHNlLFxuICAgIHNod2w6IGZhbHNlLFxuICAgIHNob3d3OiBmYWxzZVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgLy8g6Kem5Y+R5pi+56S6XG4gICAgc2hvd1BvcHVwKCkge1xuICAgICAgdGhpcy5zaG93ID0gdHJ1ZVxuICAgIH0sXG4gICAgc2hvd1BvcHVwamlhKCkge1xuICAgICAgdGhpcy5zaG93dyA9IHRydWVcbiAgICB9LFxuICAgIC8vIOWFs+mXreW8ueWHuuWxglxuICAgIG9uQ2xvc2UoKSB7XG4gICAgICB0aGlzLnNob3cgPSB0aGlzLnNob3d3ID0gZmFsc2VcbiAgICB9XG4gIH1cbn1cbiJdfQ==