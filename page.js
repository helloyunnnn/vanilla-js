const initPage = document.querySelector("#init-page");
const mainPage = document.querySelector("#main-page");

const initForm = document.querySelector("#init__form");
const initInput = document.querySelector("#init__form input");

const ITEM_USER_NAME = "username";

function onInitFormSubmit(event) {
  event.preventDefault();
  if (initInput.value !== "") {
    localStorage.setItem(ITEM_USER_NAME, initInput.value);
    initPage.classList.add(CLASS_HIDDEN);
    mainPage.classList.remove(CLASS_HIDDEN);
    InitMainPage();
  }
}

function InitMainPage() {
  todoForm.addEventListener("submit", onTodoFormSubmit);
  setGreetings();
  setTimeText();
  setInterval(setTimeText, 1000);
}

const savedUserName = localStorage.getItem(ITEM_USER_NAME);
if (savedUserName === null) {
  initPage.classList.remove(CLASS_HIDDEN);
  initForm.addEventListener("submit", onInitFormSubmit);
} else {
  mainPage.classList.remove(CLASS_HIDDEN);
  InitMainPage();
}
