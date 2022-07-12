import React, { useState } from 'react'
import './css/style.css'
import Menu from './menuAPI';
import Card from './Card';
import Navbar from './Navbar';



const uniqueList = [
    ...new Set(
        Menu.map((curElem) => {
            return curElem.category
        }),
    ),
    "All"
];
console.log(uniqueList)




const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList)
    // console.log(menuData)
    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(Menu);
            return
        }

        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        })

        setMenuData(updatedList)

    }

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <Card menuData={menuData} />

        </>
    )
}

export default Restaurant