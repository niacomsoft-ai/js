// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
	namespace resources {
		/**
		 * @description 定义了资源信息的接口。
		 * @author Wang Yucai
		 *
		 * @interface IResourceManager
		 * @typedef {IResourceManager}
		 */
		interface IResourceManager {
			/**
			 * @description 获取标识名称为 {@link name} 的资源字符串。
			 * @author Wang Yucai
			 *
			 * @param {string} name 资源的标识名称。
			 * @returns {sys.NullableType<string>}
			 */
			getString(name: string): sys.NullableType<string>;

			/**
			 * @description 获取标识名称为 {@link name} 的资源字符串。
			 * @author Wang Yucai
			 *
			 * @param {string} name 资源的标识名称。
			 * @param {sys.globalization.ICultureInfo} culture 文化区域信息。
			 * @returns {sys.NullableType<string>}
			 */
			getString(name: string, culture: sys.globalization.ICultureInfo): sys.NullableType<string>;
		}
	}
}
