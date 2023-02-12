// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { getInnerResourceManager } from "../../functionals";
import { FormatProvider } from "./format-provider";

/**
 * @description 提供了 Number 类型的值格式化为货币字符串相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class CurrencyFormatter
 * @typedef {CurrencyFormatter}
 * @extends {FormatProvider<number>}
 * @implements {sys.IFormatProvider<number>}
 */
export class CurrencyFormatter extends FormatProvider<number> implements sys.IFormatProvider<number> {
	private m_currencyAbbrResourceKey: string;

	/**
	 * 用于初始化一个 {@link <identifier>} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 * @param {string} [currencyAbbrResourceName] 获取缩写符号资源标识名称。
	 */
	constructor(currencyAbbrResourceName?: string) {
		super();
		this.m_currencyAbbrResourceKey = String.safeGet(currencyAbbrResourceName, "CurrencyAbbr_rmb");
	}

	format(value: number, culture?: sys.globalization.ICultureInfo): string {
		return `${getInnerResourceManager().getString(
			this.m_currencyAbbrResourceKey,
			this.getCulture(culture)
		)} ${value.toFixed(2)}`;
	}

	/**
	 * @description 变更货币缩写符资源标识名称。
	 * @author Wang Yucai
	 *
	 * @param {string} name 资源标识名称。
	 * @returns {CurrencyFormatter}
	 */
	changeCurrencyAbbrResourceName(name: string): CurrencyFormatter {
		this.m_currencyAbbrResourceKey = String.safeGet(name, "CurrencyAbbr_rmb");
		return this;
	}
}
