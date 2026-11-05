
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

const MyCart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Chicken Burger",
      price: 150,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
    },
    {
      id: 2,
      name: "Cheese Pizza",
      price: 250,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300",
    },
  ]);

  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-5">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-bold text-green-600 uppercase">
            CanteenPro / Cart
          </p>

          <h1 className="text-3xl font-extrabold text-gray-900 mt-2">
            My Shopping Cart
          </h1>

          <p className="text-gray-500 mt-2">
            Review your selected food before ordering.
          </p>
        </div>

        {cart.length === 0 ? (

          <div className="bg-white rounded-2xl p-12 text-center shadow-sm">
            <ShoppingBag size={50} className="mx-auto text-gray-300 mb-4" />

            <h2 className="text-xl font-bold text-gray-800">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some delicious food to your cart.
            </p>

            <Link
              to="/food-menu"
              className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700"
            >
              Explore Food Menu
            </Link>
          </div>

        ) : (

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-4 sm:p-5 flex flex-wrap sm:flex-nowrap items-center gap-5 shadow-sm border border-gray-100"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />

                  <div className="flex-1 min-w-[120px]">
                    <h3 className="font-bold text-gray-900">
                      {item.name}
                    </h3>

                    <p className="text-green-600 font-bold mt-2">
                      ৳{item.price}
                    </p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="text-gray-600 hover:text-green-600"
                    >
                      <Minus size={17} />
                    </button>

                    <span className="font-bold text-gray-800">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="text-gray-600 hover:text-green-600"
                    >
                      <Plus size={17} />
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                    aria-label="Remove item"
                  >
                    <Trash2 size={19} />
                  </button>

                </div>

              ))}

            </div>

            {/* Order Summary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-fit">

              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>Total Items</span>
                <span>
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-500 mb-4">
                <span>Subtotal</span>
                <span>৳{total}</span>
              </div>

              <div className="border-t border-gray-100 pt-5 flex justify-between mb-6">
                <span className="font-bold text-gray-900">
                  Total Amount
                </span>

                <span className="text-xl font-extrabold text-green-600">
                  ৳{total}
                </span>
              </div>

              <Link
                to="/place-order"
                className="block text-center w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-xl font-bold transition"
              >
                Place Order
              </Link>

              <Link
                to="/food-menu"
                className="block text-center text-sm font-semibold text-gray-500 hover:text-green-600 mt-5"
              >
                ← Continue Shopping
              </Link>

            </div>

          </div>

        )}

      </div>
    </div>
  );
};

export default MyCart;
