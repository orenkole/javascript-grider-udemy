async function greet() {
  return "hello";
}
greet(); // Promise
greet().then(data => {console.log(data);})


async function add(x, y) {
  if(typeof x !== "number" || typeof y !== "number"){
    throw "X and Y must be numbers"
  }
  return x + y;
}

function add(x, y) {
  return new Promise((resolve, reject) => {
    if(typeof x !== "number" || typeof y !== "number"){
      reject("X and Y must be numbers")
    }
    resolve(x + y);
  })
}

add("x", "y")
  .then(val => {console.log(val);})
  .catch(err => {console.log(err);})
