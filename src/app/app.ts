import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <!-- NAV -->
    <nav
      [class.shadow-lg]="isScrolled"
      [class.bg-white]="isScrolled"
      class="fixed w-full z-50 transition-all duration-300 top-0 left-0"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <a routerLink="/" class="flex items-center cursor-pointer no-underline gap-2.5">
            <img src="assets/logo/app_icon.png" alt="Flowllet Logo" class="w-10 h-10 rounded-xl shadow-md object-cover" />
            <span class="text-2xl font-extrabold text-slate-900 tracking-tight">Flowllet</span>
          </a>
          <!-- Desktop Links -->
          <div class="hidden md:flex items-center gap-6">
            <a routerLink="/" routerLinkActive="text-indigo-600" [routerLinkActiveOptions]="{exact:true}" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm no-underline">Home</a>
            <a routerLink="/features" routerLinkActive="text-indigo-600" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm no-underline">Features</a>
            <a routerLink="/about" routerLinkActive="text-indigo-600" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm no-underline">About</a>
            <a routerLink="/faq" routerLinkActive="text-indigo-600" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm no-underline">FAQ</a>
            <a routerLink="/privacy" routerLinkActive="text-indigo-600" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors text-sm no-underline">Privacy</a>
            <a routerLink="/" fragment="download" class="px-5 py-2.5 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-all shadow-md flex items-center gap-2 no-underline">
              <i class="pi pi-download" style="font-size:0.75rem"></i> Get App
            </a>
          </div>
          <!-- Mobile Toggle -->
          <button
            (click)="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition border-none bg-transparent cursor-pointer"
          >
            <i class="pi" [class.pi-bars]="!mobileMenuOpen" [class.pi-times]="mobileMenuOpen" style="font-size:1.2rem"></i>
          </button>
        </div>
      </div>
      <!-- Mobile Menu -->
      @if (mobileMenuOpen) {
        <div class="md:hidden bg-white border-t border-slate-100 px-4 py-4 flex flex-col gap-1 shadow-lg">
          <a routerLink="/" (click)="mobileMenuOpen=false" class="text-slate-700 font-medium py-2.5 px-3 rounded-xl hover:bg-slate-50 no-underline block">Home</a>
          <a routerLink="/features" (click)="mobileMenuOpen=false" class="text-slate-700 font-medium py-2.5 px-3 rounded-xl hover:bg-slate-50 no-underline block">Features</a>
          <a routerLink="/about" (click)="mobileMenuOpen=false" class="text-slate-700 font-medium py-2.5 px-3 rounded-xl hover:bg-slate-50 no-underline block">About</a>
          <a routerLink="/faq" (click)="mobileMenuOpen=false" class="text-slate-700 font-medium py-2.5 px-3 rounded-xl hover:bg-slate-50 no-underline block">FAQ</a>
          <a routerLink="/privacy" (click)="mobileMenuOpen=false" class="text-slate-700 font-medium py-2.5 px-3 rounded-xl hover:bg-slate-50 no-underline block">Privacy Policy</a>
          <a routerLink="/" class="mt-2 px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-center no-underline block">Download App</a>
        </div>
      }
    </nav>

    <!-- Page Content -->
    <main class="pt-20">
      <router-outlet></router-outlet>
    </main>

    <!-- FOOTER -->
    <footer class="bg-slate-950 text-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div class="md:col-span-2">
            <a routerLink="/" class="flex items-center mb-4 no-underline gap-3">
              <img src="assets/logo/app_icon.png" alt="Flowllet Logo" class="w-10 h-10 rounded-xl object-cover shadow-md" />
              <span class="text-2xl font-extrabold text-white">Flowllet</span>
            </a>
            <p class="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              A personal finance app built for individuals who value simplicity, privacy, and speed. A product of Syscomatic Technologies Ltd.
            </p>
            <div class="flex gap-3">
              <a class="w-9 h-9 rounded-full bg-white/10 hover:bg-indigo-600 flex items-center justify-center transition-colors cursor-pointer">
                <i class="pi pi-twitter" style="font-size:0.8rem"></i>
              </a>
              <a class="w-9 h-9 rounded-full bg-white/10 hover:bg-indigo-600 flex items-center justify-center transition-colors cursor-pointer">
                <i class="pi pi-github" style="font-size:0.8rem"></i>
              </a>
              <a class="w-9 h-9 rounded-full bg-white/10 hover:bg-indigo-600 flex items-center justify-center transition-colors cursor-pointer">
                <i class="pi pi-linkedin" style="font-size:0.8rem"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 class="text-slate-300 font-bold uppercase text-xs tracking-widest mb-5">Pages</h4>
            <ul class="space-y-3">
              <li><a routerLink="/" class="text-slate-400 hover:text-white text-sm no-underline transition-colors">Home</a></li>
              <li><a routerLink="/features" class="text-slate-400 hover:text-white text-sm no-underline transition-colors">Features</a></li>
              <li><a routerLink="/about" class="text-slate-400 hover:text-white text-sm no-underline transition-colors">About</a></li>
              <li><a routerLink="/faq" class="text-slate-400 hover:text-white text-sm no-underline transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-slate-300 font-bold uppercase text-xs tracking-widest mb-5">Legal</h4>
            <ul class="space-y-3">
              <li><a routerLink="/privacy" class="text-slate-400 hover:text-white text-sm no-underline transition-colors">Privacy Policy</a></li>
              <li><a routerLink="/terms" class="text-slate-400 hover:text-white text-sm no-underline transition-colors">Terms of Service</a></li>
              <li><a href="mailto:privacy@syscomatic.com" class="text-slate-400 hover:text-white text-sm no-underline transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-slate-500 text-sm">&copy; 2026 Syscomatic Technologies Ltd. All rights reserved.</p>
          <p class="text-slate-600 text-xs">Built with Angular + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  `
})
export class App {
  isScrolled = false;
  mobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
