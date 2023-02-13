// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealed } from "../decorators";
import { getInnerResourceManager } from "../functionals";

/**
 * @description 提供了运行时异常相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class Exception
 * @typedef {Exception}
 * @extends {Error}
 * @implements {sys.Exception}
 */
export class Exception extends Error implements sys.Exception {
	private m_innerException: sys.NullableType<Error> = null;

	/**
	 * 用于初始化一个 {@link Exception} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 */
	constructor();

	/**
	 * 用于初始化一个 {@link Exception} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 * @param {string} message 异常信息。
	 */
	constructor(message: string);

	/**
	 * 用于初始化一个 {@link Exception} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 * @param {string} message 异常信息。
	 * @param {Error} innerException 引发此异常的 {@link Error} 类型的对象实例。
	 */
	constructor(message: string, innerException: Error);
	constructor(...args: Array<any>) {
		super();
		if (Object.isNull(args) || args.length === 0) this.message = this.safeGetErrorMessage("", this.resourceName);
		else if (typeof args[0] === "string") this.message = this.safeGetErrorMessage(args[0], this.resourceName);

		if (args.length > 1) this.m_innerException = args[1] as Error;
	}

	get innerException(): Error {
		return this.m_innerException;
	}

	/**
	 * @description 获取异常描述信息。
	 * @author Wang Yucai
	 *
	 * @protected
	 * @param {string} message 异常描述信息。
	 * @param {string} resourceName 资源标识名称。
	 * @returns {string}
	 */
	protected safeGetErrorMessage(message: string, resourceName: string): string {
		return String.safeGet(message, getInnerResourceManager().getString(resourceName));
	}

	/**
	 * @description 获取一个字符串，用于表示异常资源标识名称。
	 * @author Wang Yucai
	 *
	 * @protected
	 * @readonly
	 * @type {string}
	 */
	protected get resourceName(): string {
		return "Exception";
	}
}

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
