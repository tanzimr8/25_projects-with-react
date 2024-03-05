import React, { useEffect, useState } from 'react'

const LoadMore = () => {
    const [loading,setLoading] = useState(false);
    const [products,setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [errMsg,setErrMsg] = useState('');
    const [disable,setDisable] =useState(false);
    async function fetchProducts(){
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${ count===0 ? 0: count*20}`);
            const result = await response.json();
            if(result && result.products && result.products.length) {
                setProducts(prevData => [...prevData,...result.products]);
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
    },[count]);
    
    useEffect(()=>{
        if(products.length === 100){
            setDisable(true);
        }
    },[products]);
    if(loading){
        return <h2>LOADING...</h2>;
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
            <div className="loadmore">
                <button disabled={disable} onClick={()=>{setCount(count+1)}} className="btn btn-primary my-5" >Load More</button>
                    {
                        disable ? <p>You have reached 100 products</p> : ''
                    }
            </div>
        </section>
    )
}

export default LoadMore;