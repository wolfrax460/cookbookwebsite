import { useState } from "react";
import { Link } from "react-router";
import { Header } from "../components/Header";
import { RecipeCard } from "../components/RecipeCard";
import { mockUsers, mockRecipes } from "../data/mockData";
import { Edit2, Trash2, Bookmark, Mail, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";

export function UserProfilePage() {
  const currentUser = mockUsers[0];
  const [isEditing, setIsEditing] = useState(false);
  const [recipeToDelete, setRecipeToDelete] = useState<number | null>(null);

  const uploadedRecipes = mockRecipes.filter((r) =>
    currentUser.uploadedRecipes.includes(r.id)
  );
  const favoriteRecipes = mockRecipes.filter((r) =>
    currentUser.favoriteRecipes.includes(r.id)
  );

  const handleDeleteRecipe = (recipeId: number) => {
    console.log("Delete recipe:", recipeId);
    setRecipeToDelete(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn={true} currentUser={{ name: currentUser.name, id: currentUser.id }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Avatar className="w-32 h-32">
                <AvatarImage src={currentUser.avatar} />
                <AvatarFallback className="text-3xl">
                  {currentUser.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{currentUser.name}</h1>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <Mail className="w-4 h-4" />
                      <span>{currentUser.email}</span>
                    </div>
                  </div>
                  <Button onClick={() => setIsEditing(!isEditing)} variant="outline">
                    <Edit2 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                <p className="text-gray-700 mb-4">{currentUser.bio}</p>

                <div className="flex gap-6 text-sm">
                  <div>
                    <span className="font-bold text-2xl text-orange-500">2.7M</span>
                    <p className="text-gray-600">Followers</p>
                  </div>
                  <div>
                    <span className="font-bold text-2xl text-orange-500">
                      {currentUser.uploadedRecipes.length}
                    </span>
                    <p className="text-gray-600">Recipes</p>
                  </div>
                  <div>
                    <span className="font-bold text-2xl text-orange-500">
                      {currentUser.favoriteRecipes.length}
                    </span>
                    <p className="text-gray-600">Favorites</p>
                  </div>
                  
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs defaultValue="uploaded" className="w-full">
          <TabsList className="grid w-full md:w-auto grid-cols-2 mb-8">
            <TabsTrigger value="uploaded">My Recipes ({uploadedRecipes.length})</TabsTrigger>
            <TabsTrigger value="favorites">Favorites ({favoriteRecipes.length})</TabsTrigger>
          </TabsList>

          {/* Uploaded Recipes Tab */}
          <TabsContent value="uploaded">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Uploaded Recipes</h2>
              <Link to="/upload">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Upload New Recipe
                </Button>
              </Link>
            </div>

            {uploadedRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uploadedRecipes.map((recipe) => (
                  <div key={recipe.id} className="relative group">
                    <RecipeCard recipe={recipe} />
                    <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link to={`/recipe/${recipe.id}/edit`}>
                        <Button size="sm" variant="secondary" className="shadow-lg">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="sm"
                            variant="destructive"
                            className="shadow-lg"
                            onClick={() => setRecipeToDelete(recipe.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Delete Recipe</DialogTitle>
                            <DialogDescription>
                              Are you sure you want to delete "{recipe.name}"? This action cannot be undone.
                            </DialogDescription>
                          </DialogHeader>
                          <DialogFooter>
                            <Button variant="outline" onClick={() => setRecipeToDelete(null)}>
                              Cancel
                            </Button>
                            <Button
                              variant="destructive"
                              onClick={() => handleDeleteRecipe(recipe.id)}
                            >
                              Delete
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-lg text-gray-600 mb-4">
                    You haven't uploaded any recipes yet
                  </p>
                  <Link to="/upload">
                    <Button className="bg-orange-500 hover:bg-orange-600">
                      Upload Your First Recipe
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          {/* Favorite Recipes Tab */}
          <TabsContent value="favorites">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">My Favorite Recipes</h2>
              <p className="text-gray-600">Recipes you've bookmarked for later</p>
            </div>

            {favoriteRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteRecipes.map((recipe) => (
                  <div key={recipe.id} className="relative group">
                    <RecipeCard recipe={recipe} />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="shadow-lg"
                      >
                        <Bookmark className="w-4 h-4 fill-current" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Bookmark className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-lg text-gray-600 mb-4">
                    You haven't favorited any recipes yet
                  </p>
                  <Link to="/recipes">
                    <Button variant="outline">Browse Recipes</Button>
                  </Link>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
