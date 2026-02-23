import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
<section class="bg-gradient-to-br from-slate-900 to-indigo-950 -mt-20 pt-36 pb-20 px-4 text-center">
  <img src="assets/logo/app_icon.png" alt="Flowllet" class="w-20 h-20 rounded-3xl mx-auto mb-6 shadow-2xl shadow-indigo-900 object-cover" />
  <span class="text-indigo-400 font-bold text-xs uppercase tracking-widest">The Story</span>
  <h1 class="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-4">About Flowllet</h1>
  <p class="text-slate-400 text-lg max-w-2xl mx-auto">A personal finance app built with care by Syscomatic Technologies Ltd.</p>
</section>
<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
    <div class="w-full lg:w-1/2 relative group">
      <div class="absolute -inset-4 bg-gradient-to-tr from-indigo-200 to-cyan-200 rounded-[3rem] blur-2xl opacity-40"></div>
      <div class="relative rounded-[2.5rem] overflow-hidden h-[420px] shadow-2xl">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Syscomatic Team" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div class="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent"></div>
        <div class="absolute bottom-8 left-8">
          <div class="text-white font-extrabold text-xl">Syscomatic Technologies Ltd.</div>
          <div class="text-indigo-200 text-sm mt-1">Building tools that empower people.</div>
        </div>
      </div>
    </div>
    <div class="w-full lg:w-1/2">
      <span class="text-indigo-600 font-bold text-xs uppercase tracking-widest">About the Company</span>
      <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-6">Built by Syscomatic Technologies Ltd.</h2>
      <p class="text-slate-600 text-lg leading-relaxed mb-5">
        Flowllet is a product of <strong class="text-slate-900">Syscomatic Technologies Ltd.</strong>, a technology company dedicated to building efficient, user-centric software that genuinely improves daily life.
      </p>
      <p class="text-slate-600 leading-relaxed mb-8">
        Phase 2 is a major evolution — we listened to user feedback, unified fragmented workflows, redesigned core flows, and introduced powerful capabilities while staying true to our offline-first, privacy-first philosophy.
      </p>
      <div class="grid grid-cols-2 gap-4">
        @for (b of badges; track b.label) {
          <div class="flex items-center gap-3 bg-slate-50 rounded-2xl p-4 border border-slate-100">
            <div [class]="'w-10 h-10 rounded-xl flex items-center justify-center ' + b.bg">
              <i [class]="'pi ' + b.icon + ' ' + b.color"></i>
            </div>
            <span class="font-semibold text-slate-800 text-sm">{{ b.label }}</span>
          </div>
        }
      </div>
    </div>
  </div>
</section>
  `
})
export class AboutComponent {
  badges = [
    { icon: 'pi-wifi', bg: 'bg-indigo-100', color: 'text-indigo-600', label: 'Works Offline' },
    { icon: 'pi-shield', bg: 'bg-green-100', color: 'text-green-600', label: 'Privacy First' },
    { icon: 'pi-bolt', bg: 'bg-orange-100', color: 'text-orange-500', label: 'Ultra Fast' },
    { icon: 'pi-mobile', bg: 'bg-blue-100', color: 'text-blue-600', label: 'Mobile Native' },
  ];
}
