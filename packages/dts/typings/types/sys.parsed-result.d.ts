// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
	/**
	 * @description 字符串转换结果。
	 * @author Wang Yucai
	 *
	 * @interface ParsedResult
	 * @typedef {ParsedResult}
	 * @template T = number | Date | boolean
	 */
	interface ParsedResult<T = number | Date | boolean> {
		/**
		 * @description 设置或获取一个字符串，用于表示原始字符串。
		 * @author Wang Yucai
		 *
		 * @type {sys.NullableType<string>}
		 */
		sourceString: sys.NullableType<string>;

		/**
		 * @description 设置或获取一个 Boolean 类型值，用于表示是否转换成功。
		 * @author Wang Yucai
		 *
		 * @type {boolean}
		 */
		isCompleted: boolean;

		/**
		 * @description 设置或获取一个 {@link T} 类型值，用于表示目标值。
		 * @author Wang Yucai
		 *
		 * @type {?T}
		 */
		value?: T;
	}
}
