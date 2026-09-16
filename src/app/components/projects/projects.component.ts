import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  emoji: string;
  color: string;
  colorRgb: string;
  type: string;
  url: string;
  features: string[];
  github: string;
  live: string;
  isFeatured?: boolean;
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
      title: 'AI Investigation Assistant',
      desc: 'Built an AI-powered investigation platform for legal assistance and intelligent document retrieval. Implemented Retrieval-Augmented Generation (RAG), semantic search using vector embeddings and FAISS, intelligent recommendations, and multilingual support.',
      tags: ['Python', 'FastAPI', 'React', 'MongoDB', 'FAISS', 'RAG', 'Groq API'],
      emoji: '⚖️',
      color: '#a78bfa',
      colorRgb: '167,139,250',
      type: 'Featured GenAI Platform',
      url: 'ai-investigation.app',
      features: ['AI Chat Assistant', 'Legal Assistance', 'Semantic Search', 'Evidence Analysis', 'Multilingual Support'],
      github: 'https://github.com/Ratnaballa',
      live: 'https://github.com/Ratnaballa',
      isFeatured: true
    },
    {
      title: 'TripWave',
      desc: 'Developed a tourism web portal with authentication, sorting, filtering, theme switching, and responsive design.',
      tags: ['Angular', 'TypeScript', 'Firebase'],
      emoji: '✈️',
      color: '#22d3ee',
      colorRgb: '34,211,238',
      type: 'Full Stack Web Portal',
      url: 'authentication-setup-90afb.web.app',
      features: ['Firebase Authentication', 'Sorting & Filtering', 'Theme Switching', 'Responsive UI'],
      github: 'https://github.com/Ratnaballa',
      live: 'https://authentication-setup-90afb.web.app/'
    },
    {
      title: 'Smart Lender',
      desc: 'Machine learning-based loan eligibility prediction system using multiple ML algorithms.',
      tags: ['Python', 'Flask', 'Machine Learning', 'XGBoost'],
      emoji: '📊',
      color: '#60a5fa',
      colorRgb: '96,165,250',
      type: 'Machine Learning App',
      url: 'smart-lender.app',
      features: ['Loan Eligibility Prediction', 'XGBoost Prediction', 'Data Visualization', 'Interactive Dashboard'],
      github: 'https://github.com/Ratnaballa',
      live: 'https://github.com/Ratnaballa'
    }
  ];

  ngAfterViewInit() {
    this.scrollReveal.observe();
  }
}
