//彩虹桥场景
class CaiHongQiao extends egret.DisplayObjectContainer {
	//物理世界
	private world: p2.World;
	//物理世界与像素世界 距离换算 因子 (一米 约等于 50像素)
	private factor: number = 50;

	//--------------------------------------egret 图片素材 -----------------------------------------
	//平台图片素材
	private plane_egret: egret.Bitmap;
	//雷神图片素材
	private ls_egret: egret.Bitmap;
	//怪物图片素材
	private manster_egret: egret.Bitmap;
	//锤子图片素材
	private T_egret: egret.Bitmap;

	//--------------------------------------p2 刚体对象---------------------------------------------
	//平台刚体
	private plane_body_p2: p2s.SajdPlaneBody;
	//雷神刚体
	private ls_body_p2: p2s.LeiShenBody;

	//--------------------------------------------------------------------------------------------
	//触屏事件开关
	private _touchStatus: boolean;




	public constructor() {
		super();
	}
	public onEnterFrame() {
		this.world.step(60 / 1000);
		var l: number = this.world.bodies.length;
		for (var i: number = 0; i < l; i++) {
			var boxBody: p2.Body = this.world.bodies[i];
			var box: egret.DisplayObject = boxBody.displays[0];
			if (box) {
				box.x = boxBody.position[1] * this.factor;
				box.y = boxBody.position[0] * this.factor;
				box.rotation = (360 - (boxBody.angle + boxBody.shapes[0].angle) * 180 / Math.PI);
			}
		}
	}

	//创建彩虹桥场景
	public createCaiHongQiao() {
		this.x = 0;
		this.y = 0;
		this.width = 640 * 2;
		this.height = 1136 * 2;//大场景
		//创建物理世界
		var wrd: p2.World = new p2.World();
		wrd.sleepMode = p2.World.BODY_SLEEPING;
		wrd.gravity = [0, -10];
		this.world = wrd;


		this.createPlane(egret.Point.create(this.width * 0.1, 0));
		this.createLS(egret.Point.create(this.width * 0.3, this.height * 0.2));
		// this.createManster(egret.Point.create(this.width * 0.3, this.height * 0.2));

		
		//鼠标点击
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.mouseDown, this);
        //鼠标移动
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.mouseMove, this);

        this.addEventListener(egret.TouchEvent.TOUCH_END, this.mouseUp, this);
	}

	//创建平台
	private createPlane(point: egret.Point) {
		this.plane_body_p2 = new p2s.SajdPlaneBody(p2s.BODY_TYPE_ENUM.plane, point, "cai_hong_qiao_png");
		this.addBody(this.plane_body_p2);
	}

	//创建雷神
	private createLS(point: egret.Point) {
		this.ls_body_p2 = new p2s.LeiShenBody(p2s.BODY_TYPE_ENUM.ls, point, "ren_wu_1_png", 1);
		this.addBody(this.ls_body_p2);

	}

	//创建怪物
	private createManster(point: egret.Point) {

	}

	//创建锤子
	private createT(point: egret.Point): p2.Body {

		return null;
	}

	// 添加刚体
	private addBody(body: p2s.P2SpriteBase) {
		this.world.addBody(body);
		this.addChild(body.display_);
	}

	/**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
	private createBitmapByName(name: string): egret.Bitmap {
		let result = new egret.Bitmap();
		let texture: egret.Texture = RES.getRes(name);
		result.texture = texture;
		return result;
	}

	 //按下
	public mouseDown(evt: egret.TouchEvent) {
		egret.log("Mouse Down.");
		this._touchStatus = true;

		//添加移动事件
	}

	//移动
	public mouseMove(evt: egret.TouchEvent) {
		egret.log("eeeeeeeee");
		if (this._touchStatus) {
			egret.log("moving now ! Mouse: [X:" + evt.stageX + ",Y:" + evt.stageY + "]");

		}
	}
	//抬起
	public mouseUp(evt: egret.TouchEvent) {
		egret.log("Mouse Up.");
		this._touchStatus = false;
		//移除移动事件
	}



}

