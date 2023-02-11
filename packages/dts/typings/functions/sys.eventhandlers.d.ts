// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
	/**
	 * @description 定义了处理事件的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface EventHandler
	 * @typedef {EventHandler}
	 */
	interface EventHandler {
		/**
		 * @description 定义了处理事件的方法委托。
		 * @author Wang Yucai
		 *
		 * @param {sys.EventArgs} e 事件参数。
		 */
		(e: sys.EventArgs): void;
	}

	/**
	 * @description 定义了处理事件的方法委托。
	 * @author Wang Yucai
	 *
	 * @interface EventHandler
	 * @typedef {EventHandler}
	 * @template T 派生自 {@link sys.EventArgs} 类型的对象实例。
	 */
	interface EventHandler<T extends sys.EventArgs> {
		/**
		 * @description 定义了处理事件的方法委托。
		 * @author Wang Yucai
		 *
		 * @param {T} e {@link T} 类型的事件参数。
		 */
		(e: T): void;
	}
}
