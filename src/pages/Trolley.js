import React from "react";
import * as FaIcons from "react-icons/fa";

const CartPage = ({ cartItems = [], removeFromCart }) => {
    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };

    return (
        <div className="container mt-4">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item, index) => {
                        const IconComponent = FaIcons[item.icon] || null;
                        return (
                            <div key={index} className="d-flex align-items-center justify-content-between p-2 border mb-2" style={{ borderRadius: "10px" }}>
                                <div className="d-flex align-items-center">
                                    {IconComponent && <IconComponent size={30} className="me-2" />}
                                    <h5 className="mb-0">{item.name}</h5>
                                </div>
                                <p className="mb-0">${item.price.toFixed(2)}</p>
                                <button className="btn btn-danger" onClick={() => removeFromCart(index)}>
                                    Remove
                                </button>
                            </div>
                        );
                    })}
                    <h4 className="mt-3">Total: ${getTotalPrice()}</h4>
                </div>
            )}
        </div>
    );
};

export default CartPage;
