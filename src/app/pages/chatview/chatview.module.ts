import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatviewPageRoutingModule } from './chatview-routing.module';

import { ChatviewPage } from './chatview.page';
import {AutosizeModule} from 'ngx-autosize';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatviewPageRoutingModule,
    AutosizeModule
  ],
  declarations: [ChatviewPage]
})
export class ChatviewPageModule {}
