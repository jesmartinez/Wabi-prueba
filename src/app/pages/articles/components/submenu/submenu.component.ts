import { Component, Input, OnInit } from '@angular/core';
import { NavbarItem } from 'src/app/interfaces/navbar.interface';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent {

  @Input() item!: NavbarItem;

  constructor() { }

}
