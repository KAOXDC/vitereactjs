import { useContext } from "react";
import { CartContext } from "../../Context";

const Card = (data) => {
  const context = useContext(CartContext);
  
  // function to save a selected product
  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
}

// Add Products to shopping cart List 
const addProductsToCart = (event, productData)  => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts , productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
    // console.log(context.cartProducts)
}

const renderIcon = (id) => {
    const isInCart =  context.cartProducts.filter(product => product.id === id ).length > 0  //return true or false
    if (isInCart){
        return (
            <div
            className="absolute top-0 right-0 flex justify-center items-center bg-lime-500 w-6 h-6 rounded-full m-2 p-1 text-black "
            onClick={(event) => addProductsToCart(event, data.data) }
          >
            x
          </div>
        )        
    }
    else {
        return (
            <div
            className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1 "
            onClick={(event) => addProductsToCart(event, data.data) }
          >
            +
          </div>
        )

    }
}

  return (
    <div 
    className="bg-white cursor-pointer w-56 h-60 rounded-lg"
    onClick={() => showProduct(data.data)}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/50 rounded-lg text-black text-xs m-2  px-3 py-0.5">
          {data.data.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images}
          alt=""
        />

        { renderIcon(data.data.id) }
      
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};

export default Card;
