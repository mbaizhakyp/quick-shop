import ProductGrid from './ProductGrid'
import SidebarCart from './SidebarCart'

function MainContent({ products, isLoading, error, onAddToCart, cart, cartTotal, onIncrement, onDecrement, onRemove, onRetry }) {
  return (
    <main>
      <ProductGrid
        products={products}
        isLoading={isLoading}
        error={error}
        onAddToCart={onAddToCart}
        onRetry={onRetry}
      />
      <SidebarCart
        cart={cart}
        cartTotal={cartTotal}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onRemove={onRemove}
      />
    </main>
  )
}

export default MainContent