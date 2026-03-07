function filterItems() {
  const checkboxes = document.querySelectorAll(".category");
  const priceRange = document.getElementById("priceRange");
  const location = document.getElementById("location");
  const searchInput = document.getElementById("searchInput");

  const selectedCategories = [...checkboxes]
    .filter((cb) => cb.checked)
    .map((cb) => cb.value);

  const maxPrice = Number(priceRange.value);
  const selectedLocation = location.value;
  const searchText = searchInput.value.toLowerCase();

  let filtered = items.filter((item) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);

    const priceMatch = item.price <= maxPrice;

    const locationMatch =
      selectedLocation === "all" || item.location === selectedLocation;

    const searchMatch = item.name.toLowerCase().includes(searchText);

    return categoryMatch && priceMatch && locationMatch && searchMatch;
  });

  sortItems(filtered);
}

function sortItems(data) {
  const sortValue = document.getElementById("sortSelect").value;

  if (sortValue === "priceLow") {
    data.sort((a, b) => a.price - b.price);
  }

  if (sortValue === "priceHigh") {
    data.sort((a, b) => b.price - a.price);
  }

  if (sortValue === "name") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderItems(data);
}
