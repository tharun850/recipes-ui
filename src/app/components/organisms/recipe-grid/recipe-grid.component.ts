import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RecipeCardComponent } from '../../molecules/recipe-card/recipe-card.component';

@Component({
  selector: 'app-recipe-grid',
  templateUrl: './recipe-grid.component.html',
  styleUrls: ['./recipe-grid.component.css'],
  standalone: true,
  imports: [NgFor, RecipeCardComponent]
})
export class RecipeGridComponent {
  @Input() recipes: any[] = [];
  sortOrder: string = 'asc';

  sortRecipes() {
    this.recipes.sort((a, b) => {
      const totalTimeA = a.prepTimeMinutes + a.cookTimeMinutes;
      const totalTimeB = b.prepTimeMinutes + b.cookTimeMinutes;
      return this.sortOrder === 'asc' 
        ? totalTimeA - totalTimeB 
        : totalTimeB - totalTimeA;
    });
  }

  filterRecipes(tag: string) {
    this.recipes = this.recipes.filter(recipe => recipe.tags.includes(tag));
  }

  toggleSort() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortRecipes();
  }
}