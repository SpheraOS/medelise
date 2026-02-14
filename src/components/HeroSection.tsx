'use client';

import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import { ICONS } from '@/constants/icons';

/* ── Hero Section ──────────────────────────────────────────────── */
export default function HeroSection() {
    return (
        <>
            <style jsx>{`
                /* ═══════════════════════════════════════
                 * BASE (Mobile-first — shared by all)
                 * ═══════════════════════════════════════ */
                .hero-section {
                    width: 100%;
                    min-height: auto;
                    position: relative;
                    background: var(--color-white);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .hero-background {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                }

                .hero-content {
                    width: 100%;
                    height: 100%;
                    padding: 68px 16px 32px;
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                    gap: 64px;
                }

                /* ── Top: Text + CTA ─────────────────── */
                .hero-top-block {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }

                .hero-text-group {
                    display: flex;
                    flex-direction: column;
                }

                .hero-heading {
                    color: var(--color-primary);
                    font-size: 26px;
                    font-family: var(--font-poppins);
                    font-weight: 500;
                    line-height: 33.8px;
                    margin: 0;
                }

                .hero-subtitle-cta {
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                    position: relative;
                    z-index: 10;
                }

                .hero-subtitle-cta::before {
                    display: none;
                }

                .hero-subtitle {
                    color: var(--color-primary);
                    font-size: 12px;
                    font-family: var(--font-heading);
                    font-weight: 500;
                    line-height: 16px;
                    max-width: 239px;
                    margin: 0;
                }

                /* ── CTA ─────────────────────────────── */
                .hero-cta-group {
                    display: inline-flex;
                    align-items: center;
                    gap: 16px;
                    cursor: pointer;
                }

                .hero-btn-primary {
                    padding: 8px 26px;
                    background: var(--color-primary);
                    border-radius: 8px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .hero-cta-group:hover .hero-btn-primary {
                    transform: translateY(-2px);
                    box-shadow: var(--shadow-md);
                }

                .hero-btn-text {
                    color: var(--color-white);
                    font-size: 16px;
                    font-family: var(--font-poppins);
                    font-weight: 500;
                    line-height: 24px;
                }

                .hero-btn-icon-wrapper {
                    padding: 4px;
                    background: var(--color-primary);
                    border-radius: 100px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: transform 0.2s ease;
                }

                .hero-cta-group:hover .hero-btn-icon-wrapper {
                    transform: translateX(4px) translateY(-2px);
                }

                .hero-icon {
                    width: 32px;
                    height: 32px;
                }

                /* ── Social Proof ─────────────────────── */
                .hero-social-proof {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 12px;
                    align-self: flex-end;
                    margin-top: auto;
                }

                .hero-sp-label {
                    color: #213170;
                    font-size: 16px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 24px;
                }

                .hero-avatars-group {
                    display: inline-flex;
                    align-items: center;
                }

                .hero-avatar-wrapper {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 2px solid #FFFFFF;
                    flex-shrink: 0;
                    display: flex;
                    align-items: flex-end;
                }

                .hero-avatar-wrapper:not(:first-child) {
                    margin-left: -4px;
                }

                .hero-avatar-wrapper:nth-child(1) { z-index: 4; }
                .hero-avatar-wrapper:nth-child(2) { z-index: 3; }
                .hero-avatar-wrapper:nth-child(3) { z-index: 2; }

                .hero-avatar-img {
                    width: 100%;
                    height: 20px;
                    object-fit: cover;
                    object-position: top;
                }

                .hero-avatar-count {
                    width: 24px;
                    height: 24px;
                    border-radius: 50%;
                    background: #F6F6F6;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                    border: 2px solid #FFFFFF;
                    margin-left: -4px;
                    z-index: 1;
                }

                .hero-avatar-count-text {
                    color: #CC0A00;
                    font-size: 10px;
                    font-family: var(--font-dm-sans);
                    font-weight: 500;
                    line-height: 14px;
                }

                .hero-sp-stat-title {
                    color: #FE5D16;
                    font-size: 14px;
                    font-family: var(--font-dm-sans);
                    font-weight: 500;
                    line-height: 19.6px;
                }

                .hero-sp-stat-desc {
                    color: #213170;
                    font-size: 12px;
                    font-family: var(--font-heading);
                    font-weight: 600;
                    line-height: 16px;
                    max-width: 232px;
                }

                /* ═══════════════════════════════════════
                 * TABLET ≥641px
                 * Only differences from mobile base.
                 * ═══════════════════════════════════════ */
                @media (min-width: 641px) {
                    .hero-content {
                        padding: 68px 32px 32px;
                    }

                    .hero-text-group {
                        max-width: 293px;
                    }

                    .hero-heading {
                        max-width: 293px;
                    }

                    .hero-subtitle-cta {
                        max-width: 293px;
                    }

                    .hero-subtitle {
                        max-width: 293px;
                    }

                    .hero-social-proof {
                        width: 252px;
                        gap: 8px;
                    }

                    .hero-sp-label {
                        font-size: 18px;
                        font-family: var(--font-dm-sans);
                        font-weight: 500;
                        line-height: 25.2px;
                    }

                    .hero-sp-stat-desc {
                        font-family: var(--font-dm-sans);
                        font-weight: 300;
                        line-height: 18px;
                        max-width: 252px;
                    }

                    .hero-avatar-wrapper {
                        width: 40px;
                        height: 40px;
                    }

                    .hero-avatar-wrapper:not(:first-child) {
                        margin-left: -8px;
                    }

                    .hero-avatar-img {
                        height: 36px;
                    }

                    .hero-avatar-count {
                        width: 40px;
                        height: 40px;
                        margin-left: -8px;
                    }

                    .hero-avatar-count-text {
                        font-size: 14px;
                        line-height: 19.6px;
                    }
                }

                /* ═══════════════════════════════════════
                 * DESKTOP ≥1025px
                 * Only differences from tablet.
                 * ═══════════════════════════════════════ */
                @media (min-width: 1025px) {
                    .hero-section {
                        min-height: 800px;
                    }

                    .hero-content {
                        padding: 210px var(--space-section-px) 64px;
                    }

                    .hero-top-block {
                        gap: 64px;
                    }

                    .hero-text-group {
                        max-width: 800px;
                    }

                    .hero-heading {
                        font-size: var(--text-h1);
                        line-height: 1.3;
                        max-width: 728px;
                    }

                    .hero-subtitle-cta {
                        max-width: 600px;
                        gap: 32px;
                    }

                    .hero-subtitle-cta::before {
                        display: block;
                        content: "";
                        position: absolute;
                        inset: -40px;
                        z-index: -1;
                        backdrop-filter: blur(12px);
                        -webkit-backdrop-filter: blur(12px);
                        background: rgba(255, 255, 255, 0.05);
                        border-radius: 24px;
                        -webkit-mask-image: radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%);
                        mask-image: radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%);
                    }

                    .hero-subtitle {
                        font-size: var(--text-body-lg);
                        font-family: var(--font-poppins);
                        line-height: 1.4;
                        max-width: 448px;
                    }

                    .hero-btn-primary {
                        padding: 16px 32px;
                        border-radius: 16px;
                    }

                    .hero-btn-icon-wrapper {
                        padding: 12px;
                    }

                    .hero-social-proof {
                        width: 280px;
                        gap: 16px;
                    }

                    .hero-sp-label {
                        font-size: 18px;
                        line-height: 25.2px;
                    }

                    .hero-avatar-wrapper {
                        width: 64px;
                        height: 64px;
                    }

                    .hero-avatar-wrapper:not(:first-child) {
                        margin-left: -16px;
                    }

                    .hero-avatar-img {
                        height: 56px;
                    }

                    .hero-avatar-count {
                        width: 64px;
                        height: 64px;
                        margin-left: -16px;
                    }

                    .hero-sp-stat-title {
                        font-size: 18px;
                        line-height: 25.2px;
                    }

                    .hero-sp-stat-desc {
                        font-size: 14px;
                        line-height: 21px;
                        max-width: none;
                    }
                }
            `}</style>

            <section className="hero-section">
                {/* Background Image */}
                <div className="hero-background">
                    <Image
                        src={IMAGES.hero.background}
                        alt="Medelise Hero Background"
                        fill
                        priority
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                </div>

                <div className="hero-content">
                    {/* Heading + Subtitle + CTA grouped, pushed to bottom-left */}
                    <div className="hero-top-block">
                        <h1 className="hero-heading">
                            Vizite medicale acasă, programabile în sub 60 de secunde.
                        </h1>

                        <div className="hero-subtitle-cta">
                            <p className="hero-subtitle">
                                Creează-ți contul gratuit în Portalul MEDELISE și programează o vizită medicală acasă, fără apeluri sau cozi.
                            </p>
                            <div className="hero-cta-group">
                                <div className="hero-btn-primary">
                                    <span className="hero-btn-text">Creeaza contul gratuit</span>
                                </div>
                                <div className="hero-btn-icon-wrapper">
                                    <Image
                                        src={ICONS.arrowUpRight}
                                        alt=""
                                        width={32}
                                        height={32}
                                        className="hero-icon"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Proof – Left aligned, overlapping avatars */}
                    <div className="hero-social-proof">
                        <div className="hero-sp-label">Apreciat de cei mai buni medici</div>

                        <div className="hero-avatars-group">
                            <div className="hero-avatar-wrapper" style={{ background: '#FE5D16' }}>
                                <Image src={IMAGES.hero.avatar1} alt="Medic 1" width={64} height={64} className="hero-avatar-img" style={{ width: '100%', height: '56px', objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                            <div className="hero-avatar-wrapper" style={{ background: '#BDE0FF' }}>
                                <Image src={IMAGES.hero.avatar2} alt="Medic 2" width={64} height={64} className="hero-avatar-img" style={{ width: '100%', height: '56px', objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                            <div className="hero-avatar-wrapper" style={{ background: '#213170' }}>
                                <Image src={IMAGES.hero.avatar3} alt="Medic 3" width={64} height={64} className="hero-avatar-img" style={{ width: '100%', height: '56px', objectFit: 'cover', objectPosition: 'top' }} />
                            </div>
                            <div className="hero-avatar-count">
                                <span className="hero-avatar-count-text">40+</span>
                            </div>
                        </div>

                        <div className="hero-sp-stat-title">Peste 40 de specialiști</div>
                        <div className="hero-sp-stat-desc">Medici experți colaborează cu MEDELISE pentru diagnostice precise și rapide.</div>
                    </div>
                </div>
            </section>
        </>
    );
}
