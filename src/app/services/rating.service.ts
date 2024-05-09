import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Ratings } from '../models/ratings';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  public ratingIdService: string = '';
  public queryInfo = {
    route: 'rating'
  }

  constructor(private db: AngularFireDatabase, private http: HttpClient) { }

  public addRating(uid: string, ratingInfo: Ratings) {
    const postPlayedInfo = this.db.list(`${this.queryInfo.route}/${uid}`).push(ratingInfo);
    return postPlayedInfo;
  }

  public getRatingListById(uid: string) {
    return this.db.list(`${this.queryInfo.route}/${uid}`).valueChanges();
  }

  public getRatingList(query: string) {
    let getList = this.http.get(query);
    return getList;
  }
}
