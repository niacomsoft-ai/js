// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import i18next from "i18next";
import { sealed } from "../decorators";

/**
 * @description 提供了访问文化区域信息相关的方法。密闭的，不可以从此类型派生。
 * @author Wang Yucai
 *
 * @export
 * @class CultureInfo
 * @typedef {CultureInfo}
 * @implements {sys.globalization.ICultureInfo}
 * @sealed
 */
@sealed
export class CultureInfo implements sys.globalization.ICultureInfo {
	private readonly m_cultureName: string;

	/**
	 * 用于初始化一个 {@link CultureInfo} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 * @param {string} cultureName 文化区域名称。
	 */
	constructor(cultureName: string) {
		this.m_cultureName = cultureName;
	}

	get name(): string {
		return this.m_cultureName;
	}

	/**
	 * @description 创建一个实现了 {@link sys.globalization.ICultureInfo} 类型接口的对象实例。
	 * @author Wang Yucai
	 *
	 * @static
	 * @param {string} cultureName
	 * @returns {sys.globalization.ICultureInfo}
	 */
	static createCulture(cultureName: string): sys.globalization.ICultureInfo {
		return new CultureInfo(cultureName);
	}

	/**
	 * @description 重置当前线程的 CurrentCulture 属性。
	 * @author Wang Yucai
	 *
	 * @static
	 * @param {sys.globalization.ICultureInfo} culture 新的文化区域信息。
	 * @param {?sys.EventHandler<sys.globalization.CultureInfoChangedEventArgs>} [callback] 重置成功后的回调方法。
	 */
	static setCurrentCulture(
		culture: sys.globalization.ICultureInfo,
		callback?: sys.EventHandler<sys.globalization.CultureInfoChangedEventArgs>
	): void {
		i18next
			.changeLanguage(culture.name)
			.then(() => {
				console.debug(`[DEBUG]: 当前线程的 CurrentCulture 属性已经切换为 ${culture.name}，尝试进行回调。详情参见：%o`, {
					StackTrace: "cultureinfo.ts - {Sign:2f3bc1}",
					TargetSite: {
						MemberName: "setCurrentCulture",
						Parameters: {
							culture,
						},
						MemeberType: "Method",
					},
					ContextMetadata: i18next,
				});
				__NIACOMSOFT_CULTUREINFO_OPTIONS__.currentCulture = culture;
				__NIACOMSOFT_CULTUREINFO_OPTIONS__.currentUICulture = culture;
				if (!callback) callback({ culture });
			})
			.catch((error) => {
				console.error(`[ERROR]: 切换当前线程的 CurrentCulture 属性失败。详情参见：%o`, {
					StackTrace: "cultureinfo.ts - {Sign:e27db5}",
					TargetSite: {
						MemberName: "setCurrentCulture",
						Parameters: {},
						MemeberType: "Method",
					},
					ContextMetadata: error,
				});
			});
	}

	/**
	 * @description 获取 {@link sys.globalization.ICultureInfo} 类型的对象实例，用于表示当前线程的 CurrentCulture 属性。
	 * @author Wang Yucai
	 *
	 * @static
	 * @readonly
	 * @type {sys.globalization.ICultureInfo}
	 */
	static get currentCulture(): sys.globalization.ICultureInfo {
		return __NIACOMSOFT_CULTUREINFO_OPTIONS__.currentCulture;
	}
}
