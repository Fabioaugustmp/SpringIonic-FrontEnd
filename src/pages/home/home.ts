import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController} from 'ionic-angular/components/app/menu-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController ) { 
    
  }

 public login(){
      this.navCtrl.setRoot('CategoriesPage');
  }
}
