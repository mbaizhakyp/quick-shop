# Scaffold the React App

```
npm create vite@latest . -- --template react
```

# Define Application State

```
// Import React hooks
import { useState, useEffect, useMemo } from 'react'
import './App.css'

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
    // Step 6
  }

  function handleIncrement(productID) {
    // Step 6
  }

  function handleDecrement(productID) {
    // Step 6
  }

  function handleRemove(productID) {
    // Step 6
  }

  return (
    <main>
      <h1>Quick Shop</h1>
    </main>
  )
}

export default App

```