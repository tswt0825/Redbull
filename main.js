const ageInput = document.querySelector("#ageInput");
const checkBtn = document.querySelector("button");
const message = document.querySelector("#message");

let isOldEnough = false;

checkBtn.addEventListener("click", () => {
  let age = Number(ageInput.value); // henter tallet fra input

  if (age >= 18) {
    isOldEnough = true;
    message.textContent = "Du er gammel nok til Redbull 🪽";
    message.style.color = "green"; // litt styling
  } else {
    isOldEnough = false;
    message.textContent = "Du er ikke gammel nok 😅";
    message.style.color = "red";
  }
});
