
const CardOfCart = ({product, handleDelete}) => {


    return (
        <div className="w-2/4 mx-auto mt-5">
            <div className="card flex-col lg:flex-row card-side bg-base-100 border rounded-none">
                <figure><img className="w-72 " src={product.image_url}/></figure>
                <div className="card-body p-5">
                    <h2 className="card-title">{product.name}</h2>
                    <p className="text-base"><span className="font-semibold">Brand:</span> {product.brand_name}</p>
                    <p className="text-base"><span className="font-semibold">Price:</span> {product.price}</p>
                    <div className="card-actions justify-center lg:justify-end">
                        <button onClick={() => handleDelete(product._id)} className="btn btn-success btn-sm text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardOfCart;