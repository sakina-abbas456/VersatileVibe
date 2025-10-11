// Array of product objects
const products = [
  {
    image: "https://via.placeholder.com/220x180?text=Elegant+Dress",
    name: "Elegant Dress",
    desc: "Chic and comfortable, perfect for any occasion.",
    price: "₨7,999"
  },
  {
    image: "https://via.placeholder.com/220x180?text=Smart+Watch",
    name: "Smart Watch",
    desc: "Stay connected in style with our latest smartwatch.",
    price: "₨19,999"
  },
  {
    image: "https://via.placeholder.com/220x180?text=Aroma+Diffuser",
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
</script>

<!-- Slideshow ke liye JS -->
<script>
function showSlides(slideClass, indexVarName) {
  let slides = document.getElementsByClassName(slideClass);
  let slideIndex = window[indexVarName] || 0;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  window[indexVarName] = slideIndex;
  setTimeout(() => showSlides(slideClass, indexVarName), 2000);
}

// Har slideshow ke liye alag call
window.babyIndex = 0;
showSlides('babySlides', 'babyIndex');

window.babaIndex = 0;
showSlides('babaSlides', 'babaIndex');

window.expensiveIndex = 0;
showSlides('expensiveSlides', 'expensiveIndex');
</script>
