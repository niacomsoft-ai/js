// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

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
