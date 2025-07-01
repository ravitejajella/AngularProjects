import { Component, OnInit } from '@angular/core';
import { Divider } from '../../shared/divider/divider';
import { Table } from '../table/table';
import { Companies } from '../companies/companies';
import { Biography } from '../biography/biography';
import { Partners } from '../partners/partners';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-collection-home',
  imports: [Divider, Table, Companies,Biography,Partners,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './collection-home.html',
  styleUrl: './collection-home.css',
})

export class CollectionHome implements OnInit {

  person : {name: string, age:number, job: string}[] = [
    { name: 'raviteje', age: 27, job: 'Software Developer' },
    { name: 'Prathima', age: 27, job: 'Business Developer' },
    { name: 'Mahesh', age: 25, job: 'Construction' },
  ];
  headers : { key: keyof Person ; label: string } []= [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

  ngOnInit(): void {
    
  }
  constructor(){

  }

}

type Person = { name: string; age: number; job: string };
