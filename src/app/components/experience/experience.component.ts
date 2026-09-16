import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

interface Experience {
  company: string;
  role: string;
  period: string;
  badge: string;
  location?: string;
  bullets: string[];
  tech: string[];
  color: string;
  colorRgb: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements AfterViewInit {
  private scrollReveal = inject(ScrollRevealService);

  experiences: Experience[] = [
    {
      company: 'Huebits Tech',
      role: 'GenAI Intern',
      period: 'June 2026 – July 2026',
      badge: 'Internship',
      bullets: [
        'Developed AI Investigation Assistant for legal assistance and document retrieval.',
        'Built scalable backend APIs using FastAPI.',
        'Implemented Retrieval-Augmented Generation (RAG) powered by FAISS vector database.',
        'Integrated Groq API for rapid LLM response generation.',
        'Worked with MongoDB for data persistence and React for frontend interface.'
      ],
      tech: ['FastAPI', 'RAG', 'FAISS', 'Groq API', 'MongoDB', 'React', 'Python'],
      color: '#a78bfa',
      colorRgb: '167,139,250'
    },
    {
      company: 'Infosys Springboard',
      role: 'Angular Developer Intern',
      period: 'Feb 2026 – Apr 2026',
      badge: 'Virtual Internship',
      bullets: [
        'Developed TripWave tourism web portal with modern user interface.',
        'Utilized Angular, TypeScript, and Firebase for full-stack functionality.',
        'Integrated Firebase Authentication for secure user sign-in/up.',
        'Built dynamic sorting, filtering, theme switching, and responsive UI layout.',
        'Integrated GitHub workflow for version control and collaborative development.'
      ],
      tech: ['Angular', 'TypeScript', 'Firebase', 'Authentication', 'SCSS', 'GitHub'],
      color: '#22d3ee',
      colorRgb: '34,211,238'
    }
  ];

  ngAfterViewInit() {
    this.scrollReveal.observe();
  }
}
