module.exports = promiseDebounce;
function promiseDebounce(fn, ctx) {
	var pending = null;
	return function() {
		if (pending) return pending;
		pending = fn.apply(ctx, arguments);
		pending.then(function() {
			pending = null;
		});
		return pending;
	}
}
