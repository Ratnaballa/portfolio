import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements AfterViewInit {
  private scrollReveal = inject(ScrollRevealService);

  stats = [
    { value: '8.9', label: 'CGPA', icon: '🎓' },
    { value: '2', label: 'Internships', icon: '💼' },
    { value: '3', label: 'Major Projects', icon: '🚀' },
    { value: '500+', label: 'Problems Solved', icon: '🏆' },
  ];

  ngAfterViewInit() { this.scrollReveal.observe(); }
}
