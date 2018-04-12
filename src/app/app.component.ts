import { TasksServiceProvider } from '../providers/tasks-service/tasks-service';
import { SQLite } from '@ionic-native/sqlite';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  constructor(platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public sqlite: SQLite,
              public task: TasksServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    if (!this.sqlite.selfTest()) {
      this.createDB();

    }

  }

  private createDB(){
    this.sqlite.create({

      name: 'users.db',
      location: 'default'
    })
    .then((db) => {
      this.task.setDatabase(db);
      return this.task.createTable();


    })
    .then((db) => {

      console.log("Nice");

    })
    .catch(error => {

      console.log(error);
    });
  }
}

