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
      navigationBarTitleText: '我的保中'
      // backgroundColor: '#eeeeee',
    }, _this.data = {
      xainglist: [{ test: '去看看', url_qu: '/pages/bxqy/bainfo' }, { test: '去看看', url_qu: '/pages/bxqy/bainfo' }, { test: '已开奖', url_qu: '' }, { test: '已开奖', url_qu: '' }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return _default;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/mybf/confirmed'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1lZC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ4YWluZ2xpc3QiLCJ0ZXN0IiwidXJsX3F1Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MExBRUVBLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsOEJBQXdCO0FBQ3hCO0FBSE8sSyxRQUtUQyxJLEdBQU87QUFDTEMsaUJBQVcsQ0FDVCxFQUFFQyxNQUFNLEtBQVIsRUFBZUMsUUFBUSxvQkFBdkIsRUFEUyxFQUVULEVBQUVELE1BQU0sS0FBUixFQUFlQyxRQUFRLG9CQUF2QixFQUZTLEVBR1QsRUFBRUQsTUFBTSxLQUFSLEVBQWVDLFFBQVEsRUFBdkIsRUFIUyxFQUlULEVBQUVELE1BQU0sS0FBUixFQUFlQyxRQUFRLEVBQXZCLEVBSlM7QUFETixLOzs7O0VBTm9CQyxlQUFLQyxJIiwiZmlsZSI6ImNvbmZpcm1lZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTkv53kuK0nXHJcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlZWVlJyxcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIHhhaW5nbGlzdDogW1xyXG4gICAgICB7IHRlc3Q6ICfljrvnnIvnnIsnLCB1cmxfcXU6ICcvcGFnZXMvYnhxeS9iYWluZm8nIH0sXHJcbiAgICAgIHsgdGVzdDogJ+WOu+eci+eciycsIHVybF9xdTogJy9wYWdlcy9ieHF5L2JhaW5mbycgfSxcclxuICAgICAgeyB0ZXN0OiAn5bey5byA5aWWJywgdXJsX3F1OiAnJyB9LFxyXG4gICAgICB7IHRlc3Q6ICflt7LlvIDlpZYnLCB1cmxfcXU6ICcnIH1cclxuICAgIF1cclxuICB9XHJcbn1cclxuIl19