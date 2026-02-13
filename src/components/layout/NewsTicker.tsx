'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ICONS } from '@/constants/icons';

export default function NewsTicker() {
    return (
        <div className="news-ticker-container">
            <style jsx>{`
                .news-ticker-container {
                    background-color: #000000; /* Pure Black */
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
                    display: inline-flex;
                    align-items: center;
                    animation: marquee 30s linear infinite; /* Slower for elegance because of pulling effect */
                    padding-left: 100%; /* Start from right */
                }

                .ticker-ambulance-wrapper {
                    display: flex;
                    align-items: center;
                    margin-right: 24px;
                    flex-shrink: 0;
                    /* Optional: slight bounce to simulate driving */
                    animation: car-bounce 1s ease-in-out infinite alternate;
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

                @keyframes car-bounce {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-2px); }
                }

                /* Pause animation on hover for readability */
                .news-ticker-container:hover .ticker-content {
                    animation-play-state: paused;
                }
                 .news-ticker-container:hover .ticker-ambulance-wrapper {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="ticker-content">
                {/* Ambulance "Pulling" the text */}
                <div className="ticker-ambulance-wrapper">
                    <Image
                        src={ICONS.ambulance}
                        alt="Emergency Intervention"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                </div>

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
