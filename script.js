/// select the necessary Qr Code generate web app element
const qrBox = document.querySelector(".qr-box");
const qrImg = document.querySelector(".qr-image img");
const inputBox = document.querySelector(".input-box");
const generateQrBtn = document.querySelector(".generate-btn");
// QR Code generate Evenentlistener function
const generateQrImage = (e) => {
  e.preventDefault(); // the default form submit behaviour is turned off
  qrBox.classList.add("active"); // add QR image box  classlist - (active)
  generateQrBtn.innerText = "Generating QR Code...";
  generateQrBtn.classList.add("active"); // add generate button  classlist - (active)
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputBox.value}`; // Qr code image src link
  qrImg.addEventListener("load", () => {
    generateQrBtn.innerText = "generate QR code";
    generateQrBtn.classList.remove("active"); // remove generate button  classlist - (active)
  });
};
// inputbox keyup eventlistener
inputBox.addEventListener("keyup", (e) => {
  const inputValue = e.target.value;
  // the lenght of the input box is zero Qr image box classlist remove - (active)
  if (inputValue.length === 0) {
    qrBox.classList.remove("active");
  }
});
// QR Code generate Evenentlistener
generateQrBtn.addEventListener("click", generateQrImage);
