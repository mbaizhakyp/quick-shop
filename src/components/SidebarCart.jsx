import CartItem from './CartItem'
import CartTotal from './CartTotal'

function SidebarCart({ cart, cartTotal, onIncrement, onDecrement, onRemove }) {
    return (
      <aside>
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
        <>
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
        </>
        )}
      </aside>
    )
  }

  export default SidebarCart