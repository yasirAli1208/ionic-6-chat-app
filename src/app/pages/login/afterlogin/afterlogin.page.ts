import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.page.html',
  styleUrls: ['./afterlogin.page.scss'],
})
export class AfterloginPage implements OnInit {
  @Input() number: any;
  constructor(
    public modalCtrl:ModalController
  ) { }

  ngOnInit() {
    console.log(this.number)
  }
}
