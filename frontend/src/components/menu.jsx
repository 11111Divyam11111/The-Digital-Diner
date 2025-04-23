import { useState, useEffect } from "react";
import MenuList from "./MenuList";

function MenuItems() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/menu/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMenu(data);
      })
      .catch((err) => console.error("Error fetching menu:", err));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-6">Menu Items</h1>
      <MenuList menu={menu} />
    </>
  );
}

export default MenuItems;
