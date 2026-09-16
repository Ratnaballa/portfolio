import { Component, AfterViewInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ScrollRevealService } from '../../services/scroll-reveal.service';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

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
  errorMessage = signal<string | null>(null);

  formData = { name: '', email: '', subject: '', message: '' };

  async onSubmit(form: NgForm) {
    if (form.invalid) return;

    const { serviceId, templateId, publicKey, recipientEmail } = environment.emailjs;

    // Simple validation: ensure credentials exist
    if (!serviceId || !templateId || !publicKey) {
      const configMsg = 'EmailJS credentials missing! Please update src/environments/environment.ts.';
      console.error('❌ EmailJS Config Error:', configMsg, { serviceId, templateId, publicKey });
      this.errorMessage.set(configMsg);
      this.sending.set(false);
      this.submitted.set(false);
      return;
    }

    this.sending.set(true);
    this.errorMessage.set(null);

    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      to_email: recipientEmail,
      subject: this.formData.subject,
      message: this.formData.message,
      reply_to: this.formData.email
    };

    console.log('🚀 Sending email via EmailJS...', {
      serviceId,
      templateId,
      recipientEmail,
      templateParams
    });

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      console.log('✅ EmailJS Response Received:', {
        status: response.status,
        text: response.text
      });

      if (response.status === 200 || response.text === 'OK') {
        this.sending.set(false);
        this.submitted.set(true);
        this.errorMessage.set(null);
        form.resetForm();
      } else {
        throw new Error(`EmailJS responded with status ${response.status}: ${response.text}`);
      }
    } catch (err: any) {
      console.error('❌ EmailJS Error:', err);

      this.sending.set(false);
      this.submitted.set(false);

      const errorDetail = err?.text || err?.message || 'Failed to send message.';
      this.errorMessage.set(`Unable to send message (${errorDetail}). Please check console logs or verify your EmailJS configuration.`);
    }
  }

  resetForm() {
    this.submitted.set(false);
    this.errorMessage.set(null);
  }

  ngAfterViewInit() {
    this.scrollReveal.observe();
  }
}
