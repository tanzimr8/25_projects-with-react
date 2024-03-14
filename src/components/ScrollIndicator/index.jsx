import React, { useEffect, useState } from 'react'

const ScrollIndicator = ({ url }) => {
    const [products, setProducts] = useState([]);
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    console.log(document.documentElement.scrollTop);

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
    useEffect(() => {
        fetchData(url);
    }, [url]);
    return (
        <section>
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
        </section>
    )
}

export default ScrollIndicator