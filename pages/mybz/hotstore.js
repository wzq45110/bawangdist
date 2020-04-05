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

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvdHN0b3JlLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJqaWFuZ2xpc3QiLCJ0ZXN0XzEiLCJ0ZXN0XzIiLCJ0ZXN0XzMiLCJ0ZXN0XzQiLCJ0ZXN0XzUiLCJ0ZXN0XzYiLCJ4aW5saXN0IiwidGVzdHRfMSIsInRlc3R0XzIiLCJ0ZXN0dF8zIiwidGVzdHRfNCIsImNoZWNrZWQiLCJzdGVwcyIsImRlc2MiLCJ0ZXh0IiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MExBRUVBLEksR0FBTztBQUNMO0FBQ0FDLGlCQUFXLENBQ1Q7QUFDRUMsZ0JBQVEsV0FEVjtBQUVFQyxnQkFBUSxLQUZWO0FBR0VDLGdCQUFRLEtBSFY7QUFJRUMsZ0JBQVEsWUFKVjtBQUtFQyxnQkFBUSxHQUxWO0FBTUVDLGdCQUFRO0FBTlYsT0FEUyxFQVNUO0FBQ0VMLGdCQUFRLFdBRFY7QUFFRUMsZ0JBQVEsS0FGVjtBQUdFQyxnQkFBUSxLQUhWO0FBSUVDLGdCQUFRLFlBSlY7QUFLRUMsZ0JBQVEsR0FMVjtBQU1FQyxnQkFBUTtBQU5WLE9BVFMsRUFpQlQ7QUFDRUwsZ0JBQVEsV0FEVjtBQUVFQyxnQkFBUSxLQUZWO0FBR0VDLGdCQUFRLEtBSFY7QUFJRUMsZ0JBQVEsWUFKVjtBQUtFQyxnQkFBUSxHQUxWO0FBTUVDLGdCQUFRO0FBTlYsT0FqQlMsRUF5QlQ7QUFDRUwsZ0JBQVEsV0FEVjtBQUVFQyxnQkFBUSxLQUZWO0FBR0VDLGdCQUFRLEtBSFY7QUFJRUMsZ0JBQVEsWUFKVjtBQUtFQyxnQkFBUSxHQUxWO0FBTUVDLGdCQUFRO0FBTlYsT0F6QlMsQ0FGTjtBQW9DTDtBQUNBQyxlQUFTLENBQ1A7QUFDRUMsaUJBQVMsT0FEWDtBQUVFQyxpQkFBUyxJQUZYO0FBR0VDLGlCQUFTLEtBSFg7QUFJRUMsaUJBQVM7QUFKWCxPQURPLEVBT1A7QUFDRUgsaUJBQVMsT0FEWDtBQUVFQyxpQkFBUyxJQUZYO0FBR0VDLGlCQUFTLEtBSFg7QUFJRUMsaUJBQVM7QUFKWCxPQVBPLEVBYVA7QUFDRUgsaUJBQVMsT0FEWDtBQUVFQyxpQkFBUyxJQUZYO0FBR0VDLGlCQUFTLEtBSFg7QUFJRUMsaUJBQVM7QUFKWCxPQWJPLENBckNKO0FBeURMQyxlQUFTLEtBekRKO0FBMERMQyxhQUFPLENBQ0w7QUFDRUMsY0FBTTtBQURSLE9BREssRUFJTDtBQUNFQyxjQUFNO0FBRFIsT0FKSyxFQU9MO0FBQ0VBLGNBQU07QUFEUixPQVBLLEVBVUw7QUFDRUEsY0FBTTtBQURSLE9BVkssRUFhTDtBQUNFQSxjQUFNO0FBRFIsT0FiSyxFQWdCTDtBQUNFQSxjQUFNO0FBRFIsT0FoQkssRUFtQkw7QUFDRUEsY0FBTTtBQURSLE9BbkJLO0FBMURGLEssUUFrRlBDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1Q7QUFDQSxhQUFLTCxPQUFMLEdBQWUsQ0FBQyxLQUFLQSxPQUFyQjtBQUNEO0FBSk8sSzs7OztFQW5GaUJNLGVBQUtDLEkiLCJmaWxlIjoiaG90c3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGRhdGEgPSB7XHJcbiAgICAvLyDmr4/ml6Xku7vliqHlhoXlrrnmloflrZdcclxuICAgIGppYW5nbGlzdDogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGVzdF8xOiAn5Y+C5LiO5q+P5pel5oiW6Ieq5Yqp5oq95aWWJyxcclxuICAgICAgICB0ZXN0XzI6ICfljrvlj4LkuI4nLFxyXG4gICAgICAgIHRlc3RfMzogJzAuMycsXHJcbiAgICAgICAgdGVzdF80OiAn6Zy45rCU5YC8L+asoSwg5pel5LiK6ZmQJyxcclxuICAgICAgICB0ZXN0XzU6ICczJyxcclxuICAgICAgICB0ZXN0XzY6ICfpnLjmsJTlgLwnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXN0XzE6ICflj4LkuI7mr4/ml6XmiJboh6rliqnmir3lpZYnLFxyXG4gICAgICAgIHRlc3RfMjogJ+WOu+WPguS4jicsXHJcbiAgICAgICAgdGVzdF8zOiAnMC4zJyxcclxuICAgICAgICB0ZXN0XzQ6ICfpnLjmsJTlgLwv5qyhLCDml6XkuIrpmZAnLFxyXG4gICAgICAgIHRlc3RfNTogJzMnLFxyXG4gICAgICAgIHRlc3RfNjogJ+mcuOawlOWAvCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRlc3RfMTogJ+WPguS4juavj+aXpeaIluiHquWKqeaKveWllicsXHJcbiAgICAgICAgdGVzdF8yOiAn5Y675Y+C5LiOJyxcclxuICAgICAgICB0ZXN0XzM6ICcwLjMnLFxyXG4gICAgICAgIHRlc3RfNDogJ+mcuOawlOWAvC/mrKEsIOaXpeS4iumZkCcsXHJcbiAgICAgICAgdGVzdF81OiAnMycsXHJcbiAgICAgICAgdGVzdF82OiAn6Zy45rCU5YC8J1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGVzdF8xOiAn5Y+C5LiO5q+P5pel5oiW6Ieq5Yqp5oq95aWWJyxcclxuICAgICAgICB0ZXN0XzI6ICfljrvlj4LkuI4nLFxyXG4gICAgICAgIHRlc3RfMzogJzAuMycsXHJcbiAgICAgICAgdGVzdF80OiAn6Zy45rCU5YC8L+asoSwg5pel5LiK6ZmQJyxcclxuICAgICAgICB0ZXN0XzU6ICczJyxcclxuICAgICAgICB0ZXN0XzY6ICfpnLjmsJTlgLwnXHJcbiAgICAgIH1cclxuICAgIF0sXHJcbiAgICAvLyDmlrDmiYvku7vliqHlhoXlrrnmloflrZdcclxuICAgIHhpbmxpc3Q6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRlc3R0XzE6ICfkuIvovb1BcHAnLFxyXG4gICAgICAgIHRlc3R0XzI6ICc1MCcsXHJcbiAgICAgICAgdGVzdHRfMzogJ+mcuOawlOWAvCcsXHJcbiAgICAgICAgdGVzdHRfNDogJ+WOu+S4i+i9vSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRlc3R0XzE6ICfkuIvovb1BcHAnLFxyXG4gICAgICAgIHRlc3R0XzI6ICc1MCcsXHJcbiAgICAgICAgdGVzdHRfMzogJ+mcuOawlOWAvCcsXHJcbiAgICAgICAgdGVzdHRfNDogJ+WOu+S4i+i9vSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRlc3R0XzE6ICfkuIvovb1BcHAnLFxyXG4gICAgICAgIHRlc3R0XzI6ICc1MCcsXHJcbiAgICAgICAgdGVzdHRfMzogJ+mcuOawlOWAvCcsXHJcbiAgICAgICAgdGVzdHRfNDogJ+WOu+S4i+i9vSdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgc3RlcHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGRlc2M6ICfnrKzkuIDlpKknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAn56ys5LqM5aSpJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ+esrOS4ieWkqSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICfnrKzlm5vlpKknXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiAn56ys5LqU5aSpJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogJ+esrOWFreWkqSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6ICfnrKzkuIPlpKknXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9XHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIG9uQ2hhbmdlKCkge1xyXG4gICAgICAvLyDpnIDopoHmiYvliqjlr7kgY2hlY2tlZCDnirbmgIHov5vooYzmm7TmlrBcclxuICAgICAgdGhpcy5jaGVja2VkID0gIXRoaXMuY2hlY2tlZFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=