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
      navigationBarTitleText: '首页'
    }, _this.data = {
      // 弹出层是否显示
      show: false,
      // 轮播图数据
      swiperList: [{ image_src: '../../assets/images/swip.png' }, { image_src: '../../assets/images/swip.png' }, { image_src: '../../assets/images/swip.png' }],
      mainaxrelist: [{ image_src: '../../assets/images/logoo1_02.png' }, { image_src: '../../assets/images/logoo_02.png' }, { image_src: '../../assets/images/logoo_02.png' }]
      // 弹出框地区
    }, _this.methods = {
      // 点击城市弹出区选项
      showPopup: function showPopup() {
        this.show = true;
      },
      onClose: function onClose() {
        this.show = false;
      },

      // 点击参与跳转到霸王跳转到详情页面
      quebawang: function quebawang() {
        _wepy2.default.navigateTo({
          url: '/pages/bxqy/bainfo'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return _default;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/table/baba'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhYmEuanMiXSwibmFtZXMiOlsiY29uZmlnIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2hvdyIsInN3aXBlckxpc3QiLCJpbWFnZV9zcmMiLCJtYWluYXhyZWxpc3QiLCJtZXRob2RzIiwic2hvd1BvcHVwIiwib25DbG9zZSIsInF1ZWJhd2FuZyIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswTEFHRUEsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyw4QkFBd0I7QUFGakIsSyxRQUlUQyxJLEdBQU87QUFDTDtBQUNBQyxZQUFNLEtBRkQ7QUFHTDtBQUNBQyxrQkFBWSxDQUNWLEVBQUVDLFdBQVcsOEJBQWIsRUFEVSxFQUVWLEVBQUVBLFdBQVcsOEJBQWIsRUFGVSxFQUdWLEVBQUVBLFdBQVcsOEJBQWIsRUFIVSxDQUpQO0FBU0xDLG9CQUFjLENBQ1osRUFBRUQsV0FBVyxtQ0FBYixFQURZLEVBRVosRUFBRUEsV0FBVyxrQ0FBYixFQUZZLEVBR1osRUFBRUEsV0FBVyxrQ0FBYixFQUhZO0FBS2Q7QUFkSyxLLFFBZ0JQRSxPLEdBQVU7QUFDUjtBQUNBQyxlQUZRLHVCQUVJO0FBQ1YsYUFBS0wsSUFBTCxHQUFZLElBQVo7QUFDRCxPQUpPO0FBTVJNLGFBTlEscUJBTUU7QUFDUixhQUFLTixJQUFMLEdBQVksS0FBWjtBQUNELE9BUk87O0FBU1I7QUFDQU8sZUFWUSx1QkFVSTtBQUNWQyx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQWRPLEs7Ozs7RUFyQmlCRixlQUFLRyxJIiwiZmlsZSI6ImJhYmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mmlumhtSdcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIC8vIOW8ueWHuuWxguaYr+WQpuaYvuekulxyXG4gICAgc2hvdzogZmFsc2UsXHJcbiAgICAvLyDova7mkq3lm77mlbDmja5cclxuICAgIHN3aXBlckxpc3Q6IFtcclxuICAgICAgeyBpbWFnZV9zcmM6ICcuLi8uLi9hc3NldHMvaW1hZ2VzL3N3aXAucG5nJyB9LFxyXG4gICAgICB7IGltYWdlX3NyYzogJy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3dpcC5wbmcnIH0sXHJcbiAgICAgIHsgaW1hZ2Vfc3JjOiAnLi4vLi4vYXNzZXRzL2ltYWdlcy9zd2lwLnBuZycgfVxyXG4gICAgXSxcclxuICAgIG1haW5heHJlbGlzdDogW1xyXG4gICAgICB7IGltYWdlX3NyYzogJy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb28xXzAyLnBuZycgfSxcclxuICAgICAgeyBpbWFnZV9zcmM6ICcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ29vXzAyLnBuZycgfSxcclxuICAgICAgeyBpbWFnZV9zcmM6ICcuLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ29vXzAyLnBuZycgfVxyXG4gICAgXVxyXG4gICAgLy8g5by55Ye65qGG5Zyw5Yy6XHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICAvLyDngrnlh7vln47luILlvLnlh7rljLrpgInpoblcclxuICAgIHNob3dQb3B1cCgpIHtcclxuICAgICAgdGhpcy5zaG93ID0gdHJ1ZVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkNsb3NlKCkge1xyXG4gICAgICB0aGlzLnNob3cgPSBmYWxzZVxyXG4gICAgfSxcclxuICAgIC8vIOeCueWHu+WPguS4jui3s+i9rOWIsOmcuOeOi+i3s+i9rOWIsOivpuaDhemhtemdolxyXG4gICAgcXVlYmF3YW5nKCkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy9wYWdlcy9ieHF5L2JhaW5mbydcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19