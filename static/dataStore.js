// dataStore.js

export const MORZE_NUMBERS = {'0':'-----','1':'*----','2':'**---','3':'***--','4':'****-',
'5':'*****','6':'-****','7':'--***','8':'---**','9':'----*'}

export const MORZE_ALPHABETH_RU = {'А':'*-','Б':'-***','В':'*--','Г':'--*','Д':'-**','Е':'*',
'Ж':'***-','З':'--**','И':'**','Й':'*---','К':'-*-','Л':'*-**','М':'--','Н':'-*',
'О':'---','П':'*--*','Р':'*-*','С':'***','Т':'-','У':'**-','Ф':'**-*','Х':'****',
'Ц':'-*-*','Ч':'---*','Ш':'----','Щ':'--*-','Ы':'-*--','Ь':'-**-','Э':'**-**',
'Ю':'**--','Я':'*-*-'};
export const MORZE_CODE_RU = merge(MORZE_ALPHABETH_RU, MORZE_NUMBERS);

export const MORZE_ALPHABETH_UA = {'А':'*-','Б':'-***','В':'*--','Г':'--*','Д':'-**','Е':'*',
'Ж':'***-','З':'--**','І':'**','Й':'*---','К':'-*-','Л':'*-**','М':'--','Н':'-*',
'О':'---','П':'*--*','Р':'*-*','С':'***','Т':'-','У':'**-','Ф':'**-*','Х':'****',
'Ц':'-*-*','Ч':'---*','Ш':'----','Щ':'--*-','И':'-*--','Ь':'-**-','Є':'**-**',
'Ю':'**--','Я':'*-*-', 'Ї': '*---*'};
export const MORZE_CODE_UA = merge(MORZE_ALPHABETH_UA, MORZE_NUMBERS);

export const MORZE_ALPHABETH_EN = {'A':'*-','B':'-***','C':'-*-*','D':'-**','E':'*',
'F':'**-*','G':'--*','H':'****','I':'**','J':'*---','K':'-*-','L':'*-**',
'M':'--','N':'-*','O':'---','P':'*--*','Q':'--*-','R':'*-*','S':'***',
'T':'-','U':'**-','V':'***-','W':'*--','X':'-**-','Y':'-*--','Z':'-**'};
export const MORZE_CODE_EN = merge(MORZE_ALPHABETH_EN, MORZE_NUMBERS);


export const ALPHABETH_RU = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
export const ALPHABETH_UA = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя";
export const ALPHABETH_EN = "abcdefghijklmnopqrstuvwxyz";

export function getAlphabeth(code) {
	code = code.toLowerCase();
	switch (code) {
		case 'ru':
			return ALPHABETH_RU;
		case 'ua':
			return ALPHABETH_UA;
		case 'en':
			return ALPHABETH_EN;
		default:
			return None;
	}
}

function merge(obj1, obj2) {
	for(let i in obj2) {
		obj1[i] = obj2[i];
	}
	return obj1;
}
