import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MockData, NavbarItem } from '../interfaces/navbar.interface';
import { remove, clone } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UiDataService {

  private mockNavbarData: MockData[] = [
    {
      "name": "Bebidas",
      "id": 1,
      "parentId": null
    }, {
      "name": "Comidas",
      "id": 2,
      "parentId": null
    }, {
      "name": "Limpieza",
      "id": 3,
      "parentId": null
    }, {
      "name": "Gaseosas",
      "id": 100,
      "parentId": 1
    }, {
      "name": "Con Alcohol",
      "id": 1010,
      "parentId": 100
    }, {
      "name": "Sin Alcohol",
      "id": 1009,
      "parentId": 100
    }, {
      "name": "Con Azúcar",
      "id": 101,
      "parentId": 1009
    }, {
      "name": "Sin Azucar",
      "id": 103,
      "parentId": 1009
    }, {
      "name": "Jugos",
      "id": 189,
      "parentId": 103
    }, {
      "name": "Energizantes",
      "id": 1222,
      "parentId": 103
    }, {
      "name": "Fruta",
      "id": 1223,
      "parentId": 1222
    }, {
      "name": "Sin grasa",
      "id": 12231231,
      "parentId": 1223
    }
  ]

  private navbarItems: BehaviorSubject<NavbarItem[]>;

  constructor() {
    // To simulate server response
    this.navbarItems = new BehaviorSubject( this.getParents( {list: clone(this.mockNavbarData)} ) );
  }

  getUINavbarData(): BehaviorSubject<NavbarItem[]> {
    return this.navbarItems;
  }

  private getParents(response: {list: MockData[]}): NavbarItem[] {
    const parents = remove( response.list, item => item.parentId === null ) // Get all main parents and remove it from array
    return this.getChildren(parents.map( ( {id, name} ) => ({id, name, submenu: [] }) ), clone(response.list) ) // Transform in NavbarItem and get children
  }

  private getChildren(parents: NavbarItem[], navbarData: MockData[]): NavbarItem[]{
    parents.forEach((parent) =>{
      parent.submenu = this.getChildren( // If it has children it is execute recursively
        remove(navbarData, (item)=> item.parentId == parent.id // Get the items and remove them from the array
      ).map( ( {id, name} ) => ({id, name, submenu: []}) ), navbarData) // Transform in NavbarItem
    })
    return parents; // Return the transformed array
  }
}
