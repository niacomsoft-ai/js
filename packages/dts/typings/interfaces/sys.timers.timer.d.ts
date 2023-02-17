// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
	namespace timers {
		/**
		 * @description 定义了计时器相关的接口。
		 * @author Wang Yucai
		 *
		 * @interface ITimer
		 * @typedef {ITimer}
		 */
		interface ITimer {
			/**
			 * @description 获取一个 Number 类型值，用于表示计时器时间间隔（单位：毫秒）。
			 * @author Wang Yucai
			 *
			 * @readonly
			 * @type {number}
			 */
			get interval(): number;

			/**
			 * @description 获取一个 Boolean 类型值，用于表示计时器是否已经启动。
			 * @author Wang Yucai
			 *
			 * @readonly
			 * @type {boolean}
			 */
			get enabled(): boolean;

			/**
			 * @description 启动计时器。
			 * @author Wang Yucai
			 *
			 * @param {?sys.EventHandler<sys.EventArgs>} [ticks] 计时器到达指定时间刻度时执行的方法。
			 */
			start(ticks?: sys.EventHandler<sys.EventArgs>): void;

			/**
			 * @description 停止计时器。
			 * @author Wang Yucai
			 */
			stop(): void;
		}
	}
}
