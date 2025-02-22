import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import * as FaIcons from "react-icons/fa";

const Products = () => {
    const [products] = useState([
        // Food Items
        { id: 1, name: "Apple", price: 1.5, icon: "FaAppleAlt" },
        { id: 2, name: "Banana", price: 0.5, icon: "FaLemon" },
        { id: 3, name: "Orange", price: 1.0, icon: "FaLemon" },
        { id: 4, name: "Bread", price: 2.0, icon: "FaBreadSlice" },
        { id: 5, name: "Milk", price: 1.2, icon: "FaGlassCheers" },
        { id: 6, name: "Eggs", price: 3.0, icon: "FaDrumstickBite" },
        { id: 7, name: "Cheese", price: 4.5, icon: "FaPizzaSlice" },
        { id: 8, name: "Chicken", price: 5.0, icon: "FaDrumstickBite" },
        { id: 9, name: "Rice", price: 2.5, icon: "FaBreadSlice" },
        { id: 10, name: "Pasta", price: 1.8, icon: "FaPizzaSlice" },

        // Electronics
        { id: 11, name: "Smartphone", price: 500.0, icon: "FaMobileAlt" },
        { id: 12, name: "Laptop", price: 1200.0, icon: "FaLaptop" },
        { id: 13, name: "Headphones", price: 80.0, icon: "FaHeadphones" },
        { id: 14, name: "Smartwatch", price: 200.0, icon: "FaClock" },
        { id: 15, name: "Tablet", price: 300.0, icon: "FaTabletAlt" },
        { id: 16, name: "Camera", price: 450.0, icon: "FaCamera" },
        { id: 17, name: "Printer", price: 150.0, icon: "FaPrint" },
        { id: 18, name: "Speaker", price: 100.0, icon: "FaVolumeUp" },
        { id: 19, name: "Monitor", price: 250.0, icon: "FaDesktop" },
        { id: 20, name: "Keyboard", price: 50.0, icon: "FaKeyboard" },

        // Miscellaneous
        { id: 21, name: "Notebook", price: 3.0, icon: "FaBook" },
        { id: 22, name: "Pen", price: 1.0, icon: "FaPen" },
        { id: 23, name: "Backpack", price: 40.0, icon: "FaShoppingCart" },
        { id: 24, name: "Water Bottle", price: 10.0, icon: "FaWater" },
        { id: 25, name: "Umbrella", price: 15.0, icon: "FaUmbrella" },
    ]);

    const addToTrolley = (product) => {
        alert(`${product.name} added to trolley!`);
    };

    return (
        <div className="container mt-5">
            <h2>Our Products</h2>
            <div className="d-flex flex-wrap">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} addToTrolley={addToTrolley} />
                ))}
            </div>
        </div>
    );
};

export default Products;
