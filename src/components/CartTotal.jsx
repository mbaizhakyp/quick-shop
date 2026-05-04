function CartTotal({ cartTotal }) {
    return (
      <section className="cart-total">
        <h3>Total</h3>
        <p>${cartTotal.toFixed(2)}</p>
      </section>
    )
  }

  export default CartTotal
