'use client';

import Link from 'next/link';

export default function NewsTicker() {
    return (
        <div className="news-ticker-container">
            <style jsx>{`
                .news-ticker-container {
                    background-color: #36454F; /* Charcoal */
                    color: #ffffff;
                    overflow: hidden;
                    white-space: nowrap;
                    position: relative;
                    width: 100%;
                    height: 48px; /* Slightly taller for elegance */
                    display: flex;
                    align-items: center;
                    z-index: 51; /* Above navbar main */
                }

                .ticker-content {
                    display: inline-block;
                    animation: marquee 25s linear infinite;
                    padding-left: 100%; /* Start from right */
                }

                .ticker-item {
                    display: inline-block;
                    padding: 0 48px;
                    font-family: var(--font-dm-sans);
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0.5px;
                }

                .ticker-link {
                    color: #ffffff;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }
                .ticker-link:hover {
                    color: var(--color-accent); /* Orange highlight on hover */
                    text-decoration: underline;
                }
                
                @keyframes marquee {
                    0% {
                        transform: translate3d(0, 0, 0);
                    }
                    100% {
                        transform: translate3d(-100%, 0, 0);
                    }
                }

                /* Pause animation on hover for readability */
                .news-ticker-container:hover .ticker-content {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="ticker-content">
                <span className="ticker-item">
                    🎉 <Link href="#" className="ticker-link">Oferte Speciale Octombrie: 20% Reducere la Prima Consultatie</Link>
                </span>
                <span className="ticker-item">
                    💉 <Link href="#" className="ticker-link">Campanie Vaccinare Antigripala - Programeaza Acum</Link>
                </span>
                <span className="ticker-item">
                    🏠 <Link href="#" className="ticker-link">Noi Zone de Acoperire in Bucuresti si Ilfov</Link>
                </span>
                <span className="ticker-item">
                    🎉 <Link href="#" className="ticker-link">Oferte Speciale Octombrie: 20% Reducere la Prima Consultatie</Link>
                </span>
                <span className="ticker-item">
                    💉 <Link href="#" className="ticker-link">Campanie Vaccinare Antigripala - Programeaza Acum</Link>
                </span>
                <span className="ticker-item">
                    🏠 <Link href="#" className="ticker-link">Noi Zone de Acoperire in Bucuresti si Ilfov</Link>
                </span>
            </div>
        </div>
    );
}
