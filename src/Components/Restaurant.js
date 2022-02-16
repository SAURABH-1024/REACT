import React, { useState } from "react";
import "./Style.css";
import Menu from "./menuapi";
import Menucard from "./Menucard";
import Navbar from "./Navbar";


const uniqueList = [...new Set (Menu.map((curElem) => {
  return curElem.category
})), "All"]
// console.log(uniqueList);


const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList)

  const filter = (category) => {

    if (category === "All") {
      setMenuData(Menu)
      return;
}

    const filteredList = Menu.filter((curElem) => {
      return curElem.category === category;
    })
    setMenuData(filteredList);
  };
  return (
    <>
      <Navbar filter={filter}  menuList={menuList} />
      <Menucard menuData={menuData} />
    </>
  );
};

export default Restaurant;
