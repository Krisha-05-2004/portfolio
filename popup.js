function showPopup(src, title, sub) {
  var img = document.getElementById("popup-img");
  var pdf = document.getElementById("popup-pdf");

  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-sub").textContent = sub;

  if (src.endsWith(".pdf")) {
    img.style.display = "none";
    pdf.src = src;
    pdf.style.display = "block";
  } else {
    pdf.style.display = "none";
    pdf.src = "";
    img.src = src;
    img.style.display = "block";
  }

  document.getElementById("popup").style.display = "flex";
}

function hidePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("popup-pdf").src = "";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("popup").addEventListener("click", function (e) {
    if (e.target === this) hidePopup();
  });
  document.getElementById("popup-box").addEventListener("click", function (e) {
    e.stopPropagation();
  });
});