// Import React hooks
import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'

function App() {
  // Create state variables
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Add a product fetch function
  async function fetchProducts() {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('https://fakestoreapi.com/products')

      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }

      const data = await response.json()
      setProducts(data)
      console.log('Products fetched:', data)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch products when the app loads
  useEffect(() => {
    fetchProducts()
  }, [])

  // Create derived filtered products
  const filteredProducts = products.filter(product => {
    const query = searchQuery.toLowerCase()
    
    return (
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    )
  })

  // Create derived cart total
  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  }, [cart])

  // Add cart handler placeholders
  function handleAddToCart(product) {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id)

      if (existingItem) {
        return currentCart.map(item => 
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [
        ...currentCart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1
        }
      ]
    })
  }

  function handleIncrement(productID) {
    setCart(currentCart => 
      currentCart.map(item =>
        item.id === productID
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  function handleDecrement(productID) {
    setCart(currentCart => 
      currentCart.map(item =>
        item.id === productID
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
    )
  }

  function handleRemove(productID) {
    setCart(currentCart => 
      currentCart.filter(item =>
        item.id !== productID
      )
    )
  }

  return (
    <main className="app-shell">
      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <MainContent
        products={filteredProducts}
        isLoading={isLoading}
        error={error}
        cart={cart}
        cartTotal={cartTotal}
        onAddToCart={handleAddToCart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onRemove={handleRemove}
        onRetry={fetchProducts}
      />
    </main>
  )
}

export default App
