var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EgretAndP2PointTools = (function () {
    function EgretAndP2PointTools() {
    }
    //坐标转换
    EgretAndP2PointTools.P2TOEgretPoint = function (p2Point) {
        return egret.Point.create(p2Point.y, p2Point.x);
    };
    //坐标转换
    EgretAndP2PointTools.EgretToP2Point = function (ePoint) {
        return egret.Point.create(ePoint.y, ePoint.x);
    };
    return EgretAndP2PointTools;
}());
__reflect(EgretAndP2PointTools.prototype, "EgretAndP2PointTools");
//# sourceMappingURL=EgretAndP2PointTools.js.map