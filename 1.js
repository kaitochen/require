define("1.js", ["2.js", "3.js"], function (two, three) {
  console.log(two);
  console.log(three);
  document.querySelector("#body").innerHTML = two.name + "-" + three;
});
