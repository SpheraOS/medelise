import type { Metadata } from 'next';
import CarieraContent from '@/components/cariera/CarieraContent';

export const metadata: Metadata = {
    title: 'Carieră',
    description:
        'Alătură-te echipei Medvita Health Solutions. Descoperă pozițiile deschise și construiește o carieră în domeniul medical.',
    openGraph: {
        title: 'Carieră · Medvita',
        description:
            'Alătură-te echipei Medvita. Poziții deschise în domeniul medical.',
    },
};

export default function Cariera() {
    return <CarieraContent />;
}
