'use client';

import DesktopNav from './DesktopNav';
import TabletNav from './TabletNav';
import MobileNav from './MobileNav';

export default function Navbar() {
    return (
        <>
            {/* Desktop Navigation - visible on screens >= 1024px */}
            <div className="hidden lg:block">
                <DesktopNav />
            </div>

            {/* Tablet Navigation - visible on screens 768px - 1023px */}
            <div className="hidden md:block lg:hidden">
                <TabletNav />
            </div>

            {/* Mobile Navigation - visible on screens < 768px */}
            <div className="block md:hidden">
                <MobileNav />
            </div>
        </>
    );
}
