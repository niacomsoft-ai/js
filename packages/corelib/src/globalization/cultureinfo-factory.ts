// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealed } from "../decorators";

/**
 * @description 提供了创建 {@link sys.globalization.ICultureInfo} 类型的对象实例相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class CultureInfoFactory
 * @typedef {CultureInfoFactory}
 * @implements {sys.globalization.ICultureInfoFactory}
 * @sealed
 */
@sealed
export class CultureInfoFactory implements sys.globalization.ICultureInfoFactory {
	/**
	 * 用于初始化一个 {@link CultureInfoFactory} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 */
	constructor() {}

	createCultureInfo(factory: sys.globalization.ICultureInfoConstructor, cultureName: string): sys.globalization.ICultureInfo {
		return new factory(cultureName);
	}
}
