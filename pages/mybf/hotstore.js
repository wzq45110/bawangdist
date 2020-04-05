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
      navigationBarTitleText: '霸气值'
    }, _this.data = {
      // 每日任务内容文字
      jianglist: [{
        test_1: '参与每日或自助抽奖',
        test_2: '去参与',
        test_3: '0.3',
        test_4: '霸气值/次, 日上限',
        test_5: '3',
        test_6: '霸气值'
      }, {
        test_1: '参与每日或自助抽奖',
        test_2: '去参与',
        test_3: '0.3',
        test_4: '霸气值/次, 日上限',
        test_5: '3',
        test_6: '霸气值'
      }, {
        test_1: '参与每日或自助抽奖',
        test_2: '去参与',
        test_3: '0.3',
        test_4: '霸气值/次, 日上限',
        test_5: '3',
        test_6: '霸气值'
      }, {
        test_1: '参与每日或自助抽奖',
        test_2: '去参与',
        test_3: '0.3',
        test_4: '霸气值/次, 日上限',
        test_5: '3',
        test_6: '霸气值'
      }],
      // 新手任务内容文字
      xinlist: [{
        testt_1: '下载App',
        testt_2: '50',
        testt_3: '霸气值',
        testt_4: '去下载'
      }, {
        testt_1: '下载App',
        testt_2: '50',
        testt_3: '霸气值',
        testt_4: '去下载'
      }, {
        testt_1: '下载App',
        testt_2: '50',
        testt_3: '霸气值',
        testt_4: '去下载'
      }],
      checked: false,
      steps: [{
        desc: '第一天'
      }, {
        text: '第二天'
      }, {
        text: '第三天'
      }, {
        text: '第四天'
      }, {
        text: '第五天'
      }, {
        text: '第六天'
      }, {
        text: '第七天'
      }]
    }, _this.methods = {
      onChange: function onChange() {
        // 需要手动对 checked 状态进行更新
        this.checked = !this.checked;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return _default;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/mybf/hotstore'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdHN0b3JlLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImppYW5nbGlzdCIsInRlc3RfMSIsInRlc3RfMiIsInRlc3RfMyIsInRlc3RfNCIsInRlc3RfNSIsInRlc3RfNiIsInhpbmxpc3QiLCJ0ZXN0dF8xIiwidGVzdHRfMiIsInRlc3R0XzMiLCJ0ZXN0dF80IiwiY2hlY2tlZCIsInN0ZXBzIiwiZGVzYyIsInRleHQiLCJtZXRob2RzIiwib25DaGFuZ2UiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswTEFFRUEsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyw4QkFBd0I7QUFGakIsSyxRQUlUQyxJLEdBQU87QUFDTDtBQUNBQyxpQkFBVyxDQUNUO0FBQ0VDLGdCQUFRLFdBRFY7QUFFRUMsZ0JBQVEsS0FGVjtBQUdFQyxnQkFBUSxLQUhWO0FBSUVDLGdCQUFRLFlBSlY7QUFLRUMsZ0JBQVEsR0FMVjtBQU1FQyxnQkFBUTtBQU5WLE9BRFMsRUFTVDtBQUNFTCxnQkFBUSxXQURWO0FBRUVDLGdCQUFRLEtBRlY7QUFHRUMsZ0JBQVEsS0FIVjtBQUlFQyxnQkFBUSxZQUpWO0FBS0VDLGdCQUFRLEdBTFY7QUFNRUMsZ0JBQVE7QUFOVixPQVRTLEVBaUJUO0FBQ0VMLGdCQUFRLFdBRFY7QUFFRUMsZ0JBQVEsS0FGVjtBQUdFQyxnQkFBUSxLQUhWO0FBSUVDLGdCQUFRLFlBSlY7QUFLRUMsZ0JBQVEsR0FMVjtBQU1FQyxnQkFBUTtBQU5WLE9BakJTLEVBeUJUO0FBQ0VMLGdCQUFRLFdBRFY7QUFFRUMsZ0JBQVEsS0FGVjtBQUdFQyxnQkFBUSxLQUhWO0FBSUVDLGdCQUFRLFlBSlY7QUFLRUMsZ0JBQVEsR0FMVjtBQU1FQyxnQkFBUTtBQU5WLE9BekJTLENBRk47QUFvQ0w7QUFDQUMsZUFBUyxDQUNQO0FBQ0VDLGlCQUFTLE9BRFg7QUFFRUMsaUJBQVMsSUFGWDtBQUdFQyxpQkFBUyxLQUhYO0FBSUVDLGlCQUFTO0FBSlgsT0FETyxFQU9QO0FBQ0VILGlCQUFTLE9BRFg7QUFFRUMsaUJBQVMsSUFGWDtBQUdFQyxpQkFBUyxLQUhYO0FBSUVDLGlCQUFTO0FBSlgsT0FQTyxFQWFQO0FBQ0VILGlCQUFTLE9BRFg7QUFFRUMsaUJBQVMsSUFGWDtBQUdFQyxpQkFBUyxLQUhYO0FBSUVDLGlCQUFTO0FBSlgsT0FiTyxDQXJDSjtBQXlETEMsZUFBUyxLQXpESjtBQTBETEMsYUFBTyxDQUNMO0FBQ0VDLGNBQU07QUFEUixPQURLLEVBSUw7QUFDRUMsY0FBTTtBQURSLE9BSkssRUFPTDtBQUNFQSxjQUFNO0FBRFIsT0FQSyxFQVVMO0FBQ0VBLGNBQU07QUFEUixPQVZLLEVBYUw7QUFDRUEsY0FBTTtBQURSLE9BYkssRUFnQkw7QUFDRUEsY0FBTTtBQURSLE9BaEJLLEVBbUJMO0FBQ0VBLGNBQU07QUFEUixPQW5CSztBQTFERixLLFFBa0ZQQyxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDRztBQUNUO0FBQ0EsYUFBS0wsT0FBTCxHQUFlLENBQUMsS0FBS0EsT0FBckI7QUFDRDtBQUpPLEs7Ozs7RUF2RmlCTSxlQUFLQyxJIiwiZmlsZSI6ImhvdHN0b3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mcuOawlOWAvCdcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIC8vIOavj+aXpeS7u+WKoeWGheWuueaWh+Wtl1xyXG4gICAgamlhbmdsaXN0OiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXN0XzE6ICflj4LkuI7mr4/ml6XmiJboh6rliqnmir3lpZYnLFxyXG4gICAgICAgIHRlc3RfMjogJ+WOu+WPguS4jicsXHJcbiAgICAgICAgdGVzdF8zOiAnMC4zJyxcclxuICAgICAgICB0ZXN0XzQ6ICfpnLjmsJTlgLwv5qyhLCDml6XkuIrpmZAnLFxyXG4gICAgICAgIHRlc3RfNTogJzMnLFxyXG4gICAgICAgIHRlc3RfNjogJ+mcuOawlOWAvCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRlc3RfMTogJ+WPguS4juavj+aXpeaIluiHquWKqeaKveWllicsXHJcbiAgICAgICAgdGVzdF8yOiAn5Y675Y+C5LiOJyxcclxuICAgICAgICB0ZXN0XzM6ICcwLjMnLFxyXG4gICAgICAgIHRlc3RfNDogJ+mcuOawlOWAvC/mrKEsIOaXpeS4iumZkCcsXHJcbiAgICAgICAgdGVzdF81OiAnMycsXHJcbiAgICAgICAgdGVzdF82OiAn6Zy45rCU5YC8J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGVzdF8xOiAn5Y+C5LiO5q+P5pel5oiW6Ieq5Yqp5oq95aWWJyxcclxuICAgICAgICB0ZXN0XzI6ICfljrvlj4LkuI4nLFxyXG4gICAgICAgIHRlc3RfMzogJzAuMycsXHJcbiAgICAgICAgdGVzdF80OiAn6Zy45rCU5YC8L+asoSwg5pel5LiK6ZmQJyxcclxuICAgICAgICB0ZXN0XzU6ICczJyxcclxuICAgICAgICB0ZXN0XzY6ICfpnLjmsJTlgLwnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXN0XzE6ICflj4LkuI7mr4/ml6XmiJboh6rliqnmir3lpZYnLFxyXG4gICAgICAgIHRlc3RfMjogJ+WOu+WPguS4jicsXHJcbiAgICAgICAgdGVzdF8zOiAnMC4zJyxcclxuICAgICAgICB0ZXN0XzQ6ICfpnLjmsJTlgLwv5qyhLCDml6XkuIrpmZAnLFxyXG4gICAgICAgIHRlc3RfNTogJzMnLFxyXG4gICAgICAgIHRlc3RfNjogJ+mcuOawlOWAvCdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIC8vIOaWsOaJi+S7u+WKoeWGheWuueaWh+Wtl1xyXG4gICAgeGlubGlzdDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGVzdHRfMTogJ+S4i+i9vUFwcCcsXHJcbiAgICAgICAgdGVzdHRfMjogJzUwJyxcclxuICAgICAgICB0ZXN0dF8zOiAn6Zy45rCU5YC8JyxcclxuICAgICAgICB0ZXN0dF80OiAn5Y675LiL6L29J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGVzdHRfMTogJ+S4i+i9vUFwcCcsXHJcbiAgICAgICAgdGVzdHRfMjogJzUwJyxcclxuICAgICAgICB0ZXN0dF8zOiAn6Zy45rCU5YC8JyxcclxuICAgICAgICB0ZXN0dF80OiAn5Y675LiL6L29J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGVzdHRfMTogJ+S4i+i9vUFwcCcsXHJcbiAgICAgICAgdGVzdHRfMjogJzUwJyxcclxuICAgICAgICB0ZXN0dF8zOiAn6Zy45rCU5YC8JyxcclxuICAgICAgICB0ZXN0dF80OiAn5Y675LiL6L29J1xyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgY2hlY2tlZDogZmFsc2UsXHJcbiAgICBzdGVwczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgZGVzYzogJ+esrOS4gOWkqSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICfnrKzkuozlpKknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAn56ys5LiJ5aSpJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ+esrOWbm+WkqSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICfnrKzkupTlpKknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAn56ys5YWt5aSpJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ+esrOS4g+WkqSdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgb25DaGFuZ2UoKSB7XHJcbiAgICAgIC8vIOmcgOimgeaJi+WKqOWvuSBjaGVja2VkIOeKtuaAgei/m+ihjOabtOaWsFxyXG4gICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==