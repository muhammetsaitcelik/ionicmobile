import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 userEmail: string;
  public items:any;
  public data;
  
  ngOnInit(){
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    })

  }
 
constructor(public navCtrl : NavController, public http: HttpClient, private router :Router, private authService: AuthService){
  let dataPush:any[];
 this.data=this.http.get('https://api.npoint.io/0e769837333098d0ef57').subscribe(result => {this.items=result

 console.log(result)
});
}
goToRealdata(){
this.router.navigateByUrl('realdata');
}

}



