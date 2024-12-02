
import { RecipeModel } from './recipe-model';
import { Recipe } from "./recipe";

describe('RecipeModel', () => {
  const mockRecipeData: Recipe = {
    id: 1,
    name: 'Test Recipe',
    ingredients: ['ingredient1'],
    instructions: ['instruction1'],
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    servings: 4,
    difficulty: 'Easy',
    cuisine: 'Italian',
    caloriesPerServing: 300,
    tags: ['tag1'],
    userId: 1,
    image: 'test.jpg',
    rating: 4.5,
    reviewCount: 10,
    mealType: ['Dinner']
  };

  it('should create an instance', () => {
    expect(new RecipeModel(mockRecipeData)).toBeTruthy();
  });

  it('should set all properties correctly', () => {
    const model = new RecipeModel(mockRecipeData);
    expect(model.id).toBe(mockRecipeData.id);
    expect(model.name).toBe(mockRecipeData.name);
    expect(model.ingredients).toEqual(mockRecipeData.ingredients);
    expect(model.instructions).toEqual(mockRecipeData.instructions);
    expect(model.prepTimeMinutes).toBe(mockRecipeData.prepTimeMinutes);
    expect(model.cookTimeMinutes).toBe(mockRecipeData.cookTimeMinutes);
    expect(model.servings).toBe(mockRecipeData.servings);
    expect(model.difficulty).toBe(mockRecipeData.difficulty);
    expect(model.cuisine).toBe(mockRecipeData.cuisine);
    expect(model.caloriesPerServing).toBe(mockRecipeData.caloriesPerServing);
    expect(model.tags).toEqual(mockRecipeData.tags);
    expect(model.userId).toBe(mockRecipeData.userId);
    expect(model.image).toBe(mockRecipeData.image);
    expect(model.rating).toBe(mockRecipeData.rating);
    expect(model.reviewCount).toBe(mockRecipeData.reviewCount);
    expect(model.mealType).toEqual(mockRecipeData.mealType);
  });
});