import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollRevealService {
  private observer: IntersectionObserver | null = null;

  observe(selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale') {
    // Disconnect previous observer to avoid duplicates
    this.observer?.disconnect();

    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          // Once visible, stop observing that element
          this.observer?.unobserve(e.target);
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll(selector).forEach(el => this.observer!.observe(el));
  }

  // Force-reveal all elements in a specific section immediately
  revealSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    section.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => el.classList.add('visible'));
  }
}
