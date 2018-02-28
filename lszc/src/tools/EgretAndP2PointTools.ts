class EgretAndP2PointTools {
	public constructor() {
	}

	//坐标转换
	public static P2TOEgretPoint(p2Point: egret.Point): egret.Point {
		return egret.Point.create(p2Point.y,p2Point.x);
	}

	//坐标转换
	public static EgretToP2Point(ePoint: egret.Point): egret.Point {
		return egret.Point.create(ePoint.y,ePoint.x);
	}
}