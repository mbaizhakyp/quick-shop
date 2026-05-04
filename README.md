# Quick Shop

Quick Shop is a single-page React e-commerce interface built with Vite. It fetches product data from the Fake Store API, displays products in a responsive grid, supports product search, and manages a shopping cart with quantity controls and a live total.

## Features

- Fetches products from `https://fakestoreapi.com/products`
- Displays product image, title, category, and price
- Filters products by title or category
- Adds products to a cart
- Increments existing cart items instead of duplicating them
- Supports quantity increase, quantity decrease, and item removal
- Removes items when quantity reaches zero
- Calculates cart total from cart state
- Handles loading, error, empty cart, and no-results states
- Uses vanilla CSS with a responsive desktop/mobile layout

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Project Structure

```text
src/
  App.jsx
  App.css
  index.css
  main.jsx
  components/
    CartItem.jsx
    CartTotal.jsx
    Header.jsx
    MainContent.jsx
    ProductCard.jsx
    ProductGrid.jsx
    SearchBar.jsx
    SidebarCart.jsx
```

## Component Overview

- `App.jsx`: owns product, cart, search, loading, and error state.
- `Header.jsx`: renders the app title and search bar.
- `SearchBar.jsx`: controlled input for product search.
- `MainContent.jsx`: lays out product grid and cart sidebar.
- `ProductGrid.jsx`: renders loading, error, empty, and product list states.
- `ProductCard.jsx`: renders a single product and add-to-cart action.
- `SidebarCart.jsx`: renders cart contents and empty cart state.
- `CartItem.jsx`: renders quantity controls and item removal.
- `CartTotal.jsx`: renders the calculated cart total.

## API

Products are fetched from:

```text
https://fakestoreapi.com/products
```

Expected product fields used by the app:

- `id`
- `title`
- `price`
- `image`
- `category`

## Notes

- Search is implemented without debounce for now because the product list is small.
- The app uses local React state only; there is no backend or persistent cart storage.
- Styling is kept in `src/index.css` for global styles and `src/App.css` for app-specific layout and components.
