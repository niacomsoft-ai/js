// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

declare namespace sys {
	/**
	 * @description 事件参数。
	 * @author Wang Yucai
	 *
	 * @interface EventArgs
	 * @typedef {EventArgs}
	 */
	interface EventArgs {}

	namespace globalization {
		/**
		 * @description 文化区域变更事件参数。
		 * @author Wang Yucai
		 *
		 * @interface CultureInfoChangedEventArgs
		 * @typedef {CultureInfoChangedEventArgs}
		 * @extends {sys.EventArgs}
		 */
		interface CultureInfoChangedEventArgs extends sys.EventArgs {
			/**
			 * @description 设置或获取 {@link sys.globalization.ICultureInfo} 类型的对象实例，用于表示新的文化区域信息。
			 * @author Wang Yucai
			 *
			 * @type {sys.globalization.ICultureInfo}
			 */
			culture: sys.globalization.ICultureInfo;
		}
	}
}
