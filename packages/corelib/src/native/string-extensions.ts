// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

String.empty = (): string => {
	return __NIACOMSOFT_EMPTY_STRING__;
};

String.isNullOrEmpty = (s: sys.NullableType<string>): boolean => {
	if (Object.isNull(s)) return true;
	return s === String.empty();
};

String.isNullOrWhiteSpace = (s: sys.NullableType<string>): boolean => {
	return String.isNullOrEmpty(s?.trim());
};

String.safeGet = (s: sys.NullableType<string>, $default: sys.NullableType<string> = ""): string => {
	if (String.isNullOrEmpty(s)) return $default ?? String.empty();
	return s ?? $default ?? String.empty();
};
