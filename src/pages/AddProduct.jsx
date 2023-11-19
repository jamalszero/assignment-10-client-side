import Swal from 'sweetalert2'

const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image_url = form.image_url.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const product = { name, image_url, brand_name, type, price, rating, description };

        //send data to server/back-end
        fetch("https://b8a10-brandshop-server-side-jamalszero.vercel.app/products", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Product successfully added",
                        showConfirmButton: false,
                        timer: 2000
                    });
                }
            });
    }

    return (
        <div className="my-10">
            <div >
                <h1 className=" text-center text-3xl my-5">Add product</h1>
                <form onSubmit={handleAddProduct} className="bg-red-100 w-4/5 lg:w-3/5 mx-auto rounded-md p-9">
                    <div className=" w-4/5 mx-auto  ">
                        <label >
                            <p className="label-text my-1 text-base">Name</p>
                        </label>
                        <label>
                            <input type="text" name="name" placeholder="product name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className=" w-4/5 mx-auto  mt-3">
                        <label >
                            <p className="label-text my-1 text-base">Image URL</p>
                        </label>
                        <label>
                            <input type="text" name="image_url" placeholder="image url" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className=" w-4/5 mx-auto  mt-3">
                        <label >
                            <p className="label-text my-1 text-base">Brand Name</p>
                        </label>
                        <label>
                            <select type="text" name="brand_name" className="select select-bordered w-full">
                                <option>Samsung</option>
                                <option>Apple</option>
                                <option>Sony</option>
                                <option>HP</option>
                                <option>Dell</option>
                                <option>Lenovo</option>
                            </select>
                        </label>
                    </div>

                    <div className=" w-4/5 mx-auto  mt-3">
                        <label >
                            <p className="label-text my-1 text-base">Type</p>
                        </label>
                        <label>
                            <input type="text" name="type" placeholder="product type" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className=" w-4/5 mx-auto  mt-3">
                        <label >
                            <p className="label-text my-1 text-base">Price</p>
                        </label>
                        <label>
                            <input type="text" name="price" placeholder="price" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className=" w-4/5 mx-auto  mt-3">
                        <label >
                            <p className="label-text my-1 text-base">Description</p>
                        </label>
                        <label>
                            <textarea className="input input-bordered w-full" name="description" cols="30" rows="10" placeholder='Write here...'></textarea>
                            {/* <input type="text" name="description" placeholder="description" className="input input-bordered w-full" /> */}
                        </label>
                    </div>

                    <div className=" w-4/5 mx-auto  mt-3">
                        <label >
                            <p className="label-text my-1 text-base">Rating</p>
                        </label>
                        <label>
                            <input type="text" name="rating" placeholder="rating" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <input className="btn btn-error w-full text-white mt-5" type="submit" value="Add" />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;