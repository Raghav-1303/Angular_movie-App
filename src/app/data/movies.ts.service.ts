import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesTsService {

  trendingMovies = [
    { name: "Avengers", rating: 4.89, image:"assets/images/Avengers.jpg" },
    { name: "We Can Do It", rating: 3, image:"assets/images/movie-14.jpg" },
    { name: "The Dark Knight", rating: 2.0, image: "https://picsum.photos/200/300?random=3" },
    { name: "Avatar", rating: 3.8, image: "assets/images/movie-13.jpg" },
    { name: "The Matrix", rating: 4.7, image: "https://picsum.photos/200/300?random=5" },
  ];


  constructor() { }

  getTrendingMovies(){
    return this.trendingMovies;
  }
}
