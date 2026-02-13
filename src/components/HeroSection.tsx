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
                    gap: 32px;
                }

                .hero-heading {
                    align-self: stretch;
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
                    max-width: 600px;
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

                /* ─── Social Proof (Strict Replacement - Right Aligned) ──── */
                .hero-social-proof {
                    width: 280px;
                    height: 190px;
                    display: inline-flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-end; /* Grouped to the right end */
                    gap: 16px;
                }

                .hero-sp-label {
                    text-align: right;
                    color: var(--color-primary);
                    font-size: 18px;
                    font-family: var(--font-dm-sans);
                    font-weight: 500;
                    line-height: 25.2px;
                    word-wrap: break-word;
                    width: 100%;
                }

                .hero-avatars-group {
                    justify-content: flex-end; /* Align avatars to right */
                    align-items: center;
                    display: inline-flex;
                    gap: 0;
                    width: 100%; /* Take full width to allow right alignment within container */
                }

                .hero-avatar-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .hero-sp-stat-title {
                    text-align: right; /* Right align text */
                    justify-content: center;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end; /* Align flex children (text) to right */
                    color: var(--color-accent);
                    font-size: 18px;
                    font-family: var(--font-dm-sans);
                    font-weight: 500;
                    line-height: 25.2px;
                    word-wrap: break-word;
                    width: 100%;
                }

                .hero-sp-stat-desc {
                    align-self: stretch;
                    justify-content: center;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end; /* Align flex children to right */
                    color: var(--color-primary);
                    font-size: 14px;
                    font-family: var(--font-dm-sans);
                    font-weight: 300;
                    line-height: 21px;
                    word-wrap: break-word;
                    text-align: right; /* Right align text */
                }

                /* ─── Responsive (Hidden on Mobile for now as per instructions) ── */
                @media (max-width: 1024px) {
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
                    .hero-sp-stat {
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
                    {/* Top Left Block */}
                    <div className="hero-top-block">
                        <div className="hero-text-group">
                            <h1 className="hero-heading">
                                Vizite medicale acasă, programabile în sub 60 de secunde.
                            </h1>
                            <p className="hero-subtitle">
                                Creează-ți contul gratuit în Portalul MEDELISE și programează o vizită medicală acasă, fără apeluri sau cozi.
                            </p>
                        </div>

                        {/* CTA */}
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

                    {/* Bottom Right Social Proof - STRICT REPLACEMENT */}
                    <div className="hero-social-proof">
                        <div className="hero-sp-label">Apreciat de cei mai buni medici</div>

                        <div className="hero-avatars-group">
                            <Image src={IMAGES.hero.avatar1} alt="Medic 1" width={50} height={50} className="hero-avatar-img" style={{ width: '100%', height: '100%', padding: 10, background: '#FE5D16', borderRadius: 100 }} />
                            <Image src={IMAGES.hero.avatar2} alt="Medic 2" width={50} height={50} className="hero-avatar-img" style={{ width: '100%', height: '100%', padding: 10, background: '#BDE0FF', borderRadius: 100 }} />
                            <Image src={IMAGES.hero.avatar3} alt="Medic 3" width={50} height={50} className="hero-avatar-img" style={{ width: '100%', height: '100%', padding: 10, background: '#213170', borderRadius: 100 }} />
                        </div>

                        <div className="hero-sp-stat-title">Peste 40 de specialiști</div>
                        <div className="hero-sp-stat-desc">Medici experți colaborează cu MEDELISE pentru diagnostice precise și rapide.</div>
                    </div>
                </div>
            </section>
        </>
    );
}
