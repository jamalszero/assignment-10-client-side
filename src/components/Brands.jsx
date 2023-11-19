import { useEffect } from "react";
import BrandCard from "./BrandCard";
import { useState } from "react";

const Brands = () => {

    const [brands, setBrands] = useState([]);
    console.log(brands);
    
    useEffect( () => {
        fetch("./data.json")
        .then(res => res.json())
        .then(data => setBrands(data));
    }, [])

    return (
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-3 container mx-auto">
            {
                brands.map(brand => <BrandCard key={brand.id} brand={brand} />)
            }
        </div>
    );
};

export default Brands;