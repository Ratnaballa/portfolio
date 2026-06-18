import { Component, AfterViewInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements AfterViewInit {
  private scrollReveal = inject(ScrollRevealService);

  submitted = signal(false);
  sending = signal(false);

  formData = { name: '', email: '', subject: '', message: '' };

  onSubmit(form: NgForm) {
    if (form.invalid) return;
    this.sending.set(true);
    setTimeout(() => {
      this.sending.set(false);
      this.submitted.set(true);
      form.resetForm();
    }, 1500);
  }

  resetForm() { this.submitted.set(false); }

  ngAfterViewInit() { this.scrollReveal.observe(); }
}
