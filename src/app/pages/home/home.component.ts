import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RecipeGridComponent } from '../../components/organisms/recipe-grid/recipe-grid.component';
import { SearchBarComponent } from '../../components/atoms/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RecipeGridComponent, SearchBarComponent],
})
export class HomeComponent implements OnInit{
  recipes: any[] = [];

  constructor(private apiService: ApiService) {
    
  }

  ngOnInit(): void {
    this.loadInitialData();
  }

  public loadInitialData() {
    this.apiService.getAllRecipes().subscribe(data => {
      console.log("hiii")
      this.recipes = data;
    }, error => {
      console.error(error);
  });
  }

  onSearch(searchText: string) {
    if (searchText.length >= 3) {
      this.apiService.searchRecipes(searchText).subscribe(data => {
        this.recipes = data;
      });
    }
  }
}