
import { ShoppingCart, Star } from "lucide-react";

const FoodCard = ({ food, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-300 group">

      {/* Food Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-bold text-green-600">
          {food.category}
        </span>
      </div>

      {/* Food Details */}
      <div className="p-5">

        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-gray-900">
            {food.name}
          </h3>

          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <Star size={15} fill="currentColor" />
            <span>{food.rating || "4.5"}</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {food.description}
        </p>

        <div className="flex justify-between items-center mt-5">

          <span className="text-xl font-extrabold text-green-600">
            ৳{food.price}
          </span>

          <button
            onClick={() => onAddToCart(food)}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition"
          >
            <ShoppingCart size={17} />
            Add to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default FoodCard;
