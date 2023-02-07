// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
	/**
	 * @description 定义了无参数和返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface Action
	 * @typedef {Action}
	 */
	interface Action {
		/**
		 * @description 定义了无参数和返回值的方法委托。
		 * @author Wang Yucai
		 */
		(): void;
	}

	/**
	 * @description 定义了处理无参数和返回值的可等待的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface AwaitAction
	 * @typedef {AwaitAction}
	 */
	interface AwaitAction {
		/**
		 * @description 定义了处理无参数和返回值的可等待的方法委托。
		 * @author Wang Yucai
		 *
		 * @returns {Promise<void>}
		 * @async
		 */
		(): Promise<void>;
	}

	/**
	 * @description 定义了包含了 {@link T} 类型参数的无返回值方法委托。
	 * @author Wang Yucai
	 *
	 * @interface ParameterizedAction
	 * @typedef {ParameterizedAction}
	 * @template T 参数类型。
	 */
	interface ParameterizedAction<T> {
		/**
		 * @description 定义了包含了 {@link T} 类型参数的无返回值方法委托。
		 * @author Wang Yucai
		 *
		 * @param {T} value {@link T} 类型的参数值。
		 */
		(value: T): void;
	}

	/**
	 * @description 定义了包含了 {@link T} 类型的参数无返回值的可等待的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface AwaitParameterizedAction
	 * @typedef {AwaitParameterizedAction}
	 * @template T 参数类型。
	 */
	interface AwaitParameterizedAction<T> {
		/**
		 * @description 定义了包含了 {@link T} 类型的参数无返回值的可等待的方法委托。
		 * @author Wang Yucai
		 *
		 * @param {T} value {@link T} 类型的参数值。
		 * @returns {Promise<void>}
		 */
		(value: T): Promise<void>;
	}
}
