# React Theme Switcher

This is project #09 from the "Chai aur React" series. It's a simple React application that demonstrates how to implement a light and dark theme switcher.

The application uses React's Context API to manage the theme state globally and leverages Tailwind CSS for styling, including its class-based dark mode feature. The selected theme is persisted in the browser's `localStorage`.

## ✨ Features

- **Theme Toggling**: Switch between light and dark modes with a single button click.
- **Persistence**: Remembers the user's theme choice on their next visit using `localStorage`.
- **Context API**: Manages theme state efficiently across the entire application.
- **Tailwind CSS**: Modern and utility-first styling with a simple dark mode setup.
- **Vite**: Fast and modern build tool for a great development experience.

## 📸 Screenshots

| Light Mode | Dark Mode |
| :---: | :---: |
| ![Light Mode Screenshot](lightTheme.jpg) | ![Dark Mode Screenshot](darkTheme.jpg) |


## �️ Tech Stack

- React
- Vite
- Tailwind CSS

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/09-theme-switcher.git
    cd 09-theme-switcher
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```
    or if you use yarn:
    ```sh
    yarn install
    ```

3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    or
    ```sh
    yarn dev
    ```

Open http://localhost:5173 (or whatever port is shown in your terminal) to view it in the browser.

## 💡 How It Works

1.  **`ThemeContext`**: A React context (`ThemeContext.js`) is created to provide the theme state (`themeMode`) and functions (`lightTheme`, `darkTheme`) to any component that needs it.

2.  **`ThemeProvider`**: The main `App` component is wrapped with the `ThemeProvider`. This provider contains the logic for changing the theme and persisting it to `localStorage`.

3.  **`useEffect` Hook**: A `useEffect` hook in the `App.jsx` file listens for changes in the `themeMode` state. When the theme changes, it adds or removes the `dark` class from the root `<html>` element.

4.  **Tailwind CSS `darkMode: "class"`**: The `tailwind.config.cjs` is configured with `darkMode: "class"`. This tells Tailwind to apply dark mode styles (e.g., `dark:bg-gray-900`) whenever the `dark` class is present on a parent element (in this case, `<html>`).

5.  **Components**: A `ThemeBtn` component consumes the context using the `useTheme` custom hook to toggle the theme, and a `Card` component displays content that adapts to the current theme.

Feel free to explore the code to see how it all fits together!