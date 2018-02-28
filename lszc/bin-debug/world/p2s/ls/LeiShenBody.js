var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var p2s;
(function (p2s) {
    var LeiShenBody = (function (_super) {
        __extends(LeiShenBody, _super);
        function LeiShenBody(bte, point, disName, mass) {
            var _this = _super.call(this, bte, point, disName, mass) || this;
            _this.initBody();
            return _this;
        }
        //碰撞检测
        LeiShenBody.prototype.collision = function (bb) {
            //平台不做 碰撞处理
            return true;
        };
        //初始化刚体
        LeiShenBody.prototype.initBody = function () {
            //纹理
            this.display_.anchorOffsetX = this.display_.width * 0.5;
            this.display_.anchorOffsetY = this.display_.height * 0.5;
            //刚体
            var x = this.display_.height / this.factor;
            var y = this.display_.width / this.factor;
            var ls_shape = new p2.Box({ width: x, height: y });
            this.addShape(ls_shape);
            this.mass = 1;
            //纹理绑定
            this.displays = [this.display_];
            var point_p2 = EgretAndP2PointTools.EgretToP2Point(this.mark_point);
            //坐标系
            this.position = [(point_p2.x + this.display_.height * 0.5) / this.factor, (point_p2.y + this.display_.width * 0.5) / this.factor];
            this.display_.x = this.mark_point.x + this.display_.width * 0.5;
            this.display_.y = this.mark_point.y + this.display_.height * 0.5;
        };
        return LeiShenBody;
    }(p2s.P2SpriteBase));
    p2s.LeiShenBody = LeiShenBody;
    __reflect(LeiShenBody.prototype, "p2s.LeiShenBody");
})(p2s || (p2s = {}));
//# sourceMappingURL=LeiShenBody.js.map