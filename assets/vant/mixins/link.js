"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.link = Behavior({
    properties: {
        url: String,
        linkType: {
            type: String,
            value: 'navigateTo'
        }
    },
    methods: {
        jumpLink: function jumpLink(urlKey) {
            if (urlKey === void 0) {
                urlKey = 'url';
            }
            var url = this.data[urlKey];
            if (url) {
                wx[this.data.linkType]({ url: url });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmsuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJsaW5rIiwiQmVoYXZpb3IiLCJwcm9wZXJ0aWVzIiwidXJsIiwiU3RyaW5nIiwibGlua1R5cGUiLCJ0eXBlIiwibWV0aG9kcyIsImp1bXBMaW5rIiwidXJsS2V5IiwiZGF0YSIsInd4Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0FELFFBQVFFLElBQVIsR0FBZUMsU0FBUztBQUNwQkMsZ0JBQVk7QUFDUkMsYUFBS0MsTUFERztBQUVSQyxrQkFBVTtBQUNOQyxrQkFBTUYsTUFEQTtBQUVOTCxtQkFBTztBQUZEO0FBRkYsS0FEUTtBQVFwQlEsYUFBUztBQUNMQyxrQkFBVSxrQkFBVUMsTUFBVixFQUFrQjtBQUN4QixnQkFBSUEsV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQUVBLHlCQUFTLEtBQVQ7QUFBaUI7QUFDMUMsZ0JBQUlOLE1BQU0sS0FBS08sSUFBTCxDQUFVRCxNQUFWLENBQVY7QUFDQSxnQkFBSU4sR0FBSixFQUFTO0FBQ0xRLG1CQUFHLEtBQUtELElBQUwsQ0FBVUwsUUFBYixFQUF1QixFQUFFRixLQUFLQSxHQUFQLEVBQXZCO0FBQ0g7QUFDSjtBQVBJO0FBUlcsQ0FBVCxDQUFmIiwiZmlsZSI6ImxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmxpbmsgPSBCZWhhdmlvcih7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdXJsOiBTdHJpbmcsXHJcbiAgICAgICAgbGlua1R5cGU6IHtcclxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogJ25hdmlnYXRlVG8nXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBqdW1wTGluazogZnVuY3Rpb24gKHVybEtleSkge1xyXG4gICAgICAgICAgICBpZiAodXJsS2V5ID09PSB2b2lkIDApIHsgdXJsS2V5ID0gJ3VybCc7IH1cclxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMuZGF0YVt1cmxLZXldO1xyXG4gICAgICAgICAgICBpZiAodXJsKSB7XHJcbiAgICAgICAgICAgICAgICB3eFt0aGlzLmRhdGEubGlua1R5cGVdKHsgdXJsOiB1cmwgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=