# Quick-Shop End-to-End Project Plan

## 1. Scaffold the React App

- Create a Vite React project structure.
- Add `package.json`, `index.html`, `src/main.jsx`, `src/App.jsx`, and base CSS files.
- Keep dependencies minimal: React and Vite only.

## 2. Define Application State

Manage core state in `App.jsx`:

- `products`: master product list fetched from the API.
- `cart`: selected cart items with quantities.
- `searchQuery`: current product search text.
- `isLoading`: product request loading state.
- `error`: product request failure state.

Fetch product data from `https://fakestoreapi.com/products` inside a `useEffect` that runs once on mount.

## 3. Build the Component Structure

Create the following components:

- `Header`
- `SearchBar`
- `MainContent`
- `ProductGrid`
- `ProductCard`
- `SidebarCart`
- `CartItem`
- `CartTotal`

Keep data flow top-down through props and user actions bottom-up through callback props.

## 4. Implement Product Fetching and Display

- Render loading skeletons while products are loading.
- Render API errors with a fallback UI instead of crashing.
- Display products in a responsive CSS grid.
- Ensure product cards show image, title, price, category, and an add-to-cart button.
- Handle long titles without breaking layout.

## 5. Implement Search

- Add a controlled search input in `SearchBar`.
- Debounce search updates by 300ms.
- Filter products by title and category.
- Show a zero-results state when no products match the query.

## 6. Implement Cart Behavior

- Add products to the cart.
- Increment quantity if the product already exists in the cart.
- Add quantity increment, decrement, and remove controls.
- Remove an item when its quantity reaches zero.
- Calculate the cart total with `useMemo`.

## 7. Build Empty and Error States

- Show an empty-cart message when no items have been added.
- Show a product-loading error state when the API request fails.
- Show a no-products-found state when search filtering returns no results.
- Add a retry action for failed product fetches.

## 8. Style the Interface

- Use vanilla CSS only.
- Use CSS Grid for the main layout and product grid.
- Use Flexbox inside cards and cart rows.
- Keep the cart sidebar sticky on desktop.
- Stack the layout cleanly on mobile.
- Use consistent spacing, button states, input states, and typography.

## 9. Verify the Full Flow

Manual test checklist:

- Products load successfully from the API.
- Loading state appears before data is ready.
- Error state appears when fetch fails.
- Search filters products correctly.
- Zero-results state appears for unmatched searches.
- Add-to-cart works.
- Existing cart items increment instead of duplicating.
- Cart increment, decrement, and remove controls work.
- Cart total updates correctly.
- Empty cart state appears when appropriate.
- Layout works on desktop and mobile.

## 10. Run Locally

- Install dependencies with `npm install`.
- Start the dev server with `npm run dev`.
- Open the local Vite URL and complete a manual shopping flow.

## Recommended Build Order

1. Scaffold the Vite React app.
2. Implement product fetching and loading/error states.
3. Render the product grid and product cards.
4. Add search and debounce behavior.
5. Implement cart state and cart actions.
6. Build empty and zero-results states.
7. Apply responsive vanilla CSS styling.
8. Run the app and verify the full workflow.
