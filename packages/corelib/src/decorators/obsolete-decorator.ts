// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * @description 用于修饰过时的类。
 * @author Wang Yucai
 *
 * @export
 * @param {ClassConstructor} constructor 类的构造方法。
 */
export function obsoleteDecorator(constructor: ClassConstructor): void;
/**
 * @description 用于修饰过时的方法。
 * @author Wang Yucai
 *
 * @export
 * @param {boolean} [error] 如果 {@link error} 为 true 则使用 console.error 输出警告信息；否则使用 console.warn 输出警告信息。
 * @returns {DecoratorFactory}
 */
export function obsoleteDecorator(error?: boolean): DecoratorFactory;
export function obsoleteDecorator(...args: Array<any>): void | DecoratorFactory {
	if (typeof args[0] === "function") {
		console.warn(`[WARN]: 类型 “${args[0].name}” 已经过时。`);
	} else {
		return function (target: any, propertyName?: string, descriptor?: PropertyDecorator): void {
			if (typeof args[0] === "boolean" && args[0]) {
				console.error(`[ERROR]: 方法 “${propertyName}” 已经过时。详情参见：%o`, {
					StackTrace: "obsolete-decorator.ts - {Sign:438613}",
					TargetSite: {
						MemberName: "obsoleteDecorator",
						Parameters: {
							target,
							propertyName,
							descriptor,
						},
						MemeberType: "Method",
					},
					ContextMetadata: null,
				});
			} else {
				console.warn(`[WARN]: 方法 “${propertyName}” 已经过时。详情参见：%o`, {
					StackTrace: "obsolete-decorator.ts - {Sign:438613}",
					TargetSite: {
						MemberName: "obsoleteDecorator",
						Parameters: {
							target,
							propertyName,
							descriptor,
						},
						MemeberType: "Method",
					},
					ContextMetadata: null,
				});
			}
		};
	}
}
