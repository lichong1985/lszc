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
    var SajdPlaneBody = (function (_super) {
        __extends(SajdPlaneBody, _super);
        function SajdPlaneBody(bte, point, disName) {
            var _this = _super.call(this, bte, point, disName, 0) || this;
            _this.initBody();
            return _this;
        }
        //碰撞检测
        SajdPlaneBody.prototype.collision = function (bb) {
            //平台不做 碰撞处理
            return true;
        };
        //初始化刚体
        SajdPlaneBody.prototype.initBody = function () {
            //设置纹理锚点
            this.display_.anchorOffsetX = this.display_.width * 0.5;
            this.display_.anchorOffsetY = this.display_.height * 0.5;
            //形状
            var plane_shape = new p2.Plane();
            this.addShape(plane_shape);
            this.displays = [];
            this.mass = 0;
            //p2 世界坐标点
            var p2p = EgretAndP2PointTools.EgretToP2Point(this.mark_point);
            this.position = [(p2p.x + this.display_.height * 0.5) / this.factor, (p2p.y + this.display_.width * 0.5) / this.factor];
            this.display_.x = this.mark_point.x;
            this.display_.y = this.mark_point.y + this.display_.height * 0.5;
        };
        return SajdPlaneBody;
    }(p2s.P2SpriteBase));
    p2s.SajdPlaneBody = SajdPlaneBody;
    __reflect(SajdPlaneBody.prototype, "p2s.SajdPlaneBody");
})(p2s || (p2s = {}));
//# sourceMappingURL=SajdPlaneBody.js.map