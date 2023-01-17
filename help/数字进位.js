/* 在最低位添加一个数字 */
let number = 8264;
// number 的进制
let R = 10;
// 想在 number 的最低位添加的数字
let appendVal = 3;
// 运算，在最低位添加一位
number = R * number + appendVal;
// 此时 number = 82643

/* 在最高位删除一个数字 */
let number = 8264;
// number 的进制
let R = 10;
// number 最高位的数字
let removeVal = 8;
// 此时 number 的位数
let L = 4;
// 运算，删除最高位数字
number = number - removeVal * R^(L-1);
// 此时 number = 264
