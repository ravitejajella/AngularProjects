import { CommonModule, JsonPipe } from '@angular/common';
import { Component,  Input } from '@angular/core';
import { Data } from '@angular/router';
@Component({
  selector: 'app-table',
  imports: [CommonModule, JsonPipe],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  
  @Input()
  className='';
  @Input()
  data: Person[] = [];
  @Input()
  headers: { key: keyof Person; label: string }[] = [];
}
type Person = { name: string; age: number; job: string };
