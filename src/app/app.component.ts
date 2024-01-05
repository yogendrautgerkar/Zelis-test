import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'my-app';
  items: menu[] = [
    new menu('Item 1', false),
    new menu('Item 2', false),
    new menu('Item 3', false),
    new menu('Item 4', false),
    new menu('Item 5', false),
  ];
  selectmenu($event:any, menu:menu) {
    // prevent menu from closing
    $event.stopPropagation();
    $event.preventDefault();
    // toggle selected state on clicked menu
    menu.selected = !menu.selected;
    if ($event.target) {
      $event.target.classList.toggle('hello');
    }
  }
}
export class menu {
  constructor(public name: string, public selected: boolean) {}
}
