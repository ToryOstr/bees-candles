const viewBtns = document.querySelectorAll("more-about");

console.log(viewBtns);

for (btn of viewBtns) {
  btn.addEventListener("click", function (e) {
    let currentBtn = e.target;

    console.log(currentBtn);
  });
}
