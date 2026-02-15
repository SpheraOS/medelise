import type { Metadata } from 'next';
import JobDetailContent from '@/components/cariera/JobDetailContent';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const title = slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');

    return {
        title: `${title} · Carieră`,
        description: `Aplică pentru poziția de ${title} la Medvita Health Solutions. Servicii medicale la domiciliu.`,
        openGraph: {
            title: `${title} · Carieră · Medvita`,
            description: `Poziție deschisă: ${title}. Alătură-te echipei Medvita.`,
        },
    };
}

export default async function JobDetailPage({ params }: Props) {
    const { slug } = await params;
    return <JobDetailContent slug={slug} />;
}
