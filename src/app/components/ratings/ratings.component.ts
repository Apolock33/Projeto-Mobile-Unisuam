import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Ratings } from 'src/app/models/ratings';
import { GameService } from 'src/app/services/game.service';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss'],
})
export class RatingsComponent implements OnInit {
  public gameId: string = '';
  public gameDetails: any;
  public ratingText: string = '';

  constructor(
    private modalCtrl: ModalController,
    private gameService: GameService,
    private ratingService: RatingService
  ) { }

  ngOnInit() {
    console.log(this.gameService.gameIdService);
    this.loadGameDetails();
  }

  public loadGameDetails() {
    this.gameId = `${sessionStorage.getItem('gameId')}`;
    this.gameService.getGameDetails(this.gameService.apiinfo.rawgUrl + this.gameService.apiinfo.route + `/${this.gameId}` + "?" + this.gameService.apiinfo.key).subscribe((obj: any) => {
      this.gameDetails = obj;
      console.log(this.gameDetails);
      return this.gameDetails;
    })
  }

  public newRating() {
    let ratingInfo: Ratings = {
      gameId: this.gameId,
      comment: this.ratingText,
      likes: 0,
      dislikes: 0
    }

    this.ratingService.addRating(`${sessionStorage.getItem('uid')}`, ratingInfo)
      .then(rating => {
        console.log(rating);
        this.modalCtrl.dismiss();
      });
  }

  public dismiss() {
    this.modalCtrl.dismiss();
  }
}
