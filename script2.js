// Global scope
var globalVar = "I'm global!";

function outerFunc() {
  // Local scope in outerFunc
  var outerVar = "I'm in outerFunc!";

  function innerFunc() {
    // Local scope in innerFunc
    var innerVar = "I'm in innerFunc!";

    console.log(innerVar); // Accessible as it's in the same scope
    console.log(outerVar); // Accessible as it's in the outer function's scope
    console.log(globalVar); // Accessible as it's in the global scope
  }

  innerFunc();
}

outerFunc();

// hoisting
function hoist(){
  console.log(b);
  var b = 10;
}
hoist(); 

hoist_func();
function hoist_func() {
  var b = 10;
  console.log(b);
}