'use client';

import Image from 'next/image';
import { IMAGES } from '@/constants/images';
import { ICONS } from '@/constants/icons';

/* ── Hero Section ──────────────────────────────────────────────── */
export default function HeroSection() {
    return (
        <>
            <style jsx>{`
                /* ─── Base ──────────────────────────── */
                .hero-section {
                    width: 100%;
                    min-height: 800px;
                    position: relative;
                    background: var(--color-white);
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                }

                .hero-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 0;
                    /* transform removed for 0deg rotation (Option 2) */
                }

                .hero-content {
                    width: 100%;
                    /* max-width removed to allow full spread as per user request */
                    height: 100%;
                    /* pt-210px to clear absolute navbar (Ticker 48px + TopBar ~40px + Nav ~80px) */
                    padding: 210px var(--space-section-px) 64px var(--space-section-px);
                    position: relative;
                    z-index: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    align-items: flex-start;
                }

                /* ─── Top Block: Text + CTA ─────────── */
                .hero-top-block {
                    align-self: stretch;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 64px;
                }

                .hero-text-group {
                    width: 100%;
                    max-width: 800px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                }

                .hero-subtitle-cta {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    gap: 32px;
                    width: 100%;
                    max-width: 600px;
                    align-self: flex-start;
                    margin-top: auto;
                    position: relative;
                    z-index: 10;
                }

                /* Glassmorphism blur behind subtitle for readability */
                .hero-subtitle-cta::before {
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

                .hero-heading {
                    align-self: stretch;
                    max-width: 728px;
                    color: var(--color-primary);
                    /* User requested 50px/65px. 
                       --text-h1 is ~48px on desktop (clamp 32-48). Close enough, using token for consistency. */
                    font-size: var(--text-h1); 
                    font-family: var(--font-poppins); /* Poppins mapped to brand/heading */
                    font-weight: 500;
                    line-height: 1.3;
                    word-wrap: break-word;
                }

                .hero-subtitle {
                    width: 100%;
                    max-width: 448px;
                    color: var(--color-primary);
                    /* User requested 20px/28px. 
                       --text-body-lg is ~20px on desktop. */
                    font-size: var(--text-body-lg); 
                    font-family: var(--font-poppins); /* Montserrat mapped via body */
                    font-weight: 500;
                    line-height: 1.4;
                    word-wrap: break-word;
                }

                /* ─── CTA Group ─────────────────────── */
                .hero-cta-group {
                    display: inline-flex;
                    justify-content: flex-start;
                    align-items: center;
                    gap: 16px;
                    cursor: pointer;
                }

                .hero-btn-primary {
                    padding: 16px 32px;
                    background: var(--color-primary);
                    border-radius: 16px;
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
                    font-size: 16px; /* User requested 16px */
                    font-family: var(--font-poppins); /* Manrope */
                    font-weight: 500;
                    line-height: 1.5;
                }

                .hero-btn-icon-wrapper {
                    padding: 12px;
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

                /* ─── Social Proof (Left Aligned, Overlapping Avatars) ──── */
                .hero-social-proof {
                    width: 280px;
                    display: inline-flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start; /* LEFT aligned text */
                    gap: 16px;
                    align-self: flex-end; /* Push to RIGHT edge */
                    margin-top: auto; /* Push to BOTTOM */
                }

                .hero-sp-label {
                    text-align: left;
                    color: #213170; /* Indigo */
                    font-size: 18px;
                    font-family: var(--font-dm-sans);
                    font-weight: 500;
                    line-height: 25.2px;
                    word-wrap: break-word;
                }

                .hero-avatars-group {
                    justify-content: flex-start;
                    align-items: center;
                    display: inline-flex;
                }

                .hero-avatar-wrapper {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 2px solid #FFFFFF;
                    flex-shrink: 0;
                    display: flex;
                    align-items: flex-end; /* Align doctor image to bottom of circle */
                }
                .hero-avatar-wrapper:not(:first-child) {
                    margin-left: -16px; /* 25% overlap of 64px */
                }
                /* Z-index stacking: first on top */
                .hero-avatar-wrapper:nth-child(1) { z-index: 3; }
                .hero-avatar-wrapper:nth-child(2) { z-index: 2; }
                .hero-avatar-wrapper:nth-child(3) { z-index: 1; }

                .hero-avatar-img {
                    width: 100%;
                    height: 56px; /* Fixed 56px height inside 64px circle */
                    object-fit: cover;
                    object-position: top; /* Keep face/head visible when cropping */
                }

                .hero-sp-stat-title {
                    text-align: left;
                    color: #FE5D16; /* Orange highlight */
                    font-size: 18px;
                    font-family: var(--font-dm-sans);
                    font-weight: 500;
                    line-height: 25.2px;
                    word-wrap: break-word;
                }

                .hero-sp-stat-desc {
                    text-align: left;
                    color: #213170; /* Indigo */
                    font-size: 14px;
                    font-family: var(--font-dm-sans);
                    font-weight: 300;
                    line-height: 21px;
                    word-wrap: break-word;
                }

                .hero-avatar-count {
                    width: 64px;
                    height: 64px;
                    border-radius: 50%;
                    background: #F6F6F6;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-shrink: 0;
                    border: 2px solid #FFFFFF;
                }

                .hero-avatar-count:not(:first-child) {
                    margin-left: -16px;
                }

                .hero-avatar-count-text {
                    color: #CC0A00;
                    font-size: 14px;
                    font-family: var(--font-dm-sans);
                    font-weight: 500;
                    line-height: 19.6px;
                    text-align: center;
                }

                /* ─── Tablet (641px – 1024px) ───────── */
                @media (min-width: 641px) and (max-width: 1024px) {
                    .hero-section {
                        min-height: auto;
                    }

                    .hero-content {
                        padding: 180px 32px 32px 32px;
                        gap: 0;
                    }

                    .hero-top-block {
                        gap: 40px;
                    }

                    .hero-text-group {
                        max-width: 293px;
                        gap: 0;
                    }

                    .hero-heading {
                        font-size: 26px;
                        line-height: 33.8px;
                        max-width: 293px;
                        text-align: left;
                    }

                    .hero-subtitle-cta {
                        max-width: 293px;
                        gap: 40px;
                    }

                    .hero-subtitle-cta::before {
                        display: none;
                    }

                    .hero-subtitle {
                        font-size: 12px;
                        line-height: 16px;
                        max-width: 293px;
                        text-align: left;
                    }

                    .hero-btn-primary {
                        padding: 8px 26px;
                        border-radius: 8px;
                    }

                    .hero-btn-icon-wrapper {
                        padding: 4px;
                    }

                    .hero-social-proof {
                        width: 252px;
                        gap: 8px;
                        align-self: flex-end;
                        margin-top: auto;
                    }

                    .hero-sp-label {
                        font-size: 18px;
                        line-height: 25.2px;
                        text-align: left;
                    }

                    .hero-avatars-group {
                        gap: 0;
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
                    }

                    .hero-avatar-count:not(:first-child) {
                        margin-left: -8px;
                    }

                    .hero-sp-stat-title {
                        font-size: 14px;
                        line-height: 19.6px;
                    }

                    .hero-sp-stat-desc {
                        font-size: 12px;
                        line-height: 18px;
                        max-width: 252px;
                    }
                }

                /* ─── Mobile (≤640px) ─────────────────── */
                @media (max-width: 640px) {
                    .hero-section {
                        min-height: auto;
                    }
                    .hero-content {
                        align-items: center;
                        gap: 48px;
                    }
                    .hero-heading {
                        text-align: center;
                        font-size: var(--text-h2);
                    }
                    .hero-subtitle {
                        text-align: center;
                    }
                    .hero-text-group {
                        align-items: center;
                    }
                    .hero-social-proof {
                        align-self: center;
                        align-items: center;
                        text-align: center;
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
