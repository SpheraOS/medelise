import type { Metadata } from 'next';
import Image from 'next/image';

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

const JOBS = [
    {
        title: 'Asistent Medical Generalist',
        type: 'Full Time',
        location: 'Bucuresti',
        salary: '7K - 9K Lei',
        experience: '5-6 Years',
        daysRemaining: 4,
    },
    {
        title: 'Ambulantier',
        type: 'Full Time',
        location: 'Constanta',
        salary: '5K-6K',
        experience: '2-3 Years',
        daysRemaining: 4,
    },
    {
        title: 'Medic de Familie',
        type: 'Part Time',
        location: 'Bucuresti',
        salary: '9K-12K',
        experience: '5-6 Years',
        daysRemaining: 5,
    },
    {
        title: 'Asistent Coordonator',
        type: 'Full Time',
        location: 'Remote',
        salary: '30K-35K',
        experience: '4 Years',
        daysRemaining: 2,
    },
];

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

export default function Cariera() {
    return (
        <>
            <main className="cariera-page">
                {/* ── Hero Section ── */}
                <section className="cariera-hero">
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
                <section className="jobs-section">
                    {/* Header */}
                    <div className="jobs-header">
                        <h2 className="jobs-title">Joburi disponibile</h2>
                        <p className="jobs-desc">
                            Medvita oferă servicii în următoarele domenii: medicină de prevenție,
                            medicină generală, medicină de urgență și kinetoterapie.
                            <br /><br />
                            Te invităm să explorezi diversele noastre serviciile medicale. Facem
                            tot posibilul să oferim cât mai multe servicii, așa încât sa facem
                            totul accesibil pentru pacienții noștri.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="jobs-grid">
                        {JOBS.map((job, i) => (
                            <article key={i} className="job-card">
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
                                        <span className="job-meta-item">
                                            <Image
                                                src="/icons/icon employee/Calendar.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                                aria-hidden="true"
                                            />
                                            {job.daysRemaining} Days remaining
                                        </span>
                                        <Image
                                            src="/icons/icon employee/Logo (Replace with your own)/Black Solid/icon 1.svg"
                                            alt="Medvita"
                                            width={36}
                                            height={20}
                                            className="job-logo"
                                        />
                                    </div>
                                </div>

                                {/* CTA */}
                                <a href="/contact" className="job-apply-btn">
                                    <span>Aplică acum</span>
                                    <ArrowRight />
                                </a>
                            </article>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <a href="/cariera#joburi" className="jobs-view-all-btn">
                        <span>Vezi toate postările</span>
                        <ArrowRight />
                    </a>
                </section>
            </main>

            <style jsx>{`
                /* ═══════════════════════════════════
                   GLOBAL — Montserrat for entire page
                   ═══════════════════════════════════ */
                .cariera-page,
                .cariera-page * {
                    font-family: var(--font-montserrat), 'Montserrat', sans-serif;
                }

                .cariera-page {
                    min-height: 100vh;
                }

                /* ═══════════════════════════════════
                   §1  HERO SECTION — DESKTOP
                   ═══════════════════════════════════ */
                .cariera-hero {
                    width: 100%;
                    padding: 0 112px;
                    background: white;
                }

                .cariera-hero-inner {
                    padding: 48px 0;
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
                    width: 596px;
                    flex-shrink: 0;
                    color: var(--color-primary, #213170);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                    word-wrap: break-word;
                }

                .cariera-hero-desc {
                    flex: 1;
                    color: var(--color-primary, #213170);
                    font-size: 20px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                    max-width: 556px;
                    word-wrap: break-word;
                }

                .cariera-hero-divider {
                    width: 100%;
                    height: 1px;
                    background: var(--color-baby-blue, #BDE0FF);
                }

                /* ═══════════════════════════════════
                   §2  JOBS SECTION — DESKTOP
                   ═══════════════════════════════════ */
                .jobs-section {
                    width: 100%;
                    padding: 16px 112px 64px;
                    background: white;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                }

                .jobs-header {
                    width: 100%;
                    max-width: 1216px;
                    padding-top: 16px;
                    padding-bottom: 48px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 12px;
                    text-align: center;
                }

                .jobs-title {
                    color: var(--color-primary, #213170);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                }

                .jobs-desc {
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                    max-width: 800px;
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
                    outline: 1px solid #E4E7EC;
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
                    color: var(--color-primary, #213170);
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }

                .job-type {
                    display: flex;
                    align-items: center;
                    gap: 4px;
                    color: var(--color-vivid-orange, #FD5D16);
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
                    color: var(--color-primary, #213170);
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    white-space: nowrap;
                }

                .job-divider {
                    width: 100%;
                    height: 1px;
                    background: #E4E7EC;
                }

                .job-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                /* Apply button */
                .job-apply-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background: var(--color-primary, #213170);
                    color: white;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 24px;
                    text-decoration: none;
                    transition: background 0.2s, transform 0.15s;
                }

                .job-apply-btn:hover {
                    background: #1a2759;
                    transform: translateY(-1px);
                }

                /* "Vezi toate postările" CTA */
                .jobs-view-all-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 10px 20px;
                    background: var(--color-primary, #213170);
                    color: white;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 24px;
                    text-decoration: none;
                    transition: background 0.2s, transform 0.15s;
                }

                .jobs-view-all-btn:hover {
                    background: #1a2759;
                    transform: translateY(-1px);
                }

                /* ═══════════════════════════════════
                   §3  TABLET (max 1024px)
                   704px centered, single-column cards
                   ═══════════════════════════════════ */
                @media (max-width: 1024px) {
                    .cariera-hero {
                        padding: 0;
                        display: flex;
                        justify-content: center;
                    }

                    .cariera-hero-inner {
                        width: 704px;
                        max-width: 100%;
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
                        width: 100%;
                        max-width: 596px;
                    }

                    .cariera-hero-desc {
                        max-width: 100%;
                    }

                    .jobs-section {
                        padding: 64px 0;
                        align-items: center;
                    }

                    .jobs-header {
                        width: 704px;
                        max-width: 100%;
                        padding-top: 16px;
                        padding-bottom: 48px;
                    }

                    .jobs-grid {
                        width: 704px;
                        max-width: 100%;
                        grid-template-columns: 1fr;
                        gap: 24px;
                    }

                    .job-card {
                        width: 100%;
                    }
                }

                /* ═══════════════════════════════════
                   §4  MOBILE (max 480px)
                   343px, compact
                   ═══════════════════════════════════ */
                @media (max-width: 480px) {
                    .cariera-hero {
                        padding: 0 16px;
                    }

                    .cariera-hero-inner {
                        width: 343px;
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
                        padding: 40px 16px;
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

                    .jobs-view-all-btn {
                        width: 100%;
                    }
                }
            `}</style>
        </>
    );
}
