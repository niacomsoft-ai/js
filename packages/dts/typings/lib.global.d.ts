// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

export {};

declare global {
	/**
	 * @description 为 {@link Object} 类型提供的静态扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface ObjectConstructor
	 * @typedef {ObjectConstructor}
	 */
	interface ObjectConstructor {
		/**
		 * @description 验证 {@link objA} 和 {@link objB} 是否相等。
		 * @author Wang Yucai
		 *
		 * @param {sys.NullableType<any>} objA 未知类型的对象实例或值。
		 * @param {sys.NullableType<any>} objB 未知类型的对象实例或值。
		 * @returns {boolean}
		 */
		referenceEquals(objA: sys.NullableType<any>, objB: sys.NullableType<any>): boolean;

		/**
		 * @description 验证 {@link obj} 是否为 undefined 类型值。
		 * @author Wang Yucai
		 *
		 * @param {sys.UndefinedType<any>} obj 需要校验的对象实例或值。
		 * @returns {boolean}
		 */
		isUndefined(obj: sys.UndefinedType<any>): boolean;

		/**
		 * @description 验证 {@link obj} 是否为 undefined、null 值。
		 * @author Wang Yucai
		 *
		 * @param {sys.NullableType<any>} obj 需要校验的对象实例或值。
		 * @returns {boolean}
		 */
		isNull(obj: sys.NullableType<any>): boolean;
	}

	/**
	 * @description 空字符串。
	 * @author Wang Yucai
	 *
	 * @type {string}
	 */
	var __NIACOMSOFT_EMPTY_STRING__: string;

	/**
	 * @description {@link sys.globalization.ICultureInfoFactory} 工厂方法。
	 * @author Wang Yucai
	 *
	 * @type {sys.globalization.ICultureInfoFactoryConstructor}
	 */
	var __NIACOMSOFT_CULTUREINFO_FACTORY__: sys.globalization.ICultureInfoFactoryConstructor;

	/**
	 * @description {@link sys.globalization.CultureInfoOptions} 文化区域配置。
	 * @author Wang Yucai
	 *
	 * @type {sys.globalization.CultureInfoOptions}
	 */
	var __NIACOMSOFT_CULTUREINFO_OPTIONS__: sys.globalization.CultureInfoOptions;

	/**
	 * @description 为 {@link String} 类型提供的静态扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface StringConstructor
	 * @typedef {StringConstructor}
	 */
	interface StringConstructor {
		/**
		 * @description 获取空字符串。
		 * @author Wang Yucai
		 *
		 * @returns {string}
		 * @see {@link __NIACOMSOFT_EMPTY_STRING__}
		 */
		empty(): string;

		/**
		 * @description 当字符串 {@link s} 是否等于 undefined、null 或者 {@link empty} 时，返回 true；否则返回 false。
		 * @author Wang Yucai
		 *
		 * @param {sys.NullableType<string>} s 需要校验的字符串。
		 * @returns {boolean}
		 * @see {@link Object.isUndefined}
		 * @see {@link Object.isNull}
		 */
		isNullOrEmpty(s: sys.NullableType<string>): boolean;

		/**
		 * @description 当字符串 {@link s} 是否等于 undefined、null、{@link empty} 或空格符时，返回 true；否则返回 false。
		 * @author Wang Yucai
		 *
		 * @param {sys.NullableType<string>} s 需要校验的字符串。
		 * @returns {boolean}
		 * @see {@link String.isNullOrEmpty}
		 */
		isNullOrWhiteSpace(s: sys.NullableType<string>): boolean;

		/**
		 * @description 格式化字符串。
		 * @author Wang Yucai
		 *
		 * @param {sys.NullableType<string>} formatter 格式化模板字符串。
		 * @param {...Array<any>} args 格式化参数数组。
		 * @returns {string}
		 * @see https://learn.microsoft.com/zh-cn/dotnet/api/system.string.format?view=net-7.0#system-string-format(system-string-system-object())
		 */
		format(formatter: sys.NullableType<string>, ...args: Array<any>): string;

		/**
		 * @description 当 {@link s} 等于 undefined 或 null 或 {@link String.empty} 时，将返回 {@link $default}。
		 * @author Wang Yucai
		 *
		 * @param {sys.NullableType<string>} s 需要验证的字符串。
		 * @param {string} [$default=""] 当 {@link s} 等于 undefined 或 null 时默认的返回值。
		 * @returns {string}
		 */
		safeGet(s: sys.NullableType<string>, $default: string = ""): string;
	}

	/**
	 * @description 为 String 类型提供的扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface String
	 * @typedef {String}
	 */
	interface String {
		/**
		 * @description 用于校验字符串与 {@link s} 是否相等。
		 * @author Wang Yucai
		 *
		 * @param {string} s 需要对比的字符串。
		 * @param {boolean} [ignoreCasing=false] 是否忽略大小写。
		 * @returns {boolean}
		 */
		equals(s: string, ignoreCasing: boolean = false): boolean;
	}

	/**
	 * @description 为 Number 类型提供的静态扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface NumberConstructor
	 * @typedef {NumberConstructor}
	 */
	interface NumberConstructor {
		/**
		 * @description 尝试将 {@link s} 转换成 number 类型值。
		 * @author Wang Yucai
		 *
		 * @param {sys.NullableType<string>} s 数字字符串。
		 * @returns {Readonly<sys.ParsedResult<number>>}
		 */
		tryParse(s: sys.NullableType<string>): Readonly<sys.ParsedResult<number>>;
	}

	/**
	 * @description 为 Number 类型提供的扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface Number
	 * @typedef {Number}
	 */
	interface Number {
		/**
		 * @description 将 number 值转换成货币字符串（小数点后两位，不包含缩写符和货币符）。
		 * @author Wang Yucai
		 *
		 * @returns {string}
		 */
		toCurrency(): string;

		/**
		 * @description 将 number 值转换成货币字符串。
		 * @author Wang Yucai
		 *
		 * @param {string} currencySymbol 货币符号。
		 * @returns {string}
		 */
		toCurrency(currencySymbol: string): string;

		/**
		 * @description 将 number 值转换成货币字符串。
		 * @author Wang Yucai
		 *
		 * @param {sys.IFormatProvider<number>} formatter 数值格式化程序。
		 * @param {sys.globalization.ICultureInfo} [culture] 当前的文化区域。
		 * @returns {string}
		 */
		toCurrency(formatter: sys.IFormatProvider<number>, culture?: sys.globalization.ICultureInfo): string;
	}

	/**
	 * @description 为 {@link Error} 类型提供的扩展方法。
	 * @author Wang Yucai
	 *
	 * @interface Error
	 * @typedef {Error}
	 */
	interface Error {
		/**
		 * @description 抛出此异常。
		 * @author Wang Yucai
		 */
		throw(): void;

		/**
		 * @description 当 {@link where} 等于 true 时，将引发此异常。
		 * @author Wang Yucai
		 *
		 * @param {boolean} where 条件表达式。
		 */
		trueThrow(where: boolean): void;

		/**
		 * @description 当条件表达式 {@link where} 返回 true 时，将引发此异常。
		 * @author Wang Yucai
		 *
		 * @param {sys.FuncX<boolean>} where 条件表达式。
		 * @param {...Array<any>} args 上下文参数。
		 */
		trueThrow(where: sys.FuncX<boolean>, ...args: Array<any>): void;
	}
}
