const inputElement = document.getElementById("email");
const newsLetterButton = document.getElementById("newsLetterButton");

function toggleNewsLetter() {
  const newsLetter = document.getElementById("newsLetter");
  newsLetter.classList.toggle("active");
}

function SignUp() {
  const email = inputElement.value.trim();

  if (!email) {
    toastr.error("Please enter your email");
    return;
  }

  //   valiodation of mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    toastr.warning("Please enter a valid email address");
    return;
  }

  // tostr ke liye
  toastr.success("Thanks for subscribing!");
  toggleNewsLetter();
  newsLetterButton.textContent = "Subscribed ✅";
}
