// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
	/**
	 * @description 定义了字符串格式化的接口。
	 * @author Wang Yucai
	 *
	 * @interface IFormatProvider
	 * @typedef {IFormatProvider}
	 * @template T
	 */
	interface IFormatProvider<T> {
		/**
		 * @description 格式化 {@link T} 类型的值为字符串。
		 * @author Wang Yucai
		 *
		 * @param {T} value 指定的 {@link T} 类型的值。
		 * @param {?sys.NullableType<sys.globalization.ICultureInfo>} [culture] 文化区域信息。
		 * @returns {string}
		 */
		format(value: T, culture?: sys.NullableType<sys.globalization.ICultureInfo>): string;
	}
}
