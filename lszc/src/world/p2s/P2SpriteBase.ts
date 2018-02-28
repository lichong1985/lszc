module p2s {
	export const enum BODY_TYPE_ENUM {
		plane,//平台
		ls,//雷神
		manster//怪物
	}


	//p2 body 封装类
	export abstract class P2SpriteBase extends p2.Body {
		static ls_collis: number = Math.pow(2, 0);//雷神碰撞 参数
		static cz_collis: number = Math.pow(2, 1);//锤子碰撞参数
		static plane_collis: number = Math.pow(2, 2);// 平台碰撞 参数
		static manster_collis: number = Math.pow(2, 3);//怪物碰撞 参数
		factor: number = 50;//物理世界与像素世界 距离换算 因子 (一米 约等于 50像素)
		//刚体类型
		BODY_TYPE: BODY_TYPE_ENUM;
		//绑定的 动画 有可能是 骨骼
		display_: egret.DisplayObject;

		//坐标标记
		mark_point: egret.Point;

		public constructor(bte: BODY_TYPE_ENUM, point: egret.Point, disName: string, mass:number) {
			super({ mass: mass });
			this.BODY_TYPE = bte;
			this.display_ = this.createBitmapByName(disName);
			this.mark_point = point;
		}



		//碰撞抽象类
		abstract collision(bb: P2SpriteBase): boolean;
		//初始化刚体
		abstract initBody(): void;

		// 创建2d纹理
		createBitmapByName(name: string): egret.Bitmap {
			let result = new egret.Bitmap();
			let texture: egret.Texture = RES.getRes(name);
			result.texture = texture;
			return result;
		}


	}
}

