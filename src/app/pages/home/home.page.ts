import { Component } from '@angular/core';
import { SuperTabs } from '@ionic-super-tabs/angular';
import { SuperTabsConfig } from '@ionic-super-tabs/core';
import { ChattPage } from './chatt/chatt.page';
import { StatusPage } from './status/status.page';
import { CallsPage } from './calls/calls.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  chattPage = ChattPage;
  statuspage = StatusPage;
  callsPage = CallsPage;

  opts = {
    icon: false,
    label: true,
    toolbarPos: 'top',
    scrollable: true,
  };

  config: SuperTabsConfig = {
    debug: true,
    sideMenu: 'left',
    allowElementScroll: true,
    nativeSmoothScroll: true
  };

  tabs: any[] = [];

}
