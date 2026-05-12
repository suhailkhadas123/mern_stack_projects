# Product Image Viewer App

This is a simple React app that fetches product data from an API and displays product cards on the screen. Each product shows its category, image, title, and price.

## Features

- Fetches product data from API
- Displays all products in cards
- Shows product category, image, title, and price
- Change product image by clicking image buttons (0, 1, 2)
- Loading and error handling included

## Technologies Used

- React
- Vite
- JavaScript
- Tailwind CSS
- Fetch API
- Custom Hook (`useFetch`)

## Project Structure

- `App.jsx` - Main UI of the app
- `Usefetch.jsx` - Custom hook for fetching API data

## How It Works

The app fetches product data from this API:

`https://api.escuelajs.co/api/v1/products`

The custom hook `useFetch` is used to get the data. After the data is loaded, the app loops through the products and shows them in cards. Buttons are used to switch product images by changing the image index.

## Installation

1. Clone the repository
2. Open the project folder
3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

## Output

- Shows a loading message while data is being fetched
- Shows an error message if the API fails
- Shows product cards after data is loaded

## Future Improvements

- Add responsive design
- Add product details page
- Add search and filter
- Add add-to-cart feature

## Author

Suhail