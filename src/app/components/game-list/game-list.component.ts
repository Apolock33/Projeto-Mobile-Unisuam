import { Component, OnChanges, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, ModalController } from '@ionic/angular';
import { GameService } from 'src/app/services/game.service';
import { GameDetailsComponent } from '../game-details/game-details.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit, OnChanges {
  public loading: boolean = false;
  public actualPage: number = 1;
  public gamesList: any;
  public starRating: any;
  public showCardContent: boolean = false;
  public title: string = '';
  public filter: string = '';
  public platforms: Array<string> = [];
  public openCloseModal: boolean = false;

  constructor(private gameService: GameService, public modalCtrl: ModalController) { }

  public ngOnChanges(): void {
    this.loadGamesList();
  }

  public ngOnInit(): void {
    this.loadGamesList();
  }

  public onIonInfinite(ev: Event) {
    this.loadMoreGamesList()
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 1000);
  }

  public loadGamesList() {
    this.loading = true;
    if (this.filter.length == 0) {
      this.gameService.getGamesList(this.gameService.apiinfo.rawgUrl + this.gameService.apiinfo.route + "?" + this.gameService.apiinfo.key + "&page=" + this.actualPage).subscribe(item => {
        console.log(item);
        this.gameService.gamesList = item;
        this.gamesList = this.gameService.gamesList.results;
        this.gameService.title = "Mais Vistos!";
        this.title = this.gameService.title;
      });

      return this.gamesList;
    }
    else {
      this.gameService.filterGames(this.gameService.apiinfo.rawgUrl + this.gameService.apiinfo.route + "?" + this.gameService.apiinfo.key + "&page=" + this.actualPage, `&search=${this.filter}`).subscribe(item => {
        this.gameService.gamesList = item;
        this.gamesList = this.gameService.gamesList.results;
        this.gameService.title = "'" + this.filter + "'";
        this.title = this.gameService.title;
      });
    }
  }

  public loadMoreGamesList(): GameService {
    this.actualPage++;
    if (this.filter.length == 0) {
      this.gameService.getGamesList(this.gameService.apiinfo.rawgUrl + this.gameService.apiinfo.route + "?" + this.gameService.apiinfo.key + "&page=" + this.actualPage).subscribe(item => {
        this.gameService.queryResponse = item;
        let addResultsToList = this.gameService.queryResponse.results;
        addResultsToList.forEach((element: any) => {
          this.gamesList.push(element);
        });
      });
    }
    else {
      this.gameService.filterGames(this.gameService.apiinfo.rawgUrl + this.gameService.apiinfo.route + "?" + this.gameService.apiinfo.key + "&page=" + this.actualPage, `&search=${this.filter}`).subscribe(item => {
        this.gameService.queryResponse = item;
        let addResultsToList = this.gameService.queryResponse.results;
        addResultsToList.forEach((element: any) => {
          this.gamesList.push(element);
        });
      });
    }
    console.log(this.gamesList);
    return this.gamesList;
  }

  public ratingStar(rating: number): Array<number> {
    return this.starRating = new Array(rating);
  }

  public async openGameDetails(id: string) {
    this.gameService.gameIdService = id;
    const modal = await this.modalCtrl.create({
      component: GameDetailsComponent,
    });
    await modal.present();
  }
}
