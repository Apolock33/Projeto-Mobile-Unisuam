import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss'],
})
export class UserinfoComponent implements OnInit {
  public name: string = '';
  public email: string = '';
  public gender: string = '';
  public nickname: string = '';
  public cellphone: string = '';

  constructor(private usersService: UsersService,private router: Router) { }

  ngOnInit() {
    this.retrieveUserInfo(sessionStorage.getItem('uid'));
  }

  public retrieveUserInfo(id: any) {
    this.usersService.getUserData(id).subscribe(data => {
      sessionStorage.setItem('name', data.name);
      sessionStorage.setItem('email', data.email);
      sessionStorage.setItem('gender', data.gender);
      sessionStorage.setItem('nickname', data.nickname);
      sessionStorage.setItem('cellphone', data.cellphone);

      this.name = data.name;
      this.email = data.email;
      this.gender = data.gender;
      this.nickname = data.nickname;
      this.cellphone = data.cellphone;
    });
  }

  public logout() {
    this.usersService.terminateSession()
    .then(() => {
       this.router.navigate(['/']);
    })
    .catch((err) => {
       console.log(err.data);
     });
  }
}
