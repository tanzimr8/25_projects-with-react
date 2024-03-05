import React, { useEffect, useState } from 'react'

const LoadMore = () => {
    const [loading,setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [errMsg,setErrMsg] = useState('');
    async function fetchProducts(){
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${ count===0 ? 0: count*20}`);
            const result = await response.json();
            if(result && result.products && result.products.length) {
                setProducts(result.products);
                setLoading(false);
            }
            
        }
        
        catch(e){
            setErrMsg(e);
            setLoading(false);
        }

    }
    console.log(products);
    useEffect(()=>{
        fetchProducts();
    },[]);
    if(loading){
        return 'No data to show';
    }
    return (
        <section>
            <div className="products-wrapper">
                {products && products.length ? 
                    products.map((product,index)=>{
                        return (<div key={index} className='product'>
                            <img className='img-product' src={product.thumbnail} alt={product.title}  />
                            <p>{product.title}</p>
                        </div>)
                    })
                
                : null}
            </div>
        </section>
    )
}

export default LoadMore;