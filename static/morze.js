function checkin(symbol, arr) {
	for(let i = 0; i <= arr.length; i++) {
		if(symbol === arr[i]) {
			return true;
		}
	}
	return false;
}

let alfabeth_morze = {
	"т": "-", "е": ".",
	"а": ".-", "і": "..", "м": "--", "н": "-.",
	"р": ".-.", "с": "...", "в": ".--", "к": "-.-", "г": "--.", "у": "..-", "д": "-..", "о": "---",
	"ш": "----", "б": "-...", "й": ".---", "щ": "--.-", "л": ".-..", "и": "-.--", "ф": "..-.", "я": "-.-.",
	"ь": "-..-", "х": "....", "ж": "...-", "ц": "-.-.", "ю": "..--", "з": "--..", "п": ".--.", "ч": "---.",
	"э": "..-..", "ї": ".---.",
	"ъ": ".--.-.",

};

let morze = {};
let alfabeth = [];
let j = '';
for (let i in alfabeth_morze) {
	j = alfabeth_morze[i];
	alfabeth.push(i);
	morze[j] = i
}

let scope = ['.', '-']

function decode_morze(msg) {
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

function encode_morze(msg) {
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

export {encode_morze, decode_morze};