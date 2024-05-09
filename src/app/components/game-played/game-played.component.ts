import { Component, OnInit } from '@angular/core';
import { PlayedService } from 'src/app/services/played.service';
import { GameDetailsComponent } from '../game-details/game-details.component';
import { GameService } from 'src/app/services/game.service';
import { ModalController } from '@ionic/angular';
import { RatingService } from 'src/app/services/rating.service';
import { RatingsComponent } from '../ratings/ratings.component';

@Component({
  selector: 'app-game-played',
  templateUrl: './game-played.component.html',
  styleUrls: ['./game-played.component.scss'],
})
export class GamePlayedComponent implements OnInit {
  public gamePlayedList: any = [];
  public starRating: any;

  constructor(
    private playedService: PlayedService,
    public modalCtrl: ModalController,
    private gameService: GameService,
    private ratingService: RatingService
  ) { }

  ngOnInit() {
    this.loadPlayedGameList();
  }

  public loadPlayedGameList() {
    this.playedService.getPlayedById(`${sessionStorage.getItem('uid')}`).subscribe((playedList: any) => {
      console.log(playedList);
      for (let item of playedList) {
        this.gameService.getGameDetails(this.gameService.apiinfo.rawgUrl + this.gameService.apiinfo.route + `/${String(item.gameId)}?` + this.gameService.apiinfo.key).subscribe(result => {
          this.gamePlayedList.push(result);
          console.log(this.gamePlayedList);
        })
      }
    });
  }

  public async createReview(id:string) {
    sessionStorage.setItem('gameId', id);
    const modal = await this.modalCtrl.create({
      component: RatingsComponent,
    });
    await modal.present();
  }
  public async openGameDetails(id: string) {
    this.gameService.gameIdService = id;
    const modal = await this.modalCtrl.create({
      component: GameDetailsComponent,
    });
    await modal.present();
  }

  public ratingStar(rating: number): Array<number> {
    return this.starRating = new Array(rating);
  }
}
