import type { Metadata } from 'next';
import JobDetailContent from '@/components/cariera/JobDetailContent';
import { JOBS, JOB_SLUGS } from '@/components/cariera/jobData';

type Props = {
    params: Promise<{ slug: string }>;
};

/* Pre-render all known job pages at build time */
export function generateStaticParams() {
    return JOB_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const job = JOBS[slug];

    /* Use actual job title when available, otherwise derive from slug */
    const title = job
        ? job.title
        : slug
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
