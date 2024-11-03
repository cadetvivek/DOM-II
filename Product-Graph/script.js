let products = [];

document.getElementById('addProductBtn').addEventListener('click', addProduct);

function addProduct() {
  const name = document.getElementById('productName').value;
  const price = parseFloat(document.getElementById('productPrice').value);
  const rating = parseFloat(document.getElementById('productRating').value);

  if (name && !isNaN(price) && !isNaN(rating)) {
    products.push({ name, price, rating });
    updateGraphs();
    clearInputFields();
  } else {
    alert('Please enter valid product details.');
  }
}

function clearInputFields() {
  document.getElementById('productName').value = '';
  document.getElementById('productPrice').value = '';
  document.getElementById('productRating').value = '';
}

function updateGraphs() {
  renderGraph('priceGraph', 'price');
  renderGraph('ratingGraph', 'rating');
}

function renderGraph(containerId, field) {
  const graphContainer = document.getElementById(containerId);
  graphContainer.innerHTML = '';

  products.forEach(product => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    
    const barHeight = field === 'price' ? product.price : product.rating * 20;
    bar.style.height = `${barHeight}px`;

    const barLabel = document.createElement('p');
    barLabel.innerText = product[field];

    bar.appendChild(barLabel);
    graphContainer.appendChild(bar);
  });
}

function sortData(field) {
  products.sort((a, b) => a[field] - b[field]);
  updateGraphs();
}
