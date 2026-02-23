import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [RouterLink],
  template: `
<section class="bg-gradient-to-br from-slate-900 to-indigo-950 -mt-20 pt-36 pb-20 px-4 text-center">
  <div class="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6">
    <i class="pi pi-file text-indigo-400 text-2xl"></i>
  </div>
  <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Terms of Service</h1>
  <p class="text-slate-500 text-sm">Last updated: February 2026 &nbsp;·&nbsp; Syscomatic Technologies Ltd.</p>
</section>
<section class="py-16 bg-white">
  <div class="max-w-3xl mx-auto px-4 space-y-6 text-slate-600 leading-relaxed">
    @for (s of sections; track s.title) {
      <div class="p-8 bg-slate-50 rounded-2xl border border-slate-100">
        <h2 class="text-lg font-bold text-slate-900 mb-3">{{ s.title }}</h2>
        <p class="text-sm">{{ s.content }}</p>
      </div>
    }
    <div class="mt-10 text-center">
      <a routerLink="/" class="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-semibold no-underline text-sm">
        <i class="pi pi-arrow-left text-xs"></i> Back to Home
      </a>
    </div>
  </div>
</section>
  `
})
export class TermsComponent {
  sections = [
    { title: '1. Acceptance of Terms', content: 'By downloading or using Flowllet, you agree to be bound by these Terms of Service. If you do not agree, please do not use the application.' },
    { title: '2. Use of the Application', content: 'Flowllet is provided for personal, non-commercial use. You agree not to misuse the app, reverse-engineer it, or use it for any unlawful purpose.' },
    { title: '3. No Warranty', content: 'Flowllet is provided "as is" without warranties of any kind. Syscomatic Technologies Ltd. does not guarantee the accuracy of currency rates or financial calculations.' },
    { title: '4. Limitation of Liability', content: 'Syscomatic Technologies Ltd. shall not be liable for any financial decisions made based on data within the app. Always consult a qualified financial advisor for financial decisions.' },
    { title: '5. Intellectual Property', content: 'All intellectual property rights in the Flowllet application, including its design, code, and branding, are owned by Syscomatic Technologies Ltd.' },
    { title: '6. Changes to Terms', content: 'We reserve the right to update these Terms at any time. Continued use of the app after changes constitutes acceptance of the new Terms.' },
    { title: '7. Governing Law', content: 'These Terms are governed by the laws of the jurisdiction in which Syscomatic Technologies Ltd. is incorporated, without regard to its conflict of law provisions.' },
    { title: '8. Contact', content: 'For questions about these Terms, contact us at legal@syscomatic.com.' },
  ];
}
