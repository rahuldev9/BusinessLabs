const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
const categoryCheckboxes = document.querySelectorAll(".category");
const locationSelect = document.getElementById("location");

const sidebar = document.getElementById("sidebar");
const filterToggle = document.getElementById("filterToggle");
const closeFilter = document.getElementById("closeFilter");
const overlay = document.getElementById("overlay");

priceRange.addEventListener("input", () => {
  priceValue.textContent = priceRange.value;
  filterItems();
});

categoryCheckboxes.forEach((cb) => {
  cb.addEventListener("change", filterItems);
});

locationSelect.addEventListener("change", filterItems);

filterToggle.addEventListener("click", () => {
  sidebar.classList.add("active");
  overlay.classList.add("active");
});

closeFilter.addEventListener("click", closeFilters);
overlay.addEventListener("click", closeFilters);

function closeFilters() {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
}

/* IMPORTANT */
document.addEventListener("DOMContentLoaded", () => {
  renderItems(items);
});
