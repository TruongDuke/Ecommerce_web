// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Lấy tất cả các nút feature (BOOK, CD, v.v.)
    const featureBoxes = document.querySelectorAll(".fe-box");
  
    // Lấy tất cả sản phẩm
    const products = document.querySelectorAll(".pro");
  
    // Lặp qua từng nút feature để gắn sự kiện click
    featureBoxes.forEach(box => {
      box.addEventListener("click", () => {
        const selectedType = box.getAttribute("data-type"); // Lấy loại được click
  
        // Ẩn hết tất cả sản phẩm, trừ sản phẩm cùng loại
        products.forEach(product => {
          const productType = product.getAttribute("data-type");
          if (productType === selectedType) {
            product.style.display = "block"; // hiện ra
          } else {
            product.style.display = "none"; // ẩn đi
          }
        });
      });
    });
  });

    // ----------- Hiển thị pop-up VNPay ----------
    document.addEventListener("DOMContentLoaded", function () {
        const confirmBtn = document.querySelector(".checkout-btn");
        const modal = document.getElementById("vnpay-modal");
        const closeBtns = document.querySelectorAll(".close-btn, #vnpay-modal button");
      
        if (confirmBtn) {
          confirmBtn.addEventListener("click", function () {
            modal.style.display = "block";
          });
        }
      
        closeBtns.forEach(btn => {
          btn.addEventListener("click", function () {
            modal.style.display = "none";
          });
        });
      
        window.addEventListener("click", function (e) {
          if (e.target === modal) {
            modal.style.display = "none";
          }
        });
      });