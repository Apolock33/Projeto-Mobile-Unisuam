import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  public title: string = '';
  public gamesList: any;
  public queryResponse: any;
  public isModalOpen: boolean = false;

  apiinfo = {
    rawgUrl: "https://api.rawg.io/api",
    key: "key=206e5f4d54464a29b734f75d47d90a66",
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
}
