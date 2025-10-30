import { Component, OnInit } from '@angular/core';
import { MoviesTsService } from '../data/movies.ts.service'; 
import { PopularmoviesTsService } from '../data/popularmovies.ts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trendingMovies: any[] = [];
  theatreMovies: any[] = [];
  popularMovies: any[] = [];
  allMovies: any[] = [];

  constructor(
  private movieService: MoviesTsService,
  private popularMoviesService: PopularmoviesTsService,
  private router: Router
) {}


  ngOnInit(): void {
    this.trendingMovies = this.movieService.getTrendingMovies();
    this.popularMovies = this.popularMoviesService.getPopularMovies();
    this.allMovies = [...this.trendingMovies, ...this.popularMovies];
  }



goToMovie(type: string, id: string) {
  console.log('Routing to movie:', type, id);
  this.router.navigate(['movie', type, id]);
}
}