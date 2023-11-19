import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";

const Products = () => {

    const loadedProducts = useLoaderData();
    console.log(loadedProducts);
    const [products, setProducts] = useState(loadedProducts);

    return (
        <div>
            <Slider></Slider>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-between container mx-auto my-20">
            {
                products.map((product => <div className="container mx-auto" key={product._id}>
                    <div className="card card-compact bg-base-100 border">
                        <figure><img src={product.image_url} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.name}</h2>
                            <p className="text-base"><span className="font-semibold">Brand:</span> {product.brand_name}</p>
                            <p className="text-base"><span className="font-semibold">Type:</span> {product.type}</p>
                            <p className="text-base"><span className="font-semibold">Price:</span> {product.price}</p>
                            <p className="text-base"><span className="font-semibold">Rating:</span> {product.rating}</p>
                            <div className="card-actions justify-center">
                                <Link to={`/product-details/${product._id}`}><button className="btn btn-success text-white">Details</button></Link>
                                <Link to={`/update-product/${product._id}`}><button className="btn btn-success text-white">Update</button></Link>
                            </div>
                        </div>
                    </div>
                </div>))
            }
            </div>
        </div>
    );
};

export default Products;