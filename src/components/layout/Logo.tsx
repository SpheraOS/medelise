import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'full' | 'wordmark';
  white?: boolean;
  className?: string;
}

export default function Logo({ variant = 'full', white = false, className = '' }: LogoProps) {
  // If variant is 'wordmark', usually distinct, but for Michroma text logo we might just 
  // use the full text. The user request specific "MEDELISE".

  return (
    <Link href="/" className={`flex-shrink-0 flex items-center ${className}`}>
      <span style={{
        fontFamily: 'var(--font-michroma)',
        fontSize: '24px',
        textTransform: 'uppercase',
        color: white ? 'var(--color-white)' : 'var(--color-primary)',
        letterSpacing: '0.05em',
        lineHeight: 1
      }}>
        MEDELISE
      </span>
    </Link>
  );
}
