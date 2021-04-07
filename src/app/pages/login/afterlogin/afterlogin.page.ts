import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../../providers/general.service';
import { HttpService } from '../../../providers/http.service';
@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.page.html',
  styleUrls: ['./afterlogin.page.scss'],
})
export class AfterloginPage implements OnInit {
  currentNo = this.router.routerState.snapshot.url.split(';')[1].split('=')[1];
  constructor(
    private router: Router,
    public general: GeneralService,
    public http: HttpService,
  ) { }

  ngOnInit() {
    console.log()
  }

  updateUser(name,picture,birth){
    console.log(this.currentNo,name,picture,birth)
    // return
    let signupObj = {
      user_no: this.currentNo,
      user_name:name,
      picture:picture,
      birthdate:birth
    };

    this.http.postApi(this.http.api.userupdate, signupObj, true).then((res:any)=>{
      if(res.status == true){
        // this.general.presentToast(res.message);
        this.router.navigate(['./home'])
      }
      else{
        this.general.presentToast(res.message);
      }
    })
  }

}
