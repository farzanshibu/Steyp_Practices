document.addEventListener("keydown", function (event) {
  if (
    event.key === "E" ||
    event.key === "Q" ||
    event.key === "U" ||
    event.key === "A" ||
    event.key === "L"
  ) {
    console.log("You clicked equal");
  } else {
    console.log("not equal");
  }
});
