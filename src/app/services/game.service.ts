import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public title: string = '';
  public gamesList: any;
  public singleGameObject: any;
  public queryResponse: any;
  public gameIdService: string = '';

  apiinfo = {
    rawgUrl: "https://api.rawg.io/api",
    key: "key=f1e048d2a7fc4457b70b28f7f3cd5b64",
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
