'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { JOBS, getDaysRemaining } from './jobData';

/* ─── Derive listing array from the single source of truth ─── */
const jobList = Object.entries(JOBS).map(([slug, job]) => ({
    slug,
    title: job.title,
    type: job.type,
    location: job.location,
    salary: job.salary,
    experience: job.experience,
    deadline: job.deadline,
}));

/* Right-arrow chevron for buttons */
function ArrowRight() {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M7.5 4.16667L13.3333 10L7.5 15.8333"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default function CarieraContent() {
    return (
        <>
            <main className="cariera-page">
                {/* ── Hero Section ── */}
                <section className="cariera-hero" aria-label="Carieră Hero">
                    <div className="cariera-hero-inner">
                        <div className="cariera-hero-content">
                            <div className="cariera-hero-text">
                                <h1 className="cariera-hero-title">
                                    „Începe-ți călătoria cu Medvita"
                                </h1>
                                <p className="cariera-hero-desc">
                                    Alătură-te Medvita și descoperă libertatea de a-ți organiza programul exact așa cum dorești!
                                    <br /><br />
                                    Noi înțelegem cât de important este echilibrul dintre viața profesională și cea personală, de aceea îți oferim flexibilitatea de a lucra exact atunci când îți dorești.
                                </p>
                            </div>
                            <div className="cariera-hero-divider" />
                        </div>
                    </div>
                </section>

                {/* ── Jobs Section ── */}
                <section className="jobs-section" id="joburi">
                    {/* Header */}
                    <div className="jobs-header">
                        <h2 className="jobs-title">Joburi disponibile</h2>
                        <p className="jobs-desc">
                            Construim echipe medicale de excelență în homecare și telemedicină. Dacă îți dorești un mediu profesional care pune accent pe inovație, flexibilitate și impactul real asupra pacienților, explorează pozițiile disponibile.
                        </p>
                    </div>

                    {/* Empty state */}
                    {jobList.length === 0 ? (
                        <div className="jobs-empty">
                            <p className="jobs-empty-text">
                                Momentan nu avem poziții deschise. Revino în curând sau trimite-ne un CV la pagina de contact!
                            </p>
                            <Link href="/contact">
                                <Button variant="primary">Contactează-ne</Button>
                            </Link>
                        </div>
                    ) : (
                        <>
                            {/* Cards Grid */}
                            <div className="jobs-grid">
                                {jobList.map((job) => {
                                    const daysLeft = getDaysRemaining(job.deadline);
                                    const isExpired = daysLeft === 0;

                                    return (
                                        <article key={job.slug} className="job-card">
                                            <div className="job-card-body">
                                                {/* Title + Type */}
                                                <div className="job-row-title">
                                                    <h3 className="job-name">{job.title}</h3>
                                                    <span className="job-type">
                                                        <Image
                                                            src="/icons/icon employee/Flag.svg"
                                                            alt=""
                                                            width={20}
                                                            height={20}
                                                            aria-hidden="true"
                                                        />
                                                        {job.type}
                                                    </span>
                                                </div>

                                                {/* Meta: Location · Salary · Experience */}
                                                <div className="job-meta">
                                                    <span className="job-meta-item">
                                                        <Image
                                                            src="/icons/icon employee/Location Point.svg"
                                                            alt=""
                                                            width={20}
                                                            height={20}
                                                            aria-hidden="true"
                                                        />
                                                        {job.location}
                                                    </span>
                                                    <span className="job-meta-item">
                                                        <Image
                                                            src="/icons/icon employee/Money Dollar.svg"
                                                            alt=""
                                                            width={20}
                                                            height={20}
                                                            aria-hidden="true"
                                                        />
                                                        {job.salary}
                                                    </span>
                                                    <span className="job-meta-item">
                                                        <Image
                                                            src="/icons/icon employee/Suitcase.svg"
                                                            alt=""
                                                            width={20}
                                                            height={20}
                                                            aria-hidden="true"
                                                        />
                                                        {job.experience}
                                                    </span>
                                                </div>

                                                {/* Divider */}
                                                <div className="job-divider" />

                                                {/* Footer: Days remaining + Logo */}
                                                <div className="job-footer">
                                                    <span className={`job-meta-item ${isExpired ? 'job-expired' : ''}`}>
                                                        <Image
                                                            src="/icons/icon employee/Calendar.svg"
                                                            alt=""
                                                            width={20}
                                                            height={20}
                                                            aria-hidden="true"
                                                        />
                                                        {isExpired
                                                            ? 'Expirat'
                                                            : `${daysLeft} ${daysLeft === 1 ? 'zi rămasă' : 'zile rămase'}`}
                                                    </span>
                                                    <Image
                                                        src="/icons/icon employee/Logo (Replace with your own)/Black Solid/icon 1.svg"
                                                        alt="Logo Medvita Health Solutions"
                                                        width={36}
                                                        height={20}
                                                        className="job-logo"
                                                    />
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <Link href={`/cariera/${job.slug}`}>
                                                <Button variant="primary" iconRight={<ArrowRight />}>
                                                    Aplică acum
                                                </Button>
                                            </Link>
                                        </article>
                                    );
                                })}
                            </div>

                            {/* Bottom CTA */}
                            <Link href="/cariera#joburi">
                                <Button variant="primary" iconRight={<ArrowRight />}>
                                    Vezi toate postările
                                </Button>
                            </Link>
                        </>
                    )}
                </section>
            </main>

            <style jsx>{`
                /* ═══════════════════════════════════
                   GLOBAL — Font inheritance
                   ═══════════════════════════════════ */
                .cariera-page {
                    font-family: var(--font-heading);
                    min-height: 100vh;
                }

                /* ═══════════════════════════════════
                   §1  HERO SECTION — DESKTOP
                   ═══════════════════════════════════ */
                .cariera-hero {
                    width: 100%;
                    padding: 0 var(--space-section-px-lg);
                    background: white;
                }

                .cariera-hero-inner {
                    margin: 0 auto;
                    padding: var(--space-12) 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                .cariera-hero-content {
                    width: 100%;
                    padding: 40px 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 32px;
                }

                .cariera-hero-text {
                    width: 100%;
                    padding: 16px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    gap: 32px;
                }

                .cariera-hero-title {
                    max-width: 596px;
                    width: 100%;
                    flex-shrink: 0;
                    color: var(--color-primary);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                    word-wrap: break-word;
                }

                .cariera-hero-desc {
                    flex: 1;
                    color: var(--color-primary);
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                    word-wrap: break-word;
                }

                .cariera-hero-divider {
                    width: 100%;
                    height: 1px;
                    background: var(--color-secondary);
                }

                /* ═══════════════════════════════════
                   §2  JOBS SECTION — DESKTOP
                   ═══════════════════════════════════ */
                .jobs-section {
                    width: 100%;
                    padding: var(--space-4) var(--space-section-px-lg) var(--space-16);
                    background: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: var(--space-6);
                }

                .jobs-header {
                    width: 100%;
                    padding-top: var(--space-4);
                    padding-bottom: var(--space-12);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    text-align: center;
                }

                .jobs-title {
                    color: var(--color-primary);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                }

                .jobs-desc {
                    color: var(--color-primary);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                    max-width: 800px;
                }

                /* ── Empty state ── */
                .jobs-empty {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                    padding: 48px 24px;
                    text-align: center;
                }

                .jobs-empty-text {
                    color: var(--color-text-secondary);
                    font-size: 18px;
                    line-height: 28px;
                    max-width: 500px;
                    margin: 0;
                }

                /* ── Cards Grid: 2×2 on desktop ── */
                .jobs-grid {
                    width: 100%;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 32px;
                }

                .job-card {
                    padding: 24px;
                    background: white;
                    overflow: hidden;
                    border-radius: 8px;
                    outline: 1px solid var(--color-surface-border);
                    outline-offset: -1px;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .job-card-body {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                /* Title row: name + type badge */
                .job-row-title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 16px;
                }

                .job-name {
                    flex: 1;
                    color: var(--color-primary);
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }

                .job-type {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    color: var(--color-accent);
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    white-space: nowrap;
                }

                /* Meta row: location · salary · experience */
                .job-meta {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .job-meta-item {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    color: var(--color-primary);
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    white-space: nowrap;
                }

                .job-expired {
                    color: var(--color-error, #dc2626);
                    font-weight: 500;
                }

                .job-divider {
                    width: 100%;
                    height: 1px;
                    background: var(--color-surface-border);
                }

                .job-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                /* ═══════════════════════════════════
                   §3  TABLET (max 1024px)
                   Single-column cards, fluid width
                   ═══════════════════════════════════ */
                @media (max-width: 1024px) {
                    .cariera-hero {
                        padding: 0 var(--space-section-px-md);
                    }

                    .cariera-hero-inner {
                        max-width: 100%;
                        width: 100%;
                        padding: 64px 0;
                    }

                    .cariera-hero-content {
                        padding: 40px 0;
                        gap: 32px;
                    }

                    .cariera-hero-text {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 32px;
                        padding: 0;
                    }

                    .cariera-hero-title {
                        max-width: 596px;
                    }


                    .jobs-section {
                        padding: var(--space-16) var(--space-section-px-md);
                        align-items: center;
                    }

                    .jobs-header {
                        width: 100%;
                        padding-top: 16px;
                        padding-bottom: 48px;
                    }

                    .jobs-grid {
                        width: 100%;
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .job-card {
                        width: 100%;
                    }
                }

                /* ═══════════════════════════════════
                   §4  MOBILE (max 480px)
                   Compact layout
                   ═══════════════════════════════════ */
                @media (max-width: 480px) {
                    .cariera-hero {
                        padding: 0 var(--space-section-px-sm);
                    }

                    .cariera-hero-inner {
                        max-width: 100%;
                        padding: 48px 0;
                    }

                    .cariera-hero-content {
                        padding: 0;
                        gap: 16px;
                    }

                    .cariera-hero-text {
                        gap: 16px;
                    }

                    .cariera-hero-title {
                        font-size: 18px;
                        font-weight: 600;
                        line-height: 28px;
                    }

                    .cariera-hero-desc {
                        font-size: 16px;
                        font-weight: 500;
                        line-height: 24px;
                    }

                    .jobs-section {
                        padding: var(--space-10) var(--space-section-px-sm);
                    }

                    .jobs-header {
                        width: 100%;
                        padding-bottom: 32px;
                    }

                    .jobs-title {
                        font-size: 24px;
                        line-height: 32px;
                    }

                    .jobs-desc {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .jobs-grid {
                        width: 100%;
                    }

                    .job-card {
                        padding: 16px;
                    }

                    .job-row-title {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 8px;
                    }

                    .job-meta {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 8px;
                    }
                }
            `}</style>
        </>
    );
}
