"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.touch = Behavior({
    methods: {
        touchStart: function touchStart(event) {
            var touch = event.touches[0];
            this.direction = '';
            this.deltaX = 0;
            this.deltaY = 0;
            this.offsetX = 0;
            this.offsetY = 0;
            this.startX = touch.clientX;
            this.startY = touch.clientY;
        },
        touchMove: function touchMove(event) {
            var touch = event.touches[0];
            this.deltaX = touch.clientX - this.startX;
            this.deltaY = touch.clientY - this.startY;
            this.offsetX = Math.abs(this.deltaX);
            this.offsetY = Math.abs(this.deltaY);
            this.direction = this.offsetX > this.offsetY ? 'horizontal' : this.offsetX < this.offsetY ? 'vertical' : '';
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdWNoLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwidG91Y2giLCJCZWhhdmlvciIsIm1ldGhvZHMiLCJ0b3VjaFN0YXJ0IiwiZXZlbnQiLCJ0b3VjaGVzIiwiZGlyZWN0aW9uIiwiZGVsdGFYIiwiZGVsdGFZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzdGFydFgiLCJjbGllbnRYIiwic3RhcnRZIiwiY2xpZW50WSIsInRvdWNoTW92ZSIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQUQsUUFBUUUsS0FBUixHQUFnQkMsU0FBUztBQUNyQkMsYUFBUztBQUNMQyxvQkFBWSxvQkFBVUMsS0FBVixFQUFpQjtBQUN6QixnQkFBSUosUUFBUUksTUFBTUMsT0FBTixDQUFjLENBQWQsQ0FBWjtBQUNBLGlCQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsaUJBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsaUJBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsaUJBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsaUJBQUtDLE9BQUwsR0FBZSxDQUFmO0FBQ0EsaUJBQUtDLE1BQUwsR0FBY1gsTUFBTVksT0FBcEI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjYixNQUFNYyxPQUFwQjtBQUNILFNBVkk7QUFXTEMsbUJBQVcsbUJBQVVYLEtBQVYsRUFBaUI7QUFDeEIsZ0JBQUlKLFFBQVFJLE1BQU1DLE9BQU4sQ0FBYyxDQUFkLENBQVo7QUFDQSxpQkFBS0UsTUFBTCxHQUFjUCxNQUFNWSxPQUFOLEdBQWdCLEtBQUtELE1BQW5DO0FBQ0EsaUJBQUtILE1BQUwsR0FBY1IsTUFBTWMsT0FBTixHQUFnQixLQUFLRCxNQUFuQztBQUNBLGlCQUFLSixPQUFMLEdBQWVPLEtBQUtDLEdBQUwsQ0FBUyxLQUFLVixNQUFkLENBQWY7QUFDQSxpQkFBS0csT0FBTCxHQUFlTSxLQUFLQyxHQUFMLENBQVMsS0FBS1QsTUFBZCxDQUFmO0FBQ0EsaUJBQUtGLFNBQUwsR0FDSSxLQUFLRyxPQUFMLEdBQWUsS0FBS0MsT0FBcEIsR0FDTSxZQUROLEdBRU0sS0FBS0QsT0FBTCxHQUFlLEtBQUtDLE9BQXBCLEdBQ0ksVUFESixHQUVJLEVBTGQ7QUFNSDtBQXZCSTtBQURZLENBQVQsQ0FBaEIiLCJmaWxlIjoidG91Y2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLnRvdWNoID0gQmVoYXZpb3Ioe1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIHRvdWNoU3RhcnQ6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmRlbHRhWCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsdGFZID0gMDtcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXRYID0gMDtcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXRZID0gMDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFggPSB0b3VjaC5jbGllbnRYO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0WSA9IHRvdWNoLmNsaWVudFk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b3VjaE1vdmU6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmRlbHRhWCA9IHRvdWNoLmNsaWVudFggLSB0aGlzLnN0YXJ0WDtcclxuICAgICAgICAgICAgdGhpcy5kZWx0YVkgPSB0b3VjaC5jbGllbnRZIC0gdGhpcy5zdGFydFk7XHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WCA9IE1hdGguYWJzKHRoaXMuZGVsdGFYKTtcclxuICAgICAgICAgICAgdGhpcy5vZmZzZXRZID0gTWF0aC5hYnModGhpcy5kZWx0YVkpO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9mZnNldFggPiB0aGlzLm9mZnNldFlcclxuICAgICAgICAgICAgICAgICAgICA/ICdob3Jpem9udGFsJ1xyXG4gICAgICAgICAgICAgICAgICAgIDogdGhpcy5vZmZzZXRYIDwgdGhpcy5vZmZzZXRZXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3ZlcnRpY2FsJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==