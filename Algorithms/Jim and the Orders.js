function jimOrders(orders) {
	let o = [];
	orders.forEach((v, i) => (o[i] = { order: i + 1, duration: v[0] + v[1] }));
	o.sort((a, b) => a.duration - b.duration);
	return Array.from(o, (v) => v.order);
}
