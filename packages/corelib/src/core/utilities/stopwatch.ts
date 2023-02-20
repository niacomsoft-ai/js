// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealed } from "../../decorators";

/**
 * @description 提供了计时相关的方法。此类型可以用来监控方法性能。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class Stopwatch
 * @typedef {Stopwatch}
 */
@sealed
export class Stopwatch {
	private m_startTime: sys.NullableType<number> = null;
	private m_stopTime: sys.NullableType<number> = null;

	/**
	 * @description 启动计时。
	 * @author Wang Yucai
	 */
	start(): void {
		this.m_startTime = new Date().getTime();
	}

	/**
	 * @description 终止计时。
	 * @author Wang Yucai
	 */
	stop(): void {
		if (Object.isNull(this.m_startTime)) this.start();
		this.m_stopTime = new Date().getTime();
		Function;
	}

	/**
	 * @description 获取一个 Number 类型值，用于表示总测量时间（单位：毫秒）。
	 * @author Wang Yucai
	 *
	 * @readonly
	 * @type {number}
	 */
	get milliSeconds(): number {
		return (this.m_stopTime ?? 0) - (this.m_startTime ?? 0);
	}

	/**
	 * @description 创建一个计时程序，并开始计时。
	 * @author Wang Yucai
	 *
	 * @static
	 * @returns {Stopwatch}
	 */
	static startNew(): Stopwatch {
		const $new = new Stopwatch();
		$new.start();
		return $new;
	}

	/**
	 * @description 监控无返回的方法 {@link action}。
	 * @author Wang Yucai
	 *
	 * @static
	 * @param {sys.ActionX} action 无返回值的参数。
	 * @param {...Array<any>} args 方法参数数组。
	 */
	static watchAction(action: sys.ActionX, ...args: Array<any>): void {
		const watch = Stopwatch.startNew();
		console.trace(`[TRACE]: 开始监控方法 “${action.name}”。详情参见：%o`, {
			StackTrace: "stopwatch.ts - {Sign:5a6f95}",
			TargetSite: {
				MemberName: "watchAction",
				Parameters: { action, args },
				MemeberType: "Method",
			},
			ContextMetadata: watch,
		});
		action(args);
		watch.stop();
		console.trace(`[TRACE]: 结束对方法 “${action.name}” 的监控，共耗时 “${watch.milliSeconds}” 毫秒。详情参见：%o`, {
			StackTrace: "stopwatch.ts - {Sign:62ed61}",
			TargetSite: {
				MemberName: "watchAction",
				Parameters: { action, args },
				MemeberType: "Method",
			},
			ContextMetadata: watch,
		});
	}

	/**
	 * @description 用于监控方法 {@link func}。
	 * @author Wang Yucai
	 *
	 * @static
	 * @template TReturn
	 * @param {sys.FuncX<TReturn>} func {@link TReturn} 类型返回值的方法。
	 * @param {...Array<any>} args 方法参数数组。
	 * @returns {TReturn}
	 */
	static watchFunc<TReturn>(func: sys.FuncX<TReturn>, ...args: Array<any>): TReturn {
		const watch = Stopwatch.startNew();
		console.trace(`[TRACE]: 开始监控方法 “${func.name}”。详情参见：%o`, {
			StackTrace: "stopwatch.ts - {Sign:5a6f95}",
			TargetSite: {
				MemberName: "watchFunc",
				Parameters: { func, args },
				MemeberType: "Method",
			},
			ContextMetadata: watch,
		});
		const result = func(args);
		watch.stop();
		console.trace(`[TRACE]: 结束对方法 “${func.name}” 的监控，共耗时 “${watch.milliSeconds}” 毫秒。详情参见：%o`, {
			StackTrace: "stopwatch.ts - {Sign:62ed61}",
			TargetSite: {
				MemberName: "watchFunc",
				Parameters: { func, args },
				MemeberType: "Method",
			},
			ContextMetadata: { watch, result },
		});
		return result;
	}
}
