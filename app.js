'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: [
      // 底部tab栏
      // 'pages/table/loginquan',
      'pages/table/baba', 'pages/table/attention', 'pages/table/myme'
      // 我的保中页面
      // 'pages/mybz/confirmed',
      // // 我的资料页面
      // 'pages/mybz/infoxin'
      // // 霸气值页面
      // 'pages/mybz/hotstore',
      // // 推荐有奖页面
      // 'pages/mybz/warn',
      // // 收货地址页面
      // 'pages/mybz/getdre',
      // // 新增地址页面
      // 'pages/mybz/newdre',
      // // 新增霸王详情页面
      // 'pages/bxqy/bainfo',
      // // 我要anzhu 页面
      // 'pages/bxqy/anzhu',
      // // 分店页面
      // 'pages/bxqy/fendan',
      // // 商户页面
      // 'pages/mybz/shanghu',
      // // 内容页面
      // 'pages/bxqy/bletter',
      // // 中奖填写地址
      // 'pages/bxqy/activede',
      // // 中将填写兑奖
      // 'pages/bxqy/activedui',
      // // 已中奖
      // 'pages/bxqy/activez',
      // 'pages/bxqy/activew'
      ],
      // 配置分包加载
      subPackages: [{
        root: 'pages/bxfb',
        pages: ['activew', 'activez', 'activedui', 'activede']
      }, {
        root: 'pages/mybz',
        pages: ['getdre', 'newdre', 'shanghu']
      }, {
        root: 'pages/mybf',
        pages: ['confirmed', 'infoxin', 'hotstore', 'warn']
      }, {
        root: 'pages/bxqy',
        pages: ['bletter', 'anzhu', 'bainfo', 'fendan']
      }],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#FF7900',
        navigationBarTitleText: '霸王到',
        navigationBarTextStyle: 'black'
      },
      tabBar: {
        // 选中的文本颜色
        selectedColor: '#FF8D29',
        // 所有 tabBar 节点的配置数组
        list: [{
          // 页面路径
          pagePath: 'pages/table/baba',
          // 显示的文本
          text: '',
          // 默认图标路径
          iconPath: '/assets/font-icon/ba.png',
          // 选中之后的图标路径
          selectedIconPath: '/assets/font-icon/ba.png'
          // 导航栏标题内容
          // navigationBarTitleText：'首页'
        }, {
          pagePath: 'pages/table/attention',
          text: '关注',
          iconPath: '/assets/font-icon/attention.png',
          selectedIconPath: '/assets/font-icon/attentionactive.png'
        }, {
          pagePath: 'pages/table/myme',
          text: '我的',
          iconPath: '/assets/font-icon/me.png',
          selectedIconPath: '/assets/font-icon/meactive.png'
          // navigationBarTitleText：'我的'
        }]
      },
      // 引入并全局注册组件
      usingComponents: {
        'van-row': './assets/vant/row/index',
        'van-col': './assets/vant/col/index',
        // 图标
        'van-icon': './assets/vant/icon/index',
        // 搜索
        'van-search': './assets/vant/search/index',
        // 按钮
        'van-button': './assets/vant/button/index',
        // 弹出层
        'van-popup': './assets/vant/popup/index',
        // grid宫格
        'van-grid': './assets/vant/grid/index',
        'van-grid-item': './assets/vant/grid-item/index',
        // 单元格
        'van-cell': './assets/vant/cell/index',
        'van-cell-group': './assets/vant/cell-group/index',
        // 分割线
        'van-divider': './assets/vant/divider/index',
        // switch开关
        'van-switch': './assets/vant/switch/index',
        // 步骤条
        'van-steps': './assets/vant/steps/index',
        // 单选框
        'van-radio': './assets/vant/radio/index',
        'van-radio-group': './assets/vant/radio-group/index',
        // tag标签
        'van-tag': './assets/vant/tag/index',
        // 输入框
        'van-field': './assets/vant/field/index',
        // tab 标签页面
        'van-tab': './assets/vant/tab/index',
        'van-tabs': './assets/vant/tabs/index'
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      console.log('小程序启动了');
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInN1YlBhY2thZ2VzIiwicm9vdCIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJzZWxlY3RlZENvbG9yIiwibGlzdCIsInBhZ2VQYXRoIiwidGV4dCIsImljb25QYXRoIiwic2VsZWN0ZWRJY29uUGF0aCIsInVzaW5nQ29tcG9uZW50cyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsImNvbnNvbGUiLCJsb2ciLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBeUlFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUF2SWRBLE1BdUljLEdBdklMO0FBQ1BDLGFBQU87QUFDTDtBQUNBO0FBQ0Esd0JBSEssRUFJTCx1QkFKSyxFQUtMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxDSyxPQURBO0FBcUNQO0FBQ0FDLG1CQUFhLENBQ1g7QUFDRUMsY0FBTSxZQURSO0FBRUVGLGVBQU8sQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixXQUF2QixFQUFvQyxVQUFwQztBQUZULE9BRFcsRUFLWDtBQUNFRSxjQUFNLFlBRFI7QUFFRUYsZUFBTyxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFNBQXJCO0FBRlQsT0FMVyxFQVNYO0FBQ0VFLGNBQU0sWUFEUjtBQUVFRixlQUFPLENBQUMsV0FBRCxFQUFjLFNBQWQsRUFBeUIsVUFBekIsRUFBcUMsTUFBckM7QUFGVCxPQVRXLEVBYVg7QUFDRUUsY0FBTSxZQURSO0FBRUVGLGVBQU8sQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixRQUFyQixFQUErQixRQUEvQjtBQUZULE9BYlcsQ0F0Q047QUF3RFBHLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixLQUhsQjtBQUlOQyxnQ0FBd0I7QUFKbEIsT0F4REQ7QUE4RFBDLGNBQVE7QUFDTjtBQUNBQyx1QkFBZSxTQUZUO0FBR047QUFDQUMsY0FBTSxDQUNKO0FBQ0U7QUFDQUMsb0JBQVUsa0JBRlo7QUFHRTtBQUNBQyxnQkFBTSxFQUpSO0FBS0U7QUFDQUMsb0JBQVUsMEJBTlo7QUFPRTtBQUNBQyw0QkFBa0I7QUFDbEI7QUFDQTtBQVZGLFNBREksRUFhSjtBQUNFSCxvQkFBVSx1QkFEWjtBQUVFQyxnQkFBTSxJQUZSO0FBR0VDLG9CQUFVLGlDQUhaO0FBSUVDLDRCQUFrQjtBQUpwQixTQWJJLEVBbUJKO0FBQ0VILG9CQUFVLGtCQURaO0FBRUVDLGdCQUFNLElBRlI7QUFHRUMsb0JBQVUsMEJBSFo7QUFJRUMsNEJBQWtCO0FBQ2xCO0FBTEYsU0FuQkk7QUFKQSxPQTlERDtBQThGUDtBQUNBQyx1QkFBaUI7QUFDZixtQkFBVyx5QkFESTtBQUVmLG1CQUFXLHlCQUZJO0FBR2Y7QUFDQSxvQkFBWSwwQkFKRztBQUtmO0FBQ0Esc0JBQWMsNEJBTkM7QUFPZjtBQUNBLHNCQUFjLDRCQVJDO0FBU2Y7QUFDQSxxQkFBYSwyQkFWRTtBQVdmO0FBQ0Esb0JBQVksMEJBWkc7QUFhZix5QkFBaUIsK0JBYkY7QUFjZjtBQUNBLG9CQUFZLDBCQWZHO0FBZ0JmLDBCQUFrQixnQ0FoQkg7QUFpQmY7QUFDQSx1QkFBZSw2QkFsQkE7QUFtQmY7QUFDQSxzQkFBYyw0QkFwQkM7QUFxQmY7QUFDQSxxQkFBYSwyQkF0QkU7QUF1QmY7QUFDQSxxQkFBYSwyQkF4QkU7QUF5QmYsMkJBQW1CLGlDQXpCSjtBQTBCZjtBQUNBLG1CQUFXLHlCQTNCSTtBQTRCZjtBQUNBLHFCQUFhLDJCQTdCRTtBQThCZjtBQUNBLG1CQUFXLHlCQS9CSTtBQWdDZixvQkFBWTtBQWhDRztBQS9GVixLQXVJSztBQUFBLFVBSmRDLFVBSWMsR0FKRDtBQUNYQyxnQkFBVTtBQURDLEtBSUM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFGWTtBQUdiOzs7OytCQUVVO0FBQ1RDLGNBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7Ozs7RUEvSTBCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFtcbiAgICAgIC8vIOW6lemDqHRhYuagj1xuICAgICAgLy8gJ3BhZ2VzL3RhYmxlL2xvZ2lucXVhbicsXG4gICAgICAncGFnZXMvdGFibGUvYmFiYScsXG4gICAgICAncGFnZXMvdGFibGUvYXR0ZW50aW9uJyxcbiAgICAgICdwYWdlcy90YWJsZS9teW1lJ1xuICAgICAgLy8g5oiR55qE5L+d5Lit6aG16Z2iXG4gICAgICAvLyAncGFnZXMvbXliei9jb25maXJtZWQnLFxuICAgICAgLy8gLy8g5oiR55qE6LWE5paZ6aG16Z2iXG4gICAgICAvLyAncGFnZXMvbXliei9pbmZveGluJ1xuICAgICAgLy8gLy8g6Zy45rCU5YC86aG16Z2iXG4gICAgICAvLyAncGFnZXMvbXliei9ob3RzdG9yZScsXG4gICAgICAvLyAvLyDmjqjojZDmnInlpZbpobXpnaJcbiAgICAgIC8vICdwYWdlcy9teWJ6L3dhcm4nLFxuICAgICAgLy8gLy8g5pS26LSn5Zyw5Z2A6aG16Z2iXG4gICAgICAvLyAncGFnZXMvbXliei9nZXRkcmUnLFxuICAgICAgLy8gLy8g5paw5aKe5Zyw5Z2A6aG16Z2iXG4gICAgICAvLyAncGFnZXMvbXliei9uZXdkcmUnLFxuICAgICAgLy8gLy8g5paw5aKe6Zy4546L6K+m5oOF6aG16Z2iXG4gICAgICAvLyAncGFnZXMvYnhxeS9iYWluZm8nLFxuICAgICAgLy8gLy8g5oiR6KaBYW56aHUg6aG16Z2iXG4gICAgICAvLyAncGFnZXMvYnhxeS9hbnpodScsXG4gICAgICAvLyAvLyDliIblupfpobXpnaJcbiAgICAgIC8vICdwYWdlcy9ieHF5L2ZlbmRhbicsXG4gICAgICAvLyAvLyDllYbmiLfpobXpnaJcbiAgICAgIC8vICdwYWdlcy9teWJ6L3NoYW5naHUnLFxuICAgICAgLy8gLy8g5YaF5a656aG16Z2iXG4gICAgICAvLyAncGFnZXMvYnhxeS9ibGV0dGVyJyxcbiAgICAgIC8vIC8vIOS4reWlluWhq+WGmeWcsOWdgFxuICAgICAgLy8gJ3BhZ2VzL2J4cXkvYWN0aXZlZGUnLFxuICAgICAgLy8gLy8g5Lit5bCG5aGr5YaZ5YWR5aWWXG4gICAgICAvLyAncGFnZXMvYnhxeS9hY3RpdmVkdWknLFxuICAgICAgLy8gLy8g5bey5Lit5aWWXG4gICAgICAvLyAncGFnZXMvYnhxeS9hY3RpdmV6JyxcbiAgICAgIC8vICdwYWdlcy9ieHF5L2FjdGl2ZXcnXG4gICAgXSxcbiAgICAvLyDphY3nva7liIbljIXliqDovb1cbiAgICBzdWJQYWNrYWdlczogW1xuICAgICAge1xuICAgICAgICByb290OiAncGFnZXMvYnhmYicsXG4gICAgICAgIHBhZ2VzOiBbJ2FjdGl2ZXcnLCAnYWN0aXZleicsICdhY3RpdmVkdWknLCAnYWN0aXZlZGUnXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm9vdDogJ3BhZ2VzL215YnonLFxuICAgICAgICBwYWdlczogWydnZXRkcmUnLCAnbmV3ZHJlJywgJ3NoYW5naHUnXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm9vdDogJ3BhZ2VzL215YmYnLFxuICAgICAgICBwYWdlczogWydjb25maXJtZWQnLCAnaW5mb3hpbicsICdob3RzdG9yZScsICd3YXJuJ11cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvb3Q6ICdwYWdlcy9ieHF5JyxcbiAgICAgICAgcGFnZXM6IFsnYmxldHRlcicsICdhbnpodScsICdiYWluZm8nLCAnZmVuZGFuJ11cbiAgICAgIH1cbiAgICBdLFxuICAgIHdpbmRvdzoge1xuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjRkY3OTAwJyxcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpnLjnjovliLAnLFxuICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ2JsYWNrJ1xuICAgIH0sXG4gICAgdGFiQmFyOiB7XG4gICAgICAvLyDpgInkuK3nmoTmlofmnKzpopzoibJcbiAgICAgIHNlbGVjdGVkQ29sb3I6ICcjRkY4RDI5JyxcbiAgICAgIC8vIOaJgOaciSB0YWJCYXIg6IqC54K555qE6YWN572u5pWw57uEXG4gICAgICBsaXN0OiBbXG4gICAgICAgIHtcbiAgICAgICAgICAvLyDpobXpnaLot6/lvoRcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3RhYmxlL2JhYmEnLFxuICAgICAgICAgIC8vIOaYvuekuueahOaWh+acrFxuICAgICAgICAgIHRleHQ6ICcnLFxuICAgICAgICAgIC8vIOm7mOiupOWbvuagh+i3r+W+hFxuICAgICAgICAgIGljb25QYXRoOiAnL2Fzc2V0cy9mb250LWljb24vYmEucG5nJyxcbiAgICAgICAgICAvLyDpgInkuK3kuYvlkI7nmoTlm77moIfot6/lvoRcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnL2Fzc2V0cy9mb250LWljb24vYmEucG5nJ1xuICAgICAgICAgIC8vIOWvvOiIquagj+agh+mimOWGheWuuVxuICAgICAgICAgIC8vIG5hdmlnYXRpb25CYXJUaXRsZVRleHTvvJon6aaW6aG1J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy90YWJsZS9hdHRlbnRpb24nLFxuICAgICAgICAgIHRleHQ6ICflhbPms6gnLFxuICAgICAgICAgIGljb25QYXRoOiAnL2Fzc2V0cy9mb250LWljb24vYXR0ZW50aW9uLnBuZycsXG4gICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy9hc3NldHMvZm9udC1pY29uL2F0dGVudGlvbmFjdGl2ZS5wbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL3RhYmxlL215bWUnLFxuICAgICAgICAgIHRleHQ6ICfmiJHnmoQnLFxuICAgICAgICAgIGljb25QYXRoOiAnL2Fzc2V0cy9mb250LWljb24vbWUucG5nJyxcbiAgICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnL2Fzc2V0cy9mb250LWljb24vbWVhY3RpdmUucG5nJ1xuICAgICAgICAgIC8vIG5hdmlnYXRpb25CYXJUaXRsZVRleHTvvJon5oiR55qEJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICAvLyDlvJXlhaXlubblhajlsYDms6jlhoznu4Tku7ZcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICd2YW4tcm93JzogJy4vYXNzZXRzL3ZhbnQvcm93L2luZGV4JyxcbiAgICAgICd2YW4tY29sJzogJy4vYXNzZXRzL3ZhbnQvY29sL2luZGV4JyxcbiAgICAgIC8vIOWbvuagh1xuICAgICAgJ3Zhbi1pY29uJzogJy4vYXNzZXRzL3ZhbnQvaWNvbi9pbmRleCcsXG4gICAgICAvLyDmkJzntKJcbiAgICAgICd2YW4tc2VhcmNoJzogJy4vYXNzZXRzL3ZhbnQvc2VhcmNoL2luZGV4JyxcbiAgICAgIC8vIOaMiemSrlxuICAgICAgJ3Zhbi1idXR0b24nOiAnLi9hc3NldHMvdmFudC9idXR0b24vaW5kZXgnLFxuICAgICAgLy8g5by55Ye65bGCXG4gICAgICAndmFuLXBvcHVwJzogJy4vYXNzZXRzL3ZhbnQvcG9wdXAvaW5kZXgnLFxuICAgICAgLy8gZ3JpZOWuq+agvFxuICAgICAgJ3Zhbi1ncmlkJzogJy4vYXNzZXRzL3ZhbnQvZ3JpZC9pbmRleCcsXG4gICAgICAndmFuLWdyaWQtaXRlbSc6ICcuL2Fzc2V0cy92YW50L2dyaWQtaXRlbS9pbmRleCcsXG4gICAgICAvLyDljZXlhYPmoLxcbiAgICAgICd2YW4tY2VsbCc6ICcuL2Fzc2V0cy92YW50L2NlbGwvaW5kZXgnLFxuICAgICAgJ3Zhbi1jZWxsLWdyb3VwJzogJy4vYXNzZXRzL3ZhbnQvY2VsbC1ncm91cC9pbmRleCcsXG4gICAgICAvLyDliIblibLnur9cbiAgICAgICd2YW4tZGl2aWRlcic6ICcuL2Fzc2V0cy92YW50L2RpdmlkZXIvaW5kZXgnLFxuICAgICAgLy8gc3dpdGNo5byA5YWzXG4gICAgICAndmFuLXN3aXRjaCc6ICcuL2Fzc2V0cy92YW50L3N3aXRjaC9pbmRleCcsXG4gICAgICAvLyDmraXpqqTmnaFcbiAgICAgICd2YW4tc3RlcHMnOiAnLi9hc3NldHMvdmFudC9zdGVwcy9pbmRleCcsXG4gICAgICAvLyDljZXpgInmoYZcbiAgICAgICd2YW4tcmFkaW8nOiAnLi9hc3NldHMvdmFudC9yYWRpby9pbmRleCcsXG4gICAgICAndmFuLXJhZGlvLWdyb3VwJzogJy4vYXNzZXRzL3ZhbnQvcmFkaW8tZ3JvdXAvaW5kZXgnLFxuICAgICAgLy8gdGFn5qCH562+XG4gICAgICAndmFuLXRhZyc6ICcuL2Fzc2V0cy92YW50L3RhZy9pbmRleCcsXG4gICAgICAvLyDovpPlhaXmoYZcbiAgICAgICd2YW4tZmllbGQnOiAnLi9hc3NldHMvdmFudC9maWVsZC9pbmRleCcsXG4gICAgICAvLyB0YWIg5qCH562+6aG16Z2iXG4gICAgICAndmFuLXRhYic6ICcuL2Fzc2V0cy92YW50L3RhYi9pbmRleCcsXG4gICAgICAndmFuLXRhYnMnOiAnLi9hc3NldHMvdmFudC90YWJzL2luZGV4J1xuICAgIH1cbiAgfVxuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXG4gIH1cblxuICBvbkxhdW5jaCgpIHtcbiAgICBjb25zb2xlLmxvZygn5bCP56iL5bqP5ZCv5Yqo5LqGJylcbiAgfVxufVxuIl19