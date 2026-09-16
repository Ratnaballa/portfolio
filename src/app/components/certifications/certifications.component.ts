import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss'
})
export class CertificationsComponent implements AfterViewInit {
  private scrollReveal = inject(ScrollRevealService);

  certs = [
    {
      title: 'Full Stack Development',
      issuer: 'Simplilearn', logo: '📘', icon: '🏆',
      date: '2024', color: '#a78bfa', colorRgb: '167,139,250',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    },
    {
      title: 'Python & Web Development',
      issuer: 'Infosys Springboard', logo: '🟠', icon: '🐍',
      date: '2024', color: '#f97316', colorRgb: '249,115,22',
      skills: ['Python', 'Web Dev', 'OOP', 'Problem Solving']
    },
    {
      title: 'Data Structures & Algorithms',
      issuer: 'GeeksforGeeks', logo: '🟢', icon: '💡',
      date: '2024', color: '#22c55e', colorRgb: '34,197,94',
      skills: ['DSA', 'C++', 'Problem Solving', 'Arrays']
    },
    {
      title: 'Solved 500+ Problems on CodeChef',
      issuer: 'CodeChef', logo: '👨‍🍳', icon: '⭐',
      date: '2024', color: '#b45309', colorRgb: '180,83,9',
      skills: ['C++', 'Algorithms', 'Logic Building', 'CP']
    },
    {
      title: 'Python Coder',
      issuer: 'Kaggle', logo: '📊', icon: '🔬',
      date: '2024', color: '#20beff', colorRgb: '32,190,255',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis']
    },
    {
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank', logo: '💚', icon: '✅',
      date: '2024', color: '#16a34a', colorRgb: '22,163,74',
      skills: ['Python', 'SQL', 'Problem Solving', 'Algorithms']
    }
  ];

  platforms = [
    { name: 'Simplilearn', icon: '📘' },
    { name: 'Infosys Springboard', icon: '🟠' },
    { name: 'GeeksforGeeks', icon: '🟢' },
    { name: 'CodeChef', icon: '👨‍🍳' },
    { name: 'Kaggle', icon: '📊' },
    { name: 'HackerRank', icon: '💚' }
  ];

  ngAfterViewInit() { this.scrollReveal.observe(); }
}
