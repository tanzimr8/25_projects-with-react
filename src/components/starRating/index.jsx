import { useState } from 'react';
import {FaStar} from 'react-icons/fa';
const StarRating = ({numberOfStar})=>{
    const [rating,setRating] = useState(0);
    const [hover,setHover] = useState(0);
    const handleClick = (getIndex)=>{
        setRating(getIndex);
    }
    const handleMouseEnter = (getIndex)=>{
        setHover(getIndex);
    }
    const handleMouseLeave = ()=>{
        setHover(rating);
    }
    return(
        <div>
        {
            [...Array(numberOfStar)].map((_,index)=>{
                index+=1;   
                return(
                    <FaStar
                    className={index <= (hover||rating) ? 'star-active':'star-inactive'}
                        key ={index}
                        onClick = {()=>{handleClick(index)}}
                        onMouseMove = {()=>{handleMouseEnter(index)}}
                        onMouseLeave = {handleMouseLeave}
                        size={30}
                    />
                )
            })
        }
        </div>
    );
}
export default StarRating;