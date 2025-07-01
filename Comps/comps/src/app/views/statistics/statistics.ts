import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Divider } from '../../shared/divider/divider';

@Component({
  selector: 'app-statistics',
  imports: [CommonModule,Divider],
  templateUrl: './statistics.html',
  styleUrl: './statistics.css'
})
export class Statistics {

  @Input()
  data:{value:number, label:string}[] =[];
}
