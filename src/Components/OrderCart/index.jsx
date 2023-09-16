const OrderCart = props => {
    const { id, title, imageUrl, price, handleDelete } = props

    return (
        <div className="flex justify-between items-center mb-3 ">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover " src={ imageUrl } alt={ title } />
                </figure>
                    <p className="text-sm font-light">{ title }</p>
            </div>
            <div flex items-center gap-2>
                <p className="text/;g font-medium">{ price }</p>
                <div onClick={()=> handleDelete(id)}> x </div>
            </div>
        </div>
    )
}

export default OrderCart