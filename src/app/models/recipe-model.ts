import { Recipe } from "./recipe";

export class RecipeModel implements Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];

  constructor(data: Recipe) {
    this.id = data.id;
    this.name = data.name;
    this.ingredients = data.ingredients;
    this.instructions = data.instructions;
    this.prepTimeMinutes = data.prepTimeMinutes;
    this.cookTimeMinutes = data.cookTimeMinutes;
    this.servings = data.servings;
    this.difficulty = data.difficulty;
    this.cuisine = data.cuisine;
    this.caloriesPerServing = data.caloriesPerServing;
    this.tags = data.tags;
    this.userId = data.userId;
    this.image = data.image;
    this.rating = data.rating;
    this.reviewCount = data.reviewCount;
    this.mealType = data.mealType;
  }
}