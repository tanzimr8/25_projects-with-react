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
        <section>
            <h2>Accordian with React JS</h2>
            <button className='btn btn-primary my-3' onClick={()=>{setEnableMulti(!enableMulti)}}>{enableMulti ? "Disable Multi Selection" : "Enable Multi Selection"}</button>
            <div className='accordian my-3'>
                {data && data.length > 0 ? (
                    data.map((dataItem,index)=>{
                        return(
                        <div key={index} className="item">
                            <div onClick={
                                enableMulti ?
                                ()=>{handleMultiSelection(dataItem.id)} 
                                :()=>{handleSingleSelection(dataItem.id)}
                                } className="title">
                                <h5><span>+</span>{dataItem.question}</h5>                                
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
        </section>
      )
}