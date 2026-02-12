'use client';

import Image from 'next/image';
import FeatureCard from '@/components/ui/FeatureCard';

/* ── Why Choose Us Section ─────────────────────────────────────── */

const ALL_CARDS = [
    {
        title: 'Profesionalism Garantat',
        description:
            'Medicii noștri sunt atent selecționați, cu experiență dovedită în îngrijirea medicală la domiciliu.\nCalitate fără compromis.',
        elevated: true,
    },
    {
        title: 'Servicii medicale acasă',
        description:
            'Consultații, investigații și tratamente – direct la tine acasă. Eliminăm timpul pierdut și stresul deplasărilor.',
        elevated: true,
    },
    {
        title: 'Prețuri accesibile și clare',
        description:
            'Costuri transparente, fără taxe ascunse. Ai mereu control asupra bugetului tău pentru sănătate.',
        elevated: false,
    },
    {
        title: 'Programări Flexibile',
        description:
            'Ne adaptăm programului tău. Poți alege ziua și ora convenabilă pentru vizita medicală.',
        elevated: false,
    },
    {
        title: 'Acces Digital la Date Medicale',
        description:
            'Tot istoricul medical, recomandările și programările tale – disponibile online prin platforma careOS.',
        elevated: false,
    },
    {
        title: 'Transparență Completă',
        description:
            'Știi din start ce servicii primești și cât costă. Comunicăm deschis și profesionist la fiecare pas.',
        elevated: false,
    },
] as const;

/* Split for the 3-col desktop layout */
const LEFT_CARDS = ALL_CARDS.slice(0, 3);
const RIGHT_CARDS = ALL_CARDS.slice(3);

export default function WhyChooseUsSection() {
    return (
        <>
            <style jsx>{`
                /* ═══════════════════════════════════════
                   Desktop base (>1024px)
                   ═══════════════════════════════════════ */

                .why-section {
                    width: 100%;
                    padding-top: 32px;
                    padding-bottom: 64px;
                    background: white;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    display: inline-flex;
                }

                .why-inner {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    display: flex;
                }

                .why-content {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 24px;
                    display: flex;
                }

                /* ─── Text block ──────────── */

                .why-text-block {
                    align-self: stretch;
                    padding-top: 16px;
                    padding-bottom: 64px;
                    background: white;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    display: flex;
                }

                .why-text-inner {
                    width: 100%;
                    max-width: 1216px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 12px;
                    display: flex;
                }

                .why-heading {
                    color: var(--color-primary);
                    font-size: 36px;
                    font-family: var(--font-heading);
                    font-weight: 700;
                    line-height: 44px;
                    word-wrap: break-word;
                    text-align: center;
                }

                .why-subtitle {
                    width: 100%;
                    max-width: 650px;
                    text-align: center;
                    color: var(--color-primary);
                    font-size: 18px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 28px;
                    word-wrap: break-word;
                }

                /* ─── 3-col layout (desktop) ── */

                .why-cols {
                    align-self: stretch;
                    flex: 1 1 0;
                    justify-content: space-between;
                    align-items: stretch;
                    display: inline-flex;
                    gap: 32px;
                }

                .why-card-col {
                    flex: 1 1 0;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 32px;
                    display: inline-flex;
                }

                /* Desktop: hide single-column layout */
                .why-cards-single {
                    display: none;
                }

                /* ─── Center image column (desktop) ─── */

                .why-image-col {
                    flex: 1 1 0;
                    align-self: stretch;
                    background: white;
                    overflow: hidden;
                    border-radius: 20px;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 16px;
                    display: inline-flex;
                }

                .why-image-wrapper {
                    align-self: stretch;
                    flex: 1 1 0;
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    padding-top: 36px;
                }

                .why-watch-image {
                    width: 341px;
                    height: 547px;
                    object-fit: contain;
                }

                .why-quote {
                    width: 354px;
                    padding: 24px;
                    background: white;
                    border-radius: 12px;
                    text-align: center;
                    color: var(--color-primary);
                    font-size: 24px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 32px;
                    word-wrap: break-word;
                    flex-shrink: 0;
                }

                /* ─── Watch banner (tablet/mobile) ─── */

                .why-watch-banner {
                    display: none;
                }

                /* ═══════════════════════════════════════
                   Tablet (641px – 1024px)
                   ═══════════════════════════════════════ */

                @media (max-width: 1024px) {
                    .why-section {
                        padding-top: 64px;
                        padding-bottom: 64px;
                    }

                    .why-text-block {
                        padding-bottom: 48px;
                    }

                    .why-text-inner {
                        gap: 12px;
                    }

                    .why-subtitle {
                        max-width: 384px;
                    }

                    /* Hide desktop 3-col layout */
                    .why-cols {
                        display: none;
                    }

                    /* Show single-column cards */
                    .why-cards-single {
                        align-self: stretch;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        gap: 32px;
                        display: flex;
                    }

                    .why-cards-list {
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: flex-start;
                        gap: 24px;
                        display: flex;
                        width: 100%;
                    }

                    /* Watch banner — horizontal layout */
                    .why-watch-banner {
                        align-self: stretch;
                        height: 320px;
                        position: relative;
                        background: white;
                        overflow: hidden;
                        border-radius: 20px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .why-watch-banner__image {
                        width: 198px;
                        height: 320px;
                        object-fit: contain;
                        position: absolute;
                        left: 64px;
                        top: 0;
                    }

                    .why-watch-banner__quote {
                        width: 253px;
                        height: 320px;
                        padding: 24px;
                        position: absolute;
                        right: 0;
                        top: 0;
                        background: rgba(255, 255, 255, 0);
                        backdrop-filter: blur(7.5px);
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        gap: 16px;
                    }

                    .why-watch-banner__quote-text {
                        flex: 1 1 0;
                        text-align: center;
                        color: var(--color-primary);
                        font-size: 24px;
                        font-family: var(--font-heading);
                        font-weight: 600;
                        line-height: 32px;
                        word-wrap: break-word;
                    }
                }

                /* ═══════════════════════════════════════
                   Mobile (≤640px)
                   ═══════════════════════════════════════ */

                @media (max-width: 640px) {
                    .why-section {
                        padding-top: 48px;
                        padding-bottom: 48px;
                    }

                    .why-text-block {
                        padding-bottom: 32px;
                    }

                    .why-text-inner {
                        gap: 8px;
                    }

                    .why-heading {
                        font-size: 32px;
                        line-height: 44px;
                    }

                    .why-subtitle {
                        max-width: 100%;
                    }

                    .why-cards-list {
                        gap: 16px;
                    }

                    /* Watch banner — vertical stacked */
                    .why-watch-banner {
                        height: auto;
                        border-radius: 20px;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        position: relative;
                    }

                    .why-watch-banner__image {
                        position: static;
                        width: 198px;
                        height: 320px;
                        object-fit: contain;
                    }

                    .why-watch-banner__quote {
                        position: static;
                        width: 100%;
                        height: auto;
                        padding: 24px 44px;
                        background: white;
                        backdrop-filter: blur(7.5px);
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        gap: 10px;
                    }

                    .why-watch-banner__quote-text {
                        text-align: left;
                        font-size: 20px;
                        line-height: 28px;
                    }
                }
            `}</style>

            <section className="why-section section-padding">
                <div className="why-inner">
                    <div className="why-content">
                        {/* Heading */}
                        <div className="why-text-block">
                            <div className="why-text-inner">
                                <h2 className="why-heading">
                                    De ce să alegi serviciile noastre?
                                </h2>
                                <p className="why-subtitle">
                                    Mai simplu. Mai rapid. Mai sigur.
                                    <br />
                                    Totul pentru sănătatea ta.
                                </p>
                            </div>
                        </div>

                        {/* ─── Desktop: 3-column layout ─── */}
                        <div className="why-cols">
                            <div className="why-card-col">
                                {LEFT_CARDS.map((card) => (
                                    <FeatureCard
                                        key={card.title}
                                        title={card.title}
                                        description={card.description}
                                        elevated={card.elevated}
                                    />
                                ))}
                            </div>

                            <div className="why-image-col">
                                <div className="why-image-wrapper">
                                    <Image
                                        className="why-watch-image"
                                        src="/iwatch_ultra_medelise.png"
                                        alt="Apple Watch Ultra cu aplicația MEDELISE"
                                        width={300}
                                        height={400}
                                    />
                                </div>
                                <div className="why-quote">
                                    {'„Smart alerts. Real care."'}
                                </div>
                            </div>

                            <div className="why-card-col">
                                {RIGHT_CARDS.map((card) => (
                                    <FeatureCard
                                        key={card.title}
                                        title={card.title}
                                        description={card.description}
                                        elevated={card.elevated}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* ─── Tablet/Mobile: single-column layout ─── */}
                        <div className="why-cards-single">
                            <div className="why-cards-list">
                                {/* Watch banner */}
                                <div className="why-watch-banner">
                                    <Image
                                        className="why-watch-banner__image"
                                        src="/iwatch_ultra_medelise.png"
                                        alt="Apple Watch Ultra cu aplicația MEDELISE"
                                        width={200}
                                        height={270}
                                    />
                                    <div className="why-watch-banner__quote">
                                        <span className="why-watch-banner__quote-text">
                                            {'„Smart alerts. Real care.”'}
                                        </span>
                                    </div>
                                </div>

                                {/* All 6 cards stacked */}
                                {ALL_CARDS.map((card) => (
                                    <FeatureCard
                                        key={card.title}
                                        title={card.title}
                                        description={card.description}
                                        elevated={card.elevated}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
