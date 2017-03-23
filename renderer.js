// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function foo() {
    console.log("foo()");
}

setTimeout(function () {
    foo();
}, 2000);