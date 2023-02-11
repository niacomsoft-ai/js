// *******************************************************************************************************************************************************
// LICENSED UNDER THE MIT LICENSE. SEE LICENSE FILE IN THE PROJECT ROOT FOR FULL LICENSE INFORMATION.
// COPYRIGHT © 2006 - 2023 WANG YUCAI. ALL RIGHTS RESERVED.
// *******************************************************************************************************************************************************

import {
	SimplifiedChineseLanguagePack,
	TraditionalChineseLanguagePack,
	USALanguagePack,
} from "@niacomsoft/multiple-languages-pack";
import i18next from "i18next";
import { CultureInfo, CultureInfoFactory } from "../globalization";

var __NIACOMSOFT_EMPTY_STRING__: string = "";

var __NIACOMSOFT_CULTUREINFO_FACTORY__: sys.globalization.ICultureInfoFactoryConstructor = CultureInfoFactory;

var __NIACOMSOFT_CULTUREINFO_OPTIONS__: sys.globalization.CultureInfoOptions = {
	currentCulture: CultureInfo.createCulture("zh-chs"),
	currentUICulture: CultureInfo.createCulture("zh-chs"),
};

i18next.init({
	debug: true,
	lng: __NIACOMSOFT_CULTUREINFO_OPTIONS__.currentCulture.name,
	resources: {
		"zh-chs": {
			translation: SimplifiedChineseLanguagePack,
		},
		"en-us": {
			translation: USALanguagePack,
		},
		"zh-cht": {
			translation: TraditionalChineseLanguagePack,
		},
	},
});
