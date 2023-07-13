async function getProducts() {
    const response = await fetch("https://products-api-kappa.vercel.app/api/products");
    const products = await response.json();
    return products
}

export { getProducts }