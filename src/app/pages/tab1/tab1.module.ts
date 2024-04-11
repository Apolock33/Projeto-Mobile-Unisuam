import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { GameService } from 'src/app/services/game.service';
import { HttpClientModule } from '@angular/common/http';
import { UserinfoComponent } from 'src/app/components/userinfo/userinfo.component';
import { GameListComponent } from 'src/app/components/game-list/game-list.component';
import { GameDetailsComponent } from 'src/app/components/game-details/game-details.component';

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
    UserinfoComponent,
    GameListComponent,
    GameDetailsComponent
  ],
  providers: [GameService]
})

export class Tab1PageModule { }
