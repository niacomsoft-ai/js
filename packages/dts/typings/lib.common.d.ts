// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

/**
 * @description 定义了类构造方法结构。
 * @author Wang Yucai
 *
 * @interface ClassConstructor
 * @typedef {ClassConstructor}
 */
declare interface ClassConstructor {
	new (...args: Array<any>): object;
}

/**
 * @description 定义了装饰器工厂方法委托结构。
 * @author Wang Yucai
 *
 * @interface DecoratorFactory
 * @typedef {DecoratorFactory}
 */
declare interface DecoratorFactory {
	(target: any, propertyKey?: string, descriptor?: PropertyDecorator): void;
}
