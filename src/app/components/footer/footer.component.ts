import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();

  links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  socials = [
    { label: 'GitHub', href: 'https://github.com/Ratnaballa', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ratna-kumari-balla-6a36b52a0', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:kumarirathna370@gmail.com', icon: 'email' },
  ];

  scrollTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  scrollTo(href: string) { document.getElementById(href.replace('#',''))?.scrollIntoView({ behavior: 'smooth' }); }
}
