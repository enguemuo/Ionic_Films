import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { RestService } from '../../app/rest.service';
import { FormControl } from '@angular/forms';
import { DetailPage } from '../detail/detail.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  movies: any;
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;
  detail: DetailPage;
  mvdet: any;

  constructor(
    private router: Router,
    private restService: RestService,
    private toastCtrl: ToastController) {
    this.searchControl = new FormControl();
  }

  navigateToDetails(item) {
    this.router.navigate(['/detail', { movieName: item }]);
    //this.router.navigateByUrl('/detail');
  }

  setFilteredMovies(ev) {
    this.searching = true;
    this.restService.getMovies(ev.target.value)
      .then(data => {
        this.movies = data;
        this.searching = false;
        console.log(this.movies);
      });
  }
}
