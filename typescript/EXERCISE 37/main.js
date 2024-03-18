// EXERCISE 36:
function make_shirt(size, text) {
    if (size === void 0) { size = 'large'; }
    if (text === void 0) { text = 'I love typescript. '; }
    console.log("please create a ".concat(size, " shirt along with message: ").concat(text));
}
//  call the function by default:
make_shirt();
make_shirt('medium');
make_shirt('small', 'do not stop untill you are proud!');
