// Description: A script that takes a long time to run

console.log("start heavy2.js");
// This script takes 3 seconds to run
{
  const when = Date.now() + 3000;
  while (Date.now() < when) {
    // do nothing
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.body.appendChild(document.createElement("div")).innerHTML = "Hello, world!";
});
console.log("end heavy2.js");