import { Clock, Star } from "lucide-react";
import { Link } from "react-router";
import { Recipe } from "../data/mockData";
import { Card, CardContent } from "./ui/card";

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
        <div className="aspect-video w-full overflow-hidden bg-gray-100">
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{recipe.name}</h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{recipe.description}</p>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{recipe.cookingTime}</span>
            </div>
            <div className="flex items-center gap-1 text-orange-500">
              <Star className="w-4 h-4 fill-current" />
              <span>{recipe.rating}</span>
              <span className="text-gray-500">({recipe.reviewCount})</span>
            </div>
          </div>
          <div className="mt-3 flex gap-2">
            <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">
              {recipe.category}
            </span>
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
              {recipe.cuisine}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
