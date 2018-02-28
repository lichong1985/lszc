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
//彩虹桥场景
var CaiHongQiao = (function (_super) {
    __extends(CaiHongQiao, _super);
    function CaiHongQiao() {
        var _this = _super.call(this) || this;
        //物理世界与像素世界 距离换算 因子 (一米 约等于 50像素)
        _this.factor = 50;
        return _this;
    }
    CaiHongQiao.prototype.onEnterFrame = function () {
        this.world.step(60 / 1000);
        var l = this.world.bodies.length;
        for (var i = 0; i < l; i++) {
            var boxBody = this.world.bodies[i];
            var box = boxBody.displays[0];
            if (box) {
                box.x = boxBody.position[1] * this.factor;
                box.y = boxBody.position[0] * this.factor;
                box.rotation = (360 - (boxBody.angle + boxBody.shapes[0].angle) * 180 / Math.PI);
            }
        }
    };
    //创建彩虹桥场景
    CaiHongQiao.prototype.createCaiHongQiao = function () {
        this.x = 0;
        this.y = 0;
        this.width = 640 * 2;
        this.height = 1136 * 2; //大场景
        //创建物理世界
        var wrd = new p2.World();
        wrd.sleepMode = p2.World.BODY_SLEEPING;
        wrd.gravity = [0, -10];
        this.world = wrd;
        this.createPlane(egret.Point.create(this.width * 0.1, 0));
        this.createLS(egret.Point.create(this.width * 0.3, this.height * 0.2));
        // this.createManster(egret.Point.create(this.width * 0.3, this.height * 0.2));
        egret.log("DDDDDDDDDDDDDDDDDDDDDDD");
        //鼠标点击
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        //鼠标移动
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
    };
    //创建平台
    CaiHongQiao.prototype.createPlane = function (point) {
        this.plane_body_p2 = new p2s.SajdPlaneBody(0 /* plane */, point, "cai_hong_qiao_png");
        this.addBody(this.plane_body_p2);
    };
    //创建雷神
    CaiHongQiao.prototype.createLS = function (point) {
        this.ls_body_p2 = new p2s.LeiShenBody(1 /* ls */, point, "ren_wu_1_png", 1);
        this.addBody(this.ls_body_p2);
    };
    //创建怪物
    CaiHongQiao.prototype.createManster = function (point) {
    };
    //创建锤子
    CaiHongQiao.prototype.createT = function (point) {
        return null;
    };
    // 添加刚体
    CaiHongQiao.prototype.addBody = function (body) {
        this.world.addBody(body);
        this.addChild(body.display_);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    CaiHongQiao.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    //按下
    CaiHongQiao.prototype.mouseDown = function (evt) {
        egret.log("Mouse Down.");
        this._touchStatus = true;
        //添加移动事件
    };
    //移动
    CaiHongQiao.prototype.mouseMove = function (evt) {
        egret.log("eeeeeeeee");
        if (this._touchStatus) {
            egret.log("moving now ! Mouse: [X:" + evt.stageX + ",Y:" + evt.stageY + "]");
        }
    };
    //抬起
    CaiHongQiao.prototype.mouseUp = function (evt) {
        egret.log("Mouse Up.");
        this._touchStatus = false;
        //移除移动事件
    };
    return CaiHongQiao;
}(egret.DisplayObjectContainer));
__reflect(CaiHongQiao.prototype, "CaiHongQiao");
//# sourceMappingURL=CaiHongQiao.js.map