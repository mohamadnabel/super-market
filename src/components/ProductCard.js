import React from "react";
import * as FaIcons from "react-icons/fa";

const ProductCard = ({ product, addToTrolley }) => {
    const IconComponent = FaIcons[product.icon];

    return (
        <div className="card m-2 p-3 text-center" style={{ width: "200px", border: "1px solid #ddd", borderRadius: "10px" }}>
            {IconComponent && <IconComponent size={50} />}
            <h5 className="mt-2">{product.name}</h5>
            <p className="text-muted">${product.price.toFixed(2)}</p>
            <button className="btn btn-primary" onClick={() => addToTrolley(product)}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
