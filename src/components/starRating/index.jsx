import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
const StarRating = ({ numberOfStar }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const handleClick = (getIndex) => {
        setRating(getIndex);
    }
    const handleMouseEnter = (getIndex) => {
        setHover(getIndex);
    }
    const handleMouseLeave = () => {
        setHover(rating);
    }
    return (
        <section>
        <h2>Star rating</h2>
        <div className='star-rating'>
            <div>
            {
                [...Array(numberOfStar)].map((_, index) => {
                    index += 1;
                    return (
                        <>
                        <FaStar
                            className={index <= (hover || rating) ? 'star star-active' : 'star star-inactive'}
                            key={index}
                            onClick={() => { handleClick(index) }}
                            onMouseMove={() => { handleMouseEnter(index) }}
                            onMouseLeave={handleMouseLeave}
                            size={30}
                        />
                        </>
                    )
                })
            }
            </div>
            <div>
            {(rating > 0) ? `You have given ${rating} /10`  : 'Not rated yet'}
            </div>
        </div>
        </section>
    );
}
export default StarRating;