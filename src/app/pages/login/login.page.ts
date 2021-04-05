import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AfterloginPage } from './afterlogin/afterlogin.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async presentModal(number) {
    const modal = await this.modalController.create({
      component: AfterloginPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'number': number,
      }
    });
    return await modal.present();
  }

}
