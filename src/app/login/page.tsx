import type { Metadata } from 'next';
import LoginPageContent from '@/components/login/LoginPageContent';

export const metadata: Metadata = {
    title: 'Autentificare',
    description:
        'Autentifică-te sau creează un cont Medvita pentru a accesa serviciile medicale premium și portalul de pacient.',
    openGraph: {
        title: 'Autentificare · Medvita',
        description:
            'Accesează contul tău Medvita sau creează unul nou.',
    },
};

export default function LoginPage() {
    return <LoginPageContent />;
}
