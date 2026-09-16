import { Component, inject, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  theme = inject(ThemeService);
  private scrollReveal = inject(ScrollRevealService);
  scrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal('home');

  navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 50);
    this.detectActiveSection();
  }

  detectActiveSection() {
    const sections = ['home','about','skills','experience','projects','certifications','contact'];
    for (const id of sections.slice().reverse()) {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 120) {
        this.activeSection.set(id);
        break;
      }
    }
  }

  scrollTo(href: string) {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    // Force-reveal all hidden elements in target section immediately
    this.scrollReveal.revealSection(id);

    el.scrollIntoView({ behavior: 'smooth' });
    this.activeSection.set(id);
    this.menuOpen.set(false);
  }
}
