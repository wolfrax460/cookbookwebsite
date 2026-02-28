import { useState } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { RecipeCard } from "../components/RecipeCard";
import { mockRecipes, categories } from "../data/mockData";
import { ChefHat, TrendingUp, Users } from "lucide-react";
import { Button } from "../components/ui/button";

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const featuredRecipes = mockRecipes.slice(0, 3);
  const popularRecipes = mockRecipes.filter(r => r.rating >= 4.7).slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={setSearchQuery} isLoggedIn={true} currentUser={{ name: "Mugisha Is'haq", id: 1 }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to Cookbook</h1>
            <p className="text-xl mb-8 text-orange-100">
              Discover, Share, and Cook Amazing Recipes from Around the World
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/recipes">
                <Button size="lg" variant="secondary">
                  Browse Recipes
                </Button>
              </Link>
              <Link to="/upload">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600">
                  Share Your Recipe
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <ChefHat className="w-12 h-12 text-orange-500 mb-3" />
              <h3 className="text-3xl font-bold mb-2">1,200+</h3>
              <p className="text-gray-600">Recipes Shared</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-orange-500 mb-3" />
              <h3 className="text-3xl font-bold mb-2">5,000+</h3>
              <p className="text-gray-600">Active Cooks</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="w-12 h-12 text-orange-500 mb-3" />
              <h3 className="text-3xl font-bold mb-2">15,000+</h3>
              <p className="text-gray-600">Recipes Made</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Recipes</h2>
            <Link to="/recipes">
              <Button variant="ghost" className="text-orange-500">
                View All →
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.filter(c => c !== "All Recipes").map((category) => (
              <Link key={category} to={`/recipes?category=${category}`}>
                <Button variant="outline" size="lg" className="hover:bg-orange-500 hover:text-white">
                  {category}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Recipes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Most Popular</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ChefHat className="w-6 h-6 text-orange-500" />
                <span className="text-lg font-semibold">Cookbook</span>
              </div>
              <p className="text-gray-400">
                Your go-to platform for discovering and sharing amazing recipes from around the world.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/recipes" className="hover:text-white">Browse Recipes</Link></li>
                <li><Link to="/upload" className="hover:text-white">Upload Recipe</Link></li>
                <li><Link to="/profile" className="hover:text-white">My Profile</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <p className="text-gray-400">
                Join our community of cooking enthusiasts and share your culinary creations!
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Cookbook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
