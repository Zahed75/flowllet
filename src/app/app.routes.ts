import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { FeaturesComponent } from './pages/features/features';
import { AboutComponent } from './pages/about/about';
import { FaqComponent } from './pages/faq/faq';
import { PrivacyComponent } from './pages/privacy/privacy';
import { TermsComponent } from './pages/terms/terms';

export const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Flowllet — Smart Personal Finance App' },
    { path: 'features', component: FeaturesComponent, title: 'Features — Flowllet' },
    { path: 'about', component: AboutComponent, title: 'About — Flowllet by Syscomatic Technologies Ltd.' },
    { path: 'faq', component: FaqComponent, title: 'FAQ — Flowllet' },
    { path: 'privacy', component: PrivacyComponent, title: 'Privacy Policy — Flowllet' },
    { path: 'terms', component: TermsComponent, title: 'Terms of Service — Flowllet' },
    { path: '**', redirectTo: '' },
];
