// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
	/**
	 * @description 定义了 {@link TReturn} 类型返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface Func
	 * @typedef {Func}
	 * @template TReturn 返回值类型。
	 */
	interface Func<TReturn> {
		/**
		 * @description 定义了 {@link TReturn} 类型返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @returns {TReturn}
		 */
		(): TReturn;
	}

	/**
	 * @description 定义了 {@link TReturn} 类型返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface Func1
	 * @typedef {Func1}
	 * @template T 参数类型。
	 * @template TReturn 返回值类型。
	 */
	interface Func1<T, TReturn> {
		/**
		 * @description 定义了 {@link TReturn} 类型返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @param {T} arg {@link T} 类型的参数值。
		 * @returns {TReturn}
		 */
		(arg: T): TReturn;
	}

	/**
	 * @description 定义了 {@link TReturn} 类型返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface Func2
	 * @typedef {Func2}
	 * @template T1 参数类型。
	 * @template T2 参数类型。
	 * @template TReturn 返回值类型。
	 */
	interface Func2<T1, T2, TReturn> {
		/**
		 * @description 定义了 {@link TReturn} 类型返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @param {T1} arg1 {@link T1} 类型的参数值。
		 * @param {T2} arg2 {@link T2} 类型的参数值。
		 * @returns {TReturn}
		 */
		(arg1: T1, arg2: T2): TReturn;
	}

	/**
	 * @description 定义了 {@link TReturn} 类型返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface Func3
	 * @typedef {Func3}
	 * @template T1 参数类型。
	 * @template T2 参数类型。
	 * @template T3 参数类型。
	 * @template TReturn 返回值类型。
	 */
	interface Func3<T1, T2, T3, TReturn> {
		/**
		 * @description 定义了 {@link TReturn} 类型返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @param {T1} arg1 {@link T1} 类型的参数值。
		 * @param {T2} arg2 {@link T2} 类型的参数值。
		 * @param {T3} arg3 {@link T3} 类型的参数值。
		 * @returns {TReturn}
		 */
		(arg1: T1, arg2: T2, arg3: T3): TReturn;
	}

	/**
	 * @description 定义了 {@link TReturn} 类型返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface FuncX
	 * @typedef {FuncX}
	 * @template TReturn 返回值类型。
	 */
	interface FuncX<TReturn> {
		/**
		 * @description 定义了 {@link TReturn} 类型返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @param {...Array<any>} params 可变的参数数组。
		 * @returns {TReturn}
		 */
		(...params: Array<any>): TReturn;
	}
}
