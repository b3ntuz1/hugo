import {rot1 as rot1} from "/rot1.js";
import {morze} from '/morze.js';

// view
const view_elem = document.querySelector("#view");
function view(data) {
	view_elem.value = String(data);
}

// data to proceed
const text_elem = document.querySelector("#text");
function getData() {
	return text_elem.value;
}

// reverse
function revrs(txt) {
	let tmp = "";
	let l = txt.length - 1;
	for (let i = 0; i <= l; i++) {
		tmp += txt[l - i];
	}
	return tmp
}

// onclick button func
export function onclickwrapper() {
	let text = getData();
	let arr = text.split(' ');
	let tmp = "";
	if(document.getElementById('split_words').checked) {
		for(let i = 0; i < arr.length; i++) {
			tmp += revrs(arr[i]) + ' ';
		}
	} else {
		tmp = revrs(text);
	}
	view(tmp);
}

export function sezare() {
	let elem = document.getElementsByName("rot1")[0];
	let raw_offset = document.getElementsByName("rot1")[1];
	let offset = Number(raw_offset.value);
	if(offset > 1 && offset < 124) {
		view(
			rot1(getData(), offset, elem.checked)
			);
	} else {
		raw_offset.value = 24;
	}
}

export function morze_func() {
	let elem = document.getElementsByName("rot1")[0];
	let text = getData();
	let a = document.getElementById('alphabeth').value;
	if(elem.checked) {
		view(morze(text, a));
	} else {
		view(morze(text, a, false));
	}
}
