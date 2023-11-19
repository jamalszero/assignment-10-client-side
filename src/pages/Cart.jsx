import { useEffect, useState } from "react";
import CardOfCart from "../components/CardOfCart";
import Swal from 'sweetalert2'

const Cart = () => {

    const [CartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        fetch("https://b8a10-brandshop-server-side-jamalszero.vercel.app/cart")
            .then(res => res.json())
            .then(data => setCartProducts(data))
    }
        , []);

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b8a10-brandshop-server-side-jamalszero.vercel.app/cart/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Successfully deleted.",
                                icon: "success"
                            });

                            const remainingCartProducts = CartProducts.filter(product => product._id !== _id);
                            setCartProducts(remainingCartProducts);
                        }
                    });



            }
        });





        
    };

    return (
        <div className="min-h-screen my-12">
            {
                CartProducts?.map(product => <CardOfCart key={product._id} product={product} handleDelete={handleDelete}></CardOfCart>)
            }
        </div>
    );
};

export default Cart;