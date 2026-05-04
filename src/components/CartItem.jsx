function CartItem({ item, onIncrement, onDecrement, onRemove }) {
    return (
      <section>
        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)}</p>

        <div>
          <button onClick={() => onDecrement(item.id)}>-</button>
          <span> {item.quantity} </span>
          <button onClick={() => onIncrement(item.id)}>+</button>
        </div>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </section>
    )
  }

  export default CartItem