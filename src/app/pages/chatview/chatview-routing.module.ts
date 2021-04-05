import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatviewPage } from './chatview.page';

const routes: Routes = [
  {
    path: '',
    component: ChatviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatviewPageRoutingModule {}
