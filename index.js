/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var spow = function(a, b) {
  const m = 1337;
  var dig = 0;
  let bmod = 0;
  for(let i = 0; i< b.length; i++){
    bmod = (bmod * 10 + b[i])%1140;
  }
  if (bmod === 0) return 1;

  //power function
  const ppiw = (c,d) =>{
    if (d === 0) return 1;
    if (d === 1) return c;
    let res = d%2===0 ? ppiw((c*c) % m, d/2) : 
                        ppiw((c*c)% m, (d-1)/2) * c;
    return res % m;
  }

  if (a % m === 0) return 0;
  if (bmod === 0) return bmod += 1440;

  return ppiw(a % m, bmod)

};

var a = [1,2];
var b = a.toString().replace(/,/g, '');

var pow1 = (x,n) =>{
  const m = 1337;
  let p = n.toString().replace(/,/g, '');
  if (n === 0) return 1;
  let res = p%2===0 ? pow1((x*x) % m, p/2) : pow1((x*x)%m, (p-1)/2) *x;

  return res > 0 ? res % m : 1/res;


}

var k = 2147483647;
var z = [2,0,0];