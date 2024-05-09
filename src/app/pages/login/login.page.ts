import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string = '';
  public password: string = '';
  public isPassword: boolean = true;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit() { }

  public login() {
    const login = this.usersService.fireBaseLogin(this.email, this.password)
      .then((res: any) => {
        
        if (res.user._delegate.accessToken != null) {
          this.router.navigate(['/tabs']);
        }

        sessionStorage.setItem('uid', res.user.uid);
      })
      .catch((err: any) => {
        console.log(err.data);
      });

    return login;
  }

  public showPassword() {
    const input = document.getElementById('password');
    if (this.isPassword) {
      input?.setAttribute('type', 'text')
      this.isPassword = false;
    } else {
      input?.setAttribute('type', 'password');
      this.isPassword = true;
    }
  }
}
