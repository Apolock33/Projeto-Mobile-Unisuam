import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  public email: string = '';
  public password: string = '';
  public name: string = '';
  public nickname: string = '';
  public gender: number = 0;
  public cellphone: string = '';
  public confirmPassword: string = '';
  public message: string = '';
  public isPassword: boolean = true;
  public isConfirmPassword: boolean = true;

  constructor(
    private usersService: UsersService,
    private router: Router,
    private toastController: ToastController,
    private userService: UsersService
  ) { }

  public createUser() {
    let objectToPost: User = {
      name: this.name,
      email: this.email,
      nickname: this.nickname,
      gender: this.gender,
      cellphone: this.cellphone,
    }

    this.usersService.insertUserOnAuth(this.email, this.password)
      .then(res => {
        console.log(res);
        
        this.userService.registerUserInfoOnDatabase(`${res.user?.uid}`, objectToPost)
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err);
          });

        this.router.navigate(['/tabs']);
      })
      .catch(err => {
        console.log(err);
      });
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

  public showConfirmPassword() {
    const input = document.getElementById('confirmPassword');
    if (this.isConfirmPassword) {
      input?.setAttribute('type', 'text')
      this.isConfirmPassword = false;
    } else {
      input?.setAttribute('type', 'password');
      this.isConfirmPassword = true;
    }
  }

  handleChangeGender(ev: any) {
    this.gender = ev.target.value;
  }
}
