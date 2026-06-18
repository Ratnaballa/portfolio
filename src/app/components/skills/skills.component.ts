import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

interface Skill { name: string; level: number; icon: string; }
interface Category { label: string; icon: string; skills: Skill[]; }

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  private scrollReveal = inject(ScrollRevealService);
  active = 'Frontend';

  categories: Category[] = [
    {
      label: 'Frontend', icon: '🎨',
      skills: [
        { name: 'HTML5', level: 80, icon: '🌐' },
        { name: 'CSS3 / SCSS', level: 80, icon: '🎨' },
        { name: 'JavaScript (ES6+)', level: 70, icon: '⚡' },
        { name: 'Angular', level: 70, icon: '🅰️' },
        { name: 'React', level: 70, icon: '⚛️' },
      ]
    },
    {
      label: 'Backend', icon: '⚙️',
      skills: [
        { name: 'Python', level: 70, icon: '🐍' },
        { name: 'Firebase / Firestore', level: 40, icon: '🔥' },
        { name: 'REST APIs', level: 65, icon: '🔗' },
      ]
    },
    {
      label: 'Tools', icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 75, icon: '📦' },
        { name: 'VS Code', level: 85, icon: '💻' },
        { name: 'Angular CLI', level: 70, icon: '🔧' },
      ]
    },
    {
      label: 'Databases', icon: '🗄️',
      skills: [
        { name: 'Firebase Firestore', level: 40, icon: '🔥' },
        { name: 'SQL Basics', level: 60, icon: '📊' },
      ]
    }
  ];

  alsoWith = [
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Tailwind CSS', icon: '💨' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'Postman', icon: '📮' },
    { name: 'Figma', icon: '🎭' },
    { name: 'Canva', icon: '🖌️' },
    { name: 'Netlify', icon: '🌐' },
    { name: 'Vercel', icon: '▲' },
  ];

  get activeCategory() { return this.categories.find(c => c.label === this.active)!; }

  setActive(label: string) {
    this.active = label;
    setTimeout(() => this.scrollReveal.observe(), 60);
  }

  getTier(level: number) {
    if (level >= 78) return 'advanced';
    if (level >= 60) return 'intermediate';
    return 'beginner';
  }

  getTierLabel(level: number) {
    if (level >= 78) return 'Advanced';
    if (level >= 60) return 'Intermediate';
    return 'Beginner';
  }

  ngAfterViewInit() { this.scrollReveal.observe(); }
}
