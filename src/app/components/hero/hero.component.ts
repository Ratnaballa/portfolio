import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  private scrollReveal = inject(ScrollRevealService);

  roles = ['Full Stack Developer', 'Angular Developer', 'AIML Student'];
  currentRole = '';
  roleIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  heroStats = [
    { value: '8.9', label: 'CGPA' },
    { value: '2', label: 'Internships' },
    { value: '3', label: 'Major Projects' },
    { value: '500+', label: 'Problems Solved' },
  ];

  particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    startY: Math.random() * 20,
    size: Math.random() * 2.5 + 0.5,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * 10,
    hue: Math.floor(Math.random() * 60 + 260),
  }));

  ngOnInit() {
    this.typeRole();
    setTimeout(() => this.scrollReveal.observe(), 400);
  }

  typeRole() {
    const current = this.roles[this.roleIndex];
    if (!this.isDeleting) {
      this.currentRole = current.substring(0, ++this.charIndex);
      if (this.charIndex === current.length) {
        this.isDeleting = true;
        this.timer = setTimeout(() => this.typeRole(), 2200);
        return;
      }
    } else {
      this.currentRole = current.substring(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.typeRole(), this.isDeleting ? 45 : 95);
  }

  ngOnDestroy() { if (this.timer) clearTimeout(this.timer); }

  scrollToProjects() { document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }
  scrollToContact() { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }
}
