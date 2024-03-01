import { useEffect, useState } from "react"
import './styles.css';
export default function RandomColorGen(){
    const [color,setColor] = useState('#000000');
    const [typeOfColor,setTypeOfColor] = useState('hex');
    const createRandomDigit = (len)=>{
        return Math.floor(Math.random()*len);
    }
    const setTypeHexColor = ()=>{
        const hex = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
        let hexNumber = '#';
        for(let c=0;c<6;c++){
            hexNumber += hex[createRandomDigit(hex.length)]
        }
        setColor(hexNumber);
    }
    useEffect(()=>{
        typeOfColor === 'hex' ? setTypeHexColor() : setTypeRgbColor()
    },[typeOfColor])
    const setTypeRgbColor = ()=>{
        const R = createRandomDigit(256);
        const G = createRandomDigit(256);
        const B = createRandomDigit(256);
        let rgbNumber = `rgb(${R},${G},${B})`;
        setColor(rgbNumber);
    }
    return(
        <div className="randomColors" style={{
            width: '100vw',
            height: '100vh',
            background: color
        }}>
            <h2>Name of {typeOfColor} Color: {color}</h2>
            <div className="buttons">
                <button onClick={()=>{setTypeOfColor('hex')}}>Generate HEX color</button>
                <button onClick={()=>{setTypeOfColor('rgb')}}>Generate RGB color</button>
                <button onClick={()=>{typeOfColor === 'hex' ? setTypeHexColor() : setTypeRgbColor()}}>Generate random color</button>
            </div>
        </div>
    )
}