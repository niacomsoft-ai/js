// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { ResourceManager } from "./resource-manager";
import i18next from "i18next";

/**
 * @description 提供了基于 i18next 的访问资源信息相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class I18nextResourceManager
 * @typedef {I18nextResourceManager}
 * @extends {ResourceManager}
 * @see https://www.i18next.com/
 */
export class I18nextResourceManager extends ResourceManager {
	private readonly m_namespace: string;

	/**
	 * 用于初始化一个 {@link I18nextResourceManager} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 */
	constructor();

	/**
	 * 用于初始化一个 {@link I18nextResourceManager} 类型的对象实例。
	 * @author Wang Yucai
	 *
	 * @constructor
	 * @param {string} _namespace i18next 命名空间。
	 */
	constructor(_namespace: string);
	constructor(_namespace?: string) {
		super();
		this.m_namespace = String.safeGet(_namespace, "translation");
	}

	protected internalGetString(name: string, culture: sys.globalization.ICultureInfo): string {
		console.debug(`[DEBUG]: 尝试获取标识名称为 ${name} 的资源字符串。详情参见：%o`, {
			StackTrace: "i18next-resource-manager.ts - {Sign:543b26}",
			TargetSite: {
				MemberName: "internalGetString",
				Parameters: { name, culture },
				MemeberType: "Method",
			},
			ContextMetadata: null,
		});

		return i18next.getResource(culture.name, this.m_namespace, name);
	}
}
