// totalPrice function calculates total prices of a order
// products is an array of products, and return total price

export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product =>  sum +=  product.price)
    return sum
}