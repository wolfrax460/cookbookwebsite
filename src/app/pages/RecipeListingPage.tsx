import { useState } from "react";
import { Header } from "../components/Header";
import { RecipeCard } from "../components/RecipeCard";
import { mockRecipes, categories, cuisines } from "../data/mockData";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { SlidersHorizontal } from "lucide-react";

export function RecipeListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Recipes");
  const [selectedCuisine, setSelectedCuisine] = useState("All Cuisines");
  const [sortBy, setSortBy] = useState("popularity");

  // Filter recipes
  let filteredRecipes = mockRecipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All Recipes" || recipe.category === selectedCategory;
    const matchesCuisine = selectedCuisine === "All Cuisines" || recipe.cuisine === selectedCuisine;
    
    return matchesSearch && matchesCategory && matchesCuisine;
  });

  // Sort recipes
  filteredRecipes = [...filteredRecipes].sort((a, b) => {
    if (sortBy === "popularity") {
      return b.reviewCount - a.reviewCount;
    } else if (sortBy === "rating") {
      return b.rating - a.rating;
    } else if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={setSearchQuery} isLoggedIn={true} currentUser={{ name: "Maria Rossi", id: 1 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">All Recipes</h1>
          <p className="text-gray-600">
            Discover {filteredRecipes.length} delicious recipes from our community
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold">Filter & Sort</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Cuisine Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cuisine
              </label>
              <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {cuisines.map((cuisine) => (
                    <SelectItem key={cuisine} value={cuisine}>
                      {cuisine}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popularity">Popularity</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Results Count */}
            <div className="flex items-end">
              <div className="text-sm text-gray-600">
                Showing <span className="font-semibold text-orange-600">{filteredRecipes.length}</span> recipes
              </div>
            </div>
          </div>
        </div>

        {/* Recipe Grid */}
        {filteredRecipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">No recipes found matching your criteria</p>
            <p className="text-gray-500">Try adjusting your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
}
