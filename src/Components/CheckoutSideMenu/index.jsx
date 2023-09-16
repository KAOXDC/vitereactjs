import { useContext } from 'react'
import { CartContext } from "../../Context";
import './styles.css'
import OrderCart from '../../Components/OrderCart';

const CheckoutSideMenu = () => {
    const context = useContext(CartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id  != id )
        context.setCartProducts(filteredProducts)
    }
    
    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col right-0 border border-black rounded-lg fixed bg-white`}>
            <div  className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Mi Carrito</h2>
                <div onClick={() => context.closeCheckoutSideMenu() }>x</div>
            </div>
            <div className='px-6 overflow-y-scroll'>

            {
                context.cartProducts.map( product => (
                    <OrderCart 
                        key = {product.id}
                        id = {product.id}
                        title = {product.title}
                        imageUrl = {product.images}
                        price = {product.price}
                        handleDelete = {handleDelete}
                    />
                ) )
            }
            </div>

        </aside>
    )
}
export default CheckoutSideMenu