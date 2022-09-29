import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {


  constructor(private _router : Router) {

   }

  ngOnInit(): void {
  }

  onSearch(value: string) {
    console.log("Buscar ->", value);
    
    if (value && value.length > 3) {
      this._router.navigate(['/rickandmorty'], {
        queryParams: { q: value },
      });
    }
  }
}
