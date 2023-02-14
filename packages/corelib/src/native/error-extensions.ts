// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

Error.prototype.throw = function (): void {
	throw this;
};

function __trueThrowImpl__(where: boolean): void;
function __trueThrowImpl__(where: (...args: Array<any>) => void, ...args: Array<any>): void;
function __trueThrowImpl__(this: any, where: any, ...args: Array<any>): void {
	if (typeof where === "boolean" && where) this.throw();
	else if (where(args)) this.throw();
}

Error.prototype.trueThrow = __trueThrowImpl__;
