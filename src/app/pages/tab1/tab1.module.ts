import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { GameService } from 'src/app/services/game.service';
import { HttpClientModule } from '@angular/common/http';
import { GamecardComponent } from 'src/app/components/gamecard/gamecard.component';
import { UserinfoComponent } from 'src/app/components/userinfo/userinfo.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    HttpClientModule
  ],
  declarations: [
    Tab1Page,
    GamecardComponent,
    UserinfoComponent
  ],
  providers: [GameService]
})

export class Tab1PageModule { }
