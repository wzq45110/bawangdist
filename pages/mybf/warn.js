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
      navigationBarTitleText: '推荐有奖'
      // backgroundColor: '#eeeeee',
    }, _this.data = {
      wenzilist: [{
        imgurl_1: '../../assets/images/wx.png',
        test_2: '接受邀请--邀请成功',
        test_3: '2019-06-7 12:15:01',
        test_4: '获得20霸气值'
      }, {
        imgurl_1: '../../assets/images/wx.png',
        test_2: '接受邀请--邀请成功',
        test_3: '2019-06-7 12:15:01',
        test_4: '获得20霸气值'
      }, {
        imgurl_1: '../../assets/images/wx.png',
        test_2: '接受邀请--邀请成功',
        test_3: '2019-06-7 12:15:01',
        test_4: '获得20霸气值'
      }, {
        imgurl_1: '../../assets/images/wx.png',
        test_2: '接受邀请--邀请成功',
        test_3: '2019-06-7 12:15:01',
        test_4: '获得20霸气值'
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return _default;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/mybf/warn'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhcm4uanMiXSwibmFtZXMiOlsiY29uZmlnIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwid2VuemlsaXN0IiwiaW1ndXJsXzEiLCJ0ZXN0XzIiLCJ0ZXN0XzMiLCJ0ZXN0XzQiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswTEFFRUEsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyw4QkFBd0I7QUFDeEI7QUFITyxLLFFBS1RDLEksR0FBTztBQUNMQyxpQkFBVyxDQUNUO0FBQ0VDLGtCQUFVLDRCQURaO0FBRUVDLGdCQUFRLFlBRlY7QUFHRUMsZ0JBQVEsb0JBSFY7QUFJRUMsZ0JBQVE7QUFKVixPQURTLEVBT1Q7QUFDRUgsa0JBQVUsNEJBRFo7QUFFRUMsZ0JBQVEsWUFGVjtBQUdFQyxnQkFBUSxvQkFIVjtBQUlFQyxnQkFBUTtBQUpWLE9BUFMsRUFhVDtBQUNFSCxrQkFBVSw0QkFEWjtBQUVFQyxnQkFBUSxZQUZWO0FBR0VDLGdCQUFRLG9CQUhWO0FBSUVDLGdCQUFRO0FBSlYsT0FiUyxFQW1CVDtBQUNFSCxrQkFBVSw0QkFEWjtBQUVFQyxnQkFBUSxZQUZWO0FBR0VDLGdCQUFRLG9CQUhWO0FBSUVDLGdCQUFRO0FBSlYsT0FuQlM7QUFETixLOzs7O0VBTm9CQyxlQUFLQyxJIiwiZmlsZSI6Indhcm4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5o6o6I2Q5pyJ5aWWJ1xyXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiAnI2VlZWVlZScsXHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICB3ZW56aWxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIGltZ3VybF8xOiAnLi4vLi4vYXNzZXRzL2ltYWdlcy93eC5wbmcnLFxyXG4gICAgICAgIHRlc3RfMjogJ+aOpeWPl+mCgOivty0t6YKA6K+35oiQ5YqfJyxcclxuICAgICAgICB0ZXN0XzM6ICcyMDE5LTA2LTcgMTI6MTU6MDEnLFxyXG4gICAgICAgIHRlc3RfNDogJ+iOt+W+lzIw6Zy45rCU5YC8J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW1ndXJsXzE6ICcuLi8uLi9hc3NldHMvaW1hZ2VzL3d4LnBuZycsXHJcbiAgICAgICAgdGVzdF8yOiAn5o6l5Y+X6YKA6K+3LS3pgoDor7fmiJDlip8nLFxyXG4gICAgICAgIHRlc3RfMzogJzIwMTktMDYtNyAxMjoxNTowMScsXHJcbiAgICAgICAgdGVzdF80OiAn6I635b6XMjDpnLjmsJTlgLwnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbWd1cmxfMTogJy4uLy4uL2Fzc2V0cy9pbWFnZXMvd3gucG5nJyxcclxuICAgICAgICB0ZXN0XzI6ICfmjqXlj5fpgoDor7ctLemCgOivt+aIkOWKnycsXHJcbiAgICAgICAgdGVzdF8zOiAnMjAxOS0wNi03IDEyOjE1OjAxJyxcclxuICAgICAgICB0ZXN0XzQ6ICfojrflvpcyMOmcuOawlOWAvCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGltZ3VybF8xOiAnLi4vLi4vYXNzZXRzL2ltYWdlcy93eC5wbmcnLFxyXG4gICAgICAgIHRlc3RfMjogJ+aOpeWPl+mCgOivty0t6YKA6K+35oiQ5YqfJyxcclxuICAgICAgICB0ZXN0XzM6ICcyMDE5LTA2LTcgMTI6MTU6MDEnLFxyXG4gICAgICAgIHRlc3RfNDogJ+iOt+W+lzIw6Zy45rCU5YC8J1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG59XHJcbiJdfQ==