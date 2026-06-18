import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

interface Project {
  title: string; desc: string; tags: string[];
  emoji: string; color: string; colorRgb: string;
  type: string; url: string; features: string[];
  github: string; live: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements AfterViewInit {
  private scrollReveal = inject(ScrollRevealService);

  projects: Project[] = [
    {
      title: 'TripWave',
      desc: 'A full-featured travel companion app built with Angular & Firebase — featuring Google Authentication, real-time Firestore data, advanced trip sorting & filtering, and seamless dark/light theme switching.',
      tags: ['Angular', 'Firebase', 'TypeScript', 'SCSS'],
      emoji: '✈️', color: '#a78bfa', colorRgb: '167,139,250',
      type: 'Full Stack App', url: 'authentication-setup-90afb.web.app',
      features: ['Auth System', 'Real-time DB', 'Theme Toggle', 'Responsive'],
      github: 'https://github.com/Ratnaballa',
      live: 'https://authentication-setup-90afb.web.app/'
    },
    {
      title: 'Food Website',
      desc: 'A visually rich food discovery platform built with React, featuring category-based filtering, animated cards, and a fully responsive pixel-perfect layout.',
      tags: ['React', 'JavaScript', 'CSS3'],
      emoji: '🍕', color: '#22d3ee', colorRgb: '34,211,238',
      type: 'Frontend App', url: 'github.com/Ratnaballa',
      features: ['Category Filter', 'Animations', 'Responsive', 'Modern UI'],
      github: 'https://github.com/Ratnaballa',
      live: 'https://github.com/Ratnaballa'
    },
    {
      title: 'Task Management App',
      desc: 'A productivity app with full CRUD operations, priority labeling, local state management, and a clean intuitive interface for daily task tracking.',
      tags: ['Angular', 'TypeScript', 'RxJS', 'SCSS'],
      emoji: '✅', color: '#60a5fa', colorRgb: '96,165,250',
      type: 'Productivity App', url: 'github.com/Ratnaballa',
      features: ['CRUD Ops', 'State Mgmt', 'Priority Tags', 'Persistence'],
      github: 'https://github.com/Ratnaballa',
      live: 'https://github.com/Ratnaballa'
    }
  ];

  ngAfterViewInit() { this.scrollReveal.observe(); }
}
