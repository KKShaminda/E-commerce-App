import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen = false;
cartProducts: any;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (this.isMenuOpen) {
        navbar.classList.add('active');
      } else {
        navbar.classList.remove('active');
      }
    }
  }
}
