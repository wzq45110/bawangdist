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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/bxfb/activedui'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2ZWR1aS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzd2lwZXJieExpc3QiLCJpbWFnZV9zcmMiLCJzaG93Iiwic2h3bCIsInNob3d3IiwibWV0aG9kcyIsInNob3dQb3B1cCIsInNob3dQb3B1cGppYSIsIm9uQ2xvc2UiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswTEFFRUEsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyw4QkFBd0I7QUFDeEI7QUFITyxLLFFBS1RDLEksR0FBTztBQUNMO0FBQ0FDLG9CQUFjLENBQ1osRUFBRUMsV0FBVyxrQ0FBYixFQURZLEVBRVosRUFBRUEsV0FBVyxrQ0FBYixFQUZZLEVBR1osRUFBRUEsV0FBVyxrQ0FBYixFQUhZLENBRlQ7QUFPTEMsWUFBTSxLQVBEO0FBUUxDLFlBQU0sS0FSRDtBQVNMQyxhQUFPO0FBVEYsSyxRQVdQQyxPLEdBQVU7QUFDUjtBQUNBQyxlQUZRLHVCQUVJO0FBQ1YsYUFBS0osSUFBTCxHQUFZLElBQVo7QUFDRCxPQUpPO0FBS1JLLGtCQUxRLDBCQUtPO0FBQ2IsYUFBS0gsS0FBTCxHQUFhLElBQWI7QUFDRCxPQVBPOztBQVFSO0FBQ0FJLGFBVFEscUJBU0U7QUFDUixhQUFLTixJQUFMLEdBQVksS0FBS0UsS0FBTCxHQUFhLEtBQXpCO0FBQ0Q7QUFYTyxLOzs7O0VBakJpQkssZUFBS0MsSSIsImZpbGUiOiJhY3RpdmVkdWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Zy4546L6K+m5oOFJ1xyXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiAnI2VlZWVlZScsXHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICAvLyDova7mkq3lm77mlbDmja5cclxuICAgIHN3aXBlcmJ4TGlzdDogW1xyXG4gICAgICB7IGltYWdlX3NyYzogJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb29fMDIucG5nJyB9LFxyXG4gICAgICB7IGltYWdlX3NyYzogJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb29fMDIucG5nJyB9LFxyXG4gICAgICB7IGltYWdlX3NyYzogJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb29fMDIucG5nJyB9XHJcbiAgICBdLFxyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgICBzaHdsOiBmYWxzZSxcclxuICAgIHNob3d3OiBmYWxzZVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgLy8g6Kem5Y+R5pi+56S6XHJcbiAgICBzaG93UG9wdXAoKSB7XHJcbiAgICAgIHRoaXMuc2hvdyA9IHRydWVcclxuICAgIH0sXHJcbiAgICBzaG93UG9wdXBqaWEoKSB7XHJcbiAgICAgIHRoaXMuc2hvd3cgPSB0cnVlXHJcbiAgICB9LFxyXG4gICAgLy8g5YWz6Zet5by55Ye65bGCXHJcbiAgICBvbkNsb3NlKCkge1xyXG4gICAgICB0aGlzLnNob3cgPSB0aGlzLnNob3d3ID0gZmFsc2VcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19