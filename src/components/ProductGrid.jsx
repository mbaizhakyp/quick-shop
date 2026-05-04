import ProductCard from './ProductCard'

function ProductGrid({ products, isLoading, error, onAddToCart, onRetry }) {
  if (isLoading) {
    return <p className="status-message">Loading products...</p>
  }

  if (error) {
    return (
      <section className="status-panel">
        <p>{error}</p>
        <button onClick={onRetry}>Try again</button>
      </section>
    )
  }

  if (products.length === 0) {
    return <p className="status-message">No products found.</p>
  }

  return (
    <section className="product-section">
      <h2>Products</h2>

      <div className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  )
}

  export default ProductGrid
