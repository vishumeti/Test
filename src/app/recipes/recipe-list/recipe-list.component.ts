import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Upma", "South Indian Food", "https://www.recipefy.com/media/W1siZiIsIjIwMTgvMDEvMzAvMDhfMjlfMzRfMzJfVXBwdW1hLmpwZyJdLFsicCIsImF1dG9fb3JpZW50Il0sWyJwIiwidGh1bWIiLCIxMDAweDIwMDA%2BIl0sWyJlIiwianBnIl1d/Uppuma.jpg"),
    new Recipe("Upma", "South Indian Food", "https://www.recipefy.com/media/W1siZiIsIjIwMTgvMDEvMzAvMDhfMjlfMzRfMzJfVXBwdW1hLmpwZyJdLFsicCIsImF1dG9fb3JpZW50Il0sWyJwIiwidGh1bWIiLCIxMDAweDIwMDA%2BIl0sWyJlIiwianBnIl1d/Uppuma.jpg"),
    new Recipe("Upma", "South Indian Food", "https://www.recipefy.com/media/W1siZiIsIjIwMTgvMDEvMzAvMDhfMjlfMzRfMzJfVXBwdW1hLmpwZyJdLFsicCIsImF1dG9fb3JpZW50Il0sWyJwIiwidGh1bWIiLCIxMDAweDIwMDA%2BIl0sWyJlIiwianBnIl1d/Uppuma.jpg"),
    new Recipe("Upma", "South Indian Food", "https://www.recipefy.com/media/W1siZiIsIjIwMTgvMDEvMzAvMDhfMjlfMzRfMzJfVXBwdW1hLmpwZyJdLFsicCIsImF1dG9fb3JpZW50Il0sWyJwIiwidGh1bWIiLCIxMDAweDIwMDA%2BIl0sWyJlIiwianBnIl1d/Uppuma.jpg"),
    new Recipe("Upma", "South Indian Food", "https://www.recipefy.com/media/W1siZiIsIjIwMTgvMDEvMzAvMDhfMjlfMzRfMzJfVXBwdW1hLmpwZyJdLFsicCIsImF1dG9fb3JpZW50Il0sWyJwIiwidGh1bWIiLCIxMDAweDIwMDA%2BIl0sWyJlIiwianBnIl1d/Uppuma.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
