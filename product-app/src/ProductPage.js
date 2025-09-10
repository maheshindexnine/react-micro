import React, { useState } from "react";
import "./index.css";

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample restaurant data
  const restaurants = [
    {
      id: 1,
      name: "Bella Vista",
      restaurantName: "Bella Vista Italian",
      description: "Authentic Italian cuisine with fresh pasta, wood-fired pizzas, and an extensive wine selection in a cozy atmosphere.",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop&crop=center",
      cuisine: "Italian",
      priceRange: "$$$"
    },
    {
      id: 2,
      name: "Sakura Sushi",
      restaurantName: "Sakura Sushi Bar",
      description: "Fresh sushi and sashimi prepared by master chefs. Experience traditional Japanese flavors with modern presentation.",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop&crop=center",
      cuisine: "Japanese",
      priceRange: "$$$$"
    },
    {
      id: 3,
      name: "Spice Garden",
      restaurantName: "Spice Garden Indian",
      description: "Aromatic Indian spices and traditional recipes passed down through generations. Vegetarian and non-vegetarian options available.",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop&crop=center",
      cuisine: "Indian",
      priceRange: "$$"
    },
    {
      id: 4,
      name: "The Golden Dragon",
      restaurantName: "Golden Dragon Chinese",
      description: "Classic Chinese dishes with a modern twist. From dim sum to Peking duck, experience authentic flavors.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1563379091339-03246963d0b0?w=400&h=300&fit=crop&crop=center",
      cuisine: "Chinese",
      priceRange: "$$"
    },
    {
      id: 5,
      name: "Le Bistro",
      restaurantName: "Le Bistro Français",
      description: "Elegant French dining with classic dishes like coq au vin and crème brûlée. Perfect for special occasions.",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
      cuisine: "French",
      priceRange: "$$$$"
    },
    {
      id: 6,
      name: "Taco Fiesta",
      restaurantName: "Taco Fiesta Mexican",
      description: "Vibrant Mexican flavors with fresh ingredients. From street tacos to gourmet burritos, authentic taste guaranteed.",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center",
      cuisine: "Mexican",
      priceRange: "$"
    }
  ];

  // Filter restaurants based on search term
  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.restaurantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Star rating component
  const StarRating = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="currentColor"/>
              <stop offset="50%" stopColor="#E5E7EB"/>
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
        </svg>
      );
    }

    return <div className="flex items-center space-x-1">{stars}</div>;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Amazing Restaurants</h1>
          <p className="text-lg text-gray-600">Find your next favorite dining experience</p>
        </div>

        {/* Search Box */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search restaurants, cuisines, or dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredRestaurants.length} restaurant{filteredRestaurants.length !== 1 ? 's' : ''}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white px-2 py-1 rounded-full text-sm font-medium text-gray-700 shadow-md">
                    {restaurant.priceRange}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {restaurant.cuisine}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {restaurant.name}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 font-medium">
                  {restaurant.restaurantName}
                </p>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {restaurant.description}
                </p>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <StarRating rating={restaurant.rating} />
                    <span className="text-sm font-medium text-gray-700">
                      {restaurant.rating}
                    </span>
                  </div>
                  
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No restaurants found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search terms or browse all restaurants.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
