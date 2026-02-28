export interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  cookingTime: string;
  category: string;
  cuisine: string;
  rating: number;
  reviewCount: number;
  ingredients: string[];
  instructions: string[];
  uploadedBy: string;
  uploadedById: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  uploadedRecipes: number[];
  favoriteRecipes: number[];
}

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    name: "Classic Pasta Carbonara",
    description: "Traditional Italian pasta with creamy egg sauce, pancetta, and parmesan",
    image: "https://images.unsplash.com/photo-1627207644206-a2040d60ecad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGNhcmJvbmFyYSUyMGRpc2h8ZW58MXx8fHwxNzcxOTYwNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cookingTime: "25 mins",
    category: "Main Course",
    cuisine: "Italian",
    rating: 4.8,
    reviewCount: 145,
    ingredients: [
      "400g spaghetti",
      "200g pancetta or guanciale",
      "4 large eggs",
      "100g Parmesan cheese, grated",
      "2 cloves garlic",
      "Salt and black pepper to taste",
      "Fresh parsley for garnish"
    ],
    instructions: [
      "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
      "While pasta cooks, dice the pancetta and fry in a large pan until crispy.",
      "In a bowl, whisk together eggs, grated Parmesan, salt, and plenty of black pepper.",
      "Drain the pasta, reserving 1 cup of pasta water.",
      "Remove the pan from heat and add the hot pasta to the pancetta.",
      "Quickly pour in the egg mixture, tossing constantly. Add pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra Parmesan and black pepper."
    ],
    uploadedBy: "Mugisha Is'haq",
    uploadedById: 1
  },
  {
    id: 2,
    name: "Decadent Chocolate Cake",
    description: "Rich, moist chocolate cake with velvety chocolate frosting",
    image: "https://images.unsplash.com/photo-1607257882338-70f7dd2ae344?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydHxlbnwxfHx8fDE3NzE5NTQ5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cookingTime: "60 mins",
    category: "Dessert",
    cuisine: "American",
    rating: 4.9,
    reviewCount: 203,
    ingredients: [
      "2 cups all-purpose flour",
      "2 cups sugar",
      "3/4 cup cocoa powder",
      "2 tsp baking soda",
      "1 tsp salt",
      "2 eggs",
      "1 cup buttermilk",
      "1 cup vegetable oil",
      "1 cup hot coffee",
      "For frosting: 200g chocolate, 1 cup heavy cream"
    ],
    instructions: [
      "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
      "In a large bowl, mix together flour, sugar, cocoa, baking soda, and salt.",
      "Add eggs, buttermilk, and oil. Beat on medium speed for 2 minutes.",
      "Stir in hot coffee (batter will be thin).",
      "Pour batter evenly into prepared pans.",
      "Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.",
      "Cool completely before frosting with chocolate ganache."
    ],
    uploadedBy: "John Baker",
    uploadedById: 2
  },
  {
    id: 3,
    name: "Fresh Caesar Salad",
    description: "Crisp romaine lettuce with homemade Caesar dressing and croutons",
    image: "https://images.unsplash.com/photo-1574926054530-540288c8e678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWVzYXIlMjBzYWxhZCUyMGJvd2x8ZW58MXx8fHwxNzcyMDM2NDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cookingTime: "15 mins",
    category: "Salad",
    cuisine: "American",
    rating: 4.6,
    reviewCount: 89,
    ingredients: [
      "1 large head romaine lettuce",
      "1/2 cup Caesar dressing",
      "1 cup croutons",
      "1/2 cup shaved Parmesan",
      "2 cloves garlic",
      "2 anchovy fillets",
      "Lemon juice",
      "Black pepper"
    ],
    instructions: [
      "Wash and dry romaine lettuce, then tear into bite-sized pieces.",
      "For dressing: blend garlic, anchovies, lemon juice, and seasonings.",
      "Add mayonnaise and Parmesan to dressing, mix well.",
      "Toss lettuce with dressing until evenly coated.",
      "Top with croutons and extra Parmesan shavings.",
      "Serve immediately for maximum crispness."
    ],
    uploadedBy: "Sarah Johnson",
    uploadedById: 3
  },
  {
    id: 4,
    name: "Grilled Lemon Herb Chicken",
    description: "Juicy grilled chicken breasts marinated in lemon and fresh herbs",
    image: "https://images.unsplash.com/photo-1564636242997-77953084df48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMHBsYXRlfGVufDF8fHx8MTc3MTkxMzkxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cookingTime: "30 mins",
    category: "Main Course",
    cuisine: "Mediterranean",
    rating: 4.7,
    reviewCount: 167,
    ingredients: [
      "4 chicken breasts",
      "1/4 cup olive oil",
      "Juice of 2 lemons",
      "4 cloves garlic, minced",
      "2 tbsp fresh rosemary",
      "2 tbsp fresh thyme",
      "Salt and pepper to taste"
    ],
    instructions: [
      "In a bowl, combine olive oil, lemon juice, garlic, herbs, salt, and pepper.",
      "Add chicken breasts and marinate for at least 30 minutes.",
      "Preheat grill to medium-high heat.",
      "Remove chicken from marinade and place on grill.",
      "Grill for 6-7 minutes per side until internal temperature reaches 165°F.",
      "Let rest for 5 minutes before serving.",
      "Garnish with fresh lemon slices and herbs."
    ],
    uploadedBy: "Mugisha Is'haq",
    uploadedById: 1
  },
  {
    id: 5,
    name: "Colorful Vegetable Stir-Fry",
    description: "Quick and healthy stir-fried vegetables with savory Asian sauce",
    image: "https://images.unsplash.com/photo-1464500650248-1a4b45debb9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBzdGlyJTIwZnJ5fGVufDF8fHx8MTc3MTk3MDA4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cookingTime: "20 mins",
    category: "Main Course",
    cuisine: "Asian",
    rating: 4.5,
    reviewCount: 112,
    ingredients: [
      "2 cups broccoli florets",
      "1 red bell pepper, sliced",
      "1 yellow bell pepper, sliced",
      "2 carrots, julienned",
      "3 tbsp soy sauce",
      "2 tbsp sesame oil",
      "2 cloves garlic",
      "1 tbsp ginger, grated",
      "Sesame seeds for garnish"
    ],
    instructions: [
      "Heat sesame oil in a large wok or skillet over high heat.",
      "Add garlic and ginger, stir-fry for 30 seconds.",
      "Add carrots and broccoli, stir-fry for 3 minutes.",
      "Add bell peppers and continue cooking for 2 minutes.",
      "Pour in soy sauce and toss to coat vegetables.",
      "Cook until vegetables are tender-crisp.",
      "Garnish with sesame seeds and serve over rice."
    ],
    uploadedBy: "David Chen",
    uploadedById: 4
  },
  {
    id: 6,
    name: "Homemade Margherita Pizza",
    description: "Authentic Italian pizza with fresh mozzarella, basil, and tomato sauce",
    image: "https://images.unsplash.com/photo-1734774421809-48eac182a5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHBpenphfGVufDF8fHx8MTc3MTk2OTIxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cookingTime: "45 mins",
    category: "Main Course",
    cuisine: "Italian",
    rating: 4.9,
    reviewCount: 234,
    ingredients: [
      "Pizza dough (store-bought or homemade)",
      "1 cup tomato sauce",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tbsp olive oil",
      "2 cloves garlic",
      "Salt to taste",
      "Parmesan cheese (optional)"
    ],
    instructions: [
      "Preheat oven to 475°F (245°C) with pizza stone if available.",
      "Roll out pizza dough on a floured surface to desired thickness.",
      "Spread tomato sauce evenly over dough, leaving a border for crust.",
      "Tear mozzarella into pieces and distribute over sauce.",
      "Drizzle with olive oil and season with salt.",
      "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
      "Top with fresh basil leaves immediately after removing from oven."
    ],
    uploadedBy: "Mugisha Is'haq",
    uploadedById: 1
  },
  {
    id: 7,
    name: "Fresh Sushi Rolls",
    description: "Homemade sushi rolls with fresh fish, avocado, and cucumber",
    image: "https://images.unsplash.com/photo-1707556294605-fd32496554e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMHJvbGxzJTIwcGxhdHRlcnxlbnwxfHx8fDE3NzIwMjQxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cookingTime: "40 mins",
    category: "Main Course",
    cuisine: "Japanese",
    rating: 4.7,
    reviewCount: 98,
    ingredients: [
      "2 cups sushi rice",
      "4 nori sheets",
      "200g sashimi-grade salmon or tuna",
      "1 avocado, sliced",
      "1 cucumber, julienned",
      "Rice vinegar",
      "Soy sauce for serving",
      "Wasabi and pickled ginger"
    ],
    instructions: [
      "Cook sushi rice according to package directions and season with rice vinegar.",
      "Place nori sheet on bamboo rolling mat, shiny side down.",
      "Spread a thin layer of rice over nori, leaving 1 inch at top.",
      "Arrange fish, avocado, and cucumber in a line across center of rice.",
      "Using the mat, roll tightly from bottom, applying gentle pressure.",
      "Seal edge with a bit of water.",
      "Slice roll into 6-8 pieces with a sharp, wet knife.",
      "Serve with soy sauce, wasabi, and pickled ginger."
    ],
    uploadedBy: "David Chen",
    uploadedById: 4
  },
  {
    id: 8,
    name: "Spicy Beef Tacos",
    description: "Flavorful seasoned beef tacos with fresh toppings and salsa",
    image: "https://images.unsplash.com/photo-1599488400918-5f5f96b3f463?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwdGFjb3MlMjBtZXhpY2FufGVufDF8fHx8MTc3MjAyODU2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cookingTime: "25 mins",
    category: "Main Course",
    cuisine: "Mexican",
    rating: 4.8,
    reviewCount: 176,
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 cloves garlic",
      "2 tbsp taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheese",
      "Sour cream and salsa"
    ],
    instructions: [
      "Heat a large skillet over medium-high heat.",
      "Cook ground beef until browned, breaking it up as it cooks.",
      "Add diced onion and garlic, cook until softened.",
      "Stir in taco seasoning and 1/4 cup water.",
      "Simmer for 5 minutes until sauce thickens.",
      "Warm taco shells according to package directions.",
      "Fill shells with meat mixture and desired toppings.",
      "Serve with salsa and sour cream on the side."
    ],
    uploadedBy: "Carlos Rodriguez",
    uploadedById: 5
  },
  {
    id: 9,
    name: "Fluffy Buttermilk Pancakes",
    description: "Light and fluffy pancakes perfect for weekend breakfast",
    image: "https://images.unsplash.com/photo-1668507740203-0654d38b6201?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5jYWtlcyUyMGJyZWFrZmFzdCUyMHN0YWNrfGVufDF8fHx8MTc3MjAwODc4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cookingTime: "20 mins",
    category: "Breakfast",
    cuisine: "American",
    rating: 4.9,
    reviewCount: 267,
    ingredients: [
      "2 cups all-purpose flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "2 cups buttermilk",
      "2 eggs",
      "1/4 cup melted butter",
      "Maple syrup for serving"
    ],
    instructions: [
      "In a large bowl, whisk together flour, sugar, baking powder, baking soda, and salt.",
      "In another bowl, whisk buttermilk, eggs, and melted butter.",
      "Pour wet ingredients into dry ingredients and stir until just combined (lumps are okay).",
      "Heat a griddle or non-stick pan over medium heat.",
      "Pour 1/4 cup batter for each pancake onto griddle.",
      "Cook until bubbles form on surface, then flip and cook until golden.",
      "Serve warm with butter and maple syrup."
    ],
    uploadedBy: "John Baker",
    uploadedById: 2
  },
  {
    id: 10,
    name: "Creamy Tomato Soup",
    description: "Rich and creamy tomato soup perfect for cold days",
    image: "https://images.unsplash.com/photo-1692776407523-8f3c4678ad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b21hdG8lMjBzb3VwJTIwYm93bHxlbnwxfHx8fDE3NzE5NjUzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cookingTime: "35 mins",
    category: "Soup",
    cuisine: "American",
    rating: 4.6,
    reviewCount: 134,
    ingredients: [
      "2 cans crushed tomatoes",
      "1 onion, diced",
      "4 cloves garlic",
      "2 cups vegetable broth",
      "1 cup heavy cream",
      "2 tbsp olive oil",
      "Fresh basil",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Heat olive oil in a large pot over medium heat.",
      "Sauté onion until translucent, then add garlic.",
      "Add crushed tomatoes and vegetable broth.",
      "Bring to a boil, then reduce heat and simmer for 20 minutes.",
      "Use an immersion blender to puree soup until smooth.",
      "Stir in heavy cream and fresh basil.",
      "Season with salt and pepper to taste.",
      "Serve hot with crusty bread or grilled cheese."
    ],
    uploadedBy: "Sarah Johnson",
    uploadedById: 3
  },
  {
    id: 11,
    name: "Classic Cheeseburger",
    description: "Juicy beef burger with melted cheese, lettuce, tomato, and special sauce",
    image: "https://images.unsplash.com/photo-1651843465180-5965076f7368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBmcmllcyUyMG1lYWx8ZW58MXx8fHwxNzcyMDAzMDI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cookingTime: "20 mins",
    category: "Main Course",
    cuisine: "American",
    rating: 4.8,
    reviewCount: 189,
    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Onion slices",
      "Pickles",
      "Special sauce (mayo, ketchup, mustard)",
      "Salt and pepper"
    ],
    instructions: [
      "Divide ground beef into 4 equal portions and form into patties.",
      "Season both sides generously with salt and pepper.",
      "Heat a grill or skillet to high heat.",
      "Cook burgers for 3-4 minutes per side for medium.",
      "Add cheese slices in last minute of cooking to melt.",
      "Toast burger buns on the grill.",
      "Spread special sauce on buns, then assemble with burger and toppings.",
      "Serve immediately with fries."
    ],
    uploadedBy: "John Baker",
    uploadedById: 2
  },
  {
    id: 12,
    name: "Authentic Pad Thai",
    description: "Traditional Thai stir-fried noodles with shrimp, peanuts, and tangy sauce",
    image: "https://images.unsplash.com/photo-1757845301698-da07924946a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWQlMjB0aGFpJTIwbm9vZGxlc3xlbnwxfHx8fDE3NzIwMTgxMTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cookingTime: "30 mins",
    category: "Main Course",
    cuisine: "Thai",
    rating: 4.7,
    reviewCount: 156,
    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tbsp fish sauce",
      "2 tbsp tamarind paste",
      "2 tbsp brown sugar",
      "Bean sprouts",
      "Green onions",
      "Crushed peanuts",
      "Lime wedges"
    ],
    instructions: [
      "Soak rice noodles in warm water for 20 minutes, then drain.",
      "In a small bowl, mix fish sauce, tamarind paste, and brown sugar.",
      "Heat oil in a wok over high heat.",
      "Add shrimp and cook until pink, then push to side of wok.",
      "Crack eggs into wok and scramble.",
      "Add noodles and sauce, toss to combine.",
      "Add bean sprouts and green onions, stir-fry for 2 minutes.",
      "Serve topped with crushed peanuts and lime wedges."
    ],
    uploadedBy: "David Chen",
    uploadedById: 4
  }
];

export const mockUsers: User[] = [
  {
    id: 1,
    name: "Mugisha Is'haq",
    email: "mugishaishaq8@email.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    bio: "Italian chef passionate about traditional recipes and modern twists",
    uploadedRecipes: [1, 4, 6],
    favoriteRecipes: [2, 5, 8, 9]
  },
  {
    id: 2,
    name: "John Baker",
    email: "john.baker@email.com",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    bio: "Professional baker and dessert enthusiast",
    uploadedRecipes: [2, 9, 11],
    favoriteRecipes: [1, 3, 6, 12]
  },
  {
    id: 3,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    bio: "Health-conscious cook sharing nutritious and delicious meals",
    uploadedRecipes: [3, 10],
    favoriteRecipes: [4, 5, 7]
  },
  {
    id: 4,
    name: "David Chen",
    email: "david.chen@email.com",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    bio: "Asian cuisine expert with a love for fusion cooking",
    uploadedRecipes: [5, 7, 12],
    favoriteRecipes: [1, 6, 8, 10]
  },
  {
    id: 5,
    name: "Carlos Rodriguez",
    email: "carlos.rodriguez@email.com",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    bio: "Mexican food lover bringing authentic flavors to your kitchen",
    uploadedRecipes: [8],
    favoriteRecipes: [2, 4, 9, 11]
  }
];

export const categories = [
  "All Recipes",
  "Breakfast",
  "Main Course",
  "Dessert",
  "Salad",
  "Soup"
];

export const cuisines = [
  "All Cuisines",
  "Italian",
  "American",
  "Asian",
  "Mexican",
  "Mediterranean",
  "Japanese",
  "Thai"
];
