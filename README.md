# sondaj.js
Applies sampling operation that based on given element count to an array.

## Usage

```javaScript
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var sampledArray = arr.sondajla(5);
console.log(sampledArray);
```
Or simply:
```javaScript
console.log([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].sondajla(5));
```

## API
### Method
#### sondajla(samplingCount)
Returns randomized subset of array based on samplingCount.

## License
MIT
