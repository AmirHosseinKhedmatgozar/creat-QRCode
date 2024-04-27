const boxImg = document.querySelector(".img");
const img = document.querySelector("img");
const btn = document.querySelector("form button");
const input = document.querySelector("form input");
const container = document.querySelector(".container");
boxImg.classList.add("hidden");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let QRvalue = input.value;
  if (!QRvalue) {
    return alert("یه چیزی تایپ کن تا QR بهت بدم حال کنی ");
  }
  fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${QRvalue}`
  )
    .then((res) => {
      btn.innerText = "در حال دریافت QRCode";
      const url = res.url;
      img.src = url;
      img.addEventListener("load", () => {
        boxImg.classList.remove("hidden");
        btn.innerText = "تولید QR Code";
      });
    })
    .catch((err) => alert("خطا در برقراری ارتباط"));
});
input.addEventListener("keyup", (e) => {
  if (!e.currentTarget.value) {
    boxImg.classList.add("hidden");
  }
});
