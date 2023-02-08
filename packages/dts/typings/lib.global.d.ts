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
		 * @description 当 {@link s} 等于 undefined 或 null 时，将返回 {@link $default}。
		 * @author Wang Yucai
		 *
		 * @param {sys.NullableType<string>} s 需要验证的字符串。
		 * @param {string} [$default=""] 当 {@link s} 等于 undefined 或 null 时默认的返回值。
		 * @returns {string}
		 */
		safeGet(s: sys.NullableType<string>, $default: string = ""): string;
	}
}
