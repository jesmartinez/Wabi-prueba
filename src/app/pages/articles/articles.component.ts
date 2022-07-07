import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarItem } from 'src/app/interfaces/navbar.interface';
import { UiDataService } from 'src/app/services/ui-data.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnDestroy {

  menuItems: NavbarItem[] = [];
  uiSubscription: Subscription;
  about = false;

  constructor( private uiDataService: UiDataService) {
    this.uiSubscription = uiDataService.getUINavbarData()
      .subscribe( items => { this.menuItems = items })
  }

  ngOnDestroy(): void {
    this.uiSubscription.unsubscribe()
  }

}
