module.exports = function reverse (n) {
    const res = n.toString().split('').reverse();
    return parseInt(res.join(''));
}



// function reverse (n) {
//     const res = n.toString().split('').reverse();
//     return parseInt(res.join(''));
// }



// reverse(-252);
// reverse(0);
// reverse(228);