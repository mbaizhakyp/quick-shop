import ProductCard from './ProductCard'

function ProductGrid({ products, isLoading, error, onAddToCart, onRetry }) {
  if (isLoading) {
    return <p>Loading products...</p>
  }

  if (error) {
    return (
      <section>
        <p>{error}</p>
        <button onClick={onRetry}>Try again</button>
      </section>
    )
  }

  if (products.length === 0) {
    return <p>No products found.</p>
  }

  return (
    <section>
      <h2>Products</h2>

      <div>
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