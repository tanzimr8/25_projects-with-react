import React, { useEffect, useState } from 'react'

const ScrollIndicator = ({ url }) => {
    const [products, setProducts] = useState([]);
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const [scroll, setScroll] = useState(0);
    // console.log(document.documentElement.scrollTop);

    const fetchData = async (getUrl) => {
        try {
            setLoading(true);
            let response = await fetch(getUrl);
            let data = await response.json();
            setProducts(data.products);
            
            
        }
        catch (e) {
            setErr(e);
        }

    }
    const handleScrollChange = ()=>{
        let howMuchScrolled = document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let currentScrollPercentage = howMuchScrolled / height * 100;
        setScroll(currentScrollPercentage);
    }
    useEffect(() => {
        fetchData(url);
    }, [url]);
    useEffect(()=>{
        window.addEventListener('scroll',handleScrollChange);

        return ()=>{
            window.removeEventListener('scroll',()=>{})
        }
    });
    return (
        <section>
        <div className="progress-container">
            <h2>Scroll Indicator {`${Math.round(scroll)} %`}</h2>
            <div className="progress">
                <div className="current-progress" style={{width: `${scroll}%`}}></div>
            </div>
        </div>
        <div className="produc-lists">
            {products && products.length > 0 ? (
                products.map((product) => {
                    return (
                        <>
                            <h4>{product.title}</h4>
                            <p>{product.description}</p>
                        </>
                    )
                })
            ) : 'no data'}
            </div>
        </section>
    )
}

export default ScrollIndicator