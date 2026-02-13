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

                /* ─── Social Proof (Right Aligned) ──── */
                .hero-social-proof {
                    align-self: flex-end; /* Right align as per design structure */
                    width: 280px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-end; /* Right align text inside */
                    gap: 16px;
                    text-align: right;
                }

                .hero-sp-label {
                    color: #222222; /* Black */
                    font-size: 18px; /* User requested 18px */
                    font-family: var(--font-poppins); /* Manrope */
                    font-weight: 500;
                    line-height: 1.4;
                    word-wrap: break-word;
                }

                .hero-avatars {
                    display: inline-flex;
                    justify-content: flex-start;
                    align-items: center;
                    /* Negative margin overlap if needed, user didn't specify overlap but typically avatars overlap. 
                       User design output shows separate images with padding/bg? 
                       "padding: 10, background: #213170, borderRadius: 100" 
                       Wait, the user snippet shows they are separate. */
                    gap: 0px; 
                }

                .hero-avatar-wrapper {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 2px solid var(--color-white); /* Add border for clean separation if overlapping */
                    margin-left: -10px; /* Slight overlap for aesthetics */
                }
                .hero-avatar-wrapper:first-child {
                    margin-left: 0;
                }

                .hero-avatar-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .hero-sp-stat {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: flex-end;
                    text-align: right;
                }

                .hero-sp-stat-highlight {
                    color: #CC0A00; /* User specific red */
                    font-size: 18px;
                    font-family: var(--font-poppins);
                    font-weight: 500;
                    line-height: 1.4;
                }

                .hero-sp-description {
                    color: #707070; /* Grey */
                    font-size: 14px;
                    font-family: var(--font-poppins);
                    font-weight: 300;
                    line-height: 1.5;
                    margin-top: 4px;
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

                    {/* Bottom Right Social Proof */}
                    <div className="hero-social-proof">
                        <span className="hero-sp-label">
                            Apreciat de cei mai buni medici
                        </span>

                        <div className="hero-avatars">
                            <div className="hero-avatar-wrapper">
                                <Image src={IMAGES.hero.avatar1} alt="Medic 1" width={50} height={50} className="hero-avatar-img" />
                            </div>
                            <div className="hero-avatar-wrapper">
                                <Image src={IMAGES.hero.avatar2} alt="Medic 2" width={50} height={50} className="hero-avatar-img" />
                            </div>
                            <div className="hero-avatar-wrapper">
                                <Image src={IMAGES.hero.avatar3} alt="Medic 3" width={50} height={50} className="hero-avatar-img" />
                            </div>
                        </div>

                        <div className="hero-sp-stat">
                            <span className="hero-sp-stat-highlight">
                                Peste 40 de specialiști
                            </span>
                            <span className="hero-sp-description">
                                Medici experți colaborează cu MEDELISE pentru diagnostice precise și rapide.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
