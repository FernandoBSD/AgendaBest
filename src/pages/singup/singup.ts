import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasksServiceProvider } from '../../providers/tasks-service/tasks-service';
import { HomePage } from '../home/home';



/**
 * Generated class for the SingupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-singup',
  templateUrl: 'singup.html',
})
export class SingupPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public task: TasksServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingupPage');
  }

  /* registerUser(data){
    data.completed  = false;
    this.task.create(data)
    .then(response =>{
      console.log("Succesfull Register Master..");
      this.navCtrl.push(HomePage, {data: true});

    })
    .catch(error =>{
      console.log(error);
    });
  } */

}
