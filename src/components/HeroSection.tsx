'use client';

import Image from 'next/image';

/* ── Hero Section ──────────────────────────────────────────────── */
export default function HeroSection() {
    return (
        <>
            <style jsx>{`
                /* ─── Fluid base ────────────────────── */
                .hero-section {
                    width: 100%;
                    padding-top: 32px;
                    padding-bottom: 32px;
                    background: white;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    display: inline-flex;
                }

                .hero-row {
                    align-self: stretch;
                    padding: 32px 0;
                    justify-content: space-between;
                    align-items: center;
                    display: inline-flex;
                }

                .hero-inner {
                    flex: 1 1 0;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 32px;
                    display: flex;
                }

                .hero-cols {
                    flex: 1 1 0;
                    justify-content: space-between;
                    align-items: center;
                    /* 32px @1024 → 64px @1440 */
                    gap: clamp(32px, calc(32px + (64 - 32) * (100vw - 1024px) / (1440 - 1024)), 64px);
                    display: flex;
                }

                .hero-text-col {
                    flex: 1 1 0;
                    padding-bottom: 40px;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: 64px;
                    display: inline-flex;
                }

                .hero-text-stack {
                    align-self: stretch;
                    position: relative;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: 48px;
                    display: flex;
                }



                .hero-text-group {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    /* 32px gap between eyebrow block, heading, subtitle */
                    gap: clamp(24px, calc(24px + (32 - 24) * (100vw - 375px) / (1440 - 375)), 32px);
                    display: flex;
                }

                /* ─── Eyebrow (stacked) ─────────────── */
                .hero-eyebrow-block {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 8px;
                    display: flex;
                }

                .hero-eyebrow-orange {
                    align-self: stretch;
                    text-align: center;
                    color: var(--color-accent);
                    /* 20px @375 → 32px @1440 */
                    font-size: clamp(20px, calc(20px + (32 - 20) * (100vw - 375px) / (1440 - 375)), 32px);
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 32px;
                    word-wrap: break-word;
                }

                .hero-eyebrow-brand {
                    align-self: stretch;
                    text-align: center;
                    color: var(--color-primary);
                    /* 16px @375 → 24px @1440 */
                    font-size: clamp(16px, calc(16px + (24 - 16) * (100vw - 375px) / (1440 - 375)), 24px);
                    font-family: var(--font-michroma);
                    font-weight: 400;
                    line-height: 32px;
                    word-wrap: break-word;
                }

                /* ─── Heading ───────────────────────── */
                .hero-heading {
                    align-self: stretch;
                    text-align: center;
                    color: var(--color-primary);
                    /* 28px @375 → 36px @1440 */
                    font-size: clamp(28px, calc(28px + (36 - 28) * (100vw - 375px) / (1440 - 375)), 36px);
                    font-family: var(--font-heading);
                    font-weight: 600;
                    /* 36px @375 → 44px @1440 */
                    line-height: clamp(36px, calc(36px + (44 - 36) * (100vw - 375px) / (1440 - 375)), 44px);
                    word-wrap: break-word;
                }

                /* ─── Subtitle ──────────────────────── */
                .hero-subtitle {
                    width: 100%;
                    max-width: 604px;
                    text-align: center;
                    color: var(--color-primary);
                    font-size: clamp(16px, calc(16px + (18 - 16) * (100vw - 375px) / (1440 - 375)), 18px);
                    font-family: var(--font-heading);
                    font-weight: 500;
                    line-height: clamp(24px, calc(24px + (28 - 24) * (100vw - 375px) / (1440 - 375)), 28px);
                    word-wrap: break-word;
                }

                /* ─── CTA ───────────────────────────── */
                .hero-cta {
                    width: 100%;
                    max-width: 592px;
                    padding: 12px 40px;
                    background: var(--color-primary);
                    border-radius: 10px;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    display: flex;
                    cursor: pointer;
                    border: none;
                    transition: background 0.2s ease;
                }
                .hero-cta:hover {
                    background: var(--color-primary-hover);
                }
                .hero-cta-text {
                    text-align: center;
                    justify-content: center;
                    display: flex;
                    flex-direction: column;
                    color: white;
                    font-size: 16px;
                    font-family: var(--font-cta);
                    font-weight: 500;
                    text-transform: capitalize;
                    line-height: 24px;
                    word-wrap: break-word;
                }

                /* ─── Watch column ──────────────────── */
                .hero-watch-col {
                    flex-shrink: 0;
                    padding: 8px;
                    align-items: center;
                    display: flex;
                }

                .hero-watch {
                    width: clamp(280px, calc(280px + (350 - 280) * (100vw - 1024px) / (1440 - 1024)), 350px);
                    height: clamp(440px, calc(440px + (550 - 440) * (100vw - 1024px) / (1440 - 1024)), 550px);
                    object-fit: contain;
                }

                /* ─── Tablet ≤1024px ────────────────── */
                @media (max-width: 1024px) {
                    .hero-watch-col {
                        display: none;
                    }
                    .hero-inner {
                        justify-content: center;
                    }
                    .hero-text-col {
                        align-items: center;
                        max-width: 704px;
                    }

                }

                /* ─── Mobile ≤640px ─────────────────── */
                @media (max-width: 640px) {
                    .hero-row {
                        padding: 16px 0;
                    }
                    .hero-text-col {
                        padding-bottom: 24px;
                        gap: 48px;
                    }
                    .hero-subtitle {
                        max-width: 100%;
                    }
                }
            `}</style>

            <section className="hero-section section-padding">
                <div className="hero-row">
                    <div className="hero-inner">
                        <div className="hero-cols">
                            {/* Text column */}
                            <div className="hero-text-col">
                                <div className="hero-text-stack">

                                    <div className="hero-text-group">
                                        {/* Eyebrow — stacked */}
                                        <div className="hero-eyebrow-block">
                                            <div className="hero-eyebrow-orange">
                                                Bine ai venit la,
                                            </div>
                                            <div className="hero-eyebrow-brand">
                                                MEDELISE
                                            </div>
                                        </div>

                                        {/* Heading */}
                                        <div className="hero-heading">
                                            Vizite medicale acasă, programabile
                                            în sub 60 de secunde.
                                        </div>

                                        {/* Subtitle */}
                                        <div className="hero-subtitle">
                                            Creează-ți contul gratuit în
                                            Portalul MEDELISE și programează o
                                            vizită medicală acasă, fără apeluri
                                            sau cozi.
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <button className="hero-cta">
                                        <span className="hero-cta-text">
                                            Creeaza contul gratuit
                                        </span>
                                    </button>
                                </div>
                            </div>

                            {/* Watch column */}
                            <div className="hero-watch-col">
                                <Image
                                    className="hero-watch"
                                    src="/iwatch-hero.png"
                                    alt="Apple Watch Ultra cu aplicația MEDELISE"
                                    width={350}
                                    height={550}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
