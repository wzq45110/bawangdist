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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2ZWRlLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJzd2lwZXJieExpc3QiLCJpbWFnZV9zcmMiLCJzaG93Iiwic2h3bCIsInNob3d3IiwibWV0aG9kcyIsInNob3dQb3B1cCIsInNob3dQb3B1cGppYSIsIm9uQ2xvc2UiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswTEFFRUEsSSxHQUFPO0FBQ0w7QUFDQUMsb0JBQWMsQ0FDWixFQUFFQyxXQUFXLGtDQUFiLEVBRFksRUFFWixFQUFFQSxXQUFXLGtDQUFiLEVBRlksRUFHWixFQUFFQSxXQUFXLGtDQUFiLEVBSFksQ0FGVDtBQU9MQyxZQUFNLEtBUEQ7QUFRTEMsWUFBTSxLQVJEO0FBU0xDLGFBQU87QUFURixLLFFBV1BDLE8sR0FBVTtBQUNSO0FBQ0FDLGVBRlEsdUJBRUk7QUFDVixhQUFLSixJQUFMLEdBQVksSUFBWjtBQUNELE9BSk87QUFLUkssa0JBTFEsMEJBS087QUFDYixhQUFLSCxLQUFMLEdBQWEsSUFBYjtBQUNELE9BUE87O0FBUVI7QUFDQUksYUFUUSxxQkFTRTtBQUNSLGFBQUtOLElBQUwsR0FBWSxLQUFLRSxLQUFMLEdBQWEsS0FBekI7QUFDRDtBQVhPLEs7Ozs7RUFaaUJLLGVBQUtDLEkiLCJmaWxlIjoiYWN0aXZlZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICAvLyDova7mkq3lm77mlbDmja5cclxuICAgIHN3aXBlcmJ4TGlzdDogW1xyXG4gICAgICB7IGltYWdlX3NyYzogJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb29fMDIucG5nJyB9LFxyXG4gICAgICB7IGltYWdlX3NyYzogJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb29fMDIucG5nJyB9LFxyXG4gICAgICB7IGltYWdlX3NyYzogJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb29fMDIucG5nJyB9XHJcbiAgICBdLFxyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgICBzaHdsOiBmYWxzZSxcclxuICAgIHNob3d3OiBmYWxzZVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgLy8g6Kem5Y+R5pi+56S6XHJcbiAgICBzaG93UG9wdXAoKSB7XHJcbiAgICAgIHRoaXMuc2hvdyA9IHRydWVcclxuICAgIH0sXHJcbiAgICBzaG93UG9wdXBqaWEoKSB7XHJcbiAgICAgIHRoaXMuc2hvd3cgPSB0cnVlXHJcbiAgICB9LFxyXG4gICAgLy8g5YWz6Zet5by55Ye65bGCXHJcbiAgICBvbkNsb3NlKCkge1xyXG4gICAgICB0aGlzLnNob3cgPSB0aGlzLnNob3d3ID0gZmFsc2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19