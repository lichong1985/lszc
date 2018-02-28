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
    //p2 body 封装类
    var P2SpriteBase = (function (_super) {
        __extends(P2SpriteBase, _super);
        function P2SpriteBase(bte, point, disName, mass) {
            var _this = _super.call(this, { mass: mass }) || this;
            _this.factor = 50; //物理世界与像素世界 距离换算 因子 (一米 约等于 50像素)
            _this.BODY_TYPE = bte;
            _this.display_ = _this.createBitmapByName(disName);
            _this.mark_point = point;
            return _this;
        }
        // 创建2d纹理
        P2SpriteBase.prototype.createBitmapByName = function (name) {
            var result = new egret.Bitmap();
            var texture = RES.getRes(name);
            result.texture = texture;
            return result;
        };
        P2SpriteBase.ls_collis = Math.pow(2, 0); //雷神碰撞 参数
        P2SpriteBase.cz_collis = Math.pow(2, 1); //锤子碰撞参数
        P2SpriteBase.plane_collis = Math.pow(2, 2); // 平台碰撞 参数
        P2SpriteBase.manster_collis = Math.pow(2, 3); //怪物碰撞 参数
        return P2SpriteBase;
    }(p2.Body));
    p2s.P2SpriteBase = P2SpriteBase;
    __reflect(P2SpriteBase.prototype, "p2s.P2SpriteBase");
})(p2s || (p2s = {}));
//# sourceMappingURL=P2SpriteBase.js.map