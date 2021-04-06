import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../providers/general.service';
import { HttpService } from '../../providers/http.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  number;
  constructor(
    private router: Router,
    public general: GeneralService,
    public http: HttpService,
  ) { }

  ngOnInit() {
  }

  async presentModal(number) {
    // this.router.navigate(['/login/afterlogin'], { relativeTo: number });
    this.signUp(number,'','')
  }

  signUp(user_no, user_name, picture){
    let signupObj = {
      user_no: user_no,
      user_name: user_name,
      picture: picture
    };

    this.http.postApi(this.http.api.signup, signupObj, true).then((res:any)=>{
      if(res.status == true){
        this.general.presentToast(res.message);
      }
      else{
        this.general.presentToast(res.message);
      }
    })
  }


}
