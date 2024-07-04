import React from "react";
import Item from "./Item";

function ShoppingList({ items, category }) {
  const filteredItems = items.filter(item => category === "All" || item.category === category);

  return (
    <ul className="Items">
      {filteredItems.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))}
    </ul>
  );
}

export default ShoppingList;





