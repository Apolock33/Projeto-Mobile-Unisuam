import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  public gameId: string = '';
  public gameDetails: any;
  public starRating: any;
  public imgList: Array<string> = [];

  constructor(public gameService: GameService, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.loadGameDetails();
  }

  public loadGameDetails() {
    this.gameId = this.gameService.gameIdService;
    this.gameService.getGameDetails(this.gameService.apiinfo.rawgUrl + this.gameService.apiinfo.route + `/${this.gameId}` + "?" + this.gameService.apiinfo.key).subscribe((obj: any): Object => {
      this.gameDetails = obj;
      console.log(this.gameDetails);
      this.loadImgList();
      return this.gameDetails;
    })
  }

  public loadImgList() {
    this.gameId = this.gameService.gameIdService;
    this.gameService.getGameScreenshots(this.gameService.apiinfo.rawgUrl + this.gameService.apiinfo.route + `/${this.gameId}` + '/screenshots' + "?" + this.gameService.apiinfo.key).subscribe((scs: any) => {
      let queryResult = scs;
      for (let imgObj of queryResult.results) {
        this.imgList.push(imgObj.image);
      }
      console.log(this.imgList);
    })
  }

  public ratingStar(rating: number): Array<number> {
    return this.starRating = new Array(rating);
  }

  public dismiss() {
    this.modalCtrl.dismiss();
  }
}
