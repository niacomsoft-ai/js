// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { sealed } from "../../decorators";
import { getInnerResourceManager } from "../../functionals";
import { ArgumentException } from "../argument-exception";

/**
 * @description 提供了计时器相关的基本方法。
 * @author Wang Yucai
 *
 * @abstract
 * @class Timer
 * @typedef {Timer}
 * @implements {sys.timers.ITimer}
 */
abstract class Timer implements sys.timers.ITimer {
	private readonly m_interval: number;
	private m_enabled: boolean = false;
	private m_timerId: sys.NullableType<number> = null;

	/**
	 * 用于初始化一个 {@link Timer} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 * @param {number} interval 时间间隔（单位：毫秒）。
	 */
	constructor(interval: number) {
		if (interval <= 0) {
			console.error(`[ERROR]: 小于等于 0 的时间间隔值：“${interval}”。详情参见：%o`, {
				StackTrace: "timers.ts - {Sign:85b6dc}",
				TargetSite: {
					MemberName: "Timer::constructor",
					Parameters: { interval },
					MemeberType: "Method",
				},
				ContextMetadata: null,
			});
			new ArgumentException(getInnerResourceManager().getString("Exception_invalid_timer_interval_value")).throw();
		}

		this.m_interval = interval;
	}

	/**
	 * @description 获取 {@link TimerHandler} 类型的对象实例，用于表示 JavaScript 原生计时器。
	 * @author Wang Yucai
	 *
	 * @protected
	 * @abstract
	 * @readonly
	 * @type {TimerHandler}
	 * @see {@link setTimeout} {@link setInterval}
	 */
	protected abstract get pureHandler(): TimerHandler;

	/**
	 * @description 获取一个 Number 类型值，用于表示 JavaScript 原生计时器唯一标识。
	 * @author Wang Yucai
	 *
	 * @protected
	 * @readonly
	 * @type {number}
	 */
	protected get pureHandlerId(): number {
		return this.m_timerId;
	}

	get interval(): number {
		return this.m_interval;
	}
	get enabled(): boolean {
		return this.m_enabled;
	}
	start(ticks?: sys.EventHandler<sys.EventArgs>): void {
		if (!this.m_enabled && Object.isNull(this.m_timerId)) {
			this.m_enabled = true;
			// scopedThis 将作为 this 的上下文代理。
			const scopedThis = this;
			new Promise((resolve) => {
				scopedThis.m_timerId = (scopedThis.pureHandler as Function)(() => {
					console.trace(`[TRACE]: 时钟到达。详情参见：%o`, {
						StackTrace: "timers.ts - {Sign:43d6d9}",
						TargetSite: {
							MemberName: (scopedThis.pureHandler as Function).name,
							Parameters: {},
							MemeberType: "Method",
						},
						ContextMetadata: scopedThis,
					});
					resolve(() => {
						if (!Object.isNull(ticks)) ticks({});
					});
				}, scopedThis.interval);
			});
		}
	}
	stop(): void {
		if (this.m_enabled && !Object.isNull(this.m_timerId)) {
			this.internalStop();
			this.m_enabled = false;
			this.m_timerId = null;
		}
	}

	/**
	 * @description 停止时钟。
	 * @author Wang Yucai
	 *
	 * @protected
	 * @abstract
	 */
	protected abstract internalStop(): void;
}

/**
 * @description 提供了间隔式时钟相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class IntervalTimer
 * @typedef {IntervalTimer}
 * @extends {Timer}
 * @see {@link setInterval}
 */
@sealed
export class IntervalTimer extends Timer {
	protected get pureHandler(): TimerHandler {
		return setInterval;
	}
	protected internalStop(): void {
		clearInterval(this.pureHandlerId);
	}
}

/**
 * @description 提供了延迟性的时钟相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class DelayTimer
 * @typedef {DelayTimer}
 * @extends {Timer}
 * @see {@link setTimeout}
 */
@sealed
export class DelayTimer extends Timer {
	protected get pureHandler(): TimerHandler {
		return setTimeout;
	}
	protected internalStop(): void {
		clearTimeout(this.pureHandlerId);
	}
}
