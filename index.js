var walk = require("dom-walk")
    , through = require("through")

module.exports = FormStream

function FormStream(elem) {
    var stream = through()

    walk([elem], isInput)

    return stream

    function isInput(node) {
        if (node.tagName !== "INPUT") {
            return
        }

        var key = Object.keys(node.dataset)[0]
        if (!key) {
            return
        }

        node.addEventListener("keyup", function () {
            var changes = {}
            changes[key] = node.value
            stream.write([changes, Date.now()])
        })
    }
}