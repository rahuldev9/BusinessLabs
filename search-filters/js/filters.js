function filterItems() {
  const checkboxes = document.querySelectorAll(".category");
  const priceRange = document.getElementById("priceRange");
  const location = document.getElementById("location");

  const selectedCategories = [...checkboxes]
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);

  const maxPrice = Number(priceRange.value);
  const selectedLocation = location.value;

  const filtered = items.filter((item) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);

    const priceMatch = item.price <= maxPrice;

    const locationMatch =
      selectedLocation === "all" || item.location === selectedLocation;

    return categoryMatch && priceMatch && locationMatch;
  });

  renderItems(filtered);
}
