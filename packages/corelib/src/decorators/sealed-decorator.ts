// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * @description 用于描述类是密闭的。
 * @author Wang Yucai
 *
 * @param {Function} constructor 类的构造方法。
 * @exports
 */
export function sealedDecorator(constructor: Function): void {
	Object.seal(constructor);
	Object.seal(constructor.prototype);
}
