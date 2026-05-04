import CartItem from './CartItem'
import CartTotal from './CartTotal'

function SidebarCart({ cart, cartTotal, onIncrement, onDecrement, onRemove }) {
    return (
      <aside className="cart-sidebar">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
        <div className="cart-items">
        {cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onRemove={onRemove}
          />
        ))}
        <CartTotal cartTotal={cartTotal} />
        </div>
        )}
      </aside>
    )
  }

  export default SidebarCart
