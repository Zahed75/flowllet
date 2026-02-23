import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  template: `
<section class="bg-gradient-to-br from-slate-900 to-indigo-950 -mt-20 pt-36 pb-20 px-4 text-center">
  <span class="text-indigo-400 font-bold text-xs uppercase tracking-widest">Got Questions?</span>
  <h1 class="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">Frequently Asked Questions</h1>
  <p class="text-slate-400 text-lg max-w-xl mx-auto">Everything you need to know about Flowllet.</p>
</section>
<section class="py-16 bg-slate-50">
  <div class="max-w-3xl mx-auto px-4">
    <div class="space-y-3">
      @for (faq of faqs; track faq.q; let i = $index) {
        <div class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <button
            (click)="open = open === i ? null : i"
            class="w-full flex items-center justify-between p-6 text-left font-semibold text-slate-900 hover:text-indigo-600 transition-colors bg-transparent border-none cursor-pointer"
          >
            <span>{{ faq.q }}</span>
            <i class="pi flex-shrink-0 ml-4 text-indigo-500" [class.pi-plus]="open !== i" [class.pi-minus]="open === i"></i>
          </button>
          @if (open === i) {
            <div class="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4 text-sm">{{ faq.a }}</div>
          }
        </div>
      }
    </div>
  </div>
</section>
  `
})
export class FaqComponent {
  open: number | null = null;
  faqs = [
    { q: 'Is Flowllet available in multiple currencies?', a: 'Yes! Flowllet supports multi-currency expense tracking. Set your base currency during onboarding and manage additional ones anytime in Settings.' },
    { q: 'Can I add detailed notes to my expenses?', a: 'Absolutely. The Notes and Bazar modules are unified. Apply rich text formatting — bold, italic, bullet lists — and link notes to expenses.' },
    { q: 'Which languages are supported?', a: 'English (default), French, German, and Arabic with full RTL support. Language preference is saved locally and applied instantly.' },
    { q: 'Can I change my base currency later?', a: 'Yes, change it anytime in Settings. A dialog will warn you that historical expenses won\'t be auto-converted to the new currency.' },
    { q: 'Does the app work offline?', a: 'Yes — all core features work fully offline. Data is stored locally on your device with no internet required.' },
    { q: 'How is my data protected?', a: 'Your data never leaves your device. Flowllet uses a local-storage model — no cloud sync, no sharing, complete privacy.' },
    { q: 'Is there a web version?', a: 'Currently, Flowllet is available as a mobile app for iOS and Android. This landing page provides information about the app.' },
    { q: 'How do I delete my data?', a: 'Uninstall the app or clear app data from your device settings. Syscomatic holds no copy of your data and cannot restore it.' },
  ];
}
