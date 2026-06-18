import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements AfterViewInit {
  private scrollReveal = inject(ScrollRevealService);

  events = [
    {
      year: '2023', title: 'Started B.Tech',
      org: 'Sasi Institute of Technology & Engineering',
      desc: 'Began my journey in Computer Science Engineering with specialization in Artificial Intelligence & Machine Learning at Sasi Institute, Andhra Pradesh.',
      icon: '🏛️', type: 'education'
    },
    {
      year: '2023', title: 'First Web Project',
      org: 'Personal Project',
      desc: 'Built my first full-stack web application — a food website using React with modern UI principles and fully responsive design.',
      icon: '🚀', type: 'project'
    },
    {
      year: '2024', title: 'Full Stack Internship',
      org: 'SkillDzire',
      desc: 'Completed a hands-on Full Stack Development internship gaining real-world experience building production-grade apps with Angular and Firebase.',
      icon: '💼', type: 'work'
    },
    {
      year: '2024', title: 'Simplilearn Certification',
      org: 'Simplilearn',
      desc: 'Earned a professional certification in Full Stack Development, strengthening core foundations across the modern web stack.',
      icon: '🏆', type: 'achievement'
    },
    {
      year: '2024', title: 'Launched TripWave',
      org: 'Personal Project',
      desc: 'Designed and deployed TripWave — a feature-rich Angular + Firebase travel app with Google Auth, real-time filtering, and theme switching. Live on Firebase Hosting.',
      icon: '✈️', type: 'project'
    },
    {
      year: '2025', title: 'Final Year & Beyond',
      org: 'Present • Graduating 2027',
      desc: 'In my 4th year at Sasi Institute, focused on deepening Full Stack expertise, building impactful projects, and actively seeking developer roles.',
      icon: '⚡', type: 'current'
    }
  ];

  ngAfterViewInit() { this.scrollReveal.observe(); }
}
