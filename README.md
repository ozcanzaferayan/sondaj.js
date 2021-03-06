# sondaj.js

[![npm version](https://badge.fury.io/js/sondaj.svg)](https://badge.fury.io/js/sondaj)

Enables the sampling operation to be executed on an array based on the given element count.

## Demo
[Demo page](https://ozcanzaferayan.github.io/sondaj.js/)

## Installation

### NPM
```bash
npm i sondaj
```
### CDN
```html
<!DOCTYPE html>
<html>
<head>
    <title>A sample app for sampling operation</title>
</head>
<body>
    <script type="text/javascript" src="https://unpkg.com/sondaj@1.0.0/sondaj.js"></script>
</body>
</html>
```

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
