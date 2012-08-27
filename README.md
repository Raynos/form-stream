# form-stream

A delta stream which emits deltas from form elements

## Example

Create a stream from an element that contains form elements. It will listen on keyup for the input fields and emit a change based on the data attribute and the field value

``` js
var FormStream = require("form-stream")
    , someElement = document.getElementById("thing")

var stream = FormStream(someElement)

stream.on("data", function (data) {
    var changes = data[0]

    /* changes is 
        { foo: "b" } 
        { foo: "ba" } 
        { foo: "bar" } 
    */
})
```

``` html
<div id="thing">
    <input data-foo placholder="write bar in here"/>
</div>
```

## Installation

`npm install form-stream`

## Contributors

 - Raynos

## MIT Licenced