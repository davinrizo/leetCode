var largestNumber = function(nums) {
    if (nums.join('') == 0)
        return '0'
    let res = nums.toString().split(',')
    res.sort((a, b) => (b + a) - (a + b))
    return res.join('')
};

var k = [3,30,34,5,9];
var m = k.toString().split(',');