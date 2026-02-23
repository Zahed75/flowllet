import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-privacy',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './privacy.html',
})
export class PrivacyComponent {

    dataTable = [
        {
            category: 'Account Information',
            icon: 'pi-user',
            color: 'text-indigo-600',
            bg: 'bg-indigo-50',
            data: 'Email address, display name, profile photo (if signing in with Google)',
            purpose: 'Account creation, authentication, app personalization',
            stored: 'Our secure servers',
            required: true,
        },
        {
            category: 'Google Sign-In',
            icon: 'pi-google',
            color: 'text-red-600',
            bg: 'bg-red-50',
            data: 'Google account ID, email, name, profile picture',
            purpose: 'OAuth authentication via Google Identity Services',
            stored: 'Google servers + our servers (email only)',
            required: false,
        },
        {
            category: 'Loan Contact Details',
            icon: 'pi-users',
            color: 'text-orange-600',
            bg: 'bg-orange-50',
            data: 'Name, phone number, and email address of loan contacts (lenders/borrowers)',
            purpose: 'Sending due-date reminders via SMS/email; serving as proof of loan agreement',
            stored: 'Our secure servers',
            required: false,
        },
        {
            category: 'Phone Contacts (Optional)',
            icon: 'pi-phone',
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            data: 'Contact name and phone number (only contacts you explicitly select)',
            purpose: 'Pre-filling loan contact fields for convenience — never scanned in bulk',
            stored: 'Device only (not uploaded)',
            required: false,
        },
        {
            category: 'Financial Data',
            icon: 'pi-wallet',
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            data: 'Expenses, income records, notes, categories, wallets, currency settings',
            purpose: 'Core app functionality — personal finance tracking',
            stored: 'Your device only',
            required: false,
        },
        {
            category: 'Anonymous Analytics',
            icon: 'pi-chart-bar',
            color: 'text-purple-600',
            bg: 'bg-purple-50',
            data: 'Crash reports, app performance logs (no personal info)',
            purpose: 'Improving app stability and performance',
            stored: 'Analytics provider (anonymized)',
            required: false,
        },
    ];

    sections = [
        {
            id: '1',
            icon: 'pi-info-circle',
            color: 'text-indigo-600',
            bg: 'bg-indigo-50',
            title: 'Overview',
            content: `Flowllet is a personal finance application developed by Syscomatic Technologies Ltd. This Privacy Policy describes how we collect, use, store, and protect your information when you use Flowllet. We are committed to transparency and to protecting your privacy in accordance with applicable data protection laws, including GDPR and applicable mobile platform policies.`
        },
        {
            id: '2',
            icon: 'pi-user-plus',
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            title: 'Account Registration & Authentication',
            content: `To use Flowllet, you must create an account using one of the following methods:\n\n• Email & Password: You provide your email address and create a password. Your email is used for account identification, login, and important notifications.\n\n• Google Sign-In: You may choose to sign in using your Google account via OAuth. We receive your Google account ID, email address, display name, and profile photo. We only store your email address on our servers; other data is not persisted.\n\nWe do not store passwords in plain text. All passwords are encrypted using industry-standard hashing algorithms.`
        },
        {
            id: '3',
            icon: 'pi-arrow-right-arrow-left',
            color: 'text-orange-600',
            bg: 'bg-orange-50',
            title: 'Loan Feature — Contact Information',
            content: `When you use the Loan feature to record money given to or received from another person, you may add contact details for that person, including their:\n\n• Full name\n• Phone number\n• Email address\n\nThis information is used strictly for:\n1. Sending automated due-date reminder notifications (SMS or email) to the loan contact\n2. Serving as a record/proof of the loan agreement within the app\n\nThis contact information is stored on our secure servers solely to enable these loan reminder features. It is never sold, rented, or shared with third parties for marketing purposes. You may delete loan contacts at any time from within the app.`
        },
        {
            id: '4',
            icon: 'pi-phone',
            color: 'text-emerald-600',
            bg: 'bg-emerald-50',
            title: 'Phone Contacts Access (Optional)',
            content: `Flowllet offers an optional feature that allows you to import a contact from your device's phone book when setting up a loan entry. This is designed purely for convenience — to pre-fill the loan contact's name and phone number without manual typing.\n\n• This feature requires the Contacts permission on your device\n• You select a single contact to import; your full contact list is never uploaded or transmitted\n• We do not access, store, or process any contacts beyond the single one you explicitly select\n• You can decline this permission and enter loan contact details manually\n• You can revoke contacts permission at any time from your device settings`
        },
        {
            id: '5',
            icon: 'pi-server',
            color: 'text-slate-600',
            bg: 'bg-slate-100',
            title: 'Financial Data — Local Storage',
            content: `All your personal financial data — including expenses, income, notes, categories, wallets, and currency preferences — is stored locally on your device. This data is NOT uploaded to our servers, is NOT shared with any third party, and is NOT accessible to Syscomatic Technologies Ltd.\n\nFor the Loan feature only, loan records (amount, date, contact) are synced to our server to enable cross-device access and reminder notifications. All server-stored data is encrypted in transit (TLS) and at rest.`
        },
        {
            id: '6',
            icon: 'pi-share-alt',
            color: 'text-rose-600',
            bg: 'bg-rose-50',
            title: 'Data Sharing & Third Parties',
            content: `We do not sell your personal data. We only share data with trusted third parties where necessary to operate the app:\n\n• Authentication Providers: Google (for Google Sign-In via OAuth 2.0)\n• Notification Services: SMS/email gateway providers (for loan reminders only)\n• Analytics: Anonymous crash reporting only (e.g., Firebase Crashlytics)\n• Currency Data: Third-party exchange rate APIs receive only the currency code being queried — no personal data\n\nAll third-party providers are contractually required to protect your data and may not use it for their own purposes.`
        },
        {
            id: '7',
            icon: 'pi-lock',
            color: 'text-indigo-600',
            bg: 'bg-indigo-50',
            title: 'Data Security',
            content: `We implement industry-standard security measures to protect your data:\n\n• All data transmitted between the app and our servers is encrypted using TLS 1.2+\n• Passwords are hashed using bcrypt — never stored in plain text\n• Server-stored data (account info, loan records) is encrypted at rest\n• Access to production servers is restricted to authorized personnel only\n• We conduct regular security reviews and vulnerability assessments\n\nHowever, no method of transmission over the internet is 100% secure. We encourage you to use a strong, unique password for your account.`
        },
        {
            id: '8',
            icon: 'pi-user-edit',
            color: 'text-cyan-600',
            bg: 'bg-cyan-50',
            title: 'Your Rights & Data Control',
            content: `You have the following rights regarding your data:\n\n• Access: Request a copy of the personal data we hold about you\n• Correction: Update or correct your account information within the app\n• Deletion: Delete your account and all associated server-stored data at any time from Settings → Account → Delete Account\n• Portability: Request an export of your data in a machine-readable format\n• Opt-Out: Opt out of anonymous analytics in app settings\n\nFor GDPR users (EU/EEA residents): You have additional rights under GDPR including the right to restrict processing and the right to object. Contact us at privacy@syscomatic.com to exercise these rights.`
        },
        {
            id: '9',
            icon: 'pi-clock',
            color: 'text-yellow-600',
            bg: 'bg-yellow-50',
            title: 'Data Retention',
            content: `• Account data (email, name): Retained as long as your account is active. Deleted within 30 days of account deletion request.\n• Loan contact data: Retained as long as the loan record exists. Deleted when you delete the loan or delete your account.\n• Anonymous analytics: Retained for up to 12 months in aggregated, anonymized form.\n• Local financial data: Controlled entirely by you — deleted when you clear app data or uninstall.`
        },
        {
            id: '10',
            icon: 'pi-shield',
            color: 'text-green-600',
            bg: 'bg-green-50',
            title: "Children's Privacy",
            content: `Flowllet is not intended for use by children under the age of 13 (or 16 in some jurisdictions under GDPR). We do not knowingly collect personal information from children. If you believe your child has created an account or provided personal information, please contact us immediately at privacy@syscomatic.com and we will delete the information promptly.`
        },
        {
            id: '11',
            icon: 'pi-refresh',
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            title: 'Changes to This Policy',
            content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of significant changes by:\n\n• Displaying a notice within the app\n• Sending an email to your registered address\n\nThe "Last Updated" date at the top of this page will always reflect the most recent revision. Continued use of the app after changes constitutes your acceptance of the updated policy.`
        },
    ];
}
