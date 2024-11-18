import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

interface MetricCard {
  title: string;
  value: string;
  change: string;
  icon: string;
  color: string;
}

interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  metrics: MetricCard[] = [
    { title: 'Total Revenue', value: '$54,230', change: '+8.3% from last month', icon: 'trending_up', color: 'primary' },
    { title: 'Active Users', value: '2,420', change: '+12% from last week', icon: 'group', color: 'success' },
    { title: 'Pending Tasks', value: '15', change: '-3 from yesterday', icon: 'assignment', color: 'warning' },
    { title: 'System Health', value: '98.9%', change: 'All systems operational', icon: 'health_and_safety', color: 'info' }
  ];

  transactions: Transaction[] = [
    { id: 1, date: '2024-03-15', description: 'Project Payment', amount: 1250.00, status: 'Completed' },
    { id: 2, date: '2024-03-14', description: 'Server Costs', amount: -380.50, status: 'Completed' },
    { id: 3, date: '2024-03-14', description: 'New Subscription', amount: 79.99, status: 'Pending' },
    { id: 4, date: '2024-03-13', description: 'Refund Process', amount: -150.00, status: 'Failed' },
    { id: 5, date: '2024-03-13', description: 'Consulting Fee', amount: 850.00, status: 'Completed' }
  ];

  displayedColumns: string[] = ['date', 'description', 'amount', 'status'];
}
