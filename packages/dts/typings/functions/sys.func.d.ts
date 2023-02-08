// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
	/**
	 * @description 定义了有返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface Func
	 * @typedef {Func}
	 */
	interface Func {
		/**
		 * @description 定义了有返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @template TResult 返回值类型。
		 * @returns {TResult}
		 */
		<TResult>(): TResult;

		/**
		 * @description 定义了有返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @template T 参数类型。
		 * @template TResult 返回值类型。
		 * @param {T} arg {@link T} 类型的参数。
		 * @returns {TResult}
		 */
		<T, TResult>(arg: T): TResult;

		/**
		 * @description 定义了有返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @template T1 参数类型。
		 * @template T2 参数类型。
		 * @template TResult 返回值类型。
		 * @param {T1} arg1 {@link T1} 类型的参数。
		 * @param {T2} arg2 {@link T2} 类型的参数。
		 * @returns {TResult}
		 */
		<T1, T2, TResult>(arg1: T1, arg2: T2): TResult;

		/**
		 * @description 定义了有返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @template T1 参数类型。
		 * @template T2 参数类型。
		 * @template T3 参数类型。
		 * @template TResult 返回值类型。
		 * @param {T1} arg1 {@link T1} 类型的参数。
		 * @param {T2} arg2 {@link T2} 类型的参数。
		 * @param {T3} arg3 {@link T3} 类型的参数。
		 * @returns {TResult}
		 */
		<T1, T2, T3, TResult>(arg1: T1, arg2: T2, arg3: T3): TResult;

		/**
		 * @description 定义了有返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @template T1 参数类型。
		 * @template T2 参数类型。
		 * @template T3 参数类型。
		 * @template T4 参数类型。
		 * @template TResult 返回值类型。
		 * @param {T1} arg1 {@link T1} 类型的参数。
		 * @param {T2} arg2 {@link T2} 类型的参数。
		 * @param {T3} arg3 {@link T3} 类型的参数。
		 * @param {T4} arg4 {@link T4} 类型的参数。
		 * @returns {TResult}
		 */
		<T1, T2, T3, T4, TResult>(arg1: T1, arg2: T2, arg3: T3, arg4: T4): TResult;

		/**
		 * @description 定义了有返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @template T1 参数类型。
		 * @template T2 参数类型。
		 * @template T3 参数类型。
		 * @template T4 参数类型。
		 * @template T5 参数类型。
		 * @template TResult 返回值类型。
		 * @param {T1} arg1 {@link T1} 类型的参数。
		 * @param {T2} arg2 {@link T2} 类型的参数。
		 * @param {T3} arg3 {@link T3} 类型的参数。
		 * @param {T4} arg4 {@link T4} 类型的参数。
		 * @param {T5} arg5 {@link T5} 类型的参数。
		 * @returns {TResult}
		 */
		<T1, T2, T3, T4, T5, TResult>(arg1: T1, arg2: T2, arg3: T3, arg4: T4, arg5: T5): TResult;
	}
}
