import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  template: `
<section class="bg-gradient-to-br from-slate-900 to-indigo-950 -mt-20 pt-36 pb-20 px-4 text-center">
  <span class="text-indigo-400 font-bold text-xs uppercase tracking-widest">Phase 2 Enhancements</span>
  <h1 class="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">Powerful Features</h1>
  <p class="text-slate-400 text-lg max-w-2xl mx-auto">Everything you need to master personal finance — in a beautiful, offline-first Flowllet experience.</p>
</section>
<section class="py-20 bg-slate-50">
  <div class="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    @for (f of features; track f.title) {
      <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group">
        <div [class]="'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ' + f.bg">
          <i [class]="'pi ' + f.icon + ' text-2xl ' + f.color"></i>
        </div>
        <h3 class="text-xl font-bold text-slate-900 mb-3">{{ f.title }}</h3>
        <p class="text-slate-500 leading-relaxed">{{ f.desc }}</p>
      </div>
    }
  </div>
</section>
  `
})
export class FeaturesComponent {
  features = [
    { icon: 'pi-book', bg: 'bg-indigo-50', color: 'text-indigo-600', title: 'Unified Notes & Bazar', desc: 'Rich-text notes with bold, italic, and bullet lists, merged with the Bazar module. Link notes directly to expenses.' },
    { icon: 'pi-globe', bg: 'bg-emerald-50', color: 'text-emerald-600', title: 'Multi-Currency Support', desc: 'Record every expense in its native currency. Set a base currency during onboarding and manage more in Settings.' },
    { icon: 'pi-th-large', bg: 'bg-orange-50', color: 'text-orange-500', title: 'Dynamic Category Grid', desc: 'Create, edit, and delete icon-based categories from Settings. Changes reflect instantly across the entire app.' },
    { icon: 'pi-bolt', bg: 'bg-blue-50', color: 'text-blue-500', title: 'Redesigned UI/UX', desc: 'Clear income vs expense separation. Add any transaction in under 3 taps with visual success feedback.' },
    { icon: 'pi-language', bg: 'bg-purple-50', color: 'text-purple-500', title: 'Global Localization', desc: 'English, French, German, and Arabic with full RTL layout support. Language saved locally and applied instantly.' },
    { icon: 'pi-plus-circle', bg: 'bg-rose-50', color: 'text-rose-500', title: 'Floating Action Button', desc: 'Center-bottom FAB instantly surfaces Add Expense, Add Income, and Add Note actions.' },
    { icon: 'pi-wifi', bg: 'bg-teal-50', color: 'text-teal-500', title: 'Offline First', desc: 'All features work fully offline. Data is stored locally and never requires an internet connection.' },
    { icon: 'pi-shield', bg: 'bg-cyan-50', color: 'text-cyan-600', title: 'Privacy First', desc: 'No unnecessary data collection. Your financial data never leaves your device.' },
    { icon: 'pi-chart-bar', bg: 'bg-yellow-50', color: 'text-yellow-600', title: 'Reports & Analytics', desc: 'Visual bar charts and spending breakdowns with PDF export and date/type filtering.' },
  ];
}
