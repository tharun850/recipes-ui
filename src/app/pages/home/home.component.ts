import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RecipeGridComponent } from '../../components/organisms/recipe-grid/recipe-grid.component';
import { SearchBarComponent } from '../../components/atoms/search-bar/search-bar.component';
import { LoadingPageComponent } from '../../components/atoms/loading-page/loading-page.component'; 
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, RecipeGridComponent, SearchBarComponent, LoadingPageComponent],
})
export class HomeComponent implements OnInit {
  recipes: any[] = [];
  isLoading = true;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData() {
    this.apiService.getAllRecipes().subscribe(
      data => {
        this.recipes = data;
        this.isLoading = false;
      },
      error => {
        console.error(error);
        this.isLoading = false;
        this.router.navigate(['/error']);
      }
    );
  }

  onSearch(searchText: string) {
    if (searchText.length >= 3) {
      this.isLoading = true;
      this.apiService.searchRecipes(searchText).subscribe(
        data => {
          this.recipes = data;
          this.isLoading = false;
        },
        error => {
          console.error(error);
          this.isLoading = false;
          this.router.navigate(['/error']);
        }
      );
    }
  }
}