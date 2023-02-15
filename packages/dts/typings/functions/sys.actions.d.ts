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
	}

	/**
	 * @description 定义了无返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface Action1
	 * @typedef {Action1}
	 * @template T 参数类型。
	 */
	interface Action1<T> {
		/**
		 * @description 定义了无返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @param {T} arg {@link T} 类型的参数值。
		 */
		(arg: T): void;
	}

	/**
	 * @description 定义了无返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface Action2
	 * @typedef {Action2}
	 * @template T1 参数类型。
	 * @template T2 参数类型。
	 */
	interface Action2<T1, T2> {
		/**
		 * @description 定义了无返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @param {T1} arg1 {@link T1} 类型的参数值。
		 * @param {T2} arg2 {@link T2} 类型的参数值。
		 */
		(arg1: T1, arg2: T2): void;
	}

	/**
	 * @description 定义了无返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface Action3
	 * @typedef {Action3}
	 * @template T1 参数类型。
	 * @template T2 参数类型。
	 * @template T3 参数类型。
	 */
	interface Action3<T1, T2, T3> {
		/**
		 * @description 定义了无返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @param {T1} arg1 {@link T1} 类型的参数值。
		 * @param {T2} arg2 {@link T2} 类型的参数值。
		 * @param {T3} arg3 {@link T3} 类型的参数值。
		 */
		(arg1: T1, arg2: T2, arg3: T3): void;
	}

	/**
	 * @description 定义了无返回值的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface ActionX
	 * @typedef {ActionX}
	 */
	interface ActionX {
		/**
		 * @description 定义了无返回值的方法委托。
		 * @author Wang Yucai
		 *
		 * @param {...Array<any>} params 可变的参数数组。
		 */
		(...params: Array<any>): void;
	}
}
