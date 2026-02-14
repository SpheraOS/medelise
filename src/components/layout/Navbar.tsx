'use client';

import DesktopNav from './DesktopNav';
import TabletNav from './TabletNav';
import MobileNav from './MobileNav';

export default function Navbar() {
    return (
        <div className="absolute top-0 left-0 w-full z-50">
            {/* Desktop Navigation - visible on screens >= 1025px */}
            <div className="hidden min-[1025px]:block">
                <DesktopNav />
            </div>

            {/* Tablet Navigation - visible on screens 641px - 1024px */}
            <div className="hidden min-[641px]:block min-[1025px]:hidden">
                <TabletNav />
            </div>

            {/* Mobile Navigation - visible on screens < 641px */}
            <div className="block min-[641px]:hidden">
                <MobileNav />
            </div>
        </div>
    );
}
