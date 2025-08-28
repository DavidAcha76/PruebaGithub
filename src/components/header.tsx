import Link from 'next/link';
import { PawPrint } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const navLinks = [
    { href: '/', label: 'Pets' },
    { href: '/adoption', label: 'Adoption Info' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-card shadow-sm sticky top-0 z-40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <PawPrint className="h-8 w-8 text-accent" />
          <span className="text-2xl font-bold font-headline text-foreground">
            Petopia
          </span>
        </Link>
        <nav className="hidden md:flex gap-4">
          {navLinks.map((link) => (
            <Button key={link.href} asChild variant="ghost">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>
        {/* Add mobile menu button if needed */}
      </div>
    </header>
  );
}
