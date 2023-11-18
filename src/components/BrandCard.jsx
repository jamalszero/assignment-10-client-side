import { Link, Navigate } from "react-router-dom";

const BrandCard = ({ brand }) => {
    const {brand_name, image } = brand;

    return (
        <div>
            <Link to={`/products/${brand_name}`}>
            <div className="card p-3 mx-2 lg:mx-0 bg-base-100 border h-80 flex-col justify-evenly">
                <figure><img className="w-cover" src={image} alt="Shoes" /></figure>
                <div>
                    <h2 className="card-title justify-center text-2xl">{brand_name}</h2>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default BrandCard;