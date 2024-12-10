const pageContainer = document.querySelector('.page-container');
const showMerchantForm = document.getElementById('show-merchant-form');
const showSupplierForm = document.getElementById('show-supplier-form');

showMerchantForm.addEventListener('click', () => {
    pageContainer.classList.add("active");
});

showSupplierForm.addEventListener('click', () => {
    pageContainer.classList.remove("active");
});
