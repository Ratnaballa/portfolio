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
      title: 'Full Stack Development Internship',
      issuer: 'SkillDzire', logo: '🎯', icon: '🎖️',
      date: '2024', color: '#22d3ee', colorRgb: '34,211,238',
      skills: ['Angular', 'TypeScript', 'Firebase', 'Git']
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
      title: 'Competitive Programming',
      issuer: 'CodeChef', logo: '👨‍🍳', icon: '⭐',
      date: '2024', color: '#b45309', colorRgb: '180,83,9',
      skills: ['C++', 'Algorithms', 'Logic Building', 'CP']
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'Kaggle', logo: '📊', icon: '🔬',
      date: '2024', color: '#20beff', colorRgb: '32,190,255',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis']
    },
    {
      title: 'Networking Basics',
      issuer: 'Cisco', logo: '🌐', icon: '🔒',
      date: '2024', color: '#1d4ed8', colorRgb: '29,78,216',
      skills: ['Networking', 'IP Addressing', 'Protocols', 'Security']
    },
    {
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank', logo: '💚', icon: '✅',
      date: '2024', color: '#16a34a', colorRgb: '22,163,74',
      skills: ['Python', 'SQL', 'Problem Solving', 'Algorithms']
    },
  ];

  platforms = [
    { name: 'Simplilearn', icon: '📘' },
    { name: 'Infosys Springboard', icon: '🟠' },
    { name: 'GeeksforGeeks', icon: '🟢' },
    { name: 'CodeChef', icon: '👨‍🍳' },
    { name: 'Kaggle', icon: '📊' },
    { name: 'Cisco', icon: '🌐' },
    { name: 'HackerRank', icon: '💚' },
    { name: 'SkillDzire', icon: '🎯' },
  ];

  ngAfterViewInit() { this.scrollReveal.observe(); }
}
