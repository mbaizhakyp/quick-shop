import ProductGrid from './ProductGrid'
import SidebarCart from './SidebarCart'

function MainContent({ products, isLoading, error, onAddToCart, cart, cartTotal, onIncrement, onDecrement, onRemove }) {
  return (
    <main>
      <ProductGrid
        products={products}
        isLoading={isLoading}
        error={error}
        onAddToCart={onAddToCart}
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