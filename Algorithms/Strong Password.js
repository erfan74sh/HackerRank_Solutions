function minimumNumber(n, password) {
	let count = 0;
	password.match(/[a-z]+/g) ? null : count++;
	password.match(/[A-Z]+/g) ? null : count++;
	password.match(/\d+/g) ? null : count++;
	password.match(/[\!\@\#\$\%\^\&\*\(\)\-\+]+/g) ? null : count++;
	return password.length + count >= 6 ? count : 6 - password.length;
}
