import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeCardComponent } from './recipe-card.component';
import { By } from '@angular/platform-browser';

describe('RecipeCardComponent', () => {
  let component: RecipeCardComponent;
  let fixture: ComponentFixture<RecipeCardComponent>;

  const mockRecipe = {
    id: 1,
    name: 'Test Recipe',
    cookTimeMinutes: 30,
    prepTimeMinutes: 15,
    difficulty: 'Easy',
    servings: 4,
    rating: 4.5,
    reviewCount: 100,
    cuisine: 'Italian',
    mealType: ['Dinner'],
    caloriesPerServing: 300,
    image: 'test-image.jpg',
    ingredients: ['ingredient1', 'ingredient2'],
    instructions: ['step1', 'step2'],
    tags: ['tag1', 'tag2']
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeCardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardComponent);
    component = fixture.componentInstance;
    component.recipe = mockRecipe;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display recipe name', () => {
    const element = fixture.nativeElement;
    const name = element.querySelector('h3');
    expect(name.textContent).toContain('Test Recipe');
  });

  it('should display cooking time', () => {
    const element = fixture.nativeElement;
    const cookTime = element.querySelector('.recipe-meta span:first-child');
    expect(cookTime.textContent).toContain('30m');
  });

  it('should display prep time', () => {
    const element = fixture.nativeElement;
    const prepTime = element.querySelector('.recipe-meta span:last-child');
    expect(prepTime.textContent).toContain('15m');
  });

  it('should display difficulty and servings', () => {
    const element = fixture.nativeElement;
    const difficulty = element.querySelector('.difficulty');
    const servings = element.querySelector('.servings');
    expect(difficulty.textContent).toContain('Easy');
    expect(servings.textContent).toContain('4');
  });

  it('should display rating and review count', () => {
    const element = fixture.nativeElement;
    const rating = element.querySelector('.recipe-rating');
    expect(rating.textContent).toContain('4.5');
    expect(rating.textContent).toContain('100');
  });

  it('should display cuisine and meal type', () => {
    const element = fixture.nativeElement;
    const cuisine = element.querySelector('.cuisine');
    const mealType = element.querySelector('.meal-type');
    expect(cuisine.textContent).toContain('Italian');
    expect(mealType.textContent).toContain('Dinner');
  });

  it('should use fallback image when image URL is not provided', () => {
    component.recipe = { ...mockRecipe, image: null };
    fixture.detectChanges();
    const element = fixture.nativeElement;
    const img = element.querySelector('.recipe-image');
    expect(img.src).toContain('assets/placeholder-recipe.jpg');
  });

  // it('should show recipe details on hover', () => {
  //   const element = fixture.nativeElement;
  //   const card = element.querySelector('.recipe-card');
  //   const details = element.querySelector('.recipe-details');

  //   // Simulate hover
  //   card.dispatchEvent(new Event('mouseenter'));
  //   fixture.detectChanges();

  //   expect(window.getComputedStyle(details).opacity).toBe('1');
  // });
});