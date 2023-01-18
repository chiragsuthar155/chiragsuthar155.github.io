const inputField = document.querySelector(".input");
const btn = document.querySelector(".btn");
const results = document.querySelector(".results");

btn.addEventListener("click", function () {
  let value = inputField.value;
  if (value === "") {
    alert("Please, Add a Todo");
    return;
  }
  results.insertAdjacentHTML(
    "afterbegin",
    `
        <div class="entry">
        <input class="checkbox" type="checkbox" />
        <h2 class="entry-title">${value.toUpperCase()}</h3>
        <button type="button" class="delete">Delete</button>
        </div>
    `
  );
  inputField.value = "";

  const deleteBtn = document.querySelector(".delete");
  const checkbox = document.querySelector(".checkbox");

  console.log(deleteBtn, checkbox, results);

  deleteBtn.addEventListener("click", function (e) {
    const deleteEntry = e.target.parentNode;
    deleteEntry.remove();
  });

  checkbox.addEventListener("click", function (e) {
    const checkItem = e.target;
    const entryDone = e.target.nextElementSibling;

    if (checkItem.checked == true) {
      entryDone.style.textDecoration = "line-through";
    } else {
      entryDone.style.textDecoration = "none";
    }
  });
});
