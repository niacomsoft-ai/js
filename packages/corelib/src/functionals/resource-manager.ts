// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import { I18nextResourceManager } from "../resources";

/**
 * @description 获取内部资源管理程序。
 * @author Wang Yucai
 *
 * @export
 * @returns {sys.resources.IResourceManager}
 */
export function getInnerResourceManager(): sys.resources.IResourceManager {
	let resourceMgr: sys.resources.IResourceManager;

	function initOrGet(): sys.resources.IResourceManager {
		if (Object.isNull(resourceMgr)) {
			console.debug(`[DEBUG]: 尝试初始化内部资源管理程序。详情参见：%o`, {
				StackTrace: "resource-manager.ts - {Sign:9a6992}",
				TargetSite: {
					MemberName: "getInnerResourceManager.initOrGet",
					Parameters: {},
					MemeberType: "Method",
				},
				ContextMetadata: resourceMgr,
			});
			resourceMgr = new I18nextResourceManager();
		}

		return resourceMgr;
	}

	return initOrGet();
}
