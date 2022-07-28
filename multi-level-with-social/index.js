const hasChildren = document.querySelectorAll(".has-children");

hasChildren.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.nextElementSibling.classList.contains("hide")) {
      e.target.nextElementSibling.classList.add("hide");
      e.target.nextElementSibling.classList.remove("toggle-on");
      return;
    }
    e.target.nextElementSibling.classList.remove("hide");
    e.target.nextElementSibling.classList.add("toggle-on");
  });
});
