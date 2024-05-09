import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Tab4PageRoutingModule } from './tab4-routing.module';
import { Tab4Page } from './tab4.page';
import { RatingsComponent } from 'src/app/components/ratings/ratings.component';
import { RatingService } from 'src/app/services/rating.service';
import { RatingListComponent } from 'src/app/components/rating-list/rating-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4PageRoutingModule
  ],
  declarations: [
    Tab4Page,
    RatingListComponent,
    RatingsComponent
    ],
  providers: [
    RatingService
  ]
})
export class Tab4PageModule { }
