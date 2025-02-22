import React, { useState } from "react";

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("creditCard");
    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails({
            ...cardDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Payment submitted successfully!");
        // Add your payment processing logic here
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Complete Payment</h2>
                            <p className="text-muted text-center mb-4">
                                Thank you for shopping with us! Please choose your payment method and enter your details.
                            </p>

                            {/* Payment Method Selection */}
                            <div className="mb-4">
                                <label className="form-label">Payment Method</label>
                                <div className="d-grid gap-2">
                                    <button
                                        className={`btn ${paymentMethod === "creditCard"
                                                ? "btn-primary"
                                                : "btn-outline-primary"
                                            }`}
                                        onClick={() => setPaymentMethod("creditCard")}
                                    >
                                        Credit Card
                                    </button>
                                    <button
                                        className={`btn ${paymentMethod === "mada"
                                                ? "btn-success"
                                                : "btn-outline-success"
                                            }`}
                                        onClick={() => setPaymentMethod("mada")}
                                    >
                                        Mada
                                    </button>
                                </div>
                            </div>

                            {/* Payment Form */}
                            <form onSubmit={handleSubmit}>
                                {paymentMethod === "creditCard" && (
                                    <>
                                        <div className="mb-3">
                                            <label className="form-label">Card Number</label>
                                            <input
                                                type="text"
                                                name="cardNumber"
                                                value={cardDetails.cardNumber}
                                                onChange={handleInputChange}
                                                placeholder="1234 5678 9012 3456"
                                                className="form-control"
                                                required
                                            />
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6">
                                                <label className="form-label">Expiration Date</label>
                                                <input
                                                    type="text"
                                                    name="expiryDate"
                                                    value={cardDetails.expiryDate}
                                                    onChange={handleInputChange}
                                                    placeholder="MM/YY"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <label className="form-label">CVV</label>
                                                <input
                                                    type="text"
                                                    name="cvv"
                                                    value={cardDetails.cvv}
                                                    onChange={handleInputChange}
                                                    placeholder="123"
                                                    className="form-control"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </>
                                )}

                                {paymentMethod === "mada" && (
                                    <div className="alert alert-info">
                                        You will be redirected to the Mada payment gateway to complete your transaction.
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="btn btn-primary w-100 mt-3"
                                >
                                    Pay Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;