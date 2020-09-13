exports.min = function min(array) {
    if (typeof array === 'undefined' || array.length === 0) {
        return 0;
    }
    return Math.min(...array);
}

exports.max = function max(array) {
    if (typeof array === 'undefined' || array.length === 0) {
        return ''.length;
    }
    return Math.max(...array);
}

exports.avg = function avg(array) {
    let res = 0;
    if (typeof array === 'undefined' || array.length === 0) {
        console.log(0);
        return 0;
    } else {
        array.forEach(el => res += el);
        return res / array.length;
    }
}
