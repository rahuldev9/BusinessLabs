const resultsContainer = document.getElementById("results");

function renderItems(data) {
  if (!resultsContainer) return;

  resultsContainer.innerHTML = "";

  if (!data || data.length === 0) {
    resultsContainer.innerHTML = "<p>No products found</p>";
    return;
  }

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
  <img src="${item.image || "https://via.placeholder.com/300"}" alt="${item.name}" />

  <div class="card-body">
    <h3>${item.name}</h3>
    <p class="price">$${item.price}</p>
    <p class="location">${item.location}</p>
    <small class="category">${item.category}</small>
  </div>
`;

    resultsContainer.appendChild(card);
  });
}
