import { Component, Input, OnInit  } from '@angular/core';
import { Times } from '../times';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-placeholder',
  imports: [Times,NgIf],
  templateUrl: './placeholder.html',
  styleUrl: './placeholder.css'
})
export class Placeholder implements OnInit{
  @Input() header:boolean = true;

  @Input() lines= 4;

  ngOnInit(): void {
    
  }
  constructor(){
    
  }

}
