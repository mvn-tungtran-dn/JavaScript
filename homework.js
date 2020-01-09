  var cau1 = document.getElementsByClassName("cau_1")[0];
  cau1.innerHTML = cau1_Function(a = parseInt(prompt("nhap x")), b = parseInt(prompt("nhap y")));

  function cau1_Function(x, y) {
    if (x === y) {
      return 3 * (x + y);
    }
    return (x + y);
  }
  var cau2 = document.getElementsByClassName("cau_2")[0];
  cau2.innerHTML = cau2_Function(a = parseInt(prompt("nhap x")));

  function cau2_Function(x) {
    if (x > 19) {
      return (x - 19) * 3;
    }
    return (19 - x);
  }
  var cau3 = document.getElementsByClassName("cau_3")[0];
  cau3.innerHTML = cau3_Function(str = prompt("nhap string"));

  function cau3_Function(str) {
    var i, result = "",
      sum = 0;
    var repl = str.replace("*", "0");
    console.log(repl);
    for (i = 0; i < str.length; i++) {
      var replParse = parseInt(repl.charAt(i));
      sum += replParse;

    }
    for (i = 0; i <= 9; i++) {
      if ((sum + i) % 3 === 0) {
        result += str.replace("*", i) + ",";
      }
    }
    return result.replace(/,\s*$/, "");
  }
  var cau4 = document.getElementsByClassName("cau_4")[0];
  cau4.innerHTML = cau4_Function(str = prompt("nhap string"));

  function cau4_Function(str) {
    var result = "",
      i;
    var array = cau3_Function(str).split(",");
    for (i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        result += array[i] + ",";
      }
    }
    return result.replace(/,\s*$/, "");
  }

  