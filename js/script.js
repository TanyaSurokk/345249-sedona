var search_btn = document.querySelector (".search-btn");
var search_form = document.querySelector(".search-form");
var check_in = search_form.querySelector("[name=check-in]");
var form = search_form.querySelector("form");
var check_out = search_form.querySelector("[name=check-out]");
var adults = search_form.querySelector("[name=adults]");
var children = search_form.querySelector("[name=children]");

search_btn.addEventListener("click", function (evt) {
  evt.preventDefault();
  search_form.classList.toggle("search-form-show");
  search_form.classList.remove("search-form-error");
  check_in.focus();
});

form.addEventListener("submit", function (evt) {
  if(!check_in.value || !check_out.value || !adults.value || !children.value) {
    evt.preventDefault();
    search_form.classList.remove("search-form-error");
    search_form.offsetWidth = search_form.offsetWidth;
    search_form.classList.add("search-form-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (search_form.classList.contains("search-form-show")) {
      search_form.classList.remove("search-form-show");
    }
  }
});
