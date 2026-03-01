import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  // Items state (so we can add new ones)
  const [items, setItems] = useState(itemData);

  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  // Add new item to list
  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header
        isDarkMode={isDarkMode}
        onDarkModeClick={handleDarkModeClick}
      />

      <ShoppingList
        items={items}
        onItemFormSubmit={handleAddItem}
      />
    </div>
  );
}

export default App;