'use client';

import NewsTicker from './NewsTicker';

import { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import Link from 'next/link';
import ChevronDown from './ChevronDown';
import SearchIcon from './SearchIcon';
import BookNowButton from './BookNowButton';
import ArrowCircleIcon from './ArrowCircleIcon';
import {
    TOP_LINKS,
    MAIN_MENU_ITEMS,
    MENU_KEY_MAP,
    MEGA_MENUS,
    type MegaMenuKey,
} from '@/data/navigation';

type MegaMenu = MegaMenuKey | null;

export default function DesktopNav() {
    const [activeMenu, setActiveMenu] = useState<MegaMenu>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const isFullIndigo = activeMenu !== null;
    const currentMenu = activeMenu ? MEGA_MENUS[activeMenu] : null;

    // Close mega menu when clicking outside the nav
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (navRef.current && !navRef.current.contains(e.target as Node)) {
                setActiveMenu(null);
            }
        }

        if (activeMenu !== null) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeMenu]);

    // Trigger animation on menu open
    useEffect(() => {
        if (activeMenu !== null) {
            // Use double rAF to avoid setState-in-effect lint warnings
            // and ensure DOM has committed before re-triggering animation
            requestAnimationFrame(() => {
                setIsAnimating(false);
                requestAnimationFrame(() => {
                    setIsAnimating(true);
                });
            });
        }
    }, [activeMenu]);

    return (
        <>
            {/* Backdrop overlay — blurs page content when mega menu is open */}
            {isFullIndigo && (
                <div
                    className="fixed inset-0 z-40"
                    style={{
                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        transition: 'opacity 300ms ease-in-out',
                    }}
                    onClick={() => setActiveMenu(null)}
                />
            )}
            <nav
                ref={navRef}
                className="absolute top-0 left-0 z-50 w-full"
                style={{
                    backgroundColor: isFullIndigo ? '#213170' : 'transparent',
                    transition: 'background-color 300ms ease-in-out',
                }}
            >
                {/* News Ticker Bar - Added above Top Bar */}
                <NewsTicker />

                {/* Top Bar - Always Primary Indigo */}
                <div className="bg-primary py-2" style={{ paddingLeft: 'var(--space-nav-x)', paddingRight: 'var(--space-nav-x)' }}>
                    <div className="flex items-center justify-end gap-8">
                        <Link
                            href="/"
                            className="font-body text-base font-normal leading-tight text-white transition-all duration-200 hover:scale-105 hover:font-semibold"
                        >
                            Acasa
                        </Link>
                        {TOP_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="font-body text-base font-normal leading-tight text-white transition-all duration-200 hover:scale-105 hover:font-semibold"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <SearchIcon />
                    </div>
                </div>

                {/* Main Navigation Bar */}
                <div className="flex items-center justify-between pt-4 pb-4" style={{ paddingLeft: 'var(--space-nav-x)', paddingRight: 'var(--space-nav-x)' }}>
                    <div className="flex flex-1 items-center gap-16">
                        <Logo variant="full" white={isFullIndigo} />

                        <div className="flex flex-1 items-center gap-10">
                            {MAIN_MENU_ITEMS.map((item) => {
                                const menuKey = MENU_KEY_MAP[item] || null;
                                const hasMenu = menuKey !== null;

                                return (
                                    <button
                                        key={item}
                                        onClick={() => {
                                            if (hasMenu) {
                                                setActiveMenu(activeMenu === menuKey ? null : menuKey);
                                            }
                                        }}
                                        className={`flex items-center gap-2 font-body text-base font-normal leading-tight transition-all duration-200 hover:scale-105 hover:font-semibold ${isFullIndigo
                                            ? 'text-white'
                                            : 'text-primary'
                                            }`}
                                        style={{ transition: 'all 200ms ease-in-out' }}
                                    >
                                        {item}
                                        {hasMenu && <ChevronDown white={isFullIndigo} rotated={activeMenu === menuKey} />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Book Now CTA Button */}
                    <BookNowButton variant={isFullIndigo ? 'inverted' : 'primary'} />
                </div>

                {/* Mega Menu Dropdown with Animation */}
                {currentMenu && (
                    <div
                        className="overflow-hidden"
                        style={{
                            backgroundColor: '#213170',
                            opacity: isAnimating ? 1 : 0,
                            transform: isAnimating ? 'translateY(0)' : 'translateY(-20px)',
                            maxHeight: isAnimating ? '600px' : '0px',
                            transition:
                                'opacity 400ms ease-out, transform 400ms ease-out, max-height 400ms ease-out',
                        }}
                    >
                        <div className="px-[112px] pt-4 pb-16">
                            {/* Section Title */}
                            <h2
                                className="mb-16 font-body text-2xl font-normal text-white underline"
                                style={{ lineHeight: '20.3px' }}
                            >
                                {currentMenu.title}
                            </h2>

                            {/* 3-Column Grid */}
                            <div className="flex">
                                {currentMenu.columns.map((column, colIndex) => (
                                    <div key={colIndex} className="flex flex-1 flex-col">
                                        {column.map((item, rowIndex) => (
                                            <a
                                                key={item.title}
                                                href="#"
                                                className="group flex items-center justify-between px-5 py-[18px] transition-colors hover:bg-white/5"
                                                style={{
                                                    height: 75,
                                                    outline: '1px solid white',
                                                    outlineOffset: '-1px',
                                                    opacity: isAnimating ? 1 : 0,
                                                    transform: isAnimating
                                                        ? 'translateY(0)'
                                                        : 'translateY(12px)',
                                                    transition: `opacity 300ms ease-out ${100 + rowIndex * 60 + colIndex * 40
                                                        }ms, transform 300ms ease-out ${100 + rowIndex * 60 + colIndex * 40
                                                        }ms`,
                                                }}
                                            >
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-body text-lg font-semibold leading-7 text-white">
                                                        {item.title}
                                                    </span>
                                                    <span className="font-body text-xs font-medium leading-4 text-white">
                                                        {item.subtitle}
                                                    </span>
                                                </div>
                                                <ArrowCircleIcon />
                                            </a>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
}
