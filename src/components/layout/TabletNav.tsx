'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ICONS } from '@/constants/icons';
import Logo from './Logo';
import MenuButton from './MenuButton';
import BookNowButton from './BookNowButton';
import ArrowCircleIcon from './ArrowCircleIcon';
import {
    MENU_WITH_ARROWS,
    MENU_SIMPLE,
    NAV_LINKS,
    MEGA_MENUS,
    type MegaMenuKey,
} from '@/data/navigation';

type SubMenu = MegaMenuKey | null;

export default function TabletNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState<SubMenu>(null);

    const handleClose = () => {
        setIsOpen(false);
        setActiveSubMenu(null);
    };

    const currentSub = activeSubMenu ? MEGA_MENUS[activeSubMenu] : null;

    return (
        <>
            {/* Default top bar */}
            <nav className="flex w-full items-center justify-center bg-white py-2.5">
                <div className="flex w-full items-center justify-between" style={{ paddingLeft: 'var(--space-nav-x)', paddingRight: 'var(--space-nav-x)' }}>
                    <Logo variant="full" />
                    <MenuButton size="medium" onClick={() => setIsOpen(true)} />
                </div>
            </nav>

            {/* Full-screen menu overlay */}
            <div
                className="fixed inset-0 z-[100] overflow-y-auto"
                style={{
                    background: 'var(--color-primary)',
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                    transition: 'opacity 350ms ease-in-out',
                }}
            >
                {/* ── SUB-MENU VIEW ── */}
                {currentSub ? (
                    <div className="flex w-full flex-col" style={{ paddingLeft: 40, paddingRight: 40, paddingTop: 32, paddingBottom: 32 }}>
                        {/* Row 1: Logo + Close × */}
                        <div className="flex w-full items-center justify-between">
                            <Logo variant="full" white />
                            <button
                                onClick={handleClose}
                                className="flex cursor-pointer items-center justify-center transition-opacity hover:opacity-80"
                                style={{ width: 18, height: 18 }}
                            >
                                <Image
                                    src={ICONS.close}
                                    alt="Close menu"
                                    width={18}
                                    height={18}
                                />
                            </button>
                        </div>

                        {/* Row 2: Back button */}
                        <button
                            onClick={() => setActiveSubMenu(null)}
                            className="mt-12 flex cursor-pointer items-center gap-2 self-start transition-opacity hover:opacity-80"
                        >
                            <Image
                                src={ICONS.chevronDown}
                                alt="Back"
                                width={9}
                                height={9}
                                className="rotate-90 invert"
                            />
                            <span
                                className="text-white"
                                style={{
                                    fontSize: 14,
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 400,
                                    lineHeight: '20.3px',
                                }}
                            >
                                Înapoi la Meniu
                            </span>
                        </button>

                        {/* Sub-menu content */}
                        <div className="mt-8 flex w-full flex-col items-center gap-[30px]">
                            {/* Divider */}
                            <div
                                className="-mx-10"
                                style={{ width: 'calc(100% + 80px)', height: 0, outline: '1px solid white', outlineOffset: '-0.5px' }}
                            />

                            {/* Sub-menu heading */}
                            <div className="w-full px-10">
                                <h2
                                    className="text-white underline"
                                    style={{
                                        fontSize: 24,
                                        fontFamily: 'var(--font-body)',
                                        fontWeight: 600,
                                        lineHeight: '20.3px',
                                    }}
                                >
                                    {currentSub.heading}
                                </h2>
                            </div>

                            {/* Sub-menu items list */}
                            <div className="flex w-full flex-col">
                                {currentSub.items.map((item) => (
                                    <a
                                        key={item.title}
                                        href="#"
                                        className="flex items-center justify-between transition-colors hover:bg-white/5"
                                        style={{
                                            height: 75,
                                            paddingLeft: 40,
                                            paddingRight: 40,
                                            paddingTop: 14,
                                            paddingBottom: 14,
                                            border: '1px solid white',
                                        }}
                                    >
                                        <div className="flex flex-col justify-center">
                                            <span
                                                className="text-white"
                                                style={{
                                                    fontSize: 16,
                                                    fontFamily: 'var(--font-body)',
                                                    fontWeight: 700,
                                                    lineHeight: '20.3px',
                                                }}
                                            >
                                                {item.title}
                                            </span>
                                            <span
                                                className="text-white"
                                                style={{
                                                    fontSize: 14,
                                                    fontFamily: 'var(--font-body)',
                                                    fontWeight: 400,
                                                    lineHeight: '20.3px',
                                                }}
                                            >
                                                {item.subtitle}
                                            </span>
                                        </div>
                                        <ArrowCircleIcon />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* ── MAIN MENU VIEW ── */
                    <div className="flex w-full flex-col items-center px-10 pt-8 pb-8">
                        {/* Header: Logo + Close */}
                        <div className="flex w-full items-center justify-between">
                            <Logo variant="full" white />
                            <button
                                onClick={handleClose}
                                className="flex cursor-pointer items-center justify-center"
                                style={{ width: 18, height: 18 }}
                            >
                                <Image
                                    src={ICONS.close}
                                    alt="Close menu"
                                    width={18}
                                    height={18}
                                />
                            </button>
                        </div>

                        {/* CTA Section */}
                        <div className="mt-12 flex w-full max-w-[563px] flex-col items-start gap-4 self-start">
                            <p
                                className="text-white"
                                style={{
                                    fontSize: 14,
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 400,
                                    lineHeight: '20.3px',
                                }}
                            >
                                Începe-ți viața fără limite.
                            </p>
                            <p
                                className="text-white"
                                style={{
                                    fontSize: 14,
                                    fontFamily: 'var(--font-body)',
                                    fontWeight: 400,
                                    lineHeight: '20.3px',
                                }}
                            >
                                Programează-ți tratamentul astăzi la unul dintre partenerii locali
                                și începe să-ți atingi obiectivele de sănătate.
                            </p>
                            <BookNowButton variant="inverted" />
                        </div>

                        {/* Divider */}
                        <div
                            className="mt-8 -mx-10"
                            style={{ width: 'calc(100% + 80px)', height: 0, outline: '1px solid white', outlineOffset: '-0.5px' }}
                        />

                        {/* Menu items with arrow circles */}
                        <div className="mt-8 flex w-full flex-col">
                            {MENU_WITH_ARROWS.map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => setActiveSubMenu(item.key)}
                                    className="flex w-full cursor-pointer items-center justify-between transition-colors hover:bg-white/5"
                                    style={{
                                        height: 74,
                                        paddingLeft: 40,
                                        paddingRight: 40,
                                        paddingTop: 20,
                                        paddingBottom: 20,
                                        outline: '1px solid white',
                                        outlineOffset: '-1px',
                                    }}
                                >
                                    <span
                                        className="text-white"
                                        style={{
                                            fontSize: 22,
                                            fontFamily: 'var(--font-body)',
                                            fontWeight: 400,
                                            lineHeight: '20.3px',
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                    <ArrowCircleIcon />
                                </button>
                            ))}
                        </div>

                        {/* Simple menu items */}
                        <div className="mt-8 flex w-full flex-col">
                            {MENU_SIMPLE.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center transition-colors hover:bg-white/5"
                                    style={{
                                        height: 74,
                                        paddingLeft: 40,
                                        paddingRight: 40,
                                        paddingTop: 26,
                                        paddingBottom: 26,
                                        outline: '1px solid white',
                                        outlineOffset: '-1px',
                                    }}
                                >
                                    <span
                                        className="text-white"
                                        style={{
                                            fontSize: 22,
                                            fontFamily: 'var(--font-body)',
                                            fontWeight: 400,
                                            lineHeight: '20.3px',
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Navigation links */}
                        <div className="mt-8 flex w-full flex-col">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="flex items-center transition-colors hover:bg-white/5"
                                    style={{
                                        height: 74,
                                        paddingLeft: 40,
                                        paddingRight: 40,
                                        paddingTop: 26,
                                        paddingBottom: 26,
                                        outline: '1px solid white',
                                        outlineOffset: '-1px',
                                    }}
                                >
                                    <span
                                        className="text-white"
                                        style={{
                                            fontSize: 22,
                                            fontFamily: 'var(--font-body)',
                                            fontWeight: 400,
                                            lineHeight: '20.3px',
                                        }}
                                    >
                                        {link.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
