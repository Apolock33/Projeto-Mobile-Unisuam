import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  apiinfo = {
    rawgUrl: "https://api.rawg.io/api",
    key: "key=206e5f4d54464a29b734f75d47d90a66",
    route: "/games"
  }

  constructor(private http: HttpClient) { }

  getGamesList(query:string) {
    let getList = this.http.get(query);
    return getList;
  }
}
