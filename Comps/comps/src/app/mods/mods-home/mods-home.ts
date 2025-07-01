import { Component, ElementRef } from '@angular/core';
import { Divider } from '../../shared/divider/divider';
import { Modal } from '../modal/modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mods-home',
  imports: [Divider, Modal,CommonModule],
  templateUrl: './mods-home.html',
  styleUrl: './mods-home.css'
})
export class ModsHome {

  modalOpen=false;
  onClick(){
    this.modalOpen=!this.modalOpen;
  }
}
