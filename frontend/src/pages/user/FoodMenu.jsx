
import { useState } from "react";
import {
  Search,
  ShoppingCart,
  Plus,
  Star,
  Utensils,
  SlidersHorizontal,
  X,
} from "lucide-react";

// Demo Food Data
const foodData = [
  {
    id: 1,
    name: "Chicken Burger",
    category: "Burger",
    price: 150,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    popular: true,
    description: "Delicious crispy chicken burger with fresh vegetables.",
  },
  {
    id: 2,
    name: "Cheese Pizza",
    category: "Pizza",
    price: 250,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
    popular: true,
    description: "Freshly baked pizza loaded with mozzarella cheese.",
  },
  {
    id: 3,
    name: "Chicken Fried Rice",
    category: "Rice",
    price: 130,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
    popular: false,
    description: "Delicious fried rice with chicken and vegetables.",
  },
  {
    id: 4,
    name: "Chicken Sandwich",
    category: "Snacks",
    price: 100,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?w=600",
    popular: false,
    description: "Fresh sandwich with chicken and creamy sauce.",
  },
  {
    id: 5,
    name: "French Fries",
    category: "Snacks",
    price: 80,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",
    popular: false,
    description: "Golden crispy french fries.",
  },
  {
    id: 6,
    name: "Chicken Pasta",
    category: "Pasta",
    price: 180,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600",
    popular: true,
    description: "Creamy chicken pasta with fresh herbs.",
  },
  {
    id: 7,
    name: "Beef Burger",
    category: "Burger",
    price: 190,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
    popular: false,
    description: "Juicy beef burger with cheese and fresh lettuce.",
  },
  {
    id: 8,
    name: "Cold Coffee",
    category: "Drinks",
    price: 90,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
    popular: false,
    description: "Refreshing chilled coffee.",
  },
];

const categories = [
  "All",
  "Burger",
  "Pizza",
  "Rice",
  "Snacks",
  "Pasta",
  "Drinks",
];

const FoodMenu = () => {
  const [foods] = useState(foodData);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState("");

  // Filter Foods
  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || food.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Add to Cart
  const addToCart = (food) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === food.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === food.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...food, quantity: 1 }];
    });

    setNotification(`${food.name} added to cart!`);

    setTimeout(() => setNotification(""), 2000);
  };

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-500">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20">

          <div className="max-w-2xl">

            <span className="inline-block bg-white/15 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-5">
              Fresh & Delicious
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Explore Our
              <span className="text-green-200"> Food Menu</span>
            </h1>

            <p className="text-green-50 mt-5 text-base sm:text-lg leading-8">
              Discover delicious meals, fresh ingredients and
              affordable prices. Your favorite food is just one
              click away!
            </p>

            <div className="flex items-center gap-3 mt-7 text-white text-sm">
              <Utensils size={19} />
              <span>Freshly Prepared • Affordable • Delicious</span>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12">

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">

          <div>
            <p className="text-green-600 font-bold text-sm uppercase tracking-wider mb-2">
              Our Menu
            </p>

            <h2 className="text-3xl font-extrabold text-gray-900">
              Find Your Favorite Food
            </h2>

            <p className="text-gray-500 mt-2 text-sm">
              Explore our delicious collection of meals.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-4 py-3 shadow-sm">
            <ShoppingCart size={19} className="text-green-600" />

            <span className="text-sm font-bold text-gray-800">
              {cartCount} Items
            </span>
          </div>

        </div>

        {/* Search */}
        <div className="relative mb-7">

          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search your favorite food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-12 text-sm outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition"
          />

          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
            >
              <X size={19} />
            </button>
          )}

        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-3 mb-9 overflow-x-auto pb-2">

          <SlidersHorizontal
            size={19}
            className="text-green-600 shrink-0"
          />

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-green-600 text-white shadow-lg shadow-green-200"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-green-400 hover:text-green-600"
              }`}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Food Count */}
        <div className="flex items-center justify-between mb-6">

          <h3 className="text-lg font-bold text-gray-800">
            {activeCategory === "All" ? "All Foods" : activeCategory}
            <span className="text-gray-400 text-sm font-medium ml-2">
              ({filteredFoods.length} items)
            </span>
          </h3>

        </div>

        {/* Food Cards */}
        {filteredFoods.length > 0 ? (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {filteredFoods.map((food) => (

              <div
                key={food.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                {/* Image */}
                <div className="relative h-52 overflow-hidden">

                  <img
                    src={food.image}
                    alt={food.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {food.popular && (
                    <span className="absolute top-3 left-3 bg-white text-orange-500 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                      <Star size={13} fill="currentColor" />
                      Popular
                    </span>
                  )}

                  <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {food.category}
                  </span>

                </div>

                {/* Details */}
                <div className="p-5">

                  <div className="flex items-center justify-between gap-2">

                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition">
                      {food.name}
                    </h3>

                    <div className="flex items-center gap-1 text-orange-400 shrink-0">
                      <Star size={14} fill="currentColor" />

                      <span className="text-xs font-bold text-gray-600">
                        {food.rating}
                      </span>
                    </div>

                  </div>

                  <p className="text-gray-500 text-sm leading-6 mt-2 min-h-[48px]">
                    {food.description}
                  </p>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">

                    <div>
                      <p className="text-xs text-gray-400 mb-1">
                        Price
                      </p>

                      <h4 className="text-xl font-extrabold text-green-600">
                        ৳{food.price}
                      </h4>
                    </div>

                    <button
                      onClick={() => addToCart(food)}
                      className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl text-sm font-bold shadow-md shadow-green-200/50 transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
                    >
                      <Plus size={17} />
                      Add
                    </button>

                  </div>

                </div>
              </div>

            ))}

          </div>

        ) : (

          <div className="bg-white rounded-2xl border border-gray-100 py-20 text-center">

            <Utensils size={45} className="mx-auto text-gray-300 mb-4" />

            <h3 className="text-xl font-bold text-gray-800">
              No Food Found
            </h3>

            <p className="text-sm text-gray-500 mt-2">
              Try another search or select a different category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
              className="mt-5 text-sm font-bold text-green-600 hover:text-green-700"
            >
              Clear Filters
            </button>

          </div>

        )}

      </section>

      {/* Toast Notification */}
      {notification && (

        <div className="fixed bottom-6 right-5 z-50 bg-green-600 text-white px-5 py-4 rounded-xl shadow-xl flex items-center gap-3 animate-in slide-in-from-bottom-5">

          <ShoppingCart size={20} />

          <span className="text-sm font-semibold">
            {notification}
          </span>

        </div>

      )}

    </div>
  );
};

export default FoodMenu;
