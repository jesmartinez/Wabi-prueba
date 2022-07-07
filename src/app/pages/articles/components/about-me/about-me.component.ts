import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnChanges {

  @Input() about = false;
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor() { }

  ngOnChanges(): void {
    this.drawer && this.about && this.drawer.open();
    this.drawer && !this.about && this.drawer.close();
  }

}
