/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = {};
    let sArr = s.split('')
    for(let elem of sArr) {
        map[elem] = (map[elem] || 0) + 1;
    }
    sArr.sort();
    sArr.sort((a,b) => map[b]-map[a] || a-b);
    s = sArr.join('');
    return s;
};

frequencySort("loveleetcode")