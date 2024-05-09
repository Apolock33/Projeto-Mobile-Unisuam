import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { Tab3PageRoutingModule } from './tab3-routing.module';
import { PlayedService } from '../../services/played.service';
import { GamePlayedComponent } from 'src/app/components/game-played/game-played.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule
  ],
  declarations: [
    Tab3Page,
    GamePlayedComponent
  ],
  providers: [PlayedService]
})
export class Tab3PageModule { }
