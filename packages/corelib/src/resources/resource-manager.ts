// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * @description 提供了访问资源信息相关的基本方法。
 * @author Wang Yucai
 *
 * @export
 * @abstract
 * @class ResourceManager
 * @typedef {ResourceManager}
 * @implements {sys.resources.IResourceManager}
 */
export abstract class ResourceManager implements sys.resources.IResourceManager {
	getString(name: string): string;
	getString(name: string, culture: sys.globalization.ICultureInfo): string;
	getString(name: string, culture?: any): string {
		return this.internalGetString(name, culture ?? __NIACOMSOFT_CULTUREINFO_OPTIONS__.currentCulture);
	}

	/**
	 * @description 获取指定文化区域 {@link culture}，标识名称为 {@link name} 的资源字符串。
	 * @author Wang Yucai
	 *
	 * @protected
	 * @abstract
	 * @param {string} name 资源标识名称。
	 * @param {sys.globalization.ICultureInfo} culture 文化区域信息。
	 * @returns {sys.NullableType<string>}
	 */
	protected abstract internalGetString(name: string, culture: sys.globalization.ICultureInfo): sys.NullableType<string>;
}
