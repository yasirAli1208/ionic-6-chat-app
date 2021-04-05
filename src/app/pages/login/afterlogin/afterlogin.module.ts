import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AfterloginPageRoutingModule } from './afterlogin-routing.module';

import { AfterloginPage } from './afterlogin.page';
import { HomePageModule } from '../../home/home.module';
import { HomePage } from '../../home/home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AfterloginPageRoutingModule,
    HomePageModule
  ],
  declarations: [AfterloginPage,HomePage]
})
export class AfterloginPageModule {}
