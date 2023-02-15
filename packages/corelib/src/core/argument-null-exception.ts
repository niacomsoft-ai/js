// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealed } from "../decorators";
import { getInnerResourceManager } from "../functionals";
import { Exception } from "./exception";

/**
 * @description 当参数为 undefined 或 null 时，可能引发此类型的异常。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class ArgumentNullException
 * @typedef {ArgumentNullException}
 * @extends {Exception}
 * @sealed
 */
@sealed
export class ArgumentNullException extends Exception {
	protected get resourceName(): string {
		return "ArgumentNullException";
	}

	/**
	 * @description 创建一个 {@link ArgumentNullException} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @static
	 * @param {string} argName
	 * @returns {ArgumentNullException}
	 */
	static createException(argName: string): ArgumentNullException {
		if (String.isNullOrWhiteSpace(argName)) return new ArgumentNullException();

		return new ArgumentNullException(
			String.format(getInnerResourceManager().getString("ArgumentNullException_with_argument_name"), argName)
		);
	}

	/**
	 * @description 当 {@link argValue} 为 undefined 或 null 时，将引发一个 {@link ArgumentNullException} 类型的异常。
	 * @author Wang Yucai
	 *
	 * @static
	 * @param {*} argValue 需要校验的参数值。
	 * @param {?string} [argName] 参数名称。
	 */
	static argumentNull(argValue: any, argName?: string): void {
		if (Object.isNull(argValue)) {
			console.error(`[ERROR]: 参数 “argValue” 可能为 undefined 或 null 值。详情参见：%o`, {
				StackTrace: "argument-null-exception.ts - {Sign:e40fb1}",
				TargetSite: {
					MemberName: "ArgumentNullException.argumentNull",
					Parameters: { argName, argValue },
					MemeberType: "Method",
				},
				ContextMetadata: null,
			});

			ArgumentNullException.createException(argName).throw();
		}
	}
}
