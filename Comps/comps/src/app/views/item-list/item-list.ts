import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-list',
  imports: [CommonModule],
  templateUrl: './item-list.html',
  styleUrl: './item-list.css'
})
export class ItemList {

  @Input()
  items :{image:string, title: string, description:string}[]=[];
}
