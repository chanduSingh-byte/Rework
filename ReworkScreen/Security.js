document.addEventListener("keydown", function (e) {
  if (e.key === "F12") e.preventDefault();

  if (
    e.ctrlKey &&
    e.shiftKey &&
    ["I", "J", "C"].includes(e.key.toUpperCase())
  ) {
    e.preventDefault();
  }

  if (e.ctrlKey && e.key.toLowerCase() === "u") {
    e.preventDefault();
  }
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});
