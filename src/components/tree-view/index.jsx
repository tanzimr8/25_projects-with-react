import React from 'react'
import MenuItem from './MenuItem';
const TreeView = ({menu}) => {
    return(
        <>
        {
            menu.map((menuItem,index)=>{
                return (<ul key={index}>
                    <MenuItem  menuItem={menuItem} index={index}/>
                </ul>)
            })
        }
        </>
    );
}


export default TreeView