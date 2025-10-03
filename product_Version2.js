// Array of product objects
const products = [
  {
    image: "https://via.placeholder.com/150",
    name: "Elegant Dress",
    desc: "Chic and comfortable, perfect for any occasion.",
    price: "₨7,999"
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Smart Watch",
    desc: "Stay connected in style with our latest smartwatch.",
    price: "₨19,999"
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Aroma Diffuser",
    desc: "Fill your home with soothing scents and ambience.",
    price: "₨4,499"
  }
];

// Reference to the product list container
const productList = document.getElementById("product-list");

// Create and append product cards
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.desc}</p>
    <span class="price">${product.price}</span>
  `;
  productList.appendChild(card);
});