// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navList = document.getElementById("nav-list");
if(navToggle){
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
}

// Simple validation -> open WA chat with message from form
function orderSubmit(e){
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const product = document.getElementById("product").value.trim();
  const note = document.getElementById("note").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if(!name || !product || !phone){
    alert("Isi nama, produk, dan nomor WA terlebih dahulu.");
    return;
  }

  const text = encodeURIComponent(`Halo, saya ${name}. Saya mau pesan: ${product}. ${note ? "Catatan: " + note : ""} Nomor WA: ${phone}`);
  const wa = `https://wa.me/6289646822876?text=${text}`;
  window.open(wa, "_blank");
}

// Attach form handler if exist
const form = document.getElementById("order-form");
if(form){
  form.addEventListener("submit", orderSubmit);
}
