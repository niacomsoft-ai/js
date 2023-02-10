// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
	namespace globalization {
		/**
		 * @description 定义了文化区域信息的接口。
		 * @author Wang Yucai
		 *
		 * @interface ICultureInfo
		 * @typedef {ICultureInfo}
		 */
		interface ICultureInfo {
			/**
			 * @description 获取一个字符串，用于表示文化区域名称。
			 * @author Wang Yucai
			 *
			 * @readonly
			 * @type {string}
			 */
			get name(): string;
		}

		/**
		 * @description {@link sys.globalization.ICultureInfo} 工厂方法定义。
		 * @author Wang Yucai
		 *
		 * @interface ICultureInfoConstructor
		 * @typedef {ICultureInfoConstructor}
		 */
		interface ICultureInfoConstructor {
			/**
			 * @description 用于初始化一个 {@link sys.globalization.ICultureInfo} 类型的对象实例。
			 *
			 * @param {string} cultureName 文化区域名称。
			 */
			new (cultureName: string): sys.globalization.ICultureInfo;
		}
	}
}
