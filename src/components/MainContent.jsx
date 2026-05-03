import ProductGrid from './ProductGrid'

function MainContent({ products, isLoading, error, onAddToCart }) {
  return (
    <main>
      <ProductGrid
        products={products}
        isLoading={isLoading}
        error={error}
        onAddToCart={onAddToCart}
      />
    </main>
  )
}

  export default MainContent