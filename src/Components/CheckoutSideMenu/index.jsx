import { useContext } from 'react'
import { CartContext } from "../../Context";
import './styles.css'
import OrderCart from '../../Components/OrderCart';
import { totalPrice } from '../../Utils';

const CheckoutSideMenu = () => {
    const context = useContext(CartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id )
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
            <div className='px-6 bg-slate-100'>
                <p className='flex justify-between items-center'>
                    <span className='font-light'>Total : </span>
                    <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
                </p>

            </div>
        </aside>
    )
}
export default CheckoutSideMenu