module p2s {
	export class PuTongTeChuiBody extends p2s.P2SpriteBase {
		public constructor(bte: BODY_TYPE_ENUM, point: egret.Point, disName: string) {
			super(bte, point, disName,0);
			this.initBody();

		}

		//碰撞检测
		collision(bb: P2SpriteBase): boolean {
			//平台不做 碰撞处理
			return true;
		}

		//初始化刚体
		initBody(): void {
					//纹理
		this.display_.anchorOffsetX = this.display_.width * 0.5;
		this.display_.anchorOffsetY = this.display_.height * 0.5;
		//刚体
		var x: number = this.display_.height / this.factor;
		var y: number = this.display_.width / this.factor;

		var ls_shape = new p2.Box({ width: x, height: y });
		this.addShape(ls_shape);
		this.mass=1;
		//纹理绑定
		this.displays = [this.display_];

		var point_p2 = EgretAndP2PointTools.EgretToP2Point(this.mark_point);

		//坐标系
		this.position = [(point_p2.x + this.display_.height * 0.5) / this.factor, (point_p2.y + this.display_.width * 0.5) / this.factor];

		this.display_.x = this.mark_point.x + this.display_.width * 0.5;
		this.display_.y = this.mark_point.y + this.display_.height * 0.5;
		}

	}
}