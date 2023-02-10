// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealed } from "../decorators";

/**
 * @description 提供了访问文化区域信息相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class CultureInfo
 * @typedef {CultureInfo}
 * @implements {sys.globalization.ICultureInfo}
 * @sealed
 */
@sealed
export class CultureInfo implements sys.globalization.ICultureInfo {
	private readonly m_cultureName: string;

	/**
	 * 用于初始化一个 {@link CultureInfo} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 * @param {string} cultureName 文化区域名称。
	 */
	constructor(cultureName: string) {
		this.m_cultureName = cultureName;
	}

	get name(): string {
		return this.m_cultureName;
	}

	/**
	 * @description 创建一个实现了 {@link sys.globalization.ICultureInfo} 类型接口的对象实例。
	 * @author Wang Yucai
	 *
	 * @static
	 * @param {string} cultureName
	 * @returns {sys.globalization.ICultureInfo}
	 */
	static createCulture(cultureName: string): sys.globalization.ICultureInfo {
		return new CultureInfo(cultureName);
	}
}
