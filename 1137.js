/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let t = [0,1,1];
    for(let i=3; i<=n; i++){
      t.push(t[i - 3] + t[i - 2] + t[i-1]);
    }
    return t[n];
};