function CartItem({ item, onIncrement, onDecrement, onRemove }) {
    return (
      <section className="cart-item">
        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)}</p>

        <div className="quantity-controls">
          <button onClick={() => onDecrement(item.id)} aria-label={`Decrease ${item.title} quantity`}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onIncrement(item.id)} aria-label={`Increase ${item.title} quantity`}>+</button>
        </div>
        <button className="remove-button" onClick={() => onRemove(item.id)}>Remove</button>
      </section>
    )
  }

  export default CartItem
