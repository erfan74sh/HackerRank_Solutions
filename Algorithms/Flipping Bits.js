function flippingBits(n) {
	let bNum = n.toString(2);
	let arr = Array.from({ length: 32 }).fill("0");
	let _32bit = arr.slice(0, arr.length - bNum.length).concat(...bNum);
	return parseInt(_32bit.map((v) => (v == "0" ? 1 : 0)).join(""), 2);
}
