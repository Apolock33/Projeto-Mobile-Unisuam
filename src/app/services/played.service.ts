import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { Played } from '../models/played';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { child } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class PlayedService {
  public queryInfo = {
    route: 'played'
  }

  constructor(private db: AngularFireDatabase, private http: HttpClient) { }

  public addPlayed(uid: string, playedInfo: Played) {
    const postPlayedInfo = this.db.list(`${this.queryInfo.route}/${uid}`).push(playedInfo);
    return postPlayedInfo;
  }

  public getPlayedById(uid: string) {
    return this.db.list(`${this.queryInfo.route}/${uid}`).valueChanges();
  }
}
