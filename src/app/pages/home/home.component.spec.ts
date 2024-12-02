import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ApiService } from '../../services/api.service';
import { of } from 'rxjs';
import { RecipeGridComponent } from '../../components/organisms/recipe-grid/recipe-grid.component';
import { SearchBarComponent } from '../../components/atoms/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let apiService: jasmine.SpyObj<ApiService>;
  

  const mockRecipes = [
    {
      id: 1,
      name: 'Recipe 1',
      ingredients: ['ingredient1'],
      instructions: ['instruction1'],
      prepTimeMinutes: 15,
      cookTimeMinutes: 30,
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
    }
  ];

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ApiService', ['getAllRecipes', 'searchRecipes']);
    spy.getAllRecipes.and.returnValue(of(mockRecipes));
    spy.searchRecipes.and.returnValue(of(mockRecipes));

    await TestBed.configureTestingModule({
      imports: [CommonModule, HomeComponent, RecipeGridComponent, SearchBarComponent],
      providers: [
        { provide: ApiService, useValue: spy},
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load initial data', fakeAsync(() => {
    component.loadInitialData();
    tick();
    expect(apiService.getAllRecipes).toHaveBeenCalled();
    expect(component.recipes).toEqual(mockRecipes);
  }));

  it('should search recipes when search event is triggered', fakeAsync(() => {
    const searchText = 'Recipe 1';
    component.onSearch(searchText);
    tick();
    expect(apiService.searchRecipes).toHaveBeenCalledWith(searchText);
    expect(component.recipes).toEqual(mockRecipes);
  }));
});