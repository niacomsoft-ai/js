// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

Number.tryParse = (s: sys.NullableType<string>): sys.ParsedResult<number> => {
	if (String.isNullOrWhiteSpace(s)) {
		console.warn(`[WARN]: 字符串 s 可能为一个 undefined、null、空格符。详情参见：%o`, {
			StackTrace: "number-extensions.ts - {Sign:141d12}",
			TargetSite: {
				MemberName: "tryParse",
				Parameters: { s },
				MemeberType: "Method",
			},
			ContextMetadata: null,
		});
		return {
			isCompleted: false,
			sourceString: s,
		};
	}
	const value: number = parseFloat(s);
	return {
		isCompleted: !Object.is(value, NaN),
		sourceString: s,
		value,
	};
};
