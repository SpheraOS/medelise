'use client';

import Image from 'next/image';

/* ───────────────────────────────────────
   Data — static for now, can be replaced with
   API / CMS later
   ─────────────────────────────────────── */
interface JobDetail {
    category: string;
    title: string;
    overviewTitle: string;
    overviewBody: string;
    profileTitle: string;
    profileBody: string;
    tasksTitle: string;
    tasksBody: string;
    benefitsTitle: string;
    benefitsBody: string;
    closingText: string;
    sidebar: {
        companyName: string;
        locations: string[];
        website: string;
        jobType: string;
        salary: string;
        workLocation: string;
        datePosted: string;
    };
}

const JOBS: Record<string, JobDetail> = {
    'asistent-medical-generalist': {
        category: 'Servicii Medicale la Domiciliu',
        title: 'Asistent medical Generalist',
        overviewTitle: 'Company Overview:',
        overviewBody:
            'Suntem o companie medicală orientată spre viitor, cu misiunea de a oferi îngrijire medicală de calitate, direct la pacient acasă.\nCu ajutorul platformei noastre digitale – careOS – organizăm, planificăm și livrăm servicii medicale personalizate, eficiente și empatice.\nCredem că adevărata schimbare în sănătate începe cu oameni bine pregătiți, bine plătiți și profund motivați.',
        tasksTitle: 'Ce vei face concret?',
        tasksBody:
            'Vei efectua vizite medicale la domiciliul pacienților (evaluări, tratamente, monitorizare post-operatorie etc.)\nVei colabora cu medici specialiști pentru planul de îngrijire personalizat\nVei introduce date clinice și observații direct în aplicația Medvita (tablete oferite de companie)\nVei educa pacienții și aparținătorii în privința tratamentului și recuperării\nVei avea un program flexibil, stabilit împreună cu coordonatorul regional',
        profileTitle: 'Profilul tău ideal:',
        profileBody:
            'Ești asistent medical generalist, cu diplomă recunoscută (minim 2 ani experiență)\nDeții Certificat de Membru OAMGMAMR și aviz anual valabil\nAi carnet de conducere categoria B (avantaj important)\nÎți place să lucrezi autonom și să iei decizii rapide în teren\nEști empatic, atent la detalii și vrei să faci diferența',
        benefitsTitle: 'Ce îți oferim:',
        benefitsBody:
            'Pachet salarial competitiv (fix + bonusuri per caz + diurne)\nTraininguri periodice (inclusiv cu parteneri internaționali)\nTehnologie modernă – totul digitalizat (fără hârtii, fără pierdere de timp)\nEchipamente și consumabile medicale de calitate, asigurate de companie\nProgram de lucru flexibil, adaptabil stilului tău de viață\nPosibilitatea de a avansa spre roluri de coordonare sau specializare',
        closingText:
            'Dacă ești gata să redai demnitatea îngrijirii medicale și vrei să lucrezi într-un sistem care respectă profesioniștii, te așteptăm în echipa Medvita.',
        sidebar: {
            companyName: 'Medvita Health Solutions',
            locations: ['București – Ilfov', 'Cluj', 'Timisoara'],
            website: 'www.medvita.ro',
            jobType: 'Full Time / Part Time',
            salary: '3K- 9K Lei',
            workLocation: 'Teren',
            datePosted: '27.04.2025',
        },
    },
};

/* ─── Mail icon for "Aplica aici" button ─── */
function MailIcon() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M3 7C3 5.89543 3.89543 5 5 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V7Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3 7L12 13L21 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/* ─── Helper: render \n as <br/> ─── */
function TextBlock({ text }: { text: string }) {
    return (
        <>
            {text.split('\n').map((line, i, arr) => (
                <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                </span>
            ))}
        </>
    );
}

/* ─── Sidebar card (reused in desktop sidebar & tablet inline) ─── */
function SidebarCard({ job, className }: { job: JobDetail; className?: string }) {
    return (
        <div className={`job-sidebar-card ${className || ''}`}>
            {/* Company logo + name */}
            <div className="sidebar-company">
                <div className="sidebar-logo-wrap">
                    <Image
                        src="/icons/icon employee/Logo (Replace with your own)/Black Solid/icon 1.svg"
                        alt="Medvita"
                        width={36}
                        height={20}
                    />
                </div>
                <h3 className="sidebar-company-name">{job.sidebar.companyName}</h3>
            </div>

            {/* Location badges */}
            <div className="sidebar-badges">
                {job.sidebar.locations.map((loc, i) => (
                    <span key={i} className="sidebar-badge">
                        {loc}
                    </span>
                ))}
            </div>

            {/* Apply button */}
            <a href="/contact" className="sidebar-apply-btn">
                <span>Aplica aici</span>
                <MailIcon />
            </a>

            {/* Info rows */}
            <div className="sidebar-info">
                <div className="sidebar-info-item">
                    <span className="sidebar-info-label">Website Companie</span>
                    <a
                        href="https://www.medvita.ro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sidebar-info-value"
                    >
                        {job.sidebar.website}
                    </a>
                </div>
                <div className="sidebar-info-item">
                    <span className="sidebar-info-label">Tip job:</span>
                    <span className="sidebar-info-value">{job.sidebar.jobType}</span>
                </div>
                <div className="sidebar-info-item">
                    <span className="sidebar-info-label">Salariu</span>
                    <span className="sidebar-info-value">{job.sidebar.salary}</span>
                </div>
                <div className="sidebar-info-item">
                    <span className="sidebar-info-label">Locatie</span>
                    <span className="sidebar-info-value">{job.sidebar.workLocation}</span>
                </div>
                <div className="sidebar-info-item">
                    <span className="sidebar-info-label">Data Postare</span>
                    <span className="sidebar-info-value">{job.sidebar.datePosted}</span>
                </div>
            </div>
        </div>
    );
}

export default function JobDetailContent({ slug }: { slug: string }) {
    const job = JOBS[slug];

    if (!job) {
        return (
            <div style={{ padding: '100px 20px', textAlign: 'center', fontFamily: 'Montserrat, sans-serif' }}>
                <h1 style={{ color: '#213170', fontSize: 36 }}>Job negăsit</h1>
                <p style={{ color: '#213170', fontSize: 18, marginTop: 16 }}>
                    Poziția căutată nu a fost găsită.
                </p>
                <a
                    href="/cariera"
                    style={{
                        display: 'inline-block',
                        marginTop: 24,
                        padding: '10px 20px',
                        background: '#213170',
                        color: 'white',
                        borderRadius: 8,
                        textDecoration: 'none',
                        fontWeight: 600,
                    }}
                >
                    Înapoi la Carieră
                </a>
            </div>
        );
    }

    return (
        <>
            <main className="job-detail-page">
                <div className="job-detail-container">
                    <div className="job-detail-row">
                        {/* ── LEFT / MAIN CONTENT ── */}
                        <div className="job-detail-main">
                            {/* Header */}
                            <div className="job-detail-header">
                                <h2 className="job-detail-category">{job.category}</h2>
                                <h1 className="job-detail-title">{job.title}</h1>

                                {/* Social buttons */}
                                <div className="job-social-row">
                                    <a
                                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="job-social-btn"
                                    >
                                        <Image
                                            src="/icons/icon employee/Facebook.svg"
                                            alt="Facebook"
                                            width={20}
                                            height={20}
                                        />
                                        <span>Share</span>
                                    </a>
                                    <a
                                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(job.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="job-social-btn"
                                    >
                                        <Image
                                            src="/icons/icon employee/twitter.svg"
                                            alt="Twitter"
                                            width={20}
                                            height={20}
                                        />
                                        <span>Tweet</span>
                                    </a>
                                    <button
                                        className="job-social-btn"
                                        onClick={() => {
                                            if (typeof navigator !== 'undefined') {
                                                navigator.clipboard.writeText(window.location.href);
                                            }
                                        }}
                                    >
                                        <Image
                                            src="/icons/icon employee/Copy.svg"
                                            alt="Copy"
                                            width={20}
                                            height={20}
                                        />
                                        <span>Copy</span>
                                    </button>
                                </div>
                            </div>

                            {/* ── Sidebar card (INLINE version — visible tablet/mobile only) ── */}
                            <SidebarCard job={job} className="sidebar-inline" />

                            {/* Content sections */}
                            <div className="job-detail-body">
                                <div className="job-detail-section">
                                    <span className="job-section-heading">{job.overviewTitle}</span>
                                    <br />
                                    <span className="job-section-text">
                                        <TextBlock text={job.overviewBody} />
                                    </span>
                                </div>

                                <div className="job-detail-section">
                                    <span className="job-section-heading">{job.tasksTitle}</span>
                                    <br />
                                    <span className="job-section-text">
                                        <TextBlock text={job.tasksBody} />
                                    </span>
                                </div>

                                <div className="job-detail-section">
                                    <span className="job-section-heading">{job.profileTitle}</span>
                                    <br />
                                    <span className="job-section-text">
                                        <TextBlock text={job.profileBody} />
                                    </span>
                                </div>

                                <div className="job-detail-section">
                                    <span className="job-section-heading">{job.benefitsTitle}</span>
                                    <br />
                                    <span className="job-section-text">
                                        <TextBlock text={job.benefitsBody} />
                                    </span>
                                </div>

                                <p className="job-closing-text">{job.closingText}</p>
                            </div>

                            {/* Apply button (bottom) */}
                            <a href="/contact" className="job-apply-main-btn">
                                <span>Aplica aici</span>
                                <MailIcon />
                            </a>
                        </div>

                        {/* ── RIGHT SIDEBAR (desktop only) ── */}
                        <aside className="job-detail-sidebar">
                            <SidebarCard job={job} className="sidebar-desktop" />
                        </aside>
                    </div>
                </div>
            </main>

            <style jsx>{`
                /* ═══════════════════════════════════
                   FONT
                   ═══════════════════════════════════ */
                .job-detail-page,
                .job-detail-page * {
                    font-family: var(--font-montserrat), 'Montserrat', sans-serif;
                }

                .job-detail-page {
                    min-height: 100vh;
                    background: white;
                }

                /* ═══════════════════════════════════
                   DESKTOP LAYOUT (>1024px)
                   Two-column: left content + right sidebar
                   ═══════════════════════════════════ */
                .job-detail-container {
                    width: 100%;
                    padding: 64px 112px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .job-detail-row {
                    width: 100%;
                    max-width: 1216px;
                    padding: 32px 0;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 32px;
                }

                /* Left column */
                .job-detail-main {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .job-detail-header {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .job-detail-category {
                    color: var(--color-primary, #213170);
                    font-size: 24px;
                    font-weight: 600;
                    line-height: 32px;
                    margin: 0;
                }

                .job-detail-title {
                    color: var(--color-primary, #213170);
                    font-size: 36px;
                    font-weight: 600;
                    line-height: 44px;
                    margin: 0;
                }

                /* Social buttons */
                .job-social-row {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .job-social-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    padding: 10px 20px;
                    border-radius: 8px;
                    outline: 1px solid #CED2DA;
                    outline-offset: -1px;
                    background: white;
                    color: #344051;
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 20px;
                    text-decoration: none;
                    cursor: pointer;
                    border: none;
                    font-family: inherit;
                    transition: background 0.15s;
                }

                .job-social-btn:hover {
                    background: #f5f6f8;
                }

                /* ── Inline sidebar: HIDDEN on desktop ── */
                :global(.sidebar-inline) {
                    display: none !important;
                }

                /* Body content */
                .job-detail-body {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .job-detail-section {
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    line-height: 28px;
                    word-wrap: break-word;
                }

                .job-section-heading {
                    font-weight: 600;
                }

                .job-section-text {
                    font-weight: 400;
                }

                .job-closing-text {
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    font-weight: 400;
                    line-height: 28px;
                    margin: 0;
                }

                /* Apply CTA */
                .job-apply-main-btn {
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
                    align-self: flex-start;
                    transition: background 0.2s, transform 0.15s;
                }

                .job-apply-main-btn:hover {
                    background: #1a2759;
                    transform: translateY(-1px);
                }

                /* ── RIGHT SIDEBAR (desktop) ── */
                .job-detail-sidebar {
                    width: 375px;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                /* ── Shared sidebar card styles ── */
                :global(.job-sidebar-card) {
                    padding: 24px;
                    background: white;
                    border-radius: 10px;
                    outline: 1px solid #E4E7EC;
                    outline-offset: -1px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;
                }

                :global(.sidebar-company) {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 8px;
                    width: 100%;
                }

                :global(.sidebar-logo-wrap) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                :global(.sidebar-company-name) {
                    text-align: center;
                    color: var(--color-primary, #213170);
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }

                /* Location badges */
                :global(.sidebar-badges) {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 8px;
                }

                :global(.sidebar-badge) {
                    padding: 2px 10px;
                    background: var(--color-primary, #213170);
                    border-radius: 8px;
                    color: white;
                    font-size: 14px;
                    font-weight: 500;
                    line-height: 20px;
                    text-align: center;
                }

                /* Apply button (sidebar) */
                :global(.sidebar-apply-btn) {
                    width: 100%;
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
                    transition: background 0.2s;
                }

                :global(.sidebar-apply-btn:hover) {
                    background: #1a2759;
                }

                /* Info rows — VERTICAL on desktop */
                :global(.sidebar-info) {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                :global(.sidebar-info-item) {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                :global(.sidebar-info-label) {
                    color: var(--color-primary, #213170);
                    font-size: 14px;
                    font-weight: 600;
                    line-height: 20px;
                }

                :global(.sidebar-info-value) {
                    color: #FE5D16;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 20px;
                    text-decoration: none;
                }

                :global(.sidebar-info-value:hover) {
                    text-decoration: underline;
                }

                /* ═══════════════════════════════════
                   TABLET (max 1024px)
                   704px single column, sidebar card inline
                   above content, info items horizontal
                   ═══════════════════════════════════ */
                @media (max-width: 1024px) {
                    .job-detail-container {
                        padding: 32px 32px;
                    }

                    .job-detail-row {
                        flex-direction: column;
                        align-items: center;
                        gap: 0;
                        max-width: 704px;
                    }

                    .job-detail-main {
                        width: 100%;
                        max-width: 704px;
                        gap: 24px;
                    }

                    /* Hide desktop sidebar, show inline card */
                    .job-detail-sidebar {
                        display: none;
                    }

                    :global(.sidebar-inline) {
                        display: flex !important;
                    }

                    /* Info items go HORIZONTAL on tablet */
                    :global(.sidebar-inline .sidebar-info) {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: flex-start;
                        padding: 0 8px;
                        gap: 8px;
                    }
                }

                /* ═══════════════════════════════════
                   MOBILE (max 480px) — 375px viewport
                   343px content (16px padding each side)
                   ═══════════════════════════════════ */
                @media (max-width: 480px) {
                    .job-detail-container {
                        padding: 16px;
                    }

                    .job-detail-row {
                        max-width: 375px;
                        padding: 16px 0;
                    }

                    .job-detail-main {
                        gap: 24px;
                    }

                    /* Header: tighter gaps */
                    .job-detail-header {
                        gap: 12px;
                    }

                    .job-detail-category {
                        font-size: 14px;
                        line-height: 20px;
                    }

                    .job-detail-title {
                        font-size: 18px;
                        line-height: 28px;
                    }

                    /* Social buttons: equal width, compact */
                    .job-social-row {
                        gap: 16px;
                        width: 100%;
                    }

                    .job-social-btn {
                        flex: 1 1 0;
                        padding: 8px 16px;
                        font-size: 14px;
                    }

                    /* Body sections: tighter gap, smaller text */
                    .job-detail-body {
                        gap: 16px;
                    }

                    .job-detail-section {
                        font-size: 14px;
                        line-height: 20px;
                    }

                    .job-section-heading {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    .job-closing-text {
                        font-size: 16px;
                        line-height: 24px;
                    }

                    /* Apply button: full width */
                    .job-apply-main-btn {
                        width: 100%;
                        align-self: stretch;
                    }

                    /* Sidebar card: company name smaller */
                    :global(.sidebar-inline .sidebar-company-name) {
                        font-size: 18px;
                        line-height: 28px;
                    }

                    /* Info items stack vertically on mobile */
                    :global(.sidebar-inline .sidebar-info) {
                        flex-direction: column;
                        padding: 0;
                    }
                }
            `}</style>
        </>
    );
}
