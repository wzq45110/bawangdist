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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _default.__proto__ || Object.getPrototypeOf(_default)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      canIUse: wx.canIUse('button.open-type.getUserInfo'),
      isHide: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_default, [{
    key: 'gozhuye',
    value: function gozhuye() {
      _wepy2.default.switchTab({
        url: '/pages/table/baba'
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var that = this;

      wx.getSetting({
        success: function success(res) {
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function success(res) {
                wx.login({
                  success: function success(res) {
                    console.log('用户的code:' + res.code);
                  }
                });
              }
            });
          } else {
            //   that.setData({
            //     isHide: true
            //   })
            that.gozhuye();
          }
        }
      });
    }
    //

  }, {
    key: 'bindGetUserInfo',
    value: function bindGetUserInfo(e) {
      if (e.detail.userInfo) {
        var that = this;

        console.log('用户的信息如下：');
        console.log(e.detail.userInfo);

        that.setData({
          isHide: false
        });
      } else {
        wx.showModal({
          title: '警告',
          content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
          showCancel: false,
          confirmText: '返回授权',
          success: function success(res) {
            if (res.confirm) {
              console.log('用户点击了“返回授权”');
            }
          }
        });
      }
    }
  }]);

  return _default;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/table/loginquan'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2lucXVhbi5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiY2FuSVVzZSIsInd4IiwiaXNIaWRlIiwid2VweSIsInN3aXRjaFRhYiIsInVybCIsInRoYXQiLCJnZXRTZXR0aW5nIiwic3VjY2VzcyIsInJlcyIsImF1dGhTZXR0aW5nIiwiZ2V0VXNlckluZm8iLCJsb2dpbiIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiZ296aHV5ZSIsImUiLCJkZXRhaWwiLCJ1c2VySW5mbyIsInNldERhdGEiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybVRleHQiLCJjb25maXJtIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBMQUdFQSxJLEdBQU87QUFDTEMsZUFBU0MsR0FBR0QsT0FBSCxDQUFXLDhCQUFYLENBREo7QUFFTEUsY0FBUTtBQUZILEs7Ozs7OzhCQUtHO0FBQ1JDLHFCQUFLQyxTQUFMLENBQWU7QUFDYkMsYUFBSztBQURRLE9BQWY7QUFHRDs7OzZCQUVRO0FBQ1AsVUFBSUMsT0FBTyxJQUFYOztBQUVBTCxTQUFHTSxVQUFILENBQWM7QUFDWkMsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixjQUFJQSxJQUFJQyxXQUFKLENBQWdCLGdCQUFoQixDQUFKLEVBQXVDO0FBQ3JDVCxlQUFHVSxXQUFILENBQWU7QUFDYkgsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlIsbUJBQUdXLEtBQUgsQ0FBUztBQUNQSiwyQkFBUyxzQkFBTztBQUNkSyw0QkFBUUMsR0FBUixDQUFZLGFBQWFMLElBQUlNLElBQTdCO0FBQ0Q7QUFITSxpQkFBVDtBQUtEO0FBUFksYUFBZjtBQVNELFdBVkQsTUFVTztBQUNQO0FBQ0E7QUFDQTtBQUNFVCxpQkFBS1UsT0FBTDtBQUNEO0FBQ0Y7QUFsQlcsT0FBZDtBQW9CRDtBQUNEOzs7O29DQUNnQkMsQyxFQUFHO0FBQ2pCLFVBQUlBLEVBQUVDLE1BQUYsQ0FBU0MsUUFBYixFQUF1QjtBQUNyQixZQUFJYixPQUFPLElBQVg7O0FBRUFPLGdCQUFRQyxHQUFSLENBQVksVUFBWjtBQUNBRCxnQkFBUUMsR0FBUixDQUFZRyxFQUFFQyxNQUFGLENBQVNDLFFBQXJCOztBQUVBYixhQUFLYyxPQUFMLENBQWE7QUFDWGxCLGtCQUFRO0FBREcsU0FBYjtBQUdELE9BVEQsTUFTTztBQUNMRCxXQUFHb0IsU0FBSCxDQUFhO0FBQ1hDLGlCQUFPLElBREk7QUFFWEMsbUJBQVMsK0JBRkU7QUFHWEMsc0JBQVksS0FIRDtBQUlYQyx1QkFBYSxNQUpGO0FBS1hqQixtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGdCQUFJQSxJQUFJaUIsT0FBUixFQUFpQjtBQUNmYixzQkFBUUMsR0FBUixDQUFZLGFBQVo7QUFDRDtBQUNGO0FBVFUsU0FBYjtBQVdEO0FBQ0Y7Ozs7RUE1RDBCWCxlQUFLd0IsSSIsImZpbGUiOiJsb2dpbnF1YW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBkYXRhID0ge1xyXG4gICAgY2FuSVVzZTogd3guY2FuSVVzZSgnYnV0dG9uLm9wZW4tdHlwZS5nZXRVc2VySW5mbycpLFxyXG4gICAgaXNIaWRlOiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgZ296aHV5ZSgpIHtcclxuICAgIHdlcHkuc3dpdGNoVGFiKHtcclxuICAgICAgdXJsOiAnL3BhZ2VzL3RhYmxlL2JhYmEnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgb25Mb2FkKCkge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzXHJcblxyXG4gICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcclxuICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eahGNvZGU6JyArIHJlcy5jb2RlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgIHRoYXQuc2V0RGF0YSh7XHJcbiAgICAgICAgLy8gICAgIGlzSGlkZTogdHJ1ZVxyXG4gICAgICAgIC8vICAgfSlcclxuICAgICAgICAgIHRoYXQuZ296aHV5ZSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICAvL1xyXG4gIGJpbmRHZXRVc2VySW5mbyhlKSB7XHJcbiAgICBpZiAoZS5kZXRhaWwudXNlckluZm8pIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzXHJcblxyXG4gICAgICBjb25zb2xlLmxvZygn55So5oi355qE5L+h5oGv5aaC5LiL77yaJylcclxuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwudXNlckluZm8pXHJcblxyXG4gICAgICB0aGF0LnNldERhdGEoe1xyXG4gICAgICAgIGlzSGlkZTogZmFsc2VcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgdGl0bGU6ICforablkYonLFxyXG4gICAgICAgIGNvbnRlbnQ6ICfmgqjngrnlh7vkuobmi5Lnu53mjojmnYPvvIzlsIbml6Dms5Xov5vlhaXlsI/nqIvluo/vvIzor7fmjojmnYPkuYvlkI7lho3ov5vlhaUhISEnLFxyXG4gICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpcm1UZXh0OiAn6L+U5Zue5o6I5p2DJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye75LqG4oCc6L+U5Zue5o6I5p2D4oCdJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==