import { createContext, useState,  } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [count, setCount] = useState(0) // state for shopping cart counter
    
    
    // show or hide product
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false) // state for cart product detail 
    const openProductDetail = () => setIsProductDetailOpen(true) 
    const closeProductDetail = () => setIsProductDetailOpen(false)


    // Shoppingcart show or hide cart
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false) // state for cart product detail 
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true) 
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)
    
    // Show Product detail 
    const [productToShow, setProductToShow] = useState({}) 
    
    // Shopping cart Add products to Cart
    // const [productToShow, setProductToShow] = useState({}) 
    const [cartProducts, setCartProducts] = useState([]) 

    
    return( 
        <CartContext.Provider value = {{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts, setCartProducts,
            isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
            

        }}  
        
        >
            {children}
        </CartContext.Provider>
    )
}
