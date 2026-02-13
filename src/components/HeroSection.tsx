'use client';

import Image from 'next/image';
import { IMAGES } from '@/constants/images';

/* ── Hero Section ──────────────────────────────────────────────── */
export default function HeroSection() {
    return (
        <>
            <style jsx>{`
                /* ─── Fluid base ────────────────────── */
                .hero-section {
                    width: 100%;
                    padding-top: var(--space-section-py);
                    padding-bottom: var(--space-section-py);
                    background: var(--color-white);
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    display: inline-flex;
                }

                .hero-row {
                    align-self: stretch;
                    padding: var(--space-8) 0;
                    justify-content: space-between;
                    align-items: center;
                    display: inline-flex;
                }

                .hero-inner {
                    flex: 1 1 0;
                    justify-content: flex-start;
                    align-items: center;
                    gap: var(--space-8);
                    display: flex;
                }

                .hero-cols {
                    flex: 1 1 0;
                    justify-content: space-between;
                    align-items: center;
                    gap: var(--space-16);
                    display: flex;
                }

                .hero-text-col {
                    flex: 1 1 0;
                    padding-bottom: var(--space-10);
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-start;
                    gap: var(--space-16);
                    display: inline-flex;
                }

                .hero-text-stack {
                    align-self: stretch;
                    position: relative;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: var(--space-12);
                    display: flex;
                }

                .hero-text-group {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    gap: var(--space-8);
                    display: flex;
                }

                /* ─── Eyebrow (stacked) ─────────────── */
                .hero-eyebrow-block {
                    align-self: stretch;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: var(--space-2);
                    display: flex;
                }

                .hero-eyebrow-orange {
                    align-self: stretch;
                    text-align: center;
                    color: var(--color-accent);
                    font-size: var(--text-2xl);
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: var(--lh-heading);
                    word-wrap: break-word;
                }

                .hero-eyebrow-brand {
                    align-self: stretch;
                    text-align: center;
                    color: var(--color-primary);
                    font-size: var(--text-lg);
                    font-family: var(--font-brand);
                    font-weight: 400;
                    line-height: var(--lh-heading);
                    word-wrap: break-word;
                }

                /* ─── Heading ───────────────────────── */
                .hero-heading {
                    align-self: stretch;
                    text-align: center;
                    color: var(--color-primary);
                    font-size: var(--text-3xl);
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: var(--lh-heading);
                    word-wrap: break-word;
                }

                /* ─── Subtitle ──────────────────────── */
                .hero-subtitle {
                    width: 100%;
                    max-width: var(--max-prose);
                    text-align: center;
                    color: var(--color-primary);
                    font-size: var(--text-body);
                    font-family: var(--font-heading);
                    font-weight: 500;
                    line-height: var(--lh-body);
                    word-wrap: break-word;
                }

                /* ─── CTA ───────────────────────────── */
                .hero-cta {
                    width: 100%;
                    max-width: 592px;
                    padding: var(--space-3) var(--space-10);
                    background: var(--color-primary);
                    border-radius: var(--radius-main);
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    display: flex;
                    cursor: pointer;
                    border: none;
                    transition: all 0.2s ease-in-out;
                }
                .hero-cta:hover {
                    background: var(--color-primary-hover);
                    box-shadow: var(--shadow-md);
                }
                .hero-cta-text {
                    text-align: center;
                    justify-content: center;
                    display: flex;
                    flex-direction: column;
                    color: var(--color-white);
                    font-size: var(--text-body);
                    font-family: var(--font-cta);
                    font-weight: 500;
                    text-transform: capitalize;
                    line-height: var(--lh-body);
                    word-wrap: break-word;
                }

                /* ─── Watch column ──────────────────── */
                .hero-watch-col {
                    flex-shrink: 0;
                    padding: var(--space-2);
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
                        padding: var(--space-4) 0;
                    }
                    .hero-text-col {
                        padding-bottom: var(--space-6);
                        gap: var(--space-12);
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
                                    src={IMAGES.watch.iwatchNotifications}
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
