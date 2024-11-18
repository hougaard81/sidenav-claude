import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  features: Feature[] = [
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing workflows and tools.',
      icon: 'integration_instructions'
    },
    {
      title: 'Secure Platform',
      description: 'Enterprise-grade security for your peace of mind.',
      icon: 'security'
    },
    {
      title: 'Analytics',
      description: 'Powerful insights to make informed decisions.',
      icon: 'analytics'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our dedicated team.',
      icon: 'support_agent'
    }
  ];
}