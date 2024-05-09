import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public title: string = '';
  public gamesList: any;
  public singleGameObject: any;
  public queryResponse: any;
  public gameIdService: string = '';

  public apiinfo = {
    rawgUrl: 'https://api.rawg.io/api',
    key: "key=376154a9e22642348b84a6a6df73fd04",
    route: "/games"
  }

  constructor(private http: HttpClient) { }

  public getGamesList(query: string) {
    let getList = this.http.get(query);
    this.gamesList = getList;
    return getList;
  }

  public filterGames(query: string, filter: string) {
    let getList = this.http.get(query + filter);
    this.gamesList = getList;
    return getList;
  }

  public getGameDetails(query: string) {
    let getDetails = this.http.get(query);
    this.singleGameObject = getDetails;
    return getDetails;
  }

  public getGameScreenshots(query: string) {
    let getImgs = this.http.get(query);
    this.singleGameObject = getImgs;
    return getImgs;
  }
}
