import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { categoryFood } from '../apiData';
import { CartContext } from '../context/ContextApi';

const ProductPage = () => {
    const {id} = useParams();
    const productId= Number(id)
    const [product, setProduct] = useState([]);
    const { cart, addToCart, setCart } = useContext(CartContext); // Using CartContext
    const cartRef = useRef(null) 
    
    console.log('proddddd',product)
    console.log('top id', id)

    
    useEffect(() => {
        const fetchProduct = () => {
            let foundProduct = null; 
        
            for (const category in categoryFood) {
                foundProduct = categoryFood[category].find(pro => pro.id === productId);
                
                if (foundProduct) {
                    break;
                }
            }
            
            console.log("fetchproduct",foundProduct);
            
            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                console.log('Product not found');
            }
        };
        
        fetchProduct();
    }, [id]);

    
    const removeHandler = (removeItem) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(pro => pro.item.id === removeItem.id);
    
            if (existingItem) {
                if (existingItem.quantity > 1) {
            
                    return prevCart.map(pro => 
                        pro.item.id === removeItem.id
                            ? {
                                ...pro,
                                quantity: pro.quantity - 1,
                                totalPrice: (pro.quantity - 1) * pro.item.Price
                              }
                            : pro
                    );
                } else {
                    
                    return prevCart.filter(pro => pro.item.id !== removeItem.id);
                }
            }
            return prevCart; 
        });
    };

    

    
    const [activeImg, setActiveImage] = useState('')
    const [addStyle,setAddStyle]= useState(false)
    useEffect(() => {
        if (product.image) {
            setActiveImage(product.image);
            
        }
    }, [product]);
    
console.log('addlddlddactivate',activeImg)
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        if (cartRef.current) {
            cartRef.current.scrollIntoView({ behavior: 'smooth', });
        }
    }, []);
    return (
       <> 
        <div ref={cartRef} className='mt-[120px] flex flex-col 
        justify-between  lg:flex-row gap-16 lg:items-center border'>
        {/* {product.map((pro,index)=>{ */}
            {/* return ( */}
            <div  className='flex flex-col p-2 md:flex-row  lg:flex-row 
            gap-6 lg:w-[900px] '>

                <img src={activeImg} alt="" className='order-5 w-full h-[400px] aspect-square object-cover object-center rounded-xl'/>
                <div className='order-1  flex flex-row
                md:flex-col  lg:flex-col gap-y-4 justify-between '>
                    <img src={product.image} alt="" className={`w-20 lg:w-24 h-16 rounded-md cursor-pointer
                    ${product.image===activeImg ?
                         'scale-110 shadow-[0_5px_10px_rgba(00,00,00,0.9) border-2 border-red-600':''}`} 
                    
                    onClick={() => setActiveImage(product.image) }
                    />
                     <img  src={product.img1} alt="" className={`w-20 lg:w-24 h-16 rounded-md cursor-pointer
                     ${product.img1===activeImg ?
                         'scale-110 shadow-[0_5px_4px_rgba(00,00,00,0.9) border-2 border-red-600':''}`} 
                    onClick={() => {setActiveImage(product.img1)
                    
                    } }
                     />
                     <img src={product.img2} alt="" className={`w-20 lg:w-24 h-16 rounded-md cursor-pointer
                     ${product.img2===activeImg ?
                         'scale-110 shadow-[0_5px_4px_rgba(00,00,00,0.9) border-2 border-red-600':''}`}
                     onClick={() => setActiveImage(product.img2)}
                     />
                    <img src={product.img3} alt="" className={`w-20 lg:w-24 h-16 rounded-md cursor-pointer
                        ${product.img3===activeImg ?
                            'scale-110 shadow-[0_5px_4px_rgba(00,00,00,0.9) border-2 border-red-600':''} `  }
                     onClick={() => setActiveImage(product.img3)}
                     /> 
                </div>
            </div>
            {/* ) })} */}
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>fudo fresh dishes</span>
                    <h1 className='text-3xl font-bold'>{product.mealName}</h1>
                </div>
                <p className='text-gray-700'>
                {product.des}
                               </p>
                <h6 className='text-2xl font-semibold'>₹ {product.Price}</h6>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg
                         text-violet-800 text-3xl outline-none'
                         onClick={()=>removeHandler(product)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button onClick={()=>addToCart(product)}
                         className='bg-gray-200 py-2 px-4 outline-none
                          rounded-lg text-violet-800 text-3xl' 
                         >+</button>
                    </div>
                    <button onClick={()=>addToCart(product)}
                     className='bg-violet-800 outline-none
                    text-white font-semibold py-3 px-8
                    md:py-3 md:px-16 text-[0.9rem] md:text-[1.1rem]
                     rounded-xl h-full'>Add to Cart</button>
                </div>
            </div>
        </div>
                    
                    </>
    )
}

export default ProductPage