//alert("xin chao");
//console.log("abcxyz");
//function function_name(argument) {
// body...
//}
var a = 5;
var b = 10;
if (a == b) {
  var c = (a + b) * 3;
} else {
  var c = a + b;
}
document.getElementById("demo").innerHTML = "Output: " + c;
var x = 25;
if (x >= 19) {
  var y = (x - 19) * 3;
} else {
  y = 19 - x;
}
document.getElementById("demo2").innerHTML = "Output: " + y;
var str = "123*456";
var kq = "";
for (var i = 0; i <= 9; i++) {
  var res = str.replace("*", i);
  if (parseFloat(res) % 3 == 0) {
    kq = kq + "   " + res;
  }
}
document.getElementById("demo3").innerHTML = "Output: " + kq;
var str2 = "1234*567890";
var kq2 = "";
for (var i = 0; i <= 9; i++) {
  var res2 = str2.replace("*", i);
  if (parseFloat(res2) % 6 == 0) {
    kq2 = kq2 + "   " + res2;
  }
}
document.getElementById("demo4").innerHTML = "Output: " + kq2;