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

		/**
		 * @description 定义了创建 {@link sys.globalization.ICultureInfo} 类型的对象实例的接口。
		 * @author Wang Yucai
		 *
		 * @interface ICultureInfoFactory
		 * @typedef {ICultureInfoFactory}
		 */
		interface ICultureInfoFactory {
			/**
			 * @description 创建名称为 {@link cultureName} 的文化区域信息。
			 * @author Wang Yucai
			 *
			 * @param {sys.globalization.ICultureInfoConstructor} factory 工厂方法。
			 * @param {string} cultureName 文化区域名称。
			 * @returns {sys.globalization.ICultureInfo}
			 */
			createCultureInfo(
				factory: sys.globalization.ICultureInfoConstructor,
				cultureName: string
			): sys.globalization.ICultureInfo;
		}

		/**
		 * @description {@link sys.globalization.ICultureInfoFactory} 工厂方法定义。
		 * @author Wang Yucai
		 *
		 * @interface ICultureInfoFactoryConstructor
		 * @typedef {ICultureInfoFactoryConstructor}
		 */
		interface ICultureInfoFactoryConstructor {
			/**
			 * @description 用于初始化一个 {@link sys.globalization.ICultureInfoFactory} 类型的对象实例。
			 */
			new (): sys.globalization.ICultureInfoFactory;
		}
	}
}
