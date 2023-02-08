// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
	/**
	 * @description 定义了无返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface Action
	 * @typedef {Action}
	 */
	interface Action {
		/**
		 * @description 定义了无返回值的方法委托。
		 * @author Wang Yucai
		 */
		(): void;

		/**
		 * @description 定义了无返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @template T 参数类型。
		 * @param {T} arg {@link T} 类型的参数值。
		 */
		<T>(arg: T): void;

		/**
		 * @description 定义了无返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @template T1 参数类型。
		 * @template T2 参数类型。
		 * @param {T1} arg1 {@link T1} 类型的参数值。
		 * @param {T2} arg2 {@link T2} 类型的参数值。
		 */
		<T1, T2>(arg1: T1, arg2: T2): void;

		/**
		 * @description 定义了无返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @template T1 参数类型。
		 * @template T2 参数类型。
		 * @template T3 参数类型。
		 * @param {T1} arg1 {@link T1} 类型的参数值。
		 * @param {T2} arg2 {@link T2} 类型的参数值。
		 * @param {T3} arg3 {@link T3} 类型的参数值。
		 */
		<T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): void;

		/**
		 * @description 定义了无返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @template T1 参数类型。
		 * @template T2 参数类型。
		 * @template T3 参数类型。
		 * @template T4 参数类型。
		 * @param {T1} arg1 {@link T1} 类型的参数值。
		 * @param {T2} arg2 {@link T2} 类型的参数值。
		 * @param {T3} arg3 {@link T3} 类型的参数值。
		 * @param {T4} arg4 {@link T4} 类型的参数值。
		 */
		<T1, T2, T3, T4>(arg1: T1, arg2: T2, arg3: T3, arg4: T4): void;

		/**
		 * @description 定义了无返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @template T1 参数类型。
		 * @template T2 参数类型。
		 * @template T3 参数类型。
		 * @template T4 参数类型。
		 * @template T5 参数类型。
		 * @param {T1} arg1 {@link T1} 类型的参数值。
		 * @param {T2} arg2 {@link T2} 类型的参数值。
		 * @param {T3} arg3 {@link T3} 类型的参数值。
		 * @param {T4} arg4 {@link T4} 类型的参数值。
		 * @param {T5} arg5 {@link T5} 类型的参数值。
		 */
		<T1, T2, T3, T4, T5>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): void;
	}
}
