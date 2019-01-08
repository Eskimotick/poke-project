import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentRoute: string;

  constructor(private router: Router) { 
    this.currentRoute = '';
  }

  ngOnInit() {
    this.router.events.subscribe(() => { 
      this.currentRoute = this.router.url.split('?')[0];
    });
  }

}
