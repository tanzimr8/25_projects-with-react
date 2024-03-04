import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const ImageSlider = ({ url, page, limit, }) => {
    const [currentslider, setCurrentslider] = useState(0);
    const [images, setImages] = useState([]);
    const [error, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleLeftClick = () => {
        setCurrentslider(currentslider === 0 ? images.length - 1 : currentslider - 1)
    }
    const handleRightClick = () => {
        setCurrentslider(currentslider === images.length - 1 ? 0 : currentslider + 1)
    }
    useEffect(() => {
        fetchImages(url);
    }, url);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const imageData = await response.json();
            if (imageData) {
                setImages(imageData);
                setLoading(false);
            }
        }
        catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }
    console.log(images);

    if (loading) {
        return (<>
            <h2>Loading...</h2>
        </>)
    }
    if (error) {
        return (<>
            <h2>Something went wrong... {error}</h2>
        </>)
    }
    return (
        <section>
            <h2>Image slider</h2>
            <div className='slider-container'>
                <BsArrowLeftCircleFill onClick={handleLeftClick} className='arrow arrow-left' />
                {
                    images && images.length ?
                        (
                            images.map((image, index) => {
                                return (
                                    <img
                                        className={currentslider === index ? 'api-img current-image' : 'api-img current-image hide-current-image'}
                                        key={image.id}
                                        alt={image.download_url}
                                        src={image.download_url}
                                    />
                                )
                            })
                        )
                        : null
                }
                <BsArrowRightCircleFill onClick={handleRightClick} className='arrow arrow-right' />
                <span className='circle-indicators'>
                    {
                        images.map((image, index) => {
                            return (
                                <div onClick={() => { setCurrentslider(index) }} key={index} className={currentslider === index ? 'circle-indicator' : 'circle-indicator inactive-circle-indicator'}></div>
                            )
                        })
                    }
                </span>
            </div>
        </section>
    )
}

export default ImageSlider;