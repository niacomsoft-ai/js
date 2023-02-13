// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealed } from "../decorators";
import { getInnerResourceManager } from "../functionals";
import { Exception } from "./exception";

/**
 * @description 提供了方法参数异常相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class ArgumentException
 * @typedef {ArgumentException}
 * @extends {Exception}
 * @sealed
 */

@sealed
export class ArgumentException extends Exception {
	protected get resourceName(): string {
		return "ArgumentException";
	}

	/**
	 * @description 创建一个 {@link ArgumentException} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @static
	 * @param {string} argName 发生异常的参数名称。
	 * @returns {ArgumentException}
	 */
	static createException(argName: string): ArgumentException {
		if (String.isNullOrWhiteSpace(argName)) return new ArgumentException();

		return new ArgumentException(
			String.format(getInnerResourceManager().getString("ArgumentException_with_invalid_argument_name"), argName)
		);
	}
}
