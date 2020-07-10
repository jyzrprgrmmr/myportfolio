import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isNavOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }


}
