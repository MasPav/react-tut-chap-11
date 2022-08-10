import MenuItem from "./MenuItem";
import { useState } from "react";
import { MENUITEMS } from "../../Data/menuitems.data";

export default function Menu() {
    const [menuItems, setMenuItems] = useState(MENUITEMS);
    return (
        <ul>
            {menuItems.map(item => <MenuItem key={item.id} item={item}/>)}
        </ul>
    )
}