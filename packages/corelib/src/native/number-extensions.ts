// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { getInnerResourceManager } from "../functionals";
import { CultureInfo } from "../globalization";
import { ArgumentException } from "../core/argument-exception";

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

Number.parse = (s: sys.NullableType<string>): number => {
	const result = Number.tryParse(s);
	if (!result.isCompleted)
		new ArgumentException(getInnerResourceManager().getString("ArgumentException_number_parse_failure")).throw();
	return result.value;
};

Number.safeGet = (num: sys.NullableType<number>, $default: number = 0): number => {
	return num ?? $default ?? 0;
};

function __toCurrencyImpl__(): string;
function __toCurrencyImpl__(currencySymbol: string): string;
function __toCurrencyImpl__(formatter: sys.IFormatProvider<number>, culture?: sys.globalization.ICultureInfo): string;
function __toCurrencyImpl__(this: number, argA?: any, argB?: any): string {
	if (typeof argA === "undefined") return this.toFixed(2);
	else {
		if (typeof argA === "string") return `${argA} ${this.toFixed(2)}`;
		return (argA as sys.IFormatProvider<number>).format(this, argB);
	}
}

Number.prototype.toCurrency = __toCurrencyImpl__;
