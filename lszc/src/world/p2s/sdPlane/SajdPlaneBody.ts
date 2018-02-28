module p2s {
	export class SajdPlaneBody extends p2s.P2SpriteBase {
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
			//设置纹理锚点
			this.display_.anchorOffsetX = this.display_.width * 0.5;
			this.display_.anchorOffsetY = this.display_.height * 0.5;
			//形状
			var plane_shape = new p2.Plane();
			this.addShape(plane_shape);
			this.displays = [];
			this.mass = 0;

			//p2 世界坐标点
			var p2p: egret.Point = EgretAndP2PointTools.EgretToP2Point(this.mark_point);
			this.position = [(p2p.x + this.display_.height * 0.5) / this.factor, (p2p.y + this.display_.width * 0.5) / this.factor];
			this.display_.x = this.mark_point.x;
			this.display_.y = this.mark_point.y + this.display_.height * 0.5;
		}

	}
}