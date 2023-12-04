const swiper = new Swiper(".swiper", {
  speed: 800,
  spaceBetween: 100,
  orientation: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".slider__button_next",
    prevEl: ".slider__button_prev",
  },
  keyboard: {
    enabled: true,
  },
});

const basketBtn = document.querySelector("#basket_button");
const basket = document.querySelector("#basket");
const form = document.querySelector("#form");
const phone = form.phone;
const nameError = document.querySelector("#nameError");
const phoneError = document.querySelector("#phoneError");
const approvedMsg = document.querySelector("#approvedMsg");
const closeApprovedPopUp = document.querySelector("#closeApprovedPopUp");

basketBtn.addEventListener("mouseover", () => {
  basket.classList.add("basket_active");
});

basket.addEventListener("mouseleave", () => {
  basket.classList.remove("basket_active");
});

const phoneChars = [];
const phoneMask = "+7 (9";
phone.addEventListener("input", (e) => {
  console;
  if (e.target.value == "7" || e.target.value == "8" || e.target.value == "9" || e.target.value == "+") {
    e.target.value = phoneMask;
  } else if (e.target.value.length === 7) {
    e.target.value += ")-";
  } else if (e.target.value.length === 12) {
    e.target.value += "-";
  } else if (e.target.value.length === 15) {
    e.target.value += "-";
  } else if (e.target.value.length > 18) {
    e.target.value = e.target.value.slice(0, 18);
  }
});

form.name.addEventListener("input", () => {
  nameError.classList.remove("input__error_active");
});

phone.addEventListener("input", () => {
  phoneError.classList.remove("input__error_active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nameE = false;
  let phoneE = false;
  if (e.target.name.value.length === 0) {
    nameError.innerText = "Имя не введено!";
    nameError.classList.add("input__error_active");
    nameE = true;
  } else if (e.target.name.value.length === 1) {
    nameError.innerText = "Имя Слишком короткое!";
    nameError.classList.add("input__error_active");
    nameE = true;
  } else {
    nameE = false;
  }
  if (e.target.phone.value.length === 0) {
    phoneError.innerText = "Телефон не введён!";
    phoneError.classList.add("input__error_active");
    phoneE = true;
  } else if (!e.target.phone.value.match(/\+7 \(9\d{2}\)-\d{3}-\d{2}-\d{2}/)) {
    phoneError.innerText = "Некорректный телефон!";
    phoneError.classList.add("input__error_active");
    phoneE = true;
  } else {
    phoneE = false;
  }
  if (!phoneE && !nameE) {
    console.log(`Имя: ${e.target.name.value}; Телефон: ${e.target.phone.value}`);
    approvedMsg.classList.remove("applicationApproved_none");
    document.body.style.overflowY = 'hidden'
  }
});

closeApprovedPopUp.addEventListener('click', () => {
  approvedMsg.classList.add("applicationApproved_none");
  phone.value = ''
  form.name.value = ''
  document.body.style.overflowY = 'scroll'
})
