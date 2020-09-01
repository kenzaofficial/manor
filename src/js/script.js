var link = document.querySelector(".main-content__btn");
var popup = document.querySelector(".modal-content-wrapper");
var close = document.querySelector(".modal-content__close");
var login = popup.querySelector(".modal-content__enter-your-name");
var tel = popup.querySelector(".modal-content__enter-your-phone")
var form = popup.querySelector(".modal-content__btn");

link.addEventListener("click", function (event) {
   event.preventDefault();
   popup.classList.add("modal-content-wrapper-show")
   login.focus();
});

close.addEventListener("click", function(){
   popup.classList.remove("modal-content-wrapper-show");
});

form.addEventListener("click", function (event) {
   if (!login.value || !tel.value) {
   event.preventDefault();
   popup.classList.add("modal-content-error");
   console.log("нужно ввести и логин и телефон");
   }
});

window.addEventListener("keydown", function(event) {
   if (event.keyCode === 27) {
      if(popup.classList.contains("modal-content-wrapper-show")) {
      popup.classList.remove("modal-content-wrapper-show");
      }
   }
});

