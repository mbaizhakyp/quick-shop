function ProductCard({ product, onAddToCart }) {
    return (
      <article className="product-card">

        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>

        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </article>
    )
  }

  export default ProductCard
