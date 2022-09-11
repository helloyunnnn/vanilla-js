const greetings = document.querySelector("#greetings span");
const time = document.querySelector("#time-weather__time");
const ampm = document.querySelector("#time-weather__ampm");

function setGreetings() {
  const date = new Date();
  const hour = date.getHours();

  const name = localStorage.getItem(ITEM_USER_NAME);
  let greetingsText = "";
  console.log(hour);
  if (hour < 5) greetingsText = "Good Night";
  else if (hour < 11) greetingsText = "Good Morning";
  else if (hour < 5) greetingsText = "Good Afternoon";
  else if (hour < 9) greetingsText = "Good Evening";
  else greetingsText = "Good Night";

  greetings.innerHTML = `${greetingsText},</br><b>${name}</b>!`;
}

function setTimeText() {
  const date = new Date();
  let hour = date.getHours();
  const min = date.getMinutes();
  if (min === 0) setGreetings();

  const ampmText = hour < 12 ? "AM" : "PM";
  if (hour > 12) hour -= 12;
  else if (hour === 0) hour = 12;

  const hourText = String(hour).padStart(2, "0");
  const minText = String(min).padStart(2, "0");

  ampm.innerText = ampmText;
  time.innerText = `${hourText}:${minText}`;
}
