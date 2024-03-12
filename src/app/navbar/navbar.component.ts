import { Component } from '@angular/core';
import { NavLink } from '../../../types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})




export class NavbarComponent {
  navLinks: NavLink[] = [
    {
      title: 'Home',
      id: 'home',
      href: '/'
    },
    {
      title: 'Recipes',
      id: 'recipes',
      href: '/'
    }, {
      title: 'About Us',
      id: 'about',
      href: '/'
    }, {
      title: 'Contact Us',
      id: 'contact',
      href: '/'
    },
  ]

}
