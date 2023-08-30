import { createContext, useState,  } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [count, setCount] = useState(0) // state for shopping cart counter
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false) // state for cart product detail 
    
    // show or hide product
    const openProductDetail = () => setIsProductDetailOpen(true) 
    const closeProductDetail = () => setIsProductDetailOpen(false)
    
    // Show Product detail 
    const [productToShow, setProductToShow] = useState({}) 
    
    return( 
        <CartContext.Provider value = {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}  
        
        >
            {children}
        </CartContext.Provider>
    )
}
