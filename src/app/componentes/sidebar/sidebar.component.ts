import { Component, OnInit } from '@angular/core';
import { SIDEBAR } from 'src/app/modelos/mock-sidebar';
import { Sidebar } from 'src/app/modelos/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebar = SIDEBAR;

  constructor() { }

  ngOnInit(): void {
   
  }
}
