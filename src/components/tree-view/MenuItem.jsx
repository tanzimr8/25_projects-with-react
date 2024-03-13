import React, { useState } from 'react'
import TreeView from './index'
import { FaPlus,FaMinus } from "react-icons/fa6";

const MenuItem = ({menuItem}) => {
    const [childrenExpanded,setChildrenExpanded] = useState({})
    const handleToggleChildren =(getCurrent)=>{
        setChildrenExpanded({
            ...childrenExpanded,
            [getCurrent] : !childrenExpanded[getCurrent]
            
        });
    }
  return (
    <>
    <div className='menuItems'>
        <li>{menuItem.menu}</li>
        {menuItem.children && menuItem.children.length ? <span onClick={()=>{handleToggleChildren(menuItem.menu)}}>
            {childrenExpanded[menuItem.menu] ? <FaMinus size={10}/> : <FaPlus size={10}/>  } </span> :null}
    </div>
    {menuItem.children && menuItem.children.length && childrenExpanded[menuItem.menu]? <TreeView menu={menuItem.children}/> :null}
    </>
  )
}

export default MenuItem