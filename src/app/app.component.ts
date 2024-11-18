import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

interface NavItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
animations: [
    trigger('navAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-50%)' }),
          stagger(80, [
            animate('300ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class AppComponent {
  navItems: NavItem[] = [
    { label: 'Home', route: '/home', icon: 'home' },
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Profile', route: '/profile', icon: 'person' },
  ];

  sidenavMode: 'side' | 'over' = window.innerWidth > 768 ? 'side' : 'over';
  sidenavOpened = window.innerWidth > 768;

  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onResize(): void {
    this.sidenavMode = window.innerWidth > 768 ? 'side' : 'over';
    this.sidenavOpened = window.innerWidth > 768;
  }
}