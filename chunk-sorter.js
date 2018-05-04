module.exports = function sort(left, right) {
    let leftIndex = this.indexOf(left.names[0]);
    let rightindex = this.indexOf(right.names[0]);

    if (leftIndex > rightindex) {
        return 1;
    } else if (leftIndex < rightindex) {
        return -1;
    } else {
        return 0;
    }
}