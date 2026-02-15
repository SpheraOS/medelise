import type { Metadata } from 'next';
import ContactContent from '@/components/contact/ContactContent';

export const metadata: Metadata = {
    title: 'Contact',
    description:
        'Contactează echipa Medvita Health Solutions — formular de contact, telefon, email și program de lucru. Răspundem în 24h.',
    openGraph: {
        title: 'Contact · Medvita',
        description:
            'Contactează echipa Medvita — formular, telefon, email. Răspundem în 24h.',
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
