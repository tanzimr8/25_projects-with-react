import { useState } from 'react';
import data from './data';
import './style.css'
export default function Accordian(){
    const [selected, setSelected] = useState(null);
    const [enableMulti,setEnableMulti] = useState(false);
    const handleSingleSelection = (getCurrentID) =>{
        setSelected(getCurrentID === selected ? null : getCurrentID);
    }
    const handleMultiSelection =(getCurrentID)=>{
        alert("Multi selected");
    }
    return (
        <div className='wrapper'>
            <h2>Accordian with React JS</h2>
            <button onClick={()=>{setEnableMulti(!enableMulti)}}>{enableMulti ? "Disable Multi Selection" : "Enable Multi Selection"}</button>
            <div className='accordian'>
                {data && data.length > 0 ? (
                    data.map((dataItem)=>{
                        return(
                        <div className="item">
                            <div onClick={
                                enableMulti ?
                                ()=>{handleMultiSelection(dataItem.id)} 
                                :()=>{handleSingleSelection(dataItem.id)}
                                } className="title">
                                <h3><span>+</span>{dataItem.question}</h3>                                
                            </div>
                            {
                                selected === dataItem.id ? 
                                <div className='content'>{dataItem.answer}</div>
                                : null
                            }
                            <hr/>
                        </div>)
                    })
                ): (
                    <div>No data</div>
                )}
            </div>
        </div>
      )
}