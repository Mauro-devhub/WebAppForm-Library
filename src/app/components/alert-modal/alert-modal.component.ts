import { Component, OnInit } from '@angular/core';
import { inject } from "@angular/core";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent  implements OnInit {

  private modalCtrl = inject(ModalController);
  text: any;

  constructor() { }

  ngOnInit() {}

  ionViewWillEnter() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
