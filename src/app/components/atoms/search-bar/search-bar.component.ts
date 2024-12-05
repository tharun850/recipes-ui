import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SearchBarComponent {
  searchText: string = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    if (this.searchText.length >= 3) {
      this.search.emit(this.searchText);
    }
  }
}