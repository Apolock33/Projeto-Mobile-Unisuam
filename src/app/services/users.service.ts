import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private ngFire: AngularFireAuth, private db: AngularFireDatabase) { }

  public fireBaseLogin(email: string, password: string) {
    return this.ngFire.signInWithEmailAndPassword(email, password);
  }

  public insertUserOnAuth(email: string, password: string) {
    return this.ngFire.createUserWithEmailAndPassword(email, password);
  }

  public registerUserInfoOnDatabase(uId: string, userInfo: User) {
    const postUserInfo = this.db.object(`/users/${uId}`).set(userInfo);
    return postUserInfo;
  }

  public getUserData(uid: string): Observable<any> {
    return this.db.object(`/users/${uid}`).valueChanges();
  }

  public terminateSession(){
    let logout = this.ngFire.signOut();
    sessionStorage.clear();
    return logout;
  }
}
