import { Component } from '@angular/core';
import { Divider } from '../../shared/divider/divider';
import { Statistics } from '../statistics/statistics';
import { ItemList } from '../item-list/item-list';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.html',
  imports: [Divider,Statistics,ItemList],
  styleUrl: './views-home.css',
})
export class ViewsHome {
  stats = [
    {
      value: 22,
      label: '# of users',
    },
    {
      value: 900,
      label: 'Revenue',
    },
    {
      value: 50,
      label: 'Reviews',
    },
  ];

  items=[
    {
      image: 'assets/images/couch.jpeg',
      title:'couch',
      description: 'Great couch'
    },
    {
      image: 'assets/images/dresser.jpeg',
      title:'dresser',  
      description: 'Great dresser'
    },
  ]
}

type Stats = {
  value: number;
  label: string;
};
type Items ={
  image:string,
  title:string,
  description:string
}
