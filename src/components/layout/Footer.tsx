'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/layout/Logo';

/* ── Footer Data ──────────────────────────────────────────────── */
const COMPANY_LINKS = [
    { label: 'Despre noi', href: '/despre-noi' },
    { label: 'Cariere', href: '/cariera' },
];

const CONTACT_ITEMS = [
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.33325 5.83333L9.10825 9.58333C9.38436 9.75863 9.70256 9.85166 10.0274 9.85166C10.3523 9.85166 10.6705 9.75863 10.9466 9.58333L16.6666 5.83333" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="2.5" y="4.16667" width="15" height="11.6667" rx="2" stroke="#213170" strokeWidth="1.5" />
            </svg>
        ),
        text: 'office@medvita.ro',
        href: 'mailto:office@medvita.ro',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5001 17.5C12.5001 17.5 15.8334 15.8333 15.8334 11.6667V5.41667L12.5001 4.16667L10.0001 2.5L7.50008 4.16667L4.16675 5.41667V11.6667C4.16675 15.8333 7.50008 17.5 7.50008 17.5" stroke="#213170" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 10.8333C11.3807 10.8333 12.5 9.71404 12.5 8.33333C12.5 6.95262 11.3807 5.83333 10 5.83333C8.61929 5.83333 7.5 6.95262 7.5 8.33333C7.5 9.71404 8.61929 10.8333 10 10.8333Z" stroke="#213170" strokeWidth="1.5" />
            </svg>
        ),
        text: '+40 (784) 414 555',
        href: 'tel:+40784414555',
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0001 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 10C10.8334 9.53976 10.4603 9.16667 10.0001 9.16667C9.53984 9.16667 9.16675 9.53976 9.16675 10C9.16675 10.4602 9.53984 10.8333 10.0001 10.8333Z" fill="#213170" />
                <path d="M10 2.5C6.5 2.5 3.33325 5 3.33325 9.16667C3.33325 11.875 5.41659 15.1667 9.58325 17.5C9.85325 17.6667 10.1466 17.6667 10.4166 17.5C14.5833 15.1667 16.6666 11.875 16.6666 9.16667C16.6666 5 13.5001 2.5 10.0001 2.5H10Z" stroke="#213170" strokeWidth="1.5" />
            </svg>
        ),
        text: 'București & Ilfov',
        href: '#',
    },
];

const LEGAL_LINKS = [
    { label: 'Asistență clienți', href: '/contact' },
    { label: 'Termeni și condiții', href: '#' },
    { label: 'Politica cookies', href: '#' },
    { label: 'Întrebări frecvente (FAQ)', href: '#' },
    { label: 'Politica de confidențialitate GDPR', href: '#' },
];

/* ── Social Icons ─────────────────────────────────────────────── */
const InstagramIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="16" height="16" rx="4" stroke="white" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="4" stroke="white" strokeWidth="1.5" />
        <circle cx="14.5" cy="5.5" r="1" fill="white" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5 8.5V6C11.5 5.17157 12.1716 4.5 13 4.5H14V2H12C10.067 2 8.5 3.567 8.5 5.5V8.5H6V11H8.5V18H11.5V11H14L14.5 8.5H11.5Z" fill="white" />
    </svg>
);

const TwitterIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 3L8.5 10.5L2.5 17H4L9.2 11.4L13.5 17H18L11.7 9L17.3 3H15.8L11 8.1L7 3H2.5ZM4.5 4H6.5L16 16H14L4.5 4Z" fill="white" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 8.5V15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.5 5V5.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 15V11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11V15" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 15V8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="2" width="16" height="16" rx="4" stroke="white" strokeWidth="1.5" />
    </svg>
);

/* ── Footer Component ─────────────────────────────────────────── */
export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    {/* ── Top Row ── */}
                    <div className="footer-top">
                        {/* Left: Logo + tagline */}
                        <div className="footer-brand">
                            <Logo />
                            <p className="footer-tagline">
                                We love working with ambitious people. Let&apos;s build something great together now.
                            </p>
                        </div>

                        {/* Right: Link columns */}
                        <div className="footer-columns">
                            {/* Companie */}
                            <div className="footer-col">
                                <h4 className="footer-col-heading">Companie</h4>
                                <nav className="footer-col-links">
                                    {COMPANY_LINKS.map((link) => (
                                        <Link key={link.label} href={link.href} className="footer-link">
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Suport & Legal */}
                            <div className="footer-col">
                                <h4 className="footer-col-heading">Suport &amp; Legal</h4>
                                <nav className="footer-col-links">
                                    {LEGAL_LINKS.map((link) => (
                                        <Link key={link.label} href={link.href} className="footer-link">
                                            {link.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>

                            {/* Contact */}
                            <div className="footer-col">
                                <h4 className="footer-col-heading">Contact</h4>
                                <div className="footer-col-links">
                                    {CONTACT_ITEMS.map((item) => (
                                        <a key={item.text} href={item.href} className="footer-contact-item">
                                            <span className="footer-contact-icon">{item.icon}</span>
                                            <span className="footer-link">{item.text}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ── Divider ── */}
                    <div className="footer-divider" />

                    {/* ── Bottom Row ── */}
                    <div className="footer-bottom">
                        <p className="footer-copyright">
                            © 2025 MEDVITA HEALTH SOLUTIONS S.R.L<br />
                            Toate drepturile rezervate
                        </p>
                        <div className="footer-socials">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Instagram">
                                <InstagramIcon />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon footer-social-icon--fb" aria-label="Facebook">
                                <FacebookIcon />
                            </a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="X / Twitter">
                                <TwitterIcon />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="LinkedIn">
                                <LinkedInIcon />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Regulatory Bar ── */}
                <div className="footer-regulatory">
                    <div className="footer-regulatory-logos">
                        <Image src="/images/quality/anpc-sal1-1.svg" alt="ANPC SAL" width={201} height={50} />
                        <Image src="/images/quality/anpc-sal1-1.1.svg" alt="ANPC" width={50} height={50} />
                    </div>
                </div>
            </footer>

            <style jsx>{`
                /* ═══════════════════════════════════════
                 * FOOTER — Mobile-first (375px)
                 * ═══════════════════════════════════════ */
                .footer {
                    width: 100%;
                    background: white;
                    display: flex;
                    flex-direction: column;
                }

                .footer-container {
                    width: 100%;
                    max-width: 343px;
                    margin: 0 auto;
                    padding: 48px 0;
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                /* ── Top Row ── */
                .footer-top {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                }

                .footer-brand {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                }

                .footer-tagline {
                    max-width: 316px;
                    text-align: center;
                    color: var(--color-primary, #213170);
                    font-size: 16px;
                    font-family: var(--font-dm-sans);
                    font-weight: 400;
                    line-height: 24px;
                    margin: 0;
                }

                /* ── Columns ── */
                .footer-columns {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 16px;
                }

                .footer-col {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                /* Mobile: first two cols side by side, third full width */
                .footer-col:nth-child(1) {
                    flex: 0 0 calc(50% - 8px);
                }

                .footer-col:nth-child(2) {
                    flex: 0 0 calc(50% - 8px);
                }

                .footer-col:nth-child(3) {
                    flex: 0 0 100%;
                    margin-top: 16px;
                }

                .footer-col-heading {
                    color: var(--color-primary, #213170);
                    font-size: 18px;
                    font-family: var(--font-dm-sans);
                    font-weight: 600;
                    line-height: 28px;
                    margin: 0;
                }

                .footer-col-links {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .footer-link {
                    color: var(--color-primary, #213170);
                    font-size: 16px;
                    font-family: var(--font-dm-sans);
                    font-weight: 400;
                    line-height: 24px;
                    text-decoration: none;
                    transition: opacity 0.2s ease;
                }

                .footer-link:hover {
                    opacity: 0.7;
                }

                .footer-contact-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    text-decoration: none;
                    border-radius: 8px;
                }

                .footer-contact-icon {
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                /* ── Divider ── */
                .footer-divider {
                    width: 100%;
                    height: 1px;
                    background: var(--color-baby-blue, #BDE0FF);
                }

                /* ── Bottom Row ── */
                .footer-bottom {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    align-items: center;
                }

                .footer-copyright {
                    color: var(--color-primary, #213170);
                    font-size: 14px;
                    font-family: var(--font-dm-sans);
                    font-weight: 500;
                    line-height: 20px;
                    text-align: center;
                    margin: 0;
                }

                .footer-socials {
                    width: 176px;
                    display: flex;
                    justify-content: space-between;
                }

                .footer-social-icon {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--color-primary, #213170);
                    border-radius: 6px;
                    transition: transform 0.2s ease, opacity 0.2s ease;
                }

                .footer-social-icon--fb {
                    border-radius: 50%;
                }

                .footer-social-icon:hover {
                    transform: translateY(-2px);
                    opacity: 0.85;
                }

                /* ── Regulatory Bar ── */
                .footer-regulatory {
                    width: 100%;
                    background: var(--color-primary, #213170);
                    padding: 8px 16px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .footer-regulatory-logos {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                /* ═══════════════════════════════════════
                 * TABLET ≥641px
                 * ═══════════════════════════════════════ */
                @media (min-width: 641px) {
                    .footer-container {
                        max-width: 704px;
                        padding: 64px 0;
                        gap: 32px;
                    }

                    .footer-brand {
                        align-items: flex-start;
                    }

                    .footer-tagline {
                        text-align: left;
                    }

                    .footer-columns {
                        flex-wrap: nowrap;
                        justify-content: space-between;
                        gap: 0;
                    }

                    .footer-col:nth-child(1),
                    .footer-col:nth-child(2),
                    .footer-col:nth-child(3) {
                        flex: 0 0 auto;
                        margin-top: 0;
                    }

                    .footer-link {
                        font-weight: 500;
                    }

                    .footer-bottom {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                        gap: 16px;
                    }

                    .footer-copyright {
                        font-size: 16px;
                        line-height: 24px;
                        text-align: left;
                    }

                    .footer-social-icon {
                        width: 32px;
                        height: 32px;
                    }
                }

                /* ═══════════════════════════════════════
                 * DESKTOP ≥1025px
                 * ═══════════════════════════════════════ */
                @media (min-width: 1025px) {
                    .footer-container {
                        max-width: 1440px;
                        padding: 32px 112px;
                        gap: 16px;
                    }

                    .footer-top {
                        flex-direction: row;
                        justify-content: space-between;
                        gap: 137px;
                    }

                    .footer-columns {
                        flex: 1;
                        justify-content: flex-end;
                        gap: 64px;
                    }

                    .footer-copyright {
                        font-size: 14px;
                        line-height: 20px;
                    }

                    .footer-regulatory {
                        padding: 8px 112px;
                    }
                }
            `}</style>
        </>
    );
}
