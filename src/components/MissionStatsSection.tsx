'use client';

import StatCard from '@/components/ui/StatCard';

/* ── Mission Stats Section ─────────────────────────────────────── */

const STATS = [
    { label: 'Ani de experienta', value: '10' },
    { label: 'Membri', value: '120+' },
    { label: 'Programari', value: '1000+' },
    { label: 'Pacienti multumiti', value: '98%' },
] as const;

export default function MissionStatsSection() {
    return (
        <>
            <style jsx>{`
                /* ═══════════════════════════════════════
                   Desktop-first base (≥1025px)
                   ═══════════════════════════════════════ */

                .mission-section {
                    width: 100%;
                    background: white;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    display: inline-flex;
                }

                .mission-inner {
                    align-self: stretch;
                    padding-top: 80px;
                    padding-bottom: 80px;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    display: flex;
                }

                .mission-content {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                }

                .mission-text-block {
                    align-self: stretch;
                    padding-top: 16px;
                    padding-bottom: 64px;
                    background: white;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                }

                .mission-text-inner {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 36px;
                    display: flex;
                }

                .mission-text-group {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 12px;
                    display: flex;
                }

                .mission-heading {
                    align-self: stretch;
                    text-align: center;
                    color: var(--color-primary);
                    font-size: 36px;
                    font-family: var(--font-heading);
                    font-weight: 700;
                    line-height: 44px;
                    word-wrap: break-word;
                }

                .mission-description {
                    align-self: stretch;
                    text-align: center;
                    color: var(--color-primary);
                    font-size: 16px;
                    font-family: var(--font-heading);
                    font-weight: 500;
                    line-height: 24px;
                    word-wrap: break-word;
                }

                .mission-description--narrow {
                    align-self: stretch;
                    text-align: center;
                    color: var(--color-primary);
                    font-size: 16px;
                    font-family: var(--font-heading);
                    font-weight: 500;
                    line-height: 24px;
                    word-wrap: break-word;
                }

                .mission-stats-row {
                    align-self: stretch;
                    justify-content: center;
                    align-items: stretch;
                    gap: 32px;
                    display: inline-flex;
                }

                /* ═══════════════════════════════════════
                   Tablet (641px – 1024px)
                   ═══════════════════════════════════════ */

                @media (max-width: 1024px) {
                    .mission-inner {
                        padding-top: 64px;
                        padding-bottom: 64px;
                    }

                    .mission-content {
                        gap: 24px;
                    }

                    .mission-text-block {
                        padding-bottom: 48px;
                    }

                    .mission-text-group {
                        gap: 16px;
                    }

                    .mission-heading {
                        font-weight: 600;
                    }

                    .mission-description,
                    .mission-description--narrow {
                        font-size: 18px;
                        font-weight: 400;
                        line-height: 28px;
                    }

                    .mission-stats-row {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 32px;
                    }
                }

                /* ═══════════════════════════════════════
                   Mobile (≤640px)
                   ═══════════════════════════════════════ */

                @media (max-width: 640px) {
                    .mission-inner {
                        padding-top: 32px;
                        padding-bottom: 32px;
                    }

                    .mission-content {
                        padding-top: 48px;
                        padding-bottom: 48px;
                        gap: 24px;
                    }

                    .mission-text-block {
                        padding-top: 16px;
                        padding-bottom: 32px;
                    }

                    .mission-text-inner {
                        gap: 24px;
                    }

                    .mission-text-group {
                        gap: 16px;
                    }

                    .mission-heading {
                        font-size: 24px;
                        font-weight: 600;
                        line-height: 32px;
                    }

                    .mission-description,
                    .mission-description--narrow {
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 24px;
                        text-align: left;
                    }

                    .mission-stats-row {
                        display: flex;
                        flex-direction: column;
                        gap: 16px;
                    }
                }
            `}</style>

            <section className="mission-section section-padding">
                <div className="mission-inner">
                    <div className="mission-content">
                        {/* Text block */}
                        <div className="mission-text-block">
                            <div className="mission-text-inner">
                                <div className="mission-text-group">
                                    <h2 className="mission-heading">
                                        Vă doriți o viață sănătoasă și
                                        echilibrată?
                                    </h2>
                                    <p className="mission-description">
                                        La noi, sănătatea și bunăstarea ta
                                        sunt pe primul loc!
                                        <br />
                                        Oferim soluții personalizate de
                                        îngrijire medicală la domiciliu,
                                        adaptate nevoilor fiecărui pacient.
                                    </p>
                                    <p className="mission-description--narrow">
                                        Indiferent dacă ai nevoie de
                                        asistență pentru un membru al
                                        familiei, recuperare după o
                                        intervenție chirurgicală sau pur și
                                        simplu de sprijin pentru gestionarea
                                        unei afecțiuni cronice, echipa
                                        noastră de profesioniști calificați
                                        este aici pentru tine.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div className="mission-stats-row">
                            {STATS.map((stat) => (
                                <StatCard
                                    key={stat.label}
                                    label={stat.label}
                                    value={stat.value}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
