import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  film: string = 'Movie details';
  movieName: any;
  movieDetails: any;

  constructor(private route: ActivatedRoute, private restService: RestService) {
    this.movieName = this.route.snapshot.paramMap.get('movieName');
    this.restService.getMovieDetails(this.movieName)
      .then(data => {
        this.movieDetails = data;
      });
  }

  ngOnInit() {
  }

}
