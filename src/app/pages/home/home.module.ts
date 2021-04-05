import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SuperTabsModule } from '@ionic-super-tabs/angular';
import { ChattPageModule } from './chatt/chatt.module';
import { StatusPageModule } from './status/status.module';
import { CallsPageModule } from './calls/calls.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SuperTabsModule,
    ChattPageModule,
    StatusPageModule,
    CallsPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
