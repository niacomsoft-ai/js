// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import equals from "deep-equal";

Object.isUndefined = (obj: sys.UndefinedType<any>): boolean => {
	if (typeof obj === "undefined") {
		console.warn(`[WARN]: 参数 “obj” 是一个 “undefined” 类型值。详情参见：%o`, {
			StackTrace: "object-extensions.ts - {Sign:74dde9}",
			TargetSite: {
				MemberName: "Object.isUndefined",
				Parameters: {
					obj,
				},
				MemeberType: "Method",
			},
			ContextMetadata: null,
		});

		return true;
	}
	return false;
};

Object.isNull = (obj: sys.NullableType<any>): boolean => {
	if (Object.isUndefined(obj) || obj == null || obj === null) {
		console.warn(`[WARN]: 参数 “obj” 是一个 null 值。详情参见：%o`, {
			StackTrace: "object-extensions.ts - {Sign:e4f29f}",
			TargetSite: {
				MemberName: "Object.isNull",
				Parameters: { obj },
				MemeberType: "Method",
			},
			ContextMetadata: null,
		});
		return true;
	}
	return false;
};

/**
 * @see https://www.npmjs.com/package/deep-equal
 */
Object.referenceEquals = (objA: sys.NullableType<any>, objB: sys.NullableType<any>): boolean => {
	if (Object.isNull(objA) && Object.isNull(objB)) {
		return true;
	}
	console.debug(`[DEBUG]: 尝试使用 “https://www.npmjs.com/package/deep-equal” 校验 objA 和 objB 是否相等。详情参见：%o`, {
		StackTrace: "object-extensions.ts - {Sign:e478c1}",
		TargetSite: {
			MemberName: "Object.referenceEquals",
			Parameters: {
				objA,
				objB,
			},
			MemeberType: "Method",
		},
		ContextMetadata: "https://www.npmjs.com/package/deep-equal",
	});
	return equals(objA, objB, { strict: true });
};
