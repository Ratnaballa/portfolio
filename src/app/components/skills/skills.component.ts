import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; icon: string }[];
  color: string;
  colorRgb: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements AfterViewInit {
  private scrollReveal = inject(ScrollRevealService);

  categories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: '🎨',
      color: '#a78bfa',
      colorRgb: '167,139,250',
      skills: [
        { name: 'Angular', icon: '🅰️' },
        { name: 'React', icon: '⚛️' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'HTML', icon: '🌐' },
        { name: 'CSS', icon: '🎨' }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      color: '#22d3ee',
      colorRgb: '34,211,238',
      skills: [
        { name: 'FastAPI', icon: '⚡' },
        { name: 'Spring Boot', icon: '🌱' },
        { name: 'REST APIs', icon: '🔗' }
      ]
    },
    {
      title: 'Database',
      icon: '🗄️',
      color: '#f97316',
      colorRgb: '249,115,22',
      skills: [
        { name: 'MongoDB', icon: '🍃' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'Firebase', icon: '🔥' }
      ]
    },
    {
      title: 'AI & ML',
      icon: '🤖',
      color: '#c084fc',
      colorRgb: '192,132,252',
      skills: [
        { name: 'AI', icon: '🤖' },
        { name: 'Machine Learning', icon: '🧠' },
        { name: 'Generative AI', icon: '✨' },
        { name: 'RAG', icon: '🔍' },
        { name: 'LangChain', icon: '🦜' },
        { name: 'FAISS', icon: '⚡' },
        { name: 'Vector Embeddings', icon: '📐' }
      ]
    },
    {
      title: 'Programming',
      icon: '💻',
      color: '#60a5fa',
      colorRgb: '96,165,250',
      skills: [
        { name: 'Java', icon: '☕' },
        { name: 'Python', icon: '🐍' },
        { name: 'SQL', icon: '📊' }
      ]
    },
    {
      title: 'Core Concepts',
      icon: '🧠',
      color: '#34d399',
      colorRgb: '52,211,153',
      skills: [
        { name: 'OOP', icon: '🧩' },
        { name: 'DSA', icon: '🌳' },
        { name: 'Problem Solving', icon: '💡' }
      ]
    }
  ];

  ngAfterViewInit() {
    this.scrollReveal.observe();
  }
}
