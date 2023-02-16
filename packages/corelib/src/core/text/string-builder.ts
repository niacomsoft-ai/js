// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealed } from "../../decorators";

/**
 * @description 提供了字符串拼接相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class StringBuilder
 * @typedef {StringBuilder}
 */
@sealed
export class StringBuilder {
	private m_strBuffer: Array<string>;

	/**
	 * 用于初始化一个 {@link StringBuilder} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 * @param {sys.NullableType<string>} [s=null] 初始化字符串。
	 */
	constructor(s: sys.NullableType<string> = null) {
		this.resetBufferArray();
		if (!Object.isNull(s)) {
			this.m_strBuffer.push(s);
		}
	}

	/**
	 * @description 清空 {@link StringBuilder} 类型的对象实例。
	 * @author Wang Yucai
	 */
	clear(): void {
		this.resetBufferArray();
	}

	/**
	 * @description 追加字符串 {@link s} 到缓冲数组尾部。
	 * @author Wang Yucai
	 *
	 * @param {string} s 字符串。
	 * @returns {StringBuilder}
	 */
	append(s: string): StringBuilder {
		this.m_strBuffer.push(s);
		return this;
	}

	/**
	 * @description 格式化字符串并追加到缓冲数组尾部。
	 * @author Wang Yucai
	 *
	 * @param {string} formatter 格式化字符串。
	 * @param {...Array<any>} args 格式化参数。
	 * @returns {StringBuilder}
	 * @see {@link String.format}
	 */
	appendFormat(formatter: string, ...args: Array<any>): StringBuilder {
		return this.append(String.format(formatter, args));
	}

	/**
	 * @description 获取拼接的字符串。
	 * @author Wang Yucai
	 *
	 * @returns {string}
	 */
	toString(): string {
		return this.m_strBuffer.join(String.empty());
	}

	private resetBufferArray(): void {
		this.m_strBuffer = [];
	}
}
