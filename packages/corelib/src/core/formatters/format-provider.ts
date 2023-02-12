// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { CultureInfo } from "../../globalization";

/**
 * @description 提供了 {@link T} 类型字符串格式化相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class FormatProvider
 * @typedef {FormatProvider}
 * @template T
 * @implements {sys.IFormatProvider<T>}
 */
export abstract class FormatProvider<T> implements sys.IFormatProvider<T> {
	/**
	 * 用于初始化一个 {@link FormatProvider<T>} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 * @protected
	 */
	protected constructor() {}

	abstract format(value: T, culture?: sys.globalization.ICultureInfo): string;

	/**
	 * @description 当 {@link culture} 等于 undefined 或 null 时，返回 {@link CultureInfo.currentCulture} 值。
	 * @author Wang Yucai
	 *
	 * @protected
	 * @param {sys.NullableType<sys.globalization.ICultureInfo>} [culture] 可能为空的文化区域信息。
	 * @returns {sys.globalization.ICultureInfo}
	 */
	protected getCulture(
		culture: sys.NullableType<sys.globalization.ICultureInfo> = undefined
	): sys.globalization.ICultureInfo {
		return culture ?? CultureInfo.currentCulture;
	}
}
