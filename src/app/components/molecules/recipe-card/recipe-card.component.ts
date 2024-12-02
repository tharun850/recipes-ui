import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css'],
  standalone: true,
  imports: [NgFor]
})
export class RecipeCardComponent {
  @Input() recipe: any;
}