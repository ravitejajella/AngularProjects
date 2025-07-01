import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  imports: [CommonModule],
  templateUrl: './divider.html',
  styleUrl: './divider.css'
})
export class Divider {

    @Input() title =  '';


}
