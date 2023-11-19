import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const ProductDetails = () => {
    const product = useLoaderData();
    const { name, image_url, brand_name, price, description } = product;

     const handleAddToCart = () => {
        fetch("https://b8a10-brandshop-server-side-jamalszero.vercel.app/cart", {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({name, image_url, brand_name, price})
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Product successfully added to cart",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            });
     }

    return (
        <div className="my-20 w-4/6 mx-auto">
            <div className="container mx-auto">
                <div className="card bg-base-100 border rounded-none">
                    <figure><img className="mt-5" src={image_url} /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p className="text-base"><span className="font-semibold">Brand:</span> {brand_name}</p>
                        <p className="text-base"><span className="font-semibold">Price:</span> {price}</p>
                        <p className="text-base"><span className="font-semibold">Full Specification:</span> {description}</p>
                        <div className="card-actions justify-center">  
                            <Link><button onClick={handleAddToCart} className="btn btn-success text-white">Add to Cart</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;