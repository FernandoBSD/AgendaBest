import { AlertController } from 'ionic-angular/umd';
import { NavParams } from 'ionic-angular/es2015';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {


  }



 /*  printData(){

    let temporal = this.navParams.get('data');

    let alert = this.alertCtrl.create({
      title: 'Master Data',
      subTitle:  temporal  ,
      buttons: ['Dismiss']
    });
    alert.present();

  } */

}
