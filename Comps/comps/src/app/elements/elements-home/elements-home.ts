import { Component } from '@angular/core';
import { Placeholder } from '../placeholder/placeholder';
import { Divider } from '../../shared/divider/divider';
import { Segment } from '../segment/segment';
@Component({
  selector: 'app-elements-home',
  templateUrl: './elements-home.html',
  imports:[Placeholder,Divider,Segment],
  styleUrl: './elements-home.css'
})
export class ElementsHome {

}
