# System Design: Quick-Shop E-Commerce Interface

## 1. Overview
The Quick-Shop application is a single-page React application designed to simulate a real-world e-commerce front-end. It interfaces with a mock external API to fetch product data, allows users to filter products, and manages a dynamic shopping cart.

## 2. Architecture & Component Tree
The UI is broken down into a hierarchical component structure to ensure modularity and clean unidirectional data flow.

* **`<App />`**: The root component and primary state container.
    * **`<Header />`**: The top navigation bar.
        * **`<SearchBar />`**: An input field for text-based product filtering.
    * **`<MainContent />`**: A structural wrapper for the main layout.
        * **`<ProductGrid />`**: A CSS Grid container for displaying products.
            * **`<ProductCard />`**: Displays an individual product's image, title, price, and "Add to Cart" button.
        * **`<SidebarCart />`**: A fixed or sticky sidebar displaying the user's selected items.
            * **`<CartItem />`**: Displays the product name, quantity, and a "Remove" button.
            * **`<CartTotal />`**: Displays the calculated sum of all items in the cart.

## 3. State Management
State is managed primarily within the `<App />` component to allow easy distribution to both the product grid and the cart.

* **`products` (Array)**: 
    * Stores the master list of products fetched from the API.
    * Format: `[{ id: number, title: string, price: number, image: string, category: string }]`
* **`cart` (Array)**: 
    * Stores the items the user has added to their cart.
    * Format: `[{ id: number, title: string, price: number, quantity: number }]`
    * *Logic Check*: When an item is added, the system checks if the `id` already exists in this array. If yes, it increments `quantity`; if no, it pushes a new object.
* **`searchQuery` (String)**: 
    * Stores the current text in the search bar.
* **`isLoading` (Boolean)**: 
    * Tracks the network request status to display skeleton loaders.
* **`error` (String | null)**: 
    * Stores error messages if the API request fails.

## 4. Data Flow & Props
* **Top-Down Props**: The `<App />` passes the `cart` array down to the `<SidebarCart />` and the `products` array down to the `<ProductGrid />`.
* **Bottom-Up Events**: 
    * The `<ProductCard />` fires an `onAddToCart(product)` callback passed down from `<App />`.
    * The `<SearchBar />` fires an `onSearchChange(query)` callback to update the `searchQuery` state in `<App />`.
    * The `<CartItem />` fires `onIncrement`, `onDecrement`, and `onRemove` callbacks.

## 5. API Integration
* **Endpoint**: `https://fakestoreapi.com/products`
* **Execution**: Data is fetched inside a `useEffect` hook within `<App />` that runs once on mount (empty dependency array `[]`).
* **Error Handling**: The `fetch` call is wrapped in a `try...catch` block. Network failures update the `error` state, triggering a fallback UI instead of crashing the app.

## 6. Styling Strategy
To align with CodeSignal's vanilla environment, no external CSS frameworks (like Tailwind or Bootstrap) are used.

* **Layout**: 
    * The main application uses CSS Grid to divide the screen into a main content area (75%) and a sidebar (25%).
    * The `<ProductGrid />` uses CSS Grid (`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))`) to ensure responsive reflowing of product cards.
* **Alignment**: 
    * CSS Flexbox is used inside `<ProductCard />` to ensure the "Add to Cart" button is always pushed to the bottom of the card (`flex-direction: column`, `margin-top: auto`).

## 7. Performance Optimizations
* **Derived State**: The total cart price is a derived value. It is calculated using `cart.reduce()` and wrapped in a `useMemo` hook so it only recalculates when the `cart` array changes, not on every render.
* **Search Filtering**: The product list displayed in the UI is derived by filtering the `products` array based on `searchQuery`. 
* **Debouncing**: The search input utilizes a debounce function to delay state updates until the user stops typing for 300ms, minimizing unnecessary re-renders of the product grid.

## 8. Edge Cases Handled
* **Empty State**: If the cart is empty, a specific "Your cart is empty" graphic/message is shown.
* **Zero Results**: If the search query yields no matches, a "No products found" message is displayed instead of a blank screen.
* **Long Titles**: CSS `text-overflow: ellipsis` is applied to product titles to prevent layout breaking on unusually long API strings.
