import {MORZE_NUMBERS, MORZE_ALPHABETH_RU, MORZE_ALPHABETH_UA, MORZE_ALPHABETH_EN} from '/dataStore.js';

let scope = ['*', '-'];
let alphabeth = {
	'en': MORZE_ALPHABETH_EN,
	'ru': MORZE_ALPHABETH_RU,
	'ua': MORZE_ALPHABETH_UA,
	};

function checkin(symbol, arr) {
	for(let i = 0; i <= arr.length; i++) {
		if(symbol === arr[i]) {
			return true;
		}
	}
	return false;
}

function convert(alfabeth_morze) {
	let morze = {};
	let alfabeth = [];
	let j = '';
	for (let i in alfabeth_morze) {
		j = alfabeth_morze[i];
		alfabeth.push(i);
		morze[j] = i
	}
	return morze;
}

function decode_morze(msg, code) {
	let morze = convert(alphabeth[code]);
	let term = '';
	let sym = '';
	let result = '';
	// основний цикл
	for(let i = 0; i<=msg.length; i++) {
		sym = msg[i];
		// scope ['.', '-']
		if(checkin(sym, scope)) {
			term += sym;
			continue;
		}

		if(checkin(sym, [' ']) && checkin(msg[i+1], scope)) {
			if(term != '') result += morze[term];
			term = '';
		}

		if(checkin(sym, [' ']) && checkin(msg[i+1], [' '])) {
			if(term != '') result += morze[term] + ' ';
			term = '';
		}
	}
	return result;
}

function encode_morze(msg, alphabeth) {
	let result = '';
	let sym = '';
	msg = msg.split(' ');

	for(let i = 0; i < msg.length; i++) {
		let word = msg[i];
		for(let j = 0; j < word.length; j++) {
			sym = word[j];
			if(!checkin(sym, alfabeth)) {
				continue;
			}
			result += alfabeth_morze[sym] + ' ';
		}
		result += '   ';
	}
	return result;
}

function morze(msg, code, decode=true) {
	msg = msg.toUpperCase();
	if(decode) {
		return decode_morze(msg, alphabeth[code]).toLowerCase();
	}
	return encode_morze(msg, alphabeth[code]).toLowerCase();
}

export {morze};