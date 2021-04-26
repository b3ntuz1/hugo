import {getAlphabeth} from '/dataStore.js';
var raw_alphabet = "abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщьыъэюяABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЬЫЪЭЮЯіІїЇєЄ";

function checkin(char, charset) {
	for (var i = 0; i < charset.length; i++) {
		if(char == charset[i]) {
			return true;
		}
	}
	return false;
}

function getDict(offset) {
	var dict = {};
	var alphabet = raw_alphabet.split('');
	var a_length = alphabet.length - offset;
	let i = 0;

	for(i=0; i<alphabet.length; i++) {
		if(a_length <= i) {
			dict[alphabet[i]] = alphabet[i-a_length];
			continue;
		}
		dict[alphabet[i]] = alphabet[i+offset];
	}
	return dict;
}

function decode(msg, offset) {
	var result = '';
	var dict = getDict(offset);
	
	for(var i=0; i<msg.length; i++) {
		if(checkin(dict[msg[i]], raw_alphabet)) {
			result += dict[msg[i]];
			continue;
		}
		result += String(msg[i]);
	}

	return result;
}

function encode(msg, offset) {
	var dict = getDict(offset);
	var en_dict = {};
	var result = '';
	let i = 0;

	for(i in dict) {
		en_dict[dict[i]] = i;
	}

	for(i in msg) {
		if(checkin(msg[i], raw_alphabet)) {
			result += en_dict[msg[i]];
			continue;
		}
		result += msg[i];
	}

	return result;
}

function rot1(msg, offset, alphabet, action_decode=true) {
	raw_alphabet = getAlphabeth(alphabet);
	if(action_decode) {
		return decode(msg, offset)
	} else {
		return encode(msg, offset)
	}
}

export {rot1};
// module.exports.rot1 = rot1;