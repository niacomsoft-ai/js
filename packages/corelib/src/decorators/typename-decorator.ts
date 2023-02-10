// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * @description 用于描述类型名称。
 * @author Wang Yucai
 *
 * @export
 * @param {string} typeName 类型名称。
 * @returns {DecoratorFactory}
 */
export function typenameDecorator(typeName: string): DecoratorFactory {
	return function (target: ClassConstructor) {
		Reflect.defineMetadata("getType", (): string => typeName, target.prototype);
	};
}
