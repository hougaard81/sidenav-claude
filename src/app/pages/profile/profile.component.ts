import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';

interface ActivityItem {
  type: string;
  description: string;
  date: string;
  icon: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  activities: ActivityItem[] = [
    { type: 'info', description: 'Account created', date: '2024-03-15', icon: 'account_circle' },
    { type: 'success', description: 'Subscription renewed', date: '2024-03-14', icon: 'payment' },
    { type: 'warning', description: 'Payment failed', date: '2024-03-14', icon: 'payment' },
    { type: 'info', description: 'Account created', date: '2024-03-13', icon: 'account_circle' },
    { type: 'success', description: 'Subscription renewed', date: '2024-03-13', icon: 'payment' }
  ];

  tabs = ['Overview', 'Activity', 'Settings'];
  selectedTab = 'Overview';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

}
