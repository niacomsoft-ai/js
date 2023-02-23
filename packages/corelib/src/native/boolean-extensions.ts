// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { ArgumentException } from "../core/argument-exception";

Boolean.trueString = () => __NIACOMSOFT_TRUE_STRING__;
Boolean.trueNumber = () => __NIACOMSOFT_TRUE_NUMBER__;

Boolean.parse = (value: sys.NullableType<string | number>): boolean => {
	if (Object.isNull(value)) {
		console.debug(`[DEBUG]: 参数 value 可能为 undefined 或 null 值，将返回 false。详情参见：%o`, {
			StackTrace: "boolean-extensions.ts - {Sign:930efb}",
			TargetSite: {
				MemberName: "parse",
				Parameters: { value },
				MemeberType: "Method",
			},
			ContextMetadata: null,
		});
		return false;
	}

	if (typeof value !== "string" && typeof value !== "number") ArgumentException.createException("value").throw();

	if (typeof value === "string") return value === Boolean.trueString();
	return value === Boolean.trueNumber();
};
