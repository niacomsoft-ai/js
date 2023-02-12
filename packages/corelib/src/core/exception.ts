// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************


/**
 * @description 提供了运行时异常相关的方法。
 * @author Wang Yucai
 *
 * @export
 * @class Exception
 * @typedef {Exception}
 * @implements {sys.Exception}
 */
export class Exception implements sys.Exception {


    get innerException(): Error {
        throw new Error("Method not implemented.");
    }
    name: string;
    message: string;
    stack?: string;
}
