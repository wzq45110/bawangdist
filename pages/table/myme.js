'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      navigationBarTitleText: '我的'
      // backgroundColor: '#eeeeee',
    }, _this.data = {
      daolist: [{ number_i: 3, test: '我的保中', url_to: '/pages/mybf/confirmed' }, { number_i: 5, test: '我参与的', url_to: '' }, { number_i: 2, test: '中奖纪录', url_to: '' }]
    }, _this.methods = {
      // 跳转 我的资料页面
      taizhaun: function taizhaun() {
        _wepy2.default.navigateTo({
          url: '/pages/mybf/infoxin'
        });
      },
      gobaqizhi: function gobaqizhi() {
        _wepy2.default.navigateTo({
          url: '/pages/mybf/hotstore'
        });
      },
      gotuijian: function gotuijian() {
        _wepy2.default.navigateTo({
          url: '/pages/mybf/warn'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'onLoad',

    // 测试调用登录用户
    value: function onLoad() {
      // this.tobgkfgds()
    }
  }]);

  return _default;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/table/myme'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15bWUuanMiXSwibmFtZXMiOlsiY29uZmlnIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiZGFvbGlzdCIsIm51bWJlcl9pIiwidGVzdCIsInVybF90byIsIm1ldGhvZHMiLCJ0YWl6aGF1biIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZ29iYXFpemhpIiwiZ290dWlqaWFuIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBMQUdFQSxNLEdBQVM7QUFDUEMsOEJBQXdCLE9BRGpCO0FBRVBDLDhCQUF3QjtBQUN4QjtBQUhPLEssUUFLVEMsSSxHQUFPO0FBQ0xDLGVBQVMsQ0FDUCxFQUFFQyxVQUFVLENBQVosRUFBZUMsTUFBTSxNQUFyQixFQUE2QkMsUUFBUSx1QkFBckMsRUFETyxFQUVQLEVBQUVGLFVBQVUsQ0FBWixFQUFlQyxNQUFNLE1BQXJCLEVBQTZCQyxRQUFRLEVBQXJDLEVBRk8sRUFHUCxFQUFFRixVQUFVLENBQVosRUFBZUMsTUFBTSxNQUFyQixFQUE2QkMsUUFBUSxFQUFyQyxFQUhPO0FBREosSyxRQVVQQyxPLEdBQVU7QUFDUjtBQUNBQyxjQUZRLHNCQUVHO0FBQ1RDLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BTk87QUFPUkMsZUFQUSx1QkFPSTtBQUNWSCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQVhPO0FBWVJFLGVBWlEsdUJBWUk7QUFDVkosdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFoQk8sSzs7Ozs7O0FBa0JWOzZCQXJCUztBQUNQO0FBQ0Q7Ozs7RUFmMEJGLGVBQUtLLEkiLCJmaWxlIjoibXltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJ1xyXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiAnI2VlZWVlZScsXHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBkYW9saXN0OiBbXHJcbiAgICAgIHsgbnVtYmVyX2k6IDMsIHRlc3Q6ICfmiJHnmoTkv53kuK0nLCB1cmxfdG86ICcvcGFnZXMvbXliZi9jb25maXJtZWQnIH0sXHJcbiAgICAgIHsgbnVtYmVyX2k6IDUsIHRlc3Q6ICfmiJHlj4LkuI7nmoQnLCB1cmxfdG86ICcnIH0sXHJcbiAgICAgIHsgbnVtYmVyX2k6IDIsIHRlc3Q6ICfkuK3lpZbnuqrlvZUnLCB1cmxfdG86ICcnIH1cclxuICAgIF1cclxuICB9XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgLy8gdGhpcy50b2Jna2ZnZHMoKVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgLy8g6Lez6L2sIOaIkeeahOi1hOaWmemhtemdolxyXG4gICAgdGFpemhhdW4oKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL215YmYvaW5mb3hpbidcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBnb2JhcWl6aGkoKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnL3BhZ2VzL215YmYvaG90c3RvcmUnXHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZ290dWlqaWFuKCkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy9wYWdlcy9teWJmL3dhcm4nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIOa1i+ivleiwg+eUqOeZu+W9leeUqOaIt1xyXG59XHJcbiJdfQ==