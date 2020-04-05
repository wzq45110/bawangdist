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
      navigationBarTitleText: '霸王餐详情'
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
        _wepy2.default.navigateTo({
          url: '/pages/bxfb/activez'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return _default;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/bxqy/bainfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhaW5mby5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJzd2lwZXJieExpc3QiLCJpbWFnZV9zcmMiLCJzaG93Iiwic2h3bCIsInNob3d3IiwibWV0aG9kcyIsInNob3dQb3B1cCIsInNob3dQb3B1cGppYSIsIm9uQ2xvc2UiLCJ3ZXB5IiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MExBRUVBLE0sR0FBUztBQUNQQyw4QkFBd0IsT0FEakI7QUFFUEMsOEJBQXdCO0FBQ3hCO0FBSE8sSyxRQUtUQyxJLEdBQU87QUFDTDtBQUNBQyxvQkFBYyxDQUNaLEVBQUVDLFdBQVcsa0NBQWIsRUFEWSxFQUVaLEVBQUVBLFdBQVcsa0NBQWIsRUFGWSxFQUdaLEVBQUVBLFdBQVcsa0NBQWIsRUFIWSxDQUZUO0FBT0xDLFlBQU0sS0FQRDtBQVFMQyxZQUFNLEtBUkQ7QUFTTEMsYUFBTztBQVRGLEssUUFXUEMsTyxHQUFVO0FBQ1I7QUFDQUMsZUFGUSx1QkFFSTtBQUNWLGFBQUtKLElBQUwsR0FBWSxJQUFaO0FBQ0QsT0FKTztBQUtSSyxrQkFMUSwwQkFLTztBQUNiLGFBQUtILEtBQUwsR0FBYSxJQUFiO0FBQ0QsT0FQTzs7QUFRUjtBQUNBSSxhQVRRLHFCQVNFO0FBQ1IsYUFBS04sSUFBTCxHQUFZLEtBQUtFLEtBQUwsR0FBYSxLQUF6QjtBQUNBSyx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQWRPLEs7Ozs7RUFqQmlCRixlQUFLRyxJIiwiZmlsZSI6ImJhaW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpnLjnjovppJDor6bmg4UnXHJcbiAgICAvLyBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlZWVlJyxcclxuICB9XHJcbiAgZGF0YSA9IHtcclxuICAgIC8vIOi9ruaSreWbvuaVsOaNrlxyXG4gICAgc3dpcGVyYnhMaXN0OiBbXHJcbiAgICAgIHsgaW1hZ2Vfc3JjOiAnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvb18wMi5wbmcnIH0sXHJcbiAgICAgIHsgaW1hZ2Vfc3JjOiAnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvb18wMi5wbmcnIH0sXHJcbiAgICAgIHsgaW1hZ2Vfc3JjOiAnLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvb18wMi5wbmcnIH1cclxuICAgIF0sXHJcbiAgICBzaG93OiBmYWxzZSxcclxuICAgIHNod2w6IGZhbHNlLFxyXG4gICAgc2hvd3c6IGZhbHNlXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICAvLyDop6blj5HmmL7npLpcclxuICAgIHNob3dQb3B1cCgpIHtcclxuICAgICAgdGhpcy5zaG93ID0gdHJ1ZVxyXG4gICAgfSxcclxuICAgIHNob3dQb3B1cGppYSgpIHtcclxuICAgICAgdGhpcy5zaG93dyA9IHRydWVcclxuICAgIH0sXHJcbiAgICAvLyDlhbPpl63lvLnlh7rlsYJcclxuICAgIG9uQ2xvc2UoKSB7XHJcbiAgICAgIHRoaXMuc2hvdyA9IHRoaXMuc2hvd3cgPSBmYWxzZVxyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy9wYWdlcy9ieGZiL2FjdGl2ZXonXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==