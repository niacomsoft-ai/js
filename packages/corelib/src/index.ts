// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * @description 核心类库。
 *
 * @packageDocumentation
 */

import "reflect-metadata";
import "./native";
export {
	ArgumentException,
	ArgumentNullException,
	CurrencyFormatter,
	DelayTimer,
	Exception,
	FormatProvider,
	IntervalTimer,
	StringBuilder,
} from "./core";
export { obsolete, sealed } from "./decorators";
export { createTimer, getInnerResourceManager } from "./functionals";
export { CultureInfo, CultureInfoFactory } from "./globalization";
export { I18nextResourceManager, ResourceManager } from "./resources";
