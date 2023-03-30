const mainContainer = document.querySelector(".main-container");
const thankYou = document.querySelector(".thank-you");
const submitBtn = document.querySelector(".btn-submit");
const rateBtn = document.querySelector("#rate-again");
const rating = document.querySelector("#rating");
const rates = document.querySelectorAll(".btn");
const isSelected = document.querySelector(".btn.selected") !== null;

if (submitBtn) {
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const isSelected = document.querySelector(".btn.selected") !== null;
    if (isSelected) {
      thankYou.classList.remove("hidden");
      mainContainer.style.display = "none";
    } else {
      // Seçim yapılmamış
      alert("Please select a rating.");
    }
  });
}

if (rateBtn) {
  rateBtn.addEventListener("click", () => {
    thankYou.classList.add("hidden");
    mainContainer.style.display = "flex";
  });
}

[...rates].forEach((rate) => {
  rate.addEventListener("click", (event) => {
    event.preventDefault();
    rating.innerHTML = rate.innerHTML;
    // Diğer butonların seçimini kaldır
    rates.forEach((btn) => {
      btn.classList.remove("selected");
    });
    // Seçilen butonun seçimini ekle
    rate.classList.add("selected");
  });
});