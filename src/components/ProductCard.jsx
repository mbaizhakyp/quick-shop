function ProductCard({ product, onAddToCart }) {
    return (
      <article>

        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <p>${product.price.toFixed(2)}</p>

        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </article>
    )
  }

  export default ProductCard