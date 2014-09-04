# promise-debounce

## Installation

### npm

Get it:

```shell
npm install promise-debounce
```

Require it:

```javascript
var debounce = require('promise-debounce');
````

#### `var debounced = debounce(fn, [ctx])`

Returns a debounced version of `fn` with optional calling context `ctx`.

`fn` must be a function which returns a promise.

If `debounced` is called and no other call is currently pending, `fn` will be called and its promise returned. Otherwise - if another call is pending - the same promise will be returned.