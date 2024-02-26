import { useState } from 'react';
import data from './data';
import './style.css'
export default function Accordian(){
    const [selected, setSelected] = useState(null);
    const [enableMulti,setEnableMulti] = useState(false);
    const [multiple,setMultiple] = useState([]);
    const handleSingleSelection = (getCurrentID) =>{
        setSelected(getCurrentID === selected ? null : getCurrentID);
    }
    const handleMultiSelection =(getCurrentID)=>{
        const copyOfMultiple = [...multiple];
        const findIndexOfCurrentID = copyOfMultiple.indexOf(getCurrentID);
        findIndexOfCurrentID === -1 ? copyOfMultiple.push(getCurrentID) : copyOfMultiple.splice(findIndexOfCurrentID,1);
        setMultiple(copyOfMultiple);
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
                                enableMulti ? 
                                (multiple.indexOf(dataItem.id) !== -1) && (<div className='content'>{dataItem.answer}</div>)
                                :
                                selected === dataItem.id &&
                                <div className='content'>{dataItem.answer}</div>
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