# Quick-Shop End-to-End Project Plan

## Current Status

- Step 1 is complete: the Vite React app has been scaffolded.
- Step 2 is complete: `App.jsx` owns the core state, fetches products, derives filtered products, and calculates cart total.
- Step 3 is complete: all planned component files exist.
- Step 4 is mostly complete: products fetch and render through `MainContent`, `ProductGrid`, and `ProductCard`.
- Step 6 is mostly complete: cart state, add, increment, decrement, remove, and total calculation are implemented.
- Step 5 is still pending: search UI is not wired yet.
- Step 7 is partly pending: loading, error, empty cart, and zero-results states need polish.
- Step 8 is pending: responsive vanilla CSS styling.
- Step 9 is pending: full manual verification.

## 1. Scaffold the React App

- Create a Vite React project structure.
- Add `package.json`, `index.html`, `src/main.jsx`, `src/App.jsx`, and base CSS files.
- Keep dependencies minimal: React and Vite only.
- Status: complete.

## 2. Define Application State

Manage core state in `App.jsx`:

- `products`: master product list fetched from the API.
- `cart`: selected cart items with quantities.
- `searchQuery`: current product search text.
- `isLoading`: product request loading state.
- `error`: product request failure state.

Fetch product data from `https://fakestoreapi.com/products` inside a `useEffect` that runs once on mount.

Status: complete.

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

Status: complete.

## 4. Implement Product Fetching and Display

- Render loading skeletons while products are loading.
- Render API errors with a fallback UI instead of crashing.
- Display products in a responsive CSS grid.
- Ensure product cards show image, title, price, category, and an add-to-cart button.
- Handle long titles without breaking layout.

Status: mostly complete.

Remaining:

- Replace the plain loading paragraph with a better loading UI or skeletons.
- Keep the product error UI readable and user-friendly.
- Confirm `ProductGrid` passes `onAddToCart` directly and `ProductCard` calls it with the selected product.

## 5. Implement Search

- Add a controlled search input in `SearchBar`.
- Debounce search updates by 300ms.
- Filter products by title and category.
- Show a zero-results state when no products match the query.

Status: pending.

Next implementation details:

- Pass `searchQuery` and `setSearchQuery` from `App.jsx` to `Header`.
- Render `SearchBar` inside `Header`.
- Make `SearchBar` an actual controlled input.
- Add a 300ms debounce before updating the app-level search query.
- Keep the existing `filteredProducts` logic in `App.jsx`.

## 6. Implement Cart Behavior

- Add products to the cart.
- Increment quantity if the product already exists in the cart.
- Add quantity increment, decrement, and remove controls.
- Remove an item when its quantity reaches zero.
- Calculate the cart total with `useMemo`.

Status: mostly complete.

Remaining:

- Change `item.id != productID` to `item.id !== productID` in `handleRemove`.
- Add the empty-cart state in `SidebarCart`.
- Confirm decrement removes an item when quantity reaches zero.
- Confirm add-to-cart increments existing items instead of duplicating them.

## 7. Build Empty and Error States

- Show an empty-cart message when no items have been added.
- Show a product-loading error state when the API request fails.
- Show a no-products-found state when search filtering returns no results.
- Add a retry action for failed product fetches.

Status: partly pending.

Next implementation details:

- Add an empty-cart branch in `SidebarCart`.
- Keep `ProductGrid` no-results handling for an empty filtered product list.
- Add a retry button for failed product fetches by passing `fetchProducts` or a retry handler down to the error UI.
- Make sure the zero-results state is only confusing if products are still loading; loading should take priority over no-results.

## 8. Style the Interface

- Use vanilla CSS only.
- Use CSS Grid for the main layout and product grid.
- Use Flexbox inside cards and cart rows.
- Keep the cart sidebar sticky on desktop.
- Stack the layout cleanly on mobile.
- Use consistent spacing, button states, input states, and typography.

Status: pending.

Next implementation details:

- Create a two-column desktop layout for product grid and sidebar cart.
- Use a single-column layout on mobile.
- Add stable product image sizing.
- Add card spacing, button states, and cart row spacing.
- Apply text truncation or wrapping rules for long product titles.

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

Status: pending.

## 10. Run Locally

- Install dependencies with `npm install`.
- Start the dev server with `npm run dev`.
- Open the local Vite URL and complete a manual shopping flow.

Status: repeat as needed during development.

## Current Recommended Build Order

1. Finish small cart cleanup:
   - Use strict inequality in `handleRemove`.
   - Add the empty-cart state in `SidebarCart`.
2. Implement search:
   - Pass search props from `App` to `Header`.
   - Render `SearchBar` in `Header`.
   - Add a controlled input and debounce behavior.
3. Improve product and cart states:
   - Loading state.
   - Error state.
   - Retry action.
   - No-products-found state.
4. Apply responsive vanilla CSS styling.
5. Run `npm run dev` and manually verify the full shopping workflow.
