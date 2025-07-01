import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Home } from './home/home';
import { NotFound } from './not-found/not-found';

@Component({
  selector: 'app-root',
  imports: [NotFound,RouterOutlet,RouterLinkActive,RouterLink,Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'comps';
}
