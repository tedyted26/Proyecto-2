import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.scss']
})
export class MenuAdminComponent implements OnInit {

  constructor() { }
  displayConfig = false;
  displayEstad = true;
  displayInfo = false;
  ngOnInit(): void {
  }


}
