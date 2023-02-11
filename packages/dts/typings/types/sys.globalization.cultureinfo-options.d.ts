// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
	namespace globalization {
		/**
		 * @description 文化区域配置选项。
		 * @author Wang Yucai
		 *
		 * @interface CultureInfoOptions
		 * @typedef {CultureInfoOptions}
		 */
		interface CultureInfoOptions {
			/**
			 * @description 设置或获取 {@link sys.globalization.ICultureInfo} 类型的对象实例，用于表示当前线程的文化区域信息。
			 * @author Wang Yucai
			 *
			 * @type {sys.globalization.ICultureInfo}
			 */
			currentCulture: sys.globalization.ICultureInfo;

			/**
			 * @description 设置或获取 {@link sys.globalization.ICultureInfo} 类型的对象实例，用于表示当前 UI 线程的文化区域信息。
			 * @author Wang Yucai
			 *
			 * @type {sys.globalization.ICultureInfo}
			 */
			currentUICulture: sys.globalization.ICultureInfo;
		}
	}
}
