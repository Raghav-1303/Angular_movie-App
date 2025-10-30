import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopularmoviesTsService {

  popularMovies = [
    { name: "THE ASSEST", rating: 4, image:"https://picsum.photos/200/300?random=6" },
    { name: "ELIXIR", rating: 3.5, image:"https://picsum.photos/200/300?random=7" },
    { name: "DIPLOMAT", rating: 2.7, image: "https://picsum.photos/200/300?random=8" },
    { name: "INSIDE MAN", rating: 4.2, image: "https://picsum.photos/200/300?random=9" },
    { name: "BOOTS", rating: 3.6, image: "https://picsum.photos/200/300?random=10" },
  ];

  constructor() { }


  getPopularMovies(){
    return this.popularMovies;
}
}
