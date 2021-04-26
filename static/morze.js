import {MORZE_NUMBERS, MORZE_CODE_RU, MORZE_CODE_UA, MORZE_CODE_EN} from '/dataStore.js';

let scope = ['*', '-'];
let alphabeth = {
	'en': MORZE_CODE_EN,
	'ru': MORZE_CODE_RU,
	'ua': MORZE_CODE_UA,
	};

function checkin(symbol, arr) {
	for(let i = 0; i <= arr.length; i++) {
		if(symbol === arr[i]) {
			return true;
		}
	}
	return false;
}

function convert(code) {
	let morze = {};
	for (let i in code) {
		morze[code[i]] = i;
	}
	console.log(morze);
	return morze;
}

function decode_morze(msg, code) {
	let morze = convert(code);
	console.log(morze['\'**--\'']);
	let term = '';
	let sym = '';
	let result = '';
	// основний цикл
	for(let i = 0; i<=msg.length; i++) {
		sym = msg[i];
		if(checkin(sym, scope)) {
			term += sym;
			continue;
		}
		// console.log(term);

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
			// if(!checkin(sym, alphabeth)) {
			// 	continue;
			// }
			result += alphabeth[sym] + ' ';
		}
		result += '   ';
	}
	return result;
}

function morze(msg, code, encode=true) {
	msg = msg.toUpperCase();
	let alphas = alphabeth[code];
	if(encode) {
		return encode_morze(msg, alphas);
	}
	msg = msg.replaceAll('–', '-');
	return decode_morze(msg, alphas);
}

export {morze};