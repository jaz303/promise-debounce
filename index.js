module.exports = promiseDebounce;
function promiseDebounce(fn, ctx) {
	var pending = null;
	return function() {
		if (pending) return pending;
		var promise = pending = fn.apply(ctx, arguments);
		promise.then(function() {
			pending = null;
		});
		return promise;
	}
}
