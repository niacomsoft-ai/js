// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealed } from "../decorators";

/**
 * @description 提供了创建 {@link sys.globalization.ICultureInfo} 相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class CultureInfoFactory
 * @typedef {CultureInfoFactory}
 * @sealed
 */

@sealed
export class CultureInfoFactory {
	/**
	 * 用于初始化一个 {@link CultureInfoFactory} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 * @private
	 */
	private constructor() {}

	/**
	 * @description 创建一个实现了 {@link sys.globalization.ICultureInfo} 类型接口的对象实例。
	 * @author Wang Yucai
	 *
	 * @static
	 * @param {sys.globalization.ICultureInfoConstructor} factory 工厂方法。
	 * @param {string} cultureName 文化区域名称。
	 * @returns {sys.globalization.ICultureInfo}
	 */
	static createCulture(
		factory: sys.globalization.ICultureInfoConstructor,
		cultureName: string
	): sys.globalization.ICultureInfo {
		return new factory(cultureName);
	}
}
