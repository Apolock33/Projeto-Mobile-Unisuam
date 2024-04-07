import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-gamecard',
  templateUrl: './gamecard.component.html',
  styleUrls: ['./gamecard.component.scss']
})
export class GamecardComponent implements OnInit {
  public loading: boolean = false;
  public actualPage: number = 1;
  public queryResponse: any;
  public gamesList: any;
  public starRating: any;
  public showCardContent: boolean = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.loadGamesList();
  }

  loadGamesList() {
    this.gameService.getGamesList(this.gameService.apiinfo.rawgUrl + this.gameService.apiinfo.route + "?" + this.gameService.apiinfo.key + "&page=" + this.actualPage)
      .subscribe((item) => {
        this.queryResponse = item;
        this.gamesList = this.queryResponse.results;
      });

    this.loading = false;

    return this.gamesList;
  }

  userReachedBottom() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.offsetHeight;
    return scrollPosition >= documentHeight;
  }

  loadMoreGamesList(): GameService {
    this.actualPage++
    this.gameService.getGamesList(this.gameService.apiinfo.rawgUrl + this.gameService.apiinfo.route + "?" + this.gameService.apiinfo.key + "&page=" + this.actualPage).subscribe(item => {
      this.queryResponse = item;

      let addResultsToList = this.queryResponse.results;

      addResultsToList.forEach((element: any) => {
        this.gamesList.push(element);
      });
    });
    console.log(this.gamesList);
    return this.gamesList;
  }

  ratingStar(rating: number): Array<number> {
    return this.starRating = new Array(rating);
  }

  moreLessInfo(id: string) {
    let card = document.getElementById(`${id}`);
    if (card) {
      (this.showCardContent) ? this.showCardContent = true : this.showCardContent = false;
    }
  }
}
