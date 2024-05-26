import { Component, OnInit } from '@angular/core';
import { RatingService } from 'src/app/services/rating.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss'],
})
export class RatingListComponent implements OnInit {
  public ratingList: any;
  public uid: string = `${sessionStorage.getItem('uid')}`;

  constructor(private ratingServices: RatingService) { }

  ngOnInit() {
    this.loadMyRatingList();
  }

  public loadMyRatingList() {
    this.ratingServices.getRatingListById(environment.firebaseConfig.databaseURL + this.ratingServices.queryInfo.route + `/${this.uid}`).subscribe((ratings: any) => {
      console.log(ratings);
      this.ratingList = ratings;
    });
  }
}
