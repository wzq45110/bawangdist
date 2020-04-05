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
      navigationBarTitleText: '收获地址'
      // backgroundColor: '#eeeeee',
    }, _this.data = {
      color: 'orange',
      borde: 'none',
      list1: [1, 2]
    }, _this.methods = {
      colorbian: function colorbian() {
        this.color = !this.color;
        this.borde = !this.borde;
      },
      newdrem: function newdrem() {
        _wepy2.default.navigateTo({
          url: '/pages/mybz/newdre'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return _default;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(_default , 'pages/mybz/getdre'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdldGRyZS5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjb2xvciIsImJvcmRlIiwibGlzdDEiLCJtZXRob2RzIiwiY29sb3JiaWFuIiwibmV3ZHJlbSIsIndlcHkiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswTEFFRUEsTSxHQUFTO0FBQ1BDLDhCQUF3QixPQURqQjtBQUVQQyw4QkFBd0I7QUFDeEI7QUFITyxLLFFBS1RDLEksR0FBTztBQUNMQyxhQUFPLFFBREY7QUFFTEMsYUFBTyxNQUZGO0FBR0xDLGFBQU8sQ0FBQyxDQUFELEVBQUksQ0FBSjtBQUhGLEssUUFLUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixhQUFLSixLQUFMLEdBQWEsQ0FBQyxLQUFLQSxLQUFuQjtBQUNBLGFBQUtDLEtBQUwsR0FBYSxDQUFDLEtBQUtBLEtBQW5CO0FBQ0QsT0FKTztBQUtSSSxhQUxRLHFCQUtFO0FBQ1JDLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBVE8sSzs7OztFQVhpQkYsZUFBS0csSSIsImZpbGUiOiJnZXRkcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pS26I635Zyw5Z2AJ1xyXG4gICAgLy8gYmFja2dyb3VuZENvbG9yOiAnI2VlZWVlZScsXHJcbiAgfVxyXG4gIGRhdGEgPSB7XHJcbiAgICBjb2xvcjogJ29yYW5nZScsXHJcbiAgICBib3JkZTogJ25vbmUnLFxyXG4gICAgbGlzdDE6IFsxLCAyXVxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgY29sb3JiaWFuKCkge1xyXG4gICAgICB0aGlzLmNvbG9yID0gIXRoaXMuY29sb3JcclxuICAgICAgdGhpcy5ib3JkZSA9ICF0aGlzLmJvcmRlXHJcbiAgICB9LFxyXG4gICAgbmV3ZHJlbSgpIHtcclxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICB1cmw6ICcvcGFnZXMvbXliei9uZXdkcmUnXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==