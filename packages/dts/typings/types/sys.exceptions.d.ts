// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
	/**
	 * @description 运行时异常。
	 * @author Wang Yucai
	 *
	 * @interface Exception
	 * @typedef {Exception}
	 */
	interface Exception {
		/**
		 * @description 获取 {@link Error} 类型的对象实例，用于表示引发此异常的 {@link Error} 类型的对象实例。
		 * @author Wang Yucai
		 *
		 * @readonly
		 * @type {Error?}
		 */
		get innerException(): Error?;
	}

	/**
	 * @description 运行时异常构造函数工厂约束。
	 * @author Wang Yucai
	 *
	 * @interface ExceptionConstructor
	 * @typedef {ExceptionConstructor}
	 */
	interface ExceptionConstructor {
		new (...args: Array<any>): sys.Exception;
	}
}
