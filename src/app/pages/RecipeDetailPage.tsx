import { useState } from "react";
import { useParams, Link } from "react-router";
import { Header } from "../components/Header";
import { mockRecipes, mockUsers } from "../data/mockData";
import { Clock, Star, User, Bookmark, Share2, ChevronLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Separator } from "../components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";

export function RecipeDetailPage() {
  const { id } = useParams();
  const recipe = mockRecipes.find((r) => r.id === Number(id));
  const [isFavorited, setIsFavorited] = useState(false);
  const [userRating, setUserRating] = useState(0);

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Recipe Not Found</h1>
          <Link to="/recipes">
            <Button>Browse All Recipes</Button>
          </Link>
        </div>
      </div>
    );
  }

  const author = mockUsers.find((u) => u.id === recipe.uploadedById);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} currentUser={{ name: "Maria Rossi", id: 1 }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="/recipes">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Recipes
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Recipe Header */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-2">{recipe.name}</h1>
                    <p className="text-lg text-gray-600">{recipe.description}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setIsFavorited(!isFavorited)}
                      className={isFavorited ? "text-red-500 border-red-500" : ""}
                    >
                      <Bookmark className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <span className="font-semibold">{recipe.cookingTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-orange-500 fill-current" />
                    <span className="font-semibold">{recipe.rating}</span>
                    <span className="text-gray-600">({recipe.reviewCount} reviews)</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    {recipe.category}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {recipe.cuisine}
                  </span>
                </div>
              </div>
            </div>

            {/* Ingredients */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-orange-500 mt-1">•</span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Instructions */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Instructions</h2>
                <ol className="space-y-4">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </span>
                      <p className="flex-1 pt-1">{instruction}</p>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">Ratings & Reviews</h2>
                
                {/* Add Your Rating */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold mb-2">Rate this recipe:</p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setUserRating(star)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= userRating
                              ? "text-orange-500 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Sample Reviews */}
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">Jane Doe</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 text-orange-500 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">2 days ago</p>
                      <p>Absolutely delicious! This recipe turned out perfect. My family loved it!</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Avatar>
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop" />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">Mike Smith</span>
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="w-4 h-4 text-orange-500 fill-current" />
                          ))}
                          <Star className="w-4 h-4 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">1 week ago</p>
                      <p>Great recipe! Easy to follow instructions. Will definitely make again.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Recipe Author */}
            <Card className="mb-6 sticky top-24">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Recipe by</h3>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={author?.avatar} />
                    <AvatarFallback>
                      <User className="w-6 h-6" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{recipe.uploadedBy}</p>
                    <p className="text-sm text-gray-600">{author?.uploadedRecipes.length} recipes</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">{author?.bio}</p>
                <Link to="/profile">
                  <Button variant="outline" className="w-full">
                    View Profile
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
