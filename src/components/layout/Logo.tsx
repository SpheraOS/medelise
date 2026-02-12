import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'full' | 'wordmark';
  white?: boolean;
  className?: string;
}

export default function Logo({ variant = 'full', white = false, className = '' }: LogoProps) {
  const logoSrc =
    variant === 'full'
      ? '/icons/medelise-logo-full.png'
      : '/icons/medelise-wordmark.png';

  const dimensions =
    variant === 'full'
      ? { width: 108, height: 38 }
      : { width: 80, height: 12 };

  return (
    <Link href="/" className={`flex-shrink-0 ${className}`}>
      <Image
        src={logoSrc}
        alt="MEDELISE"
        width={dimensions.width}
        height={dimensions.height}
        priority
        style={white ? { filter: 'brightness(0) invert(1)' } : undefined}
      />
    </Link>
  );
}
