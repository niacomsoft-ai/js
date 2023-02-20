// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { DelayTimer, IntervalTimer } from "../core/utilities";

/**
 * @description 创建一个新的计时器。
 * @author Wang Yucai
 *
 * @export
 * @param {number} interval 时间间隔（单位：毫秒）。
 * @param {("interval" | "delay")} [intervalOrDelay="interval"] 间隔式还是延迟式的时钟。
 * @returns {sys.timers.ITimer}
 * @see {@link IntervalTimer} {@link DelayTimer}
 */
export function createTimer(interval: number, intervalOrDelay: "interval" | "delay" = "interval"): sys.timers.ITimer {
	if (String.safeGet(intervalOrDelay, "interval").equals("interval", true)) {
		return new IntervalTimer(interval);
	} else {
		return new DelayTimer(interval);
	}
}
