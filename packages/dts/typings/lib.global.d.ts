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
	}
}
